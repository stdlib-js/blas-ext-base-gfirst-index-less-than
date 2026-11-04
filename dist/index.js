/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first element in a strided array which is less than a corresponding element in another strided array.
*
* @module @stdlib/blas-ext-base-gfirst-index-less-than
*
* @example
* var gfirstIndexLessThan = require( '@stdlib/blas-ext-base-gfirst-index-less-than' );
*
* var x = [ 0.0, 0.0, 0.0, 0.0 ];
* var y = [ 0.0, 0.0, 1.0, 0.0 ];
*
* var idx = gfirstIndexLessThan( x.length, x, 1, y, 1 );
* // returns 2
*
* @example
* var gfirstIndexLessThan = require( '@stdlib/blas-ext-base-gfirst-index-less-than' );
*
* var x = [ 0.0, 0.0, 0.0, 0.0 ];
* var y = [ 0.0, 0.0, 1.0, 0.0 ];
*
* var idx = gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // returns 2
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
