/* * * * * * * * * * * * *
 * Settlers of Candyland *
 * hexgrid.js            *
 * Codefellows 301       *
 * Fall 2015             *
 * * * * * * * * * * * * */

var tileToTileAngles =  [ "30", "90", "150", "210", "270", "330" ];
var edgeToVertexAngles = [ "0", "60", "120", "180", "240", "300" ];
var allAngles = edgeToVertexAngles
    .concat(tileToTileAngles)
    .sort(function(a, b) { return Number(a) - Number(b); } );

var isNull = function( x ) {
    return x === null;
}

var invert = function( angle ) {
    return ( ( Number(angle) + 180 ) % 360 ).toString();
} 





function NeighborSet() {
    var self = this;
    // Using stringified integers as keys is abusive syntax
    // but it makes our life so much easier later.
    edgeToVertexAngles.forEach(
	function (angle) {return self[angle] = { edge: null, vertex: null } } );

    tileToTileAngles.forEach(
	function (angle) {return self[angle] = { edge: null, tile: null } } );

}

function Coordinate( x, y ) {
    // We're using axial coordinated as described here:
    // http://www.redblobgames.com/grids/hexagons/#coordinates
    var self = this;
    this.x = x;
    this.y = y;
    this.z = 0 - ( x + y );
}

function Tile( x, y ) {
    var self = this;
    self.whatAmI = "tile";
    self.hasRobber = false;
    self.coord = new Coordinate( x, y );
    self.neighbors = new NeighborSet();
    self.type = null;
    self.findMyself = findMyself;

    self.setNeighbor = function(tile) {
	self.neighbors[ self.findMyself(tile) ] = tile;
    }

    // I know that for each tile I create, I can safely add all
    // these neighbors without accidentally creating duplicates.
    self.neighbors["30"].edge = new Edge();
    self.neighbors["30"].edge.setNeighbor(self);
    self.neighbors["150"].edge = new Edge();
    self.neighbors["150"].edge.setNeighbor(self);
    self.neighbors["270"].edge = new Edge();
    self.neighbors["270"].edge.setNeighbor(self);
    self.neighbors["0"].vertex = new Vertex();
    self.neighbors["0"].vertex.setNeighbor(self);
    self.neighbors["180"].vertex = new Vertex();
    self.neighbors["180"].vertex.setNeighbor(self);

}

function Edge() {
    var self = this;
    self.whatAmI = "edge";
    self.hasRobber = false;             // this never changes
    self.neighbors = new NeighborSet();
    self.findMyself = findMyself;
    self.road = null;

    self.setNeighbor = function(tile) {
	self.neighbors[ self.findMyself(tile) ] = tile;
    }
    
    
}

function Vertex() {
    var self = this;
    self.whatAmI = "vertex";
    self.hasRobber = false;             // this never changes
    self.neighbors = new NeighborSet();
    self.findMyself = findMyself;
    self.building = { type: null,
		      color: null };

    self.setNeighbor = function(tile) {
	self.neighbors[ self.findMyself(tile) ] = tile;
    }

}

function Robber( tile ) {
    var self = this;
    self.location = tile;

    self.moveTo = function( newTile ) {
	self.location.hasRobber = false;
	self.location = newTile;
	self.location.hasRobber = true;
    }

}

function HexBoard(radius) {
    var self = this;
    self.radius = radius;
    self.center = new Tile( 0, 0 );
    
    self.init = function(){
	// is this good indexing?
	//for ( var i = 0 < radius ) {  } //later

	// Brute force: this sucks, needs fix
	// Make first ring
	self.center.neighbors["30"].tile = new Tile( 1, -1 );
	self.center.neighbors["30"].tile.setNeighbor(self.center);
	self.center.neighbors["90"].tile = new Tile( 1, 0 );
	self.center.neighbors["90"].tile.setNeighbor(self.center);
	self.center.neighbors["150"].tile = new Tile( 0, 1 );
	self.center.neighbors["150"].tile.setNeighbor(self.center);
	self.center.neighbors["210"].tile = new Tile( -1, 1 );
	self.center.neighbors["210"].tile.setNeighbor(self.center);
	self.center.neighbors["270"].tile = new Tile( -1, 0 );
	self.center.neighbors["270"].tile.setNeighbor(self.center);
	self.center.neighbors["330"].tile = new Tile( 0, -1 );
	self.center.neighbors["330"].tile.setNeighbor(self.center);

	console.log(self);
    }
}

var findMyself  = function( their ) {
    var self = this;
    
    for ( var angle in their.neighbors ) {
	if ( self === their.neighbors[angle][self.whatAmI] ) {
	    return invert(angle);
	}
    }
    console.log( "ERROR: ", self, " couldn't find itself in ", their.neighbors );
    return null;
}


var HEX_BOARD_MODULE = (function() {
    var my = {};
    var radius = 3;
    my.board = new HexBoard( radius );
    my.board.init();

    
    return my;
})();
