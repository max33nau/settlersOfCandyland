/* * * * * * * * * * * * *
 * Settlers of Candyland *
 * hexgrid.js            *
 * Codefellows 301       *
 * Fall 2015             *
 * * * * * * * * * * * * */

var debug;
var oddHours =  [ 1, 3, 5, 7, 9, 11 ];
var evenHours = [ 0, 2, 4, 6, 8, 10 ];
var allHours =  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
var tileList = new TileList();
var deck;

// Note for directions: odd hours are adjacent tiles,
// but even hours are actually "two" steps away.
// This comes in handy, eventually.
var direction = [ new Coordinate(1,-2),
		  new Coordinate(1,-1),
		  new Coordinate(2,-1),
		  new Coordinate(1,0),
		  new Coordinate(1,1),
		  new Coordinate(0,1),
		  new Coordinate(-1,2),
		  new Coordinate(-1,1),
		  new Coordinate(-2,1),
		  new Coordinate(-1,0),
		  new Coordinate(-1,-1),
		  new Coordinate(0,-1) ];

var isNull = function( x ) { return x === null; };

// return hour 180 degrees away on a clock
var invert = function( hour ) { return  ( Number(hour) + 6 )  % 12; };

function TileSet(deckType) {
    var self = this;
    // basic set of Catan tiles, ordered for beginner's game, original theme
    var basicCatanTiles = [ "sheep", "ore", "wheat", "wheat", "wood", "brick",
			    "wheat", "sheep", "sheep", "ore", "brick", "wood",
			    "brick", "wood", "ore", "wheat", "wood", "sheep",
			    "desert" ];
    // the sequence of Token values used for a beginner's game
    var basicNumberTokens = [ 2, 10, 12, 9, 8, 5,
			      6, 11, 5, 8, 10, 9,
			      6, 11, 3, 4, 3, 4 ];


    function Stack(array, stackType) {
	var my = array;
	my.shuffle = function() {
	    // Is there a way to do this declaratively instead of imperatively?
	    for (var ii = 0; ii < my.length - 1; ii++) {
		var newIndex = ii + Math.floor( Math.random() * (my.length - ii) );
		var bubble = my[newIndex];
		my[newIndex] = my[ii];
		my[ii] = bubble;
	    }
	}
	my.putBack = function(card) {
	    return my.unshift(card);
	};
	my.isRed = function(token) {
	    return ( (Number(token) === 6) || (Number(token) === 8) );
	};
	
	my.deal = function() {
	    if( stackType == "tiles" ) {
		if( my.length > 0 ) {
		    return my.pop();
		} else {
		    return "water";
		}
	    } else if ( stackType == "tokens" ) {
		if( my.length > 1 ) {
		    // Pop off two tokens. If they are both "red", i.e. 6 or 8,
		    // put the second token at the bottom of the stack. Otherwise,
		    // put the second token back on the top of the stack.
		    // (This won't guarantee red tokens are never adjacent, only
		    // reduce the frequency. More detection happens during board
		    // initialization. )
		    var token1 = my.pop();
		    var token2 = my.pop();

		    if( my.isRed(token1) && my.isRed(token2) ) {
			my.putBack(token2);
		    } else {
			my.pop(token2);
		    }
		    return token1;
		    
		} else if ( my.length == 1 ) {
		    return my.pop();
		} else {
		    return null;
		}
	    }
	}
	return my;
    }
    self.init = function(){
	if( deckType == "beginner" ) {
	    // use JQuery .extend() to make a "deep" copy of arrays we want to preserve
	    self.stack = new Stack( $.extend(true, [], basicCatanTiles), "tiles" );
	    self.tokens = new Stack( $.extend(true, [], basicNumberTokens), "tokens" );
	} else if( deckType == "random" ) {
	    self.stack = ( new Stack( $.extend(true, [], basicCatanTiles), "tiles" ) ).shuffle();
	    self.tokens = ( new Stack( $.extend(true, [], basicNumberTokens ), "tokens" ) ).shuffle();
	} else {
	    console.log("ERROR: not a valid TileSet parameter");			    
	}
    }
}

function TileList() {
    // This Object is just an array of Tile references but with member methods.
    var my = [ ];
    my.findTileByCoord = function(coord) {
	// Requires an actual Coordinate object, i.e. (q, r) won't work.
	// Returns exactly one tile or null
	var foundTile = my.filter( function(tile) {
	    return ( coord.x === tile.coord.x && coord.z === tile.coord.z );
	});
	
	if ( foundTile.length === 0 ) {
	    //console.log("Tile at (" + coord.x + ", " + coord.z + ") not found.");
	    return null;
	}
	else if ( foundTile.length === 1 ) {
	    //console.log("Tile found at (" + coord.x + ", " + coord.z + ")");
	    return foundTile[0];
	} else {
	    console.log("ERROR: More than one tile found at (" + coord.x + ", " + coord.z + ")");
	    return null;
	}
    };

    my.logTiles = function(){
	//Output tile coords in a readable format
	var output =
	    "TileList: " +
	    my.map(function(tile){
		return "(" + tile.coord.x + ", " + tile.coord.z + ")";
	    })
	    .join(", ");
	console.log(output);
    };
    return my;
}
    



function NeighborSet() {
    // NeighborSet is an array of exactly 12 Neighbor objects where the array
    // index corresponds to positions on a clock face.
    var my = [ null, null, null, null, null, null,
	       null, null, null, null, null, null ];

    function Neighbor() {
	// I don't want to add vertex or tile keys unless they will eventually have
	// non-null values. This object gets a constructor so .isNull(key)
	// can check to see if an arbitrary key exists but is null.
	var self = this;
	self.edge = null;
	self.isNull = function(key) { return (key in self) && isNull(self[key]); };
    }
    
    allHours.forEach( function(hour){
	var neighbor = new Neighbor;
	// Add a "tile" key at odd positions, "vertex" at even positions
	if( hour % 2 ) { neighbor.tile = null;}   // hour is odd
	else { neighbor.vertex = null; }          // hour is even
	return my[hour] = neighbor; });
     
    return my;
}

function Coordinate( q, r ) {
    // We're mostly use axial coordinated as described here:
    // http://www.redblobgames.com/grids/hexagons/#coordinates
    // but we store coordinates in cubic coordinates and convert as necessary
    var self = this;
    self.x = q;
    self.y = null; // this line is just so x, y, z show in correct order in the inspector
    self.z = r;
    self.y =  0 - ( self.x + self.z );
    
    self.move = function(direction) {
	// Calculates a new location and returns it as a Coordinate object
	var q = self.x + direction.x;
	var r = self.z + direction.z;
	//console.log( "q: " + q + ", r: " + r );
	return new Coordinate(q, r);
    }
    // Mostly only need this function for testing purposes...
    self.isNull = function(self) { return ( isNull(x) || isNull(y) || isNull(z) ); };
}

function Tile( q, r ) {
    var self = this;
    self.whatAmI = "tile";
    self.hasRobber = false;
    self.coord = new Coordinate( q, r );
    self.neighbors = new NeighborSet();
    self.type = null;
    self.numberToken = null;
    self.findMyself = findMyself;
    self.setNeighbor = function(tile) {
	var hour = self.findMyself(tile);
	self.neighbors[ hour ].tile = tile;
    }
    self.logNeighbors = function() {
	//Output neighboring tile coords in a readable format
	var output =  "At (" + self.coord.x + ", "
	                  + self.coord.z + "): \n" +
	    self.neighbors
	    .map( function(neighbor, hour){
		if( Number(hour) % 2 == 0 ) {
		    return "";
		} else  if( neighbor.tile == null ) {
		    return "";
		} else {
		    return hour + ": ("
		       + neighbor.tile.coord.x + ", "
		       + neighbor.tile.coord.z + ")   "; } })
	    .join("");
	console.log(output);
    };

    self.logCoords = function() {
	console.log( "("+ self.coord.x + ", " + self.coord.z + ")" );
    }

    self.init = function() {
	// I know that for each tile I create, I can safely add all
	// these neighbors without accidentally creating any duplicates.
	self.neighbors[1].edge = new Edge();
	self.neighbors[1].edge.setNeighbor(self);
	self.neighbors[5].edge = new Edge();
	self.neighbors[5].edge.setNeighbor(self);
	self.neighbors[9].edge = new Edge();
	self.neighbors[9].edge.setNeighbor(self);
	self.neighbors[0].vertex = new Vertex();
	self.neighbors[0].vertex.setNeighbor(self);
	self.neighbors[6].vertex = new Vertex();
	self.neighbors[6].vertex.setNeighbor(self);
    }
    self.init();
    
    self.setAdjacents = function() {
	oddHours.forEach( function(hour) {
	    // Check to see if we've already set neighbor relationships for tiles
	    // at adjacent coords. If not, and neighboring tiles exist in the 
	    // tileList, set neighboring tile, edge, and vertex relationships.
	    if( self.neighbors[hour].tile === null) {
		// If null, then the tile key exists, but no relationship has been set
		var tile = tileList.findTileByCoord( self.coord.move(direction[hour]) );
		// We're redundantly setting some vertex and edge relationships,
		// but it's okay for now.
		if( tile != null ) {
		    // an adjacent tile already exists, set relationships:
		    
		    // set the tile relationship
		    self.neighbors[hour].tile = tile;
		    // set our shared edge
		    self.neighbors[hour].edge = tile.neighbors[invert(hour)].edge;
		    // we share vertices one hour clockwaise and counterclockwise
		    // from our shared edge
		    self.neighbors[ (hour + 1) % 12].vertex =
			tile.neighbors[ (invert(hour) + 11) % 12].vertex;
		    self.neighbors[ (hour + 11) % 12].vertex =
			tile.neighbors[ (invert(hour) + 1) % 12].vertex;
		    // The edge incident to me, one hour clockwise for me
		    // is his edge two hours counterclockwise for him,
		    // and vice-versa.
		    
		    self.neighbors[ (hour + 1) % 12 ].edge =
			tile.neighbors[ (invert(hour) + 10) % 12 ].edge;
		    tile.neighbors[ (invert(hour) + 11) % 12 ].edge =
			self.neighbors[ (hour + 2) % 12 ].edge;
		    
		    // Now the incident edges on the other side.
		    self.neighbors[ (hour + 11) % 12 ].edge =
			tile.neighbors[ (invert(hour) + 2) % 12 ].edge;
		    tile.neighbors[ (invert(hour) + 1) % 12 ].edge =
			self.neighbors[ (hour + 10) % 12 ].edge;
		    
		    //tile.setNeighbor(self);           // this line is probably always redundant
		}
	    }
	});
    }
    self.setAdjacents();

    /*
    // Add remaining adjacent vertices and edges to tile.
    oddHours.forEach( function(hour){
	if( self.neighbors[hour].isNull("edge") ) {
	    self.neighbors[hour].edge = new Edge();
	    self.neighbors[hour].edge.setNeighbor(self);
	}
    });
    evenHours.forEach( function(hour){
	if( self.neighbors[hour].isNull("vertex") ) {
	    self.neighbors[hour].vertex = new Vertex();
	    self.neighbors[hour].vertex.setNeighbor(self);
	}
    });
    */
}

function Edge() {
    var self = this;
    self.whatAmI = "edge";
    //self.hasRobber = false;                     // this should never change
    self.neighbors = new NeighborSet();
    self.findMyself = findMyself;
    self.road = null;

    self.setNeighbor = function(tile) {
	var hour = self.findMyself(tile);
	self.neighbors[ hour ].edge = tile.neighbors[invert(hour)].edge;
    }
}

function Vertex() {
    var self = this;
    self.whatAmI = "vertex";
    //self.hasRobber = false;                     // this should never change
    self.neighbors = new NeighborSet();
    self.findMyself = findMyself;
    self.building = { type: null,
		      color: null };
    self.setNeighbor = function(tile) {
	var hour = self.findMyself(tile);
	self.neighbors[ hour ].vertex = tile.neighbors[invert(hour)].vertex;
    }
}

function Robber() {
    var self = this;
    self.location = null;
    self.moveTo = function( newTile ) {
	if (self.location != null ) {
	    self.location.hasRobber = false;
	}
	self.location = newTile;
	self.location.hasRobber = true;
    }
}

function HexBoard(radius, deck) {
    var self = this;
    self.radius = radius;
    self.robber = new Robber();
    self.center = new Tile( 0, 0 );

    self.placeTile = function( tile ) {
	tile.type = deck.stack.deal();
	
	if ( tile.type == "desert" ) {
	    tile.numberToken = 7;
	    self.robber.moveTo( tile );
	} else {
	    tile.numberToken = deck.tokens.deal();
	}
	tileList.push( tile );
    }

    self.placeTile( self.center );
    
    // This is just so we can generate a array of sequential numbers
    // using declaritive code (no for loops) without pulling in a whole
    // library for it.
    var range = function( start, count ) {
        return Array.apply( 0, Array(count) )
                 .map(function ( element, index ) { 
                     return index + start;  
                 }); }
    
    self.init = function(){
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
	 * This nested loop looks odd, but it saves a lot of unneeded computation.   *
	 * The tileList array stores our objects in the order they are created, so   *
	 * for a map of radius r ( including water tiles) tileList.length() =        *
	 * 1 + SUM_n=1->r(6n). Conveniently, because we index our array from 0, we   *
	 * can drop the 1 and use the summation to calculate the array index for a   *
	 * particular tile. The closed form of the summation is 3*r*(r+1), which we  *
	 * use for our bounds in the internal loop, rather than looking though the   *
	 * entire array each time looking for tiles with null neighbors.             *
	 * See also: http://www.redblobgames.com/grids/hexagons/#rings               *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	range(0, radius).forEach(function(r) {
	    //console.log( "r="+r+": [ "+ ( r==0 ? 0 : (3*r*(r-1)+1) )+", "+(3*r*(r+1)+1)+" )" );
	    //console.log(tileList.slice( ( r==0 ? 0 : (3*r*(r-1)+1) ),     (3*r*(r+1)+1) ) );
	    tileList.slice( ( r==0 ? 0 : (3*r*(r-1)+1) ), (3*r*(r+1)+1) ).forEach(function(tile){
		oddHours.forEach(function(hour) {
		    var newCoord = tile.coord.move(direction[hour])
		    if( tileList.findTileByCoord( newCoord ) == null ) {
			tile.neighbors[hour].tile = new Tile( newCoord.x, newCoord.z );
			self.placeTile( tile.neighbors[hour].tile );
		    }
		});
	    });
	});

	console.log(tileList.length);

	var fixEdges = function() {
	    for(var ii=0; ii <= Math.floor(tileList.length / 2); ii++) {
		var tile = tileList[ii];

		tile.logCoords();
		
		function helper(a, b, c) {
		    var t1 = tile.neighbors[a];
		    var t2 = tile.neighbors[b].tile.neighbors[c];
		    
		    console.log("->" + a + "  ->" + b + "->" + c);
		    if ( (t1.edge === null) && (t2.edge === null) ) {
			console.log("Error: both null");
			return null;
		    } else if( (t1.edge !== null) &&
			       (t2.edge !== null) &&
			       (t1.edge !== t2.edge) ) {
			console.log("Error: conflicting edges!");
			return null;
		    } else {
		    }
		}

		helper( 0, 11, 3 );
		helper( 0, 1, 9 );
		helper( 2, 1, 5 );
		helper( 2, 3, 11 );
		helper( 4, 3, 7 );
		helper( 4, 5, 1 );
		helper( 6, 5, 9 );
		helper( 6, 7, 3 );
		helper( 8, 7, 11 );
		helper( 8, 9, 5 );
		helper( 10, 9, 1 );
		helper( 10, 11, 7 );
	    }
	}
	//fixEdges();


	    
	if(debug) {
	    console.log("Edge Assertions");
	    tileList.forEach(function(tile, index) {
		var assert = [
		    (tile.neighbors[0].edge === tile.neighbors[11].tile.neighbors[3].edge ),
		    (tile.neighbors[0].edge === tile.neighbors[1].tile.neighbors[9].edge ),
		    (tile.neighbors[2].edge === tile.neighbors[1].tile.neighbors[5].edge ),
		    (tile.neighbors[2].edge === tile.neighbors[3].tile.neighbors[11].edge ),
		    (tile.neighbors[4].edge === tile.neighbors[3].tile.neighbors[7].edge ),
		    (tile.neighbors[4].edge === tile.neighbors[5].tile.neighbors[1].edge ),
		    (tile.neighbors[6].edge === tile.neighbors[5].tile.neighbors[9].edge ),
		    (tile.neighbors[6].edge === tile.neighbors[7].tile.neighbors[3].edge ),
		    (tile.neighbors[8].edge === tile.neighbors[7].tile.neighbors[11].edge ),
		    (tile.neighbors[8].edge === tile.neighbors[9].tile.neighbors[5].edge ),
		    (tile.neighbors[10].edge === tile.neighbors[9].tile.neighbors[1].edge ),
		    (tile.neighbors[10].edge === tile.neighbors[11].tile.neighbors[7].edge )
		];
		console.log( "("+ tile.coord.x + ", " + tile.coord.z + ")" );
		console.log(assert);
	    });
	}
	    
	//tileList.forEach(function(tile) { return tile.setAdjacentEdges; });
	
	console.log(self.center);
	//self.center.logNeighbors();
	//tileList.logTiles();
	//console.log("Number of tiles: " + tileList.length);

	//console.log( self.center.neighbors[1].tile );
	//console.log(self.center.neighbors[1].tile.neighbors[3].tile.neighbors[5].tile).logNeighbors();
	//self.center.neighbors[3].tile.logNeighbors();
    }
}

var findMyself  = function( their ) {
    
    var self = this;
    for ( var hour in their.neighbors ) {
	if ( self === their.neighbors[hour][self.whatAmI] ) {
	    //console.log(hour + " -> " + invert(hour));
	    return invert(hour);
	}
    }
    console.log( "ERROR: ", self, " couldn't find itself in ", their.neighbors );
    return null;
}


var HEX_BOARD_MODULE = (function() {
    // Stuff starts happening here
    var my = {};
    var radius = 3;
    debug = false;

    // deck is in the global namespace, but gets initialized here
    deck = new TileSet("beginner");
    //deck = new TileSet("random");
    deck.init();

    // initialize a game board
    my.board = new HexBoard( radius, deck );
    my.board.init();
    
    return my;
})();
