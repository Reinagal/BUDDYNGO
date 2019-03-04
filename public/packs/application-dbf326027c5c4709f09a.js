/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/*!****************************************************!*\
  !*** ./node_modules/canvasjs/src/helpers/utils.js ***!
  \****************************************************/
/*! exports provided: extend, inherit, addToDateTime, convertToNumber, pad, trimString, extendCtx, compareNumbers, compareDataPointX, intToHexColorString, RGBToInt, intToRGB, arrayIndexOf, addArrayIndexOf, getFontHeightInPixels, getLineDashArray, addEvent, dateFormat, numberFormat, getObjectId, getMouseCoordinates, getFontString, getProperty, setCanvasSize, createCanvas, exportCanvas, setButtonState, show, hide, isCanvasSupported, getBezierPoints, convertPercentToValue, drawRect, drawSegment */
/*! exports used: addArrayIndexOf, addEvent, compareDataPointX, createCanvas, dateFormat, devicePixelBackingStoreRatio, drawRect, drawSegment, extend, extendCtx, getFontHeightInPixels, getFontString, getLineDashArray, getMouseCoordinates, getObjectId, getProperty, hide, intToHexColorString, isCanvasSupported, numberFormat, setCanvasSize, show, trimString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["i"] = extend;
/* unused harmony export inherit */
/* unused harmony export addToDateTime */
/* unused harmony export convertToNumber */
/* unused harmony export pad */
/* harmony export (immutable) */ __webpack_exports__["w"] = trimString;
/* harmony export (immutable) */ __webpack_exports__["j"] = extendCtx;
/* unused harmony export compareNumbers */
/* harmony export (immutable) */ __webpack_exports__["c"] = compareDataPointX;
/* harmony export (immutable) */ __webpack_exports__["r"] = intToHexColorString;
/* unused harmony export RGBToInt */
/* unused harmony export intToRGB */
/* unused harmony export arrayIndexOf */
/* harmony export (immutable) */ __webpack_exports__["a"] = addArrayIndexOf;
/* harmony export (immutable) */ __webpack_exports__["k"] = getFontHeightInPixels;
/* harmony export (immutable) */ __webpack_exports__["m"] = getLineDashArray;
/* harmony export (immutable) */ __webpack_exports__["b"] = addEvent;
/* harmony export (immutable) */ __webpack_exports__["e"] = dateFormat;
/* harmony export (immutable) */ __webpack_exports__["t"] = numberFormat;
/* harmony export (immutable) */ __webpack_exports__["o"] = getObjectId;
/* harmony export (immutable) */ __webpack_exports__["n"] = getMouseCoordinates;
/* harmony export (immutable) */ __webpack_exports__["l"] = getFontString;
/* harmony export (immutable) */ __webpack_exports__["p"] = getProperty;
/* harmony export (immutable) */ __webpack_exports__["u"] = setCanvasSize;
/* harmony export (immutable) */ __webpack_exports__["d"] = createCanvas;
/* unused harmony export exportCanvas */
/* unused harmony export setButtonState */
/* harmony export (immutable) */ __webpack_exports__["v"] = show;
/* harmony export (immutable) */ __webpack_exports__["q"] = hide;
/* unused harmony export getBezierPoints */
/* unused harmony export convertPercentToValue */
/* harmony export (immutable) */ __webpack_exports__["g"] = drawRect;
/* harmony export (immutable) */ __webpack_exports__["h"] = drawSegment;

function extend(derived, base) {
	derived.prototype = inherit(base.prototype);
	derived.prototype.constructor = derived;
	derived.base = base.prototype;
}

function inherit(proto) {
	function F() { }
	F.prototype = proto;
	return new F();
}

function addToDateTime(dateTime, num, type) {

	if (type === "millisecond")
		dateTime.setMilliseconds(dateTime.getMilliseconds() + 1 * num);
	else if (type === "second")
		dateTime.setSeconds(dateTime.getSeconds() + 1 * num);
	else if (type === "minute")
		dateTime.setMinutes(dateTime.getMinutes() + 1 * num);
	else if (type === "hour")
		dateTime.setHours(dateTime.getHours() + 1 * num);
	else if (type === "day")
		dateTime.setDate(dateTime.getDate() + 1 * num);
	else if (type === "week")
		dateTime.setDate(dateTime.getDate() + 7 * num);
	else if (type === "month")
		dateTime.setMonth(dateTime.getMonth() + 1 * num);
	else if (type === "year")
		dateTime.setFullYear(dateTime.getFullYear() + 1 * num);

	return dateTime;
}

function convertToNumber(num, type) {
	return constants[type + "Duration"] * num;
}

function pad(value, length) {
	var isNegative = false;
	if (value < 0) {
		isNegative = true;
		value *= -1;
	}

	value = "" + value;
	length = !length ? 1 : length;

	while (value.length < length) value = "0" + value;

	return isNegative ? "-" + value : value;
}

function trimString(str) {
	if (!str)
		return str;

	str = str.replace(/^\s\s*/, '');
	var ws = /\s/;
	var i = str.length;
	while (ws.test(str.charAt(--i))) { }
	return str.slice(0, i + 1);
}

function extendCtx(context) {
	context.roundRect = function (x, y, width, height, radius, borderThickness, backgroundColor, borderColor) {
		///<signature>
		///<summary>Creates a rounded rectangle with given fill/stroke parameters</summary>
		///<param name="x" type="number">x value</param>
		///<param name="y" type="number">y value</param>
		///<param name="width" type="number">Border Width</param>
		///<param name="height" type="number">Border Height</param>
		///<param name="radius" type="number">Border CornerRadius</param>
		///<param name="borderThickness" type="number">Border Thickess</param>
		///<param name="backgroundColor" type="number">Background Color</param>
		///<param name="borderColor" type="number">Border Color</param>
		///</signature>

		if (backgroundColor) {
			this.fillStyle = backgroundColor;
		}

		if (borderColor) {
			this.strokeStyle = borderColor;
		}

		//if (typeof stroke == "undefined") {
		//	stroke = true;
		//}

		if (typeof radius === "undefined") {
			radius = 5;
		}

		this.lineWidth = borderThickness;

		this.beginPath();
		this.moveTo(x + radius, y);
		this.lineTo(x + width - radius, y);
		this.quadraticCurveTo(x + width, y, x + width, y + radius);
		this.lineTo(x + width, y + height - radius);
		this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		this.lineTo(x + radius, y + height);
		this.quadraticCurveTo(x, y + height, x, y + height - radius);
		this.lineTo(x, y + radius);
		this.quadraticCurveTo(x, y, x + radius, y);
		this.closePath();

		if (backgroundColor) {
			this.fill();
		}

		if (borderColor && borderThickness > 0) {
			this.stroke();
		}
	};
}

function compareNumbers(a, b) {
	return a - b;
}

function compareDataPointX(dataPoint1, dataPoint2) {
	return dataPoint1.x - dataPoint2.x;
}

function intToHexColorString(num) {
	var r = ((num & 0xFF0000) >> 16).toString(16);
	var g = ((num & 0x00FF00) >> 8).toString(16);
	var b = ((num & 0x0000FF) >> 0).toString(16);

	r = r.length < 2 ? "0" + r : r;
	g = g.length < 2 ? "0" + g : g;
	b = b.length < 2 ? "0" + b : b;

	return "#" + r + g + b;
}

function RGBToInt(r, g, b) {
	var num = (r << 16) | (g << 8) | (b);

	return num;
}

function intToRGB(num) {
	var rgb = [];
	var r = ((num & 0xFF0000) >> 16);
	var g = ((num & 0x00FF00) >> 8);
	var b = ((num & 0x0000FF) >> 0);

	//r = r.length < 2 ? "0" + r : r;
	//g = g.length < 2 ? "0" + g : g;
	//b = b.length < 2 ? "0" + b : b;

	rgb[0] = r;
	rgb[1] = g;
	rgb[2] = b;

	return rgb;
}

function arrayIndexOf(elt /*, from*/) {
	var len = this.length >>> 0;

	var from = Number(arguments[1]) || 0;
	from = (from < 0)
		 ? Math.ceil(from)
		 : Math.floor(from);
	if (from < 0)
		from += len;

	for (; from < len; from++) {
		if (from in this &&
			this[from] === elt)
			return from;
	}
	return -1;
};

//IE8- Fix: indexOf is not supported in IE8- for arrays
function addArrayIndexOf(obj) {
if (!obj.indexOf) {
	obj.indexOf = arrayIndexOf;
}

return obj;
}

var fontHeightInPixels = {};
var textMeasureEl = null;

function getFontHeightInPixels(fontFamily, fontSize, fontWeight) {

	//return fontSize;

	fontWeight = fontWeight || "normal";

	var entry = fontFamily + "_" + fontSize + "_" + fontWeight;
	var height = fontHeightInPixels[entry];

	if (isNaN(height)) {
		try {
			var style = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;" + "font-family:" + fontFamily + "; " + "font-size:" + fontSize + "px; font-weight:" + fontWeight + ";";
			//console.log(style);
			if (!textMeasureEl) {
				var body = document.body;
				textMeasureEl = document.createElement("span");
				textMeasureEl.innerHTML = "";
				var textNode = document.createTextNode("Mpgyi");
				textMeasureEl.appendChild(textNode);
				body.appendChild(textMeasureEl);
			}

			textMeasureEl.style.display = "";
			textMeasureEl.setAttribute("style", style);

			height = Math.round(textMeasureEl.offsetHeight);
			textMeasureEl.style.display = "none";
			//body.removeChild(tempDiv);

			//if (window.console)
			//	window.console.log(fontSize + ": " + height);
		}
		catch (e) {
			height = Math.ceil(fontSize * 1.1);
		}

		height = Math.max(height, fontSize);

		fontHeightInPixels[entry] = height;
	}

	return height;
}

function getLineDashArray(lineDashType, lineThickness) {
	lineDashType = lineDashType || "solid";

	var lineDashArray = [];

	var lineDashTypeMap = {
		"solid": [],
		"shortDash": [3, 1],
		"shortDot": [1, 1],
		"shortDashDot": [3, 1, 1, 1],
		"shortDashDotDot": [3, 1, 1, 1, 1, 1],
		"dot": [1, 2],
		"dash": [4, 2],
		"dashDot": [4, 2, 1, 2],
		"longDash": [8, 2],
		"longDashDot": [8, 2, 1, 2],
		"longDashDotDot": [8, 2, 1, 2, 1, 2]
	};

	lineDashArray = lineDashTypeMap[lineDashType];

	if (lineDashArray) {

		for (var i = 0; i < lineDashArray.length; i++) {
			lineDashArray[i] *= lineThickness;
		}
	} else
		lineDashArray = [];

	return lineDashArray;
}

//userCapture is optional. Defaults to false
function addEvent(obj, eventType, fn, useCapture) {
	if (obj.addEventListener) {
		obj.addEventListener(eventType, fn, useCapture || false);
	}
	else if (obj.attachEvent) {
		obj.attachEvent("on" + eventType, function (e) {
			e = e || window.event;
			e.preventDefault = e.preventDefault || function () { e.returnValue = false; };
			e.stopPropagation = e.stopPropagation || function () { e.cancelBubble = true; };
			fn.call(obj, e);
		});
	} else
		return false;
}

//#region formatting functions/methods
function dateFormat() {

	var reg = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g;

	var defDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var defShortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	var defMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var defShortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
	var timezoneClip = /[^-+\dA-Z]/g;

	return function (dt, formatString, cultureInfo) {

		var days = cultureInfo ? cultureInfo.days : defDays;
		var months = cultureInfo ? cultureInfo.months : defMonths;

		var shortDays = cultureInfo ? cultureInfo.shortDays : defShortDays;
		var shortMonths = cultureInfo ? cultureInfo.shortMonths : defShortMonths;

		var result = "";
		var utc = false;

		dt = dt && dt.getTime ? dt : dt ? new Date(dt) : new Date;
		if (isNaN(dt)) throw SyntaxError("invalid date");

		if (formatString.slice(0, 4) === "UTC:") {
			formatString = formatString.slice(4);
			utc = true;
		}

		var pre = utc ? "getUTC" : "get";
		var date = dt[pre + "Date"]();
		var day = dt[pre + "Day"]();
		var month = dt[pre + "Month"]();
		var year = dt[pre + "FullYear"]();
		var hours = dt[pre + "Hours"]();
		var minutes = dt[pre + "Minutes"]();
		var seconds = dt[pre + "Seconds"]();
		var milliseconds = dt[pre + "Milliseconds"]();
		var offset = utc ? 0 : dt.getTimezoneOffset();

		result = formatString.replace(reg, function (key) {

			switch (key) {

				case "D":
					return date;
				case "DD":
					return pad(date, 2);
				case "DDD":
					return shortDays[day];
				case "DDDD":
					return days[day];


				case "M":
					return month + 1;
				case "MM":
					return pad(month + 1, 2);
				case "MMM":
					return shortMonths[month];
				case "MMMM":
					return months[month];


				case "Y":
					return parseInt(String(year).slice(-2));
				case "YY":
					return pad(String(year).slice(-2), 2);
				case "YYY":
					return pad(String(year).slice(-3), 3);
				case "YYYY":
					return pad(year, 4);


				case "h":
					return hours % 12 || 12;
				case "hh":
					return pad(hours % 12 || 12, 2);


				case "H":
					return hours;
				case "HH":
					return pad(hours, 2);

				case "m":
					return minutes;
				case "mm":
					return pad(minutes, 2);


				case "s":
					return seconds;
				case "ss":
					return pad(seconds, 2);

				case "f":
					return String(milliseconds).slice(0, 1);
				case "ff":
					return pad(String(milliseconds).slice(0, 2), 2);
				case "fff":
					return pad(String(milliseconds).slice(0, 3), 3);


				case "t":
					return hours < 12 ? "a" : "p";
				case "tt":
					return hours < 12 ? "am" : "pm";
				case "T":
					return hours < 12 ? "A" : "P";
				case "TT":
					return hours < 12 ? "AM" : "PM";


				case "K":
					return utc ? "UTC" : (String(dt).match(timezone) || [""]).pop().replace(timezoneClip, ""); // Time Zone;
				case "z":
					return (offset > 0 ? "-" : "+") + Math.floor(Math.abs(offset) / 60); // Hour Offset from UTC without padding
				case "zz":
					return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60), 2); // Hour Offset from UTC with padding
				case "zzz":
					return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60), 2) + pad(Math.abs(offset) % 60, 2); // Hour and Minute Offset from UTC with padding

				default:
					return key.slice(1, key.length - 1);

			}
		});

		return result;
	};
};

function numberFormat(v, fs, cultureInfo) {
	if (v === null)
		return "";

	v = Number(v);
	var isNegative = v < 0 ? true : false;
	if (isNegative) v *= -1;

	var decimalSeparator = cultureInfo ? cultureInfo.decimalSeparator : ".";
	var digitGroupSeparator = cultureInfo ? cultureInfo.digitGroupSeparator : ",";

	var vString = "";
	fs = String(fs);
	var multiplier = 1;
	var temp;
	var result = "";

	var matches = "";
	var decimalPosition = -1;
	var fsBeforeDecimal = [];
	var fsAfterDecimal = [];
	var noPhBeforeDecimal = 0; // Number of Placeholders before Decimal
	var noPhAfterDecimal = 0; // Number of Placeholders after Decimal
	var noComma = 0;
	var isScientificNotation = false;
	var exponent = 0;

	matches = fs.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|‰|./g);
	//window.console.log(matches + " = " + matches.length);
	var match = null;

	for (var i = 0; matches && i < matches.length; i++) {
		match = matches[i];

		if (match === "." && decimalPosition < 0) {
			decimalPosition = i;
			continue;
		} else if (match === "%") {
			multiplier *= 100;
		} else if (match === "‰") {
			multiplier *= 1000;
			continue;
		} else if (match[0] === "," && match[match.length - 1] === ".") {
			multiplier /= Math.pow(1000, match.length - 1);
			decimalPosition = i + match.length - 1;
			continue;
		} else if ((match[0] === "E" || match[0] === "e") && match[match.length - 1] === "0") {
			isScientificNotation = true;
		}

		if (decimalPosition < 0) {
			fsBeforeDecimal.push(match);
			if (match === "#" || match === "0")
				noPhBeforeDecimal++;
			else if (match === ",")
				noComma++;
		}
		else {
			fsAfterDecimal.push(match);
			if (match === "#" || match === "0")
				noPhAfterDecimal++;
		}
	}

	if (isScientificNotation) {
		var integer = Math.floor(v);
		exponent = (integer === 0 ? "" : String(integer)).length - noPhBeforeDecimal;
		multiplier /= Math.pow(10, exponent);
	}

	v *= multiplier;

	if (decimalPosition < 0)
		decimalPosition = i;

	vString = v.toFixed(noPhAfterDecimal);
	var split = vString.split(".");
	//window.console.log(split);
	var vStringBeforeDecimal = (split[0] + "").split("");
	var vStringAfterDecimal = (split[1] + "").split("");

	if (vStringBeforeDecimal && vStringBeforeDecimal[0] === "0")
		vStringBeforeDecimal.shift();

	//window.console.log(fsBeforeDecimal + "<---------->" + fsAfterDecimal + " &        " + vStringBeforeDecimal + "<---------->" + vStringAfterDecimal);

	var noPhProcessed = 0;
	var noDigitsAdded = 0;
	var noCommaAdded = 0;
	var commaDistance = 0;
	var distanceFromLastComma = 0;

	while (fsBeforeDecimal.length > 0) {
		match = fsBeforeDecimal.pop();

		if (match === "#" || match === "0") {
			noPhProcessed++;

			if (noPhProcessed === noPhBeforeDecimal) {
				var digits = vStringBeforeDecimal;
				vStringBeforeDecimal = [];

				if (match === "0") {
					//var totalDigits = result.match(/[0-9]/g).length;
					var toPad = noPhBeforeDecimal - noDigitsAdded - (digits ? digits.length : 0);

					while (toPad > 0) {
						digits.unshift("0");
						toPad--;
					}
				}

				while (digits.length > 0) {
					result = digits.pop() + result;
					distanceFromLastComma++;

					if (distanceFromLastComma % commaDistance === 0 && noCommaAdded === noComma && digits.length > 0)
						result = digitGroupSeparator + result;
				}

				if (isNegative)
					result = "-" + result;

			} else {
				if (vStringBeforeDecimal.length > 0) {
					result = vStringBeforeDecimal.pop() + result;
					noDigitsAdded++;
					distanceFromLastComma++;
				}
				else if (match === "0") {
					result = "0" + result;
					noDigitsAdded++;
					distanceFromLastComma++;
				}

				if (distanceFromLastComma % commaDistance === 0 && noCommaAdded === noComma && vStringBeforeDecimal.length > 0)
					result = digitGroupSeparator + result;
			}


		} else if ((match[0] === "E" || match[0] === "e") && match[match.length - 1] === "0" && /[eE][+-]*[0]+/.test(match)) {
			if (exponent < 0)
				match = match.replace("+", "").replace("-", "");
			else
				match = match.replace("-", "");

			result += match.replace(/[0]+/, function ($0) {
				return pad(exponent, $0.length);
			});


		} else {
			if (match === ",") {
				noCommaAdded++;
				commaDistance = distanceFromLastComma;
				distanceFromLastComma = 0;

				if (vStringBeforeDecimal.length > 0)
					result = digitGroupSeparator + result;
			} else if (match.length > 1 && ((match[0] === "\"" && match[match.length - 1] === "\"") || (match[0] === "'" && match[match.length - 1] === "'"))) {
				result = match.slice(1, match.length - 1) + result;
			}
			else
				result = match + result;
		}
	}

	var charCount = 0;
	var resultAfterDecimal = "";
	var addDecimalSeparator = false;

	while (fsAfterDecimal.length > 0) {
		match = fsAfterDecimal.shift();

		if (match === "#" || match === "0") {
			if (vStringAfterDecimal.length > 0 && Number(vStringAfterDecimal.join("")) !== 0) {
				resultAfterDecimal += vStringAfterDecimal.shift();
				addDecimalSeparator = true;
			}
			else if (match === "0") {
				resultAfterDecimal += "0";
				addDecimalSeparator = true;
			}
		} else if (match.length > 1 && ((match[0] === "\"" && match[match.length - 1] === "\"") || (match[0] === "'" && match[match.length - 1] === "'"))) {
			resultAfterDecimal += match.slice(1, match.length - 1);
			//addDecimalSeparator = true;
		} else if ((match[0] === "E" || match[0] === "e") && match[match.length - 1] === "0" && /[eE][+-]*[0]+/.test(match)) {
			if (exponent < 0)
				match = match.replace("+", "").replace("-", "");
			else
				match = match.replace("-", "");
			resultAfterDecimal += match.replace(/[0]+/, function ($0) {
				return pad(exponent, $0.length);
			});
		} else {
			resultAfterDecimal += match;
			//addDecimalSeparator = true;
		}
	}

	result += (addDecimalSeparator ? decimalSeparator : "") + resultAfterDecimal;
	//window.console.log(result);
	return result;
};

//#endregion formatting functions/methods

function getObjectId(x, y, ctx) {
	x *= devicePixelBackingStoreRatio;
	y *= devicePixelBackingStoreRatio;
	var pixels = ctx.getImageData(x, y, 2, 2).data;
	var isObject = true;

	for (var i = 0; i < 4; i++) {

		if (pixels[i] !== pixels[i + 4] | pixels[i] !== pixels[i + 8] | pixels[i] !== pixels[i + 12]) {
			isObject = false;
			break;
		}
	}

	if (isObject) {
		return RGBToInt(pixels[0], pixels[1], pixels[2]);
	} else {
		return 0;
	}

	//window.console.log(pixels);
}

//extracts mouse coordinates from the event parameters
function getMouseCoordinates(ev) {
	var x = 0;
	var y = 0;

	ev = ev || window.event;

	if (ev.offsetX || ev.offsetX === 0) {
		x = ev.offsetX;
		y = ev.offsetY;
	} else if (ev.layerX || ev.layerX == 0) { // Firefox
		x = ev.layerX;
		y = ev.layerY;
	}
	else {
		x = ev.pageX - ev.target.offsetLeft;
		y = ev.pageY - ev.target.offsetTop;
	}

	return { x: x, y: y };
};

function getFontString(prefix, object, fallbackObject) {
	var fontString = "";

	var fontStyleString = prefix ? prefix + "FontStyle" : "fontStyle";
	var fontWeightString = prefix ? prefix + "FontWeight" : "fontWeight";
	var fontSizeString = prefix ? prefix + "FontSize" : "fontSize";
	var fontFamilyString = prefix ? prefix + "FontFamily" : "fontFamily";



	fontString += object[fontStyleString] ? object[fontStyleString] + " " : (fallbackObject && fallbackObject[fontStyleString]) ? (fallbackObject[fontStyleString] + " ") : "";
	fontString += object[fontWeightString] ? object[fontWeightString] + " " : (fallbackObject && fallbackObject[fontWeightString]) ? (fallbackObject[fontWeightString] + " ") : "";
	fontString += object[fontSizeString] ? object[fontSizeString] + "px " : (fallbackObject && fallbackObject[fontSizeString]) ? (fallbackObject[fontSizeString] + "px ") : "";


	var fontFamily = object[fontFamilyString] ? object[fontFamilyString] + "" : (fallbackObject && fallbackObject[fontFamilyString]) ? (fallbackObject[fontFamilyString] + "") : "";

	if (!isCanvasSupported && fontFamily) {
		var firstFontFamily = fontFamily.split(",")[0];

		if (firstFontFamily[0] !== "'" && firstFontFamily[0] !== "\"")
			firstFontFamily = "'" + firstFontFamily + "'";

		fontString += firstFontFamily;
	} else
		fontString += fontFamily;

	return fontString;
}

function getProperty(propertyName, object, fallbackObject) {

	var value = propertyName in object ? object[propertyName] : fallbackObject[propertyName];

	return value;
}

var optimizeForHiDPI = true;
//optimizeForHiDPI = false;

var devicePixelRatio = window.devicePixelRatio || 1;
var backingStoreRatio = 1;
var devicePixelBackingStoreRatio = optimizeForHiDPI ? devicePixelRatio / backingStoreRatio : 1;

function setCanvasSize(canvas, width, height) {

	if (isCanvasSupported && !!optimizeForHiDPI) {
		var ctx = canvas.getContext("2d");
		backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
							ctx.mozBackingStorePixelRatio ||
							ctx.msBackingStorePixelRatio ||
							ctx.oBackingStorePixelRatio ||
							ctx.backingStorePixelRatio || 1;


		devicePixelBackingStoreRatio = devicePixelRatio / backingStoreRatio;

		canvas.width = width * devicePixelBackingStoreRatio;
		canvas.height = height * devicePixelBackingStoreRatio;

		if (devicePixelRatio !== backingStoreRatio) {

			canvas.style.width = width + 'px';
			canvas.style.height = height + 'px';

			ctx.scale(devicePixelBackingStoreRatio, devicePixelBackingStoreRatio);

		}

		//window.alert(backingStoreRatio);
		//window.alert(devicePixelRatio);

	} else {
		canvas.width = width;
		canvas.height = height;
	}

}


function createCanvas(width, height) {
	var canvas = document.createElement("canvas");
	canvas.setAttribute("class", "canvasjs-chart-canvas");

	setCanvasSize(canvas, width, height);

	if (!isCanvasSupported && typeof (G_vmlCanvasManager) !== "undefined") {
		G_vmlCanvasManager.initElement(canvas);
	}

	return canvas;
}

function exportCanvas(canvas, format, fileName) {
	if (!canvas || !format || !fileName)
		return;

	var fullFileName = fileName + "." + (format === "jpeg" ? "jpg" : format);
	var mimeType = "image/" + format;
	var img = canvas.toDataURL(mimeType);
	var saved = false;

	var downloadLink = document.createElement("a");
	downloadLink.download = fullFileName;
	downloadLink.href = img;
	downloadLink.target = "_blank";
	var e;


	if (typeof (Blob) !== "undefined" && !!new Blob()) {

		//alert("blob");
		var imgData = img.replace(/^data:[a-z/]*;base64,/, '');

		var byteString = atob(imgData);
		var buffer = new ArrayBuffer(byteString.length);
		var intArray = new Uint8Array(buffer);
		for (var i = 0; i < byteString.length; i++) {
			intArray[i] = byteString.charCodeAt(i);
		}

		var blob = new Blob([buffer], { type: "image/" + format });

		// Save the blob
		try {
			window.navigator.msSaveBlob(blob, fullFileName);
			saved = true;
		}
		catch (e) {
			downloadLink.dataset.downloadurl = [mimeType, downloadLink.download, downloadLink.href].join(':');
			downloadLink.href = window.URL.createObjectURL(blob);
		}
	}

	if (!saved) {

		try {

			event = document.createEvent("MouseEvents");

			event.initMouseEvent("click", true, false, window,
							 0, 0, 0, 0, 0, false, false, false,
							 false, 0, null);

			if (downloadLink.dispatchEvent) {
				//alert("dispatchEvent");
				downloadLink.dispatchEvent(event);
			}
			else if (downloadLink.fireEvent) {
				//alert("fireEvent");
				downloadLink.fireEvent("onclick");
			}

		} catch (e) {
			var win = window.open();
			//alert("<IE10");
			//window.console.log("IE");
			win.document.write("<img src='" + img + "'></img><div>Please right click on the image and save it to your device</div>");
			win.document.close();
		}
	}
}

var base64Images = {
	reset: {
		image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="
	},
	pan: {
		image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="
	},
	zoom: {
		image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="
	},
	menu: {
		image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"
	}
}

function setButtonState(chart, button, state) {
	if (button.getAttribute("state") !== state) {

		button.setAttribute("state", state);
		button.setAttribute("type", 'button');
		button.style.position = "relative";
		button.style.margin = "0px 0px 0px 0px";
	    button.style.padding = "3px 4px 0px 4px";
	    button.style.cssFloat = "left";
		button.setAttribute("title", chart._cultureInfo[state + "Text"]);
	    button.innerHTML = "<img style='height:16px;' src='" + base64Images[state].image + "' alt='" + chart._cultureInfo[state + "Text"] + "' />";
	}
}

function show() {

	var element = null;

	for (var i = 0; i < arguments.length; i++) {
		element = arguments[i];
		if (element.style)
			element.style.display = "inline";
	}
}

function hide() {

	var element = null;

	for (var i = 0; i < arguments.length; i++) {
		element = arguments[i];
		if (element && element.style)
			element.style.display = "none";
	}
}

const isCanvasSupported = !!document.createElement("canvas").getContext;
/* harmony export (immutable) */ __webpack_exports__["s"] = isCanvasSupported;


function getBezierPoints(points, tension) {

	var bezierPoints = [];

	for (var i = 0; i < points.length; i++) {

		if (i == 0) {
			bezierPoints.push(points[0]);
			continue;
		}

		var i1, i2, pointIndex;

		pointIndex = i - 1;
		i1 = pointIndex === 0 ? 0 : pointIndex - 1;
		i2 = pointIndex === points.length - 1 ? pointIndex : pointIndex + 1;

		var drv1 = {
			x: (points[i2].x - points[i1].x) / tension, y: (points[i2].y - points[i1].y) / tension
		}
		var cp1 = {
			x: points[pointIndex].x + drv1.x / 3, y: points[pointIndex].y + drv1.y / 3
		}
		bezierPoints[bezierPoints.length] = cp1;


		pointIndex = i;
		i1 = pointIndex === 0 ? 0 : pointIndex - 1;
		i2 = pointIndex === points.length - 1 ? pointIndex : pointIndex + 1;

		var drv2 = {
			x: (points[i2].x - points[i1].x) / tension, y: (points[i2].y - points[i1].y) / tension
		}
		var cp2 = {
			x: points[pointIndex].x - drv2.x / 3, y: points[pointIndex].y - drv2.y / 3
		}
		bezierPoints[bezierPoints.length] = cp2;

		bezierPoints[bezierPoints.length] = points[i];
	}

	return bezierPoints;
}

function convertPercentToValue(input, referenceValue) {
	//input can be a number or string
	if (input === null || typeof (input) === "undefined")
		return referenceValue;

	var result = parseFloat(input.toString()) * (input.toString().indexOf("%") >= 0 ? referenceValue / 100 : 1);

	// limit to plot area
	if (!isNaN(result) && result <= referenceValue && result >= 0)
		return result;

	return referenceValue;
}

function drawRect(ctx, x1, y1, x2, y2, color, borderThickness, borderColor, top, bottom, left, right, fillOpacity) {
	if (typeof (fillOpacity) === "undefined")
		fillOpacity = 1;

	borderThickness = borderThickness || 0;
	borderColor = borderColor || "black";
	//alert("top"+ top + "bottom" + bottom + " lt" + left+ "rt" + right )
	var a1 = x1, a2 = x2, b1 = y1, b2 = y2, edgeY, edgeX;
	if (x2 - x1 > 15 && y2 - y1 > 15)
		var bevelDepth = 8;
	else
		var bevelDepth = 0.35 * Math.min((x2 - x1), (y2 - y1));
	//alert(a1 + "" + a2);
	var color2 = "rgba(255, 255, 255, .4)";
	var color3 = "rgba(255, 255, 255, 0.1)";
	//color1 = "rgba(" + r + "," + g + ", " + b + ",1)";
	var color1 = color;

	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.save();
	ctx.fillStyle = color1;

	ctx.globalAlpha = fillOpacity;
	ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
	ctx.globalAlpha = 1;

	if (borderThickness > 0) {
		var offset = borderThickness % 2 === 0 ? 0 : .5;
		ctx.beginPath();
		ctx.lineWidth = borderThickness;
		ctx.strokeStyle = borderColor;
		ctx.moveTo(x1, y1);
		ctx.rect(x1 - offset, y1 - offset, x2 - x1 + 2 * offset, y2 - y1 + 2 * offset);
		ctx.stroke();
	}

	ctx.restore();
	//   ctx.beginPath();
	if (top === true) {
		// alert(x1 + "" + x2 + " " + bevelDepth);
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x1 + bevelDepth, y1 + bevelDepth);
		ctx.lineTo(x2 - bevelDepth, y1 + bevelDepth);
		ctx.lineTo(x2, y1);
		ctx.closePath();
		var grd = ctx.createLinearGradient((x2 + x1) / 2, b1 + bevelDepth, (x2 + x1) / 2, b1);
		grd.addColorStop(0, color1);
		grd.addColorStop(1, color2);
		ctx.fillStyle = grd;
		ctx.fill();
		//              ctx.stroke();
		ctx.restore();
	}


	if (bottom === true) {
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x1, y2);
		ctx.lineTo(x1 + bevelDepth, y2 - bevelDepth);
		ctx.lineTo(x2 - bevelDepth, y2 - bevelDepth);
		ctx.lineTo(x2, y2);
		ctx.closePath();
		var grd = ctx.createLinearGradient((x2 + x1) / 2, b2 - bevelDepth, (x2 + x1) / 2, b2);
		grd.addColorStop(0, color1);
		grd.addColorStop(1, color2);
		ctx.fillStyle = grd;
		//       ctx.stroke();
		ctx.fill();
		ctx.restore();
	}

	if (left === true) {
		//   alert(x1)
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x1, y1)
		ctx.lineTo(x1 + bevelDepth, y1 + bevelDepth);
		ctx.lineTo(x1 + bevelDepth, y2 - bevelDepth);
		ctx.lineTo(x1, y2);
		ctx.closePath();
		var grd = ctx.createLinearGradient(a1 + bevelDepth, (y2 + y1) / 2, a1, (y2 + y1) / 2);
		grd.addColorStop(0, color1);
		grd.addColorStop(1, color3);
		ctx.fillStyle = grd;
		ctx.fill();
		//     ctx.stroke();
		ctx.restore();
	}


	if (right === true) {
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x2, y1)
		ctx.lineTo(x2 - bevelDepth, y1 + bevelDepth);
		ctx.lineTo(x2 - bevelDepth, y2 - bevelDepth);
		ctx.lineTo(x2, y2);
		var grd = ctx.createLinearGradient(a2 - bevelDepth, (y2 + y1) / 2, a2, (y2 + y1) / 2);
		grd.addColorStop(0, color1);
		grd.addColorStop(1, color3);
		ctx.fillStyle = grd;
		grd.addColorStop(0, color1);
		grd.addColorStop(1, color3);
		ctx.fillStyle = grd;
		ctx.fill();
		ctx.closePath();
		//          ctx.stroke();
		ctx.restore();
	}
	//

}

function drawSegment(ctx, center, radius, color, type, theta1, theta2, fillOpacity, percentInnerRadius) {

	if (typeof (fillOpacity) === "undefined")
		fillOpacity = 1;

	//IE8- FIX: In IE8- segment doesn't get draw if theta2 is equal to theta1 + 2*PI.
	if (!isCanvasSupported) {
		var theta2Mod = Number((theta2 % (2 * Math.PI)).toFixed(8));
		var theta1Mod = Number((theta1 % (2 * Math.PI)).toFixed(8));
		if (theta1Mod === theta2Mod)
			theta2 -= .0001;
	}

	ctx.save();
	ctx.globalAlpha = fillOpacity;

	if (type === "pie") {
		ctx.beginPath();
		ctx.moveTo(center.x, center.y);
		ctx.arc(center.x, center.y, radius, theta1, theta2, false);
		ctx.fillStyle = color;
		ctx.strokeStyle = "white";
		ctx.lineWidth = 2;
		//    ctx.shadowOffsetX = 2;
		//    ctx.shadowOffsetY = 1;
		//     ctx.shadowBlur = 2;
		//    ctx.shadowColor = '#BFBFBF';
		ctx.closePath();
		//ctx.stroke();
		ctx.fill();
	}
	else if (type === "doughnut") {
		ctx.beginPath();
		ctx.arc(center.x, center.y, radius, theta1, theta2, false);
		ctx.arc(center.x, center.y, percentInnerRadius * radius, theta2, theta1, true);
		ctx.closePath();
		ctx.fillStyle = color;
		ctx.strokeStyle = "white";
		ctx.lineWidth = 2;
		// shadow properties
		//     ctx.shadowOffsetX = 1;
		//    ctx.shadowOffsetY = 1;
		//     ctx.shadowBlur = 1;
		//    ctx.shadowColor = '#BFBFBF';  //grey shadow
		//ctx.stroke();
		ctx.fill();
	}

	ctx.globalAlpha = 1;

	ctx.restore();
};


/***/ }),
/* 2 */
/*!****************************************************!*\
  !*** ./node_modules/canvasjs/src/core/canvasjs.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_themes__ = __webpack_require__(/*! ../constants/themes */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_options__ = __webpack_require__(/*! ../constants/options */ 7);



function CanvasJSObject(defaultsKey, options, theme, parent) {
  this._defaultsKey = defaultsKey;

  this.parent = parent;

  this._eventListeners = [];//Multidimentional array with an array for each event type

  var currentThemeOptions = {};

  if (theme && __WEBPACK_IMPORTED_MODULE_0__constants_themes__["b" /* themes */][theme] && __WEBPACK_IMPORTED_MODULE_0__constants_themes__["b" /* themes */][theme][defaultsKey])
    currentThemeOptions = __WEBPACK_IMPORTED_MODULE_0__constants_themes__["b" /* themes */][theme][defaultsKey];

  this._options = options ? options : {};
  this.setOptions(this._options, currentThemeOptions);
}

CanvasJSObject.prototype.setOptions = function (options, currentThemeOptions) {

  if (!__WEBPACK_IMPORTED_MODULE_1__constants_options__["a" /* defaultOptions */][this._defaultsKey]) {
    if (__WEBPACK_IMPORTED_MODULE_1__constants_options__["b" /* isDebugMode */] && window.console)
      console.log("defaults not set");
  }
  else {
    var defaults = __WEBPACK_IMPORTED_MODULE_1__constants_options__["a" /* defaultOptions */][this._defaultsKey];

    for (var prop in defaults) {

      if (defaults.hasOwnProperty(prop)) {
      if (options && prop in options)
        this[prop] = options[prop];
      else if (currentThemeOptions && prop in currentThemeOptions)
        this[prop] = currentThemeOptions[prop];
      else this[prop] = defaults[prop];

      //if (typeof this[prop] === "function") {
      //    alert("function");
      //    this[prop] = this[prop]();
      //}
    }

  }
  }
};

// Update options. Returns true if changed or else false
CanvasJSObject.prototype.updateOption = function (prop) {

  if (!__WEBPACK_IMPORTED_MODULE_1__constants_options__["a" /* defaultOptions */][this._defaultsKey] && __WEBPACK_IMPORTED_MODULE_1__constants_options__["b" /* isDebugMode */] && window.console)
    console.log("defaults not set");

  var defaults = __WEBPACK_IMPORTED_MODULE_1__constants_options__["a" /* defaultOptions */][this._defaultsKey];
  var theme = this._options.theme ? this._options.theme : (this.chart && this.chart._options.theme) ? this.chart._options.theme : "theme1";

  var currentThemeOptions = {};
  var newValue = this[prop];

  if (theme && __WEBPACK_IMPORTED_MODULE_0__constants_themes__["b" /* themes */][theme] && __WEBPACK_IMPORTED_MODULE_0__constants_themes__["b" /* themes */][theme][this._defaultsKey])
    currentThemeOptions = __WEBPACK_IMPORTED_MODULE_0__constants_themes__["b" /* themes */][theme][this._defaultsKey];

  if (prop in defaults) {
    if (prop in this._options)
      newValue = this._options[prop];
    else if (currentThemeOptions && prop in currentThemeOptions)
      newValue = currentThemeOptions[prop];
    else newValue = defaults[prop];
  }

  if (newValue === this[prop])
    return false;

  this[prop] = newValue;
  return true;
}

//Stores values in _oldOptions so that it can be tracked for any changes
CanvasJSObject.prototype.trackChanges = function (option) {
  if (!this.sessionVariables)
    throw "Session Variable Store not set";

  this.sessionVariables[option] = this._options[option];
};

CanvasJSObject.prototype.isBeingTracked = function (option) {
  if (!this._options._oldOptions)
    this._options._oldOptions = {};

  if (this._options._oldOptions[option])
    return true;
  else
    return false;
};

CanvasJSObject.prototype.hasOptionChanged = function (option) {
  if (!this.sessionVariables)
    throw "Session Variable Store not set";

  var hasChanged = !(this.sessionVariables[option] === this._options[option]);

  return hasChanged;
};

CanvasJSObject.prototype.addEventListener = function (eventName, eventHandler, context) {
  if (!eventName || !eventHandler)
    return;

  context = context || this;

  this._eventListeners[eventName] = this._eventListeners[eventName] || [];

  this._eventListeners[eventName].push({ context: context, eventHandler: eventHandler });
}

CanvasJSObject.prototype.removeEventListener = function (eventName, eventHandler) {
  if (!eventName || !eventHandler || !this._eventListeners[eventName])
    return;

  var listeners = this._eventListeners[eventName];
  for (var i = 0; i < listeners.length; i++) {

    if (listeners[i].eventHandler === eventHandler) {
      listeners[i].splice(i, 1);
      break;
    }
  }
}

CanvasJSObject.prototype.removeAllEventListeners = function () {
  this._eventListeners = [];
}

CanvasJSObject.prototype.dispatchEvent = function (eventName, eventParameter, context) {

  //For Internal Events
  if (eventName && this._eventListeners[eventName]) {

  eventParameter = eventParameter || {};

  var listeners = this._eventListeners[eventName];
  for (var i = 0; i < listeners.length; i++) {

    listeners[i].eventHandler.call(listeners[i].context, eventParameter);
  }
}

  //External Events do not require registering as the property name is suffient to fire the event.
  if (typeof (this[eventName]) === "function") {
    this[eventName].call(context || this.chart._publicChartReference, eventParameter);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (CanvasJSObject);


/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./node_modules/canvasjs/src/core/text_block.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasjs__ = __webpack_require__(/*! ./canvasjs */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_utils__ = __webpack_require__(/*! ../helpers/utils */ 1);




function TextBlock(ctx, options) {

  TextBlock.base.constructor.call(this, "TextBlock", options);

  this.ctx = ctx;
  this._isDirty = true;
  this._wrappedText = null;
  this._lineHeight = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_utils__["k" /* getFontHeightInPixels */])(this.fontFamily, this.fontSize, this.fontWeight);
}

Object(__WEBPACK_IMPORTED_MODULE_1__helpers_utils__["i" /* extend */])(TextBlock, __WEBPACK_IMPORTED_MODULE_0__canvasjs__["a" /* default */]);

TextBlock.prototype.render = function (preserveContext) {
  if (preserveContext)
    this.ctx.save();

  var font = this.ctx.font;
  this.ctx.textBaseline = this.textBaseline;

  var offsetY = 0;

  if (this._isDirty)
    this.measureText(this.ctx);

  this.ctx.translate(this.x, this.y + offsetY);

  if (this.textBaseline === "middle") {
    offsetY = -this._lineHeight / 2;
  }

  this.ctx.font = this._getFontString();

  this.ctx.rotate(Math.PI / 180 * this.angle);

  var textLeft = 0;
  var textTop = this.padding;
  //var textTop = this.padding;
  var line = null;

  if ((this.borderThickness > 0 && this.borderColor) || this.backgroundColor) {
    this.ctx.roundRect(0, offsetY, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);

    //if (this.textBaseline === "middle") {
    //	//textTop += this.fontSize / 2;
    //	textTop += this._lineHeight / 2;
    //}
  }

  this.ctx.fillStyle = this.fontColor;

  for (var i = 0; i < this._wrappedText.lines.length; i++) {

    line = this._wrappedText.lines[i];
    if (this.horizontalAlign === "right")
      textLeft = this.width - line.width - this.padding;
    else if (this.horizontalAlign === "left")
      textLeft = this.padding;
    else if (this.horizontalAlign === "center")
      textLeft = (this.width - this.padding * 2) / 2 - line.width / 2 + this.padding;

    this.ctx.fillText(line.text, textLeft, textTop);

    textTop += line.height;
  }

  this.ctx.font = font;

  if (preserveContext)
    this.ctx.restore();
}

TextBlock.prototype.setText = function (text) {
  this.text = text;
  this._isDirty = true;
  this._wrappedText = null;
}

TextBlock.prototype.measureText = function () {
  if (this.maxWidth === null) {
    throw ("Please set maxWidth and height for TextBlock");
  }

  this._wrapText(this.ctx);
  this._isDirty = false;

  return {
    width: this.width, height: this.height
  }
}

TextBlock.prototype._getLineWithWidth = function (text, width, clipWord) {
  text = String(text);
  clipWord = clipWord || false;

  if (!text)
    return {
      text: "", width: 0
    };

  var textWidth = 0,
    min = 0,
    max = text.length - 1,
    mid = Infinity;

  this.ctx.font = this._getFontString();

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    var tempText = text.substr(0, mid + 1);

    textWidth = this.ctx.measureText(tempText).width;

    if (textWidth < width) {
      min = mid + 1;
    } else if (textWidth > width) {
      max = mid - 1;
    } else {
      break;
    }
  }

  //edge cases
  if (textWidth > width && tempText.length > 1) {
    tempText = tempText.substr(0, tempText.length - 1);
    textWidth = this.ctx.measureText(tempText).width;
  }

  var isClipped = true;

  if (tempText.length === text.length || text[tempText.length] === " ")
    isClipped = false;

  if (isClipped) {
    var resultWords = tempText.split(" ");
    if (resultWords.length > 1)
      resultWords.pop();

    tempText = resultWords.join(" ");
    textWidth = this.ctx.measureText(tempText).width;
  }

  return {
    text: tempText, width: textWidth
  };
}

TextBlock.prototype._wrapText = function wrapText() {
  //this.ctx.save();
  var text = new String(Object(__WEBPACK_IMPORTED_MODULE_1__helpers_utils__["w" /* trimString */])(String(this.text)));
  var lines = [];
  var font = this.ctx.font; // Save the current Font
  var height = 0;
  var width = 0;

  this.ctx.font = this._getFontString();

  while (text.length > 0) {

    var maxWidth = this.maxWidth - this.padding * 2;
    var maxHeight = this.maxHeight - this.padding * 2;

    var line = this._getLineWithWidth(text, maxWidth, false);
    line.height = this._lineHeight;

    lines.push(line);

    width = Math.max(width, line.width);
    height += line.height;
    text = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_utils__["w" /* trimString */])(text.slice(line.text.length, text.length));

    if (maxHeight && height > maxHeight) {
      var line = lines.pop();
      height -= line.height;
    }
  }

  this._wrappedText = {
    lines: lines, width: width, height: height
  };
  this.width = width + this.padding * 2;
  this.height = height + this.padding * 2;

  this.ctx.font = font; // Restore the font
}

TextBlock.prototype._getFontString = function () {
  //return this.fontStyle + " " + this.fontWeight + " " + this.fontSize + "px " + this.fontFamily
  return Object(__WEBPACK_IMPORTED_MODULE_1__helpers_utils__["l" /* getFontString */])("", this, null);
}

/* harmony default export */ __webpack_exports__["a"] = (TextBlock);


/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/canvasjs/src/constants/themes.js ***!
  \*******************************************************/
/*! exports provided: colorSets, themes */
/*! exports used: colorSets, themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_utils__ = __webpack_require__(/*! ../helpers/utils */ 1);



const colorSets = {

		"colorSet1": [
			"#369EAD",
			"#C24642",
			"#7F6084",
			//"#96C412",
			"#86B402",
			"#A2D1CF",
			//"#D8C641",
			"#C8B631",
			"#6DBCEB",
			//"#4A4946",
			"#52514E",
			"#4F81BC",
			"#A064A1",
			"#F79647"
		],
		"colorSet2": [
			"#4F81BC",
			"#C0504E",
			"#9BBB58",
			"#23BFAA",
			//"#FAA586",
			"#8064A1",
			"#4AACC5",
			"#F79647",
			//"#77AA33",
			//"#7F6084"
			"#33558B"
		],
		"colorSet3": [
			"#8CA1BC",
			"#36845C",
			"#017E82",
			"#8CB9D0",
			"#708C98",
			"#94838D",
			"#F08891",
			"#0366A7",
			"#008276",
			"#EE7757",
			"#E5BA3A",
			"#F2990B",
			"#03557B",
			"#782970"
		]//,
		//"colorSet4": [
		//    "#3698C5",
		//    "#009B8D",
		//    "#F1D691",
		//    "#F8B90C",
		//    "#0081B8",
		//    "#5B5A96",
		//    "#ACBDD1",
		//    "#88A891",
		//    "#39969D",
		//    "#AECEDD",
		//    "#A0B2BC",
		//    "#BBAEB7",
		//    "#A0C65F",
		//    "#EEA6AA",
		//    "#3798C5"
		//],
		//"colorSet5": [
		//    "#88ADBF",
		//    "#84C336",
		//    "#7B91C3",
		//    "#4661EE",
		//    "#EC5657",
		//    "#1BCDD1",
		//    "#8FAABB",
		//    "#B08BEB",
		//    "#3EA0DD",
		//    "#F5A52A",
		//    "#23BFAA",
		//    "#FAA586",
		//    "#EB8CC6"
		//]

	};
/* harmony export (immutable) */ __webpack_exports__["a"] = colorSets;


const themes = {

			"theme1": {
				Chart:
					{
						colorSet: "colorSet1"
					},
				Title: {
					fontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					fontSize: 33,
					fontColor: "#3A3A3A",
					fontWeight: "bold",
					verticalAlign: "top",
					margin: 5
				},
				Subtitle: {
					fontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					fontSize: 16,
					fontColor: "#3A3A3A",
					fontWeight: "bold",
					verticalAlign: "top",
					margin: 5
				},
				Axis: {
					titleFontSize: 26,
					//titleFontColor: "rgb(98,98,98)",
					titleFontColor: "#666666",
					//titleFontFamily: "arial black",
					//titleFontFamily: "Verdana, Geneva, Calibri, sans-serif",
					titleFontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					//titleFontWeight: "bold",

					//labelFontFamily: "Times New Roman, Times, serif",
					labelFontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					//labelFontFamily: "Helvetica Neue, Helvetica",
					labelFontSize: 18,
					labelFontColor: "grey",
					//labelFontWeight: "bold",
					tickColor: "#BBBBBB",
					tickThickness: 2,
					gridThickness: 2,
					gridColor: "#BBBBBB",
					lineThickness: 2,
					lineColor: "#BBBBBB"
				},
				Legend: {
					verticalAlign: "bottom",
					horizontalAlign: "center",
					fontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "monospace, sans-serif,arial black" : "calibri"
				},
				DataSeries: {
					//bevelEnabled: true,
					indexLabelFontColor: "grey",
					//indexLabelFontFamily: "Trebuchet MS, monospace, Courier New, Courier",
					indexLabelFontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					//indexLabelFontWeight: "bold",
					indexLabelFontSize: 18,
					//indexLabelLineColor: "lightgrey",
					indexLabelLineThickness: 1
				}
			},

			"theme2": {
				Chart:
					{
						colorSet: "colorSet2"
					},
				Title: {
					fontFamily: "impact, charcoal, arial black, sans-serif",
					fontSize: 32,//fontColor: "rgb(58,58,58)",
					fontColor: "#333333",
					verticalAlign: "top",
					margin: 5
				},
				Subtitle: {
					fontFamily: "impact, charcoal, arial black, sans-serif",
					fontSize: 14,//fontColor: "rgb(58,58,58)",
					fontColor: "#333333",
					verticalAlign: "top",
					margin: 5
				},
				Axis: {
					titleFontSize: 22,
					titleFontColor: "rgb(98,98,98)",
					//titleFontFamily: "arial black",
					titleFontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "monospace, sans-serif,arial black" : "arial",
					titleFontWeight: "bold",


					labelFontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "monospace, Courier New, Courier" : "arial",
					//labelFontFamily: "Helvetica Neue, Helvetica",
					labelFontSize: 16,
					labelFontColor: "grey",
					labelFontWeight: "bold",
					tickColor: "grey",
					tickThickness: 2,
					gridThickness: 2,
					gridColor: "grey",
					lineColor: "grey",
					lineThickness: 0
				},
				Legend: {
					verticalAlign: "bottom",
					horizontalAlign: "center",
					fontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "monospace, sans-serif,arial black" : "arial"
				},
				DataSeries: {
					indexLabelFontColor: "grey",
					//indexLabelFontFamily: "Trebuchet MS, monospace, Courier New, Courier",
					indexLabelFontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "Courier New, Courier, monospace" : "arial",
					indexLabelFontWeight: "bold",
					indexLabelFontSize: 18,
					//indexLabelLineColor: "lightgrey",
					indexLabelLineThickness: 1
				}
			},

			"theme3": {
				Chart:
					{
						colorSet: "colorSet1"
					},
				Title: {
					fontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
					fontSize: 32,
					fontColor: "#3A3A3A",
					fontWeight: "bold",
					verticalAlign: "top",
					margin: 5
				},
				Subtitle: {
					fontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
					fontSize: 16,
					fontColor: "#3A3A3A",
					fontWeight: "bold",
					verticalAlign: "top",
					margin: 5
				},
				Axis: {
					titleFontSize: 22,
					titleFontColor: "rgb(98,98,98)",
					//titleFontFamily: "arial black",
					titleFontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "Verdana, Geneva, Calibri, sans-serif" : "calibri",
					//titleFontWeight: "bold",

					//labelFontFamily: "Times New Roman, Times, serif",
					labelFontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					//labelFontFamily: "Helvetica Neue, Helvetica",
					labelFontSize: 18,
					labelFontColor: "grey",
					//labelFontWeight: "bold",
					tickColor: "grey",
					tickThickness: 2,
					gridThickness: 2,
					gridColor: "grey",
					lineThickness: 2,
					lineColor: "grey"
				},
				Legend: {
					verticalAlign: "bottom",
					horizontalAlign: "center",
					fontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "monospace, sans-serif,arial black" : "calibri"
				},
				DataSeries: {
					bevelEnabled: true,
					indexLabelFontColor: "grey",
					//indexLabelFontFamily: "Trebuchet MS, monospace, Courier New, Courier",
					indexLabelFontFamily: __WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */] ? "Candara, Optima, Calibri, Verdana, Geneva, sans-serif" : "calibri",
					//indexLabelFontWeight: "bold",
					indexLabelFontSize: 18,
					indexLabelLineColor: "lightgrey",
					indexLabelLineThickness: 2
				}
			}
		};
/* harmony export (immutable) */ __webpack_exports__["b"] = themes;



/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** ./node_modules/canvasjs/src/helpers/animator.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

function yScaleAnimation(fractionComplete, animationInfo) {

  if (fractionComplete === 0) return;

  const ctx = animationInfo.dest;
  const sourceCanvas = animationInfo.source.canvas;
  const base = animationInfo.animationBase;

  const offsetY = (base - base * fractionComplete);

  ctx.drawImage(sourceCanvas, 0, 0, sourceCanvas.width, sourceCanvas.height, 0, offsetY,
     ctx.canvas.width / devicePixelBackingStoreRatio, fractionComplete * ctx.canvas.height / devicePixelBackingStoreRatio);
}

function xScaleAnimation(fractionComplete, animationInfo) {

  if (fractionComplete === 0) return;

  const ctx = animationInfo.dest;
  const sourceCanvas = animationInfo.source.canvas;
  const base = animationInfo.animationBase;

  const offsetX = (base - base * fractionComplete);

  ctx.drawImage(sourceCanvas, 0, 0, sourceCanvas.width, sourceCanvas.height, offsetX, 0,
    fractionComplete * ctx.canvas.width / devicePixelBackingStoreRatio, ctx.canvas.height / devicePixelBackingStoreRatio);
}

function xClipAnimation(fractionComplete, animationInfo) {

  if (fractionComplete === 0) return;

  const ctx = animationInfo.dest;
  const sourceCanvas = animationInfo.source.canvas;

  ctx.save();

  if (fractionComplete > 0)
    ctx.drawImage(sourceCanvas, 0, 0, sourceCanvas.width * fractionComplete, sourceCanvas.height, 0, 0,
      sourceCanvas.width * fractionComplete / devicePixelBackingStoreRatio, sourceCanvas.height / devicePixelBackingStoreRatio);

  ctx.restore();
}

function fadeInAnimation(fractionComplete, animationInfo) {

  if (fractionComplete === 0) return;

  const ctx = animationInfo.dest;
  const sourceCanvas = animationInfo.source.canvas;

  ctx.save();

  ctx.globalAlpha = fractionComplete;

  ctx.drawImage(sourceCanvas, 0, 0, sourceCanvas.width, sourceCanvas.height, 0, 0,
    ctx.canvas.width / devicePixelBackingStoreRatio, ctx.canvas.height / devicePixelBackingStoreRatio);

  ctx.restore();

}

const easing = {

  linear(t, b, c, d) {
    return c * t / d + b;
  },

  easeOutQuad(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },

  easeOutQuart (t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },

  easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
  },

  easeInQuart(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({

  yScaleAnimation,
  xScaleAnimation,
  xClipAnimation,
  fadeInAnimation,
  easing

});


/***/ }),
/* 6 */
/*!*****************************************************!*\
  !*** ./node_modules/canvasjs/src/helpers/render.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const RenderHelper = {

  drawMarker: function (x, y, ctx, markerType, markerSize, markerColor, markerBorderColor, markerBorderThickness) {

    if (!ctx)
      return;

    var alpha = 1;

    ctx.fillStyle = markerColor ? markerColor : "#000000";
    ctx.strokeStyle = markerBorderColor ? markerBorderColor : "#000000";
    ctx.lineWidth = markerBorderThickness ? markerBorderThickness : 0;


    if (markerType === "circle") {

      ctx.moveTo(x, y);
      ctx.beginPath();
      //return;

      ctx.arc(x, y, markerSize / 2, 0, Math.PI * 2, false);

      if (markerColor)
        ctx.fill();

      if (markerBorderThickness) {

        if (!markerBorderColor) {
          alpha = ctx.globalAlpha;
          ctx.globalAlpha = .15;
          ctx.strokeStyle = "black";
          ctx.stroke();
          ctx.globalAlpha = alpha;
        } else
          ctx.stroke();

      }
    }
    else if (markerType === "square") {

      //ctx.moveTo(x - markerSize / 2, y - markerSize / 2);
      ctx.beginPath();
      ctx.rect(x - markerSize / 2, y - markerSize / 2, markerSize, markerSize);

      if (markerColor)
        ctx.fill();

      if (markerBorderThickness) {

        if (!markerBorderColor) {
          alpha = ctx.globalAlpha;
          ctx.globalAlpha = .15;
          ctx.strokeStyle = "black";
          ctx.stroke();
          ctx.globalAlpha = alpha;
        } else
          ctx.stroke();

      }
    } else if (markerType === "triangle") {

      ctx.beginPath();
      ctx.moveTo(x - markerSize / 2, y + markerSize / 2);
      ctx.lineTo(x + markerSize / 2, y + markerSize / 2);
      ctx.lineTo(x, y - markerSize / 2);
      ctx.closePath();

      if (markerColor)
        ctx.fill();

      if (markerBorderThickness) {

        if (!markerBorderColor) {
          alpha = ctx.globalAlpha;
          ctx.globalAlpha = .15;
          ctx.strokeStyle = "black";
          ctx.stroke();
          ctx.globalAlpha = alpha;
        } else
          ctx.stroke();

      }
      ctx.beginPath();
    } else if (markerType === "cross") {

      ctx.strokeStyle = markerColor;
      markerBorderThickness = markerSize / 4;
      ctx.lineWidth = markerBorderThickness;

      ctx.beginPath();
      ctx.moveTo(x - markerSize / 2, y - markerSize / 2);
      ctx.lineTo(x + markerSize / 2, y + markerSize / 2);
      ctx.stroke();

      ctx.moveTo(x + markerSize / 2, y - markerSize / 2);
      ctx.lineTo(x - markerSize / 2, y + markerSize / 2);
      ctx.stroke();

    }


  },
  drawMarkers: function (markers) {
    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i];

      RenderHelper.drawMarker(marker.x, marker.y, marker.ctx, marker.type, marker.size, marker.color, marker.borderColor, marker.borderThickness);
    }
  }
  //,
  //draw1pxLine: function (x1, y1, x2, y2, color, ctx) {
  //	ctx.beginPath();
  //	ctx.drawRect(x1, y1, x2 - x1, y2 - y1);
  //	ctx.stroke();
  //}
}

/* harmony default export */ __webpack_exports__["a"] = (RenderHelper);


/***/ }),
/* 7 */
/*!********************************************************!*\
  !*** ./node_modules/canvasjs/src/constants/options.js ***!
  \********************************************************/
/*! exports provided: isDebugMode, isCanvasSupported, defaultOptions */
/*! exports used: defaultOptions, isDebugMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const isDebugMode = false;
/* harmony export (immutable) */ __webpack_exports__["b"] = isDebugMode;


const isCanvasSupported = !!document.createElement("canvas").getContext;
/* unused harmony export isCanvasSupported */

	//isCanvasSupported = false;

	//Default values for all Chart Elements that can be set by the user. CanvasJSObject.setOptions looks into this while setting the default/user-defined values.
const defaultOptions = {
		Chart: {
			width: 500,
			height: 400,
			zoomEnabled: false,
			zoomType: "x",
			backgroundColor: "white",
			theme: "theme1",
			animationEnabled: false,
			animationDuration: 1200,
			dataPointMaxWidth: null,

			colorSet: "colorSet1",
			culture: "en",
			creditText: "CanvasJS.com",
			interactivityEnabled: true,
			exportEnabled: false,
			exportFileName: "Chart",

			rangeChanging: null,
			rangeChanged: null
		},

		Title: {
			padding: 0,
			text: null,
			verticalAlign: "top",//top, center, bottom
			horizontalAlign: "center",//left, center, right
			fontSize: 20,//in pixels
			fontFamily: "Calibri",
			fontWeight: "normal", //normal, bold, bolder, lighter,
			fontColor: "black",
			fontStyle: "normal", // normal, italic, oblique

			borderThickness: 0,
			borderColor: "black",
			cornerRadius: 0,
			backgroundColor: null,
			margin: 5,
			wrap: true,
			maxWidth: null,

			dockInsidePlotArea: false
			//toolTipContent: null//string - To be implemented (TBI)
		},

		Subtitle: {
			padding: 0,
			text: null,
			verticalAlign: "top",//top, center, bottom
			horizontalAlign: "center",//left, center, right
			fontSize: 14,//in pixels
			fontFamily: "Calibri",
			fontWeight: "normal", //normal, bold, bolder, lighter,
			fontColor: "black",
			fontStyle: "normal", // normal, italic, oblique

			borderThickness: 0,
			borderColor: "black",
			cornerRadius: 0,
			backgroundColor: null,
			margin: 2,
			wrap: true,
			maxWidth: null,

			dockInsidePlotArea: false
			//toolTipContent: null//string - To be implemented (TBI)
		},

		Legend: {
			name: null,
			verticalAlign: "center",
			horizontalAlign: "right",

			fontSize: 14,//in pixels
			fontFamily: "calibri",
			fontWeight: "normal", //normal, bold, bolder, lighter,
			fontColor: "black",
			fontStyle: "normal", // normal, italic, oblique

			cursor: null,
			itemmouseover: null,
			itemmouseout: null,
			itemmousemove: null,
			itemclick: null,

			dockInsidePlotArea: false,
			reversed: false,

			maxWidth: null,
			maxHeight: null,

			itemMaxWidth: null,
			itemWidth: null,
			itemWrap: true,
			itemTextFormatter: null
		},

		ToolTip: {
			enabled: true,
			shared: false,
			animationEnabled: true,
			content: null,
			contentFormatter: null,

			reversed: false,

			backgroundColor: null,

			borderColor: null,
			borderThickness: 2, //in pixels
			cornerRadius: 5, // in pixels

			fontSize: 14, // in pixels
			fontColor: "#000000",
			fontFamily: "Calibri, Arial, Georgia, serif;",
			fontWeight: "normal", //normal, bold, bolder, lighter,
			fontStyle: "italic"  // normal, italic, oblique
		},

		Axis: {
			minimum: null, //Minimum value to be shown on the Axis
			maximum: null, //Minimum value to be shown on the Axis
			viewportMinimum: null,
			viewportMaximum: null,
			interval: null, // Interval for tick marks and grid lines
			intervalType: null, //number, millisecond, second, minute, hour, day, month, year
			//reversed: false,

			title: null, // string
			titleFontColor: "black",
			titleFontSize: 20,
			titleFontFamily: "arial",
			titleFontWeight: "normal",
			titleFontStyle: "normal",

			labelAngle: 0,
			labelFontFamily: "arial",
			labelFontColor: "black",
			labelFontSize: 12,
			labelFontWeight: "normal",
			labelFontStyle: "normal",
			labelAutoFit: false,
			labelWrap: true,
			labelMaxWidth: null,//null for auto
			labelFormatter: null,

			prefix: "",
			suffix: "",

			includeZero: true, //Applies only for axisY. Ignored in axisX.

			tickLength: 5,
			tickColor: "black",
			tickThickness: 1,

			lineColor: "black",
			lineThickness: 1,
			lineDashType: "solid",

			gridColor: "A0A0A0",
			gridThickness: 0,
			gridDashType: "solid",

			interlacedColor: null,

			valueFormatString: null,

			margin: 2,

			stripLines: [] // Just a placeholder. Does not have any effect on the actual number of striplines
		},

		StripLine: {
			value: null,
			startValue: null,
			endValue: null,

			color: "orange",
			opacity: null,
			thickness: 2,
			lineDashType: "solid",
			label: "",
			labelBackgroundColor: "#EEEEEE",
			labelFontFamily: "arial",
			labelFontColor: "orange",
			labelFontSize: 12,
			labelFontWeight: "normal",
			labelFontStyle: "normal",
			labelFormatter: null,

			showOnTop: false
		},

		DataSeries: {
			name: null,
			dataPoints: null,
			label: "",
			bevelEnabled: false,
			highlightEnabled: true,

			cursor: null,

			indexLabel: "",
			indexLabelPlacement: "auto",  //inside, outside, auto
			indexLabelOrientation: "horizontal",
			indexLabelFontColor: "black",
			indexLabelFontSize: 12,
			indexLabelFontStyle: "normal", //   italic ,oblique, normal
			indexLabelFontFamily: "Arial", 	// fx: Arial Verdana "Courier New" Serif
			indexLabelFontWeight: "normal", 	// bold ,bolder, lighter, normal
			indexLabelBackgroundColor: null,
			indexLabelLineColor: null,
			indexLabelLineThickness: 1,
			indexLabelLineDashType: "solid",
			indexLabelMaxWidth: null,
			indexLabelWrap: true,
			indexLabelFormatter: null,

			lineThickness: 2,
			lineDashType: "solid",

			color: null,
			risingColor: "white",
			fillOpacity: null,

			startAngle: 0,

			radius: null,
			innerRadius: null,

			type: "column", //line, column, bar, area, scatter stackedColumn, stackedBar, stackedArea, stackedColumn100, stackedBar100, stackedArea100, pie, doughnut
			xValueType: "number", //number, dateTime
			axisYType: "primary",

			xValueFormatString: null,
			yValueFormatString: null,
			zValueFormatString: null,
			percentFormatString: null,

			showInLegend: null,
			legendMarkerType: null,
			legendMarkerColor: null,
			legendText: null,
			legendMarkerBorderColor: null,
			legendMarkerBorderThickness: null,

			markerType: "circle", //none, circle, square, cross, triangle, line
			markerColor: null,
			markerSize: null,
			markerBorderColor: null,
			markerBorderThickness: null,
			//animationEnabled: true,
			mouseover: null,
			mouseout: null,
			mousemove: null,
			click: null,
			toolTipContent: null,

			visible: true
		},

		//Private
		TextBlock: {
			x: 0,
			y: 0,
			width: null,//read only
			height: null,//read only
			maxWidth: null,
			maxHeight: null,
			padding: 0,
			angle: 0,
			text: "",
			horizontalAlign: "center",//left, center, right
			fontSize: 12,//in pixels
			fontFamily: "calibri",
			fontWeight: "normal", //normal, bold, bolder, lighter,
			fontColor: "black",
			fontStyle: "normal", // normal, italic, oblique

			borderThickness: 0,
			borderColor: "black",
			cornerRadius: 0,
			backgroundColor: null,
			textBaseline: "top"
		},

		CultureInfo: {
			decimalSeparator: ".",
			digitGroupSeparator: ",",
			zoomText: "Zoom",
			panText: "Pan",
			resetText: "Reset",

			menuText: "More Options",
			saveJPGText: "Save as JPG",
			savePNGText: "Save as PNG",

			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		}
	};
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultOptions;



/***/ }),
/* 8 */
/*!*******************************************************!*\
  !*** ./node_modules/canvasjs/src/core/data_series.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasjs__ = __webpack_require__(/*! ./canvasjs */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_utils__ = __webpack_require__(/*! ../helpers/utils */ 1);




function DataSeries(chart, options, theme, index, id) {
  DataSeries.base.constructor.call(this, "DataSeries", options, theme);

  this.chart = chart;
  this.canvas = chart.canvas;
  this._ctx = chart.canvas.ctx;
  this.index = index;
  this.noDataPointsInPlotArea = 0;
  //this.maxWidthInX = 0;
  this.id = id;
  this.chart._eventManager.objectMap[id] = {
    id: id, objectType: "dataSeries", dataSeriesIndex: index
  }
  this.dataPointIds = [];
  this.plotUnit = [];

  this.axisX = null;
  this.axisY = null;

  if (this.fillOpacity === null) {
    if (this.type.match(/area/i))
      this.fillOpacity = .7;
    else
      this.fillOpacity = 1;
  }


  this.axisPlacement = this.getDefaultAxisPlacement();

  if (typeof (this._options.indexLabelFontSize) === "undefined") {

    this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize);
  }
}

Object(__WEBPACK_IMPORTED_MODULE_1__helpers_utils__["i" /* extend */])(DataSeries, __WEBPACK_IMPORTED_MODULE_0__canvasjs__["a" /* default */]);

//Static Method that returns the axisPlacement for a given ChartType. Returns one of "normal", "xySwapped", "none"
DataSeries.prototype.getDefaultAxisPlacement = function () {

  //if (!this.visible)
  //	return "none";

  //type = this.type.toLowerCase();
  var type = this.type;

  if (type === "column" || type === "line" || type === "stepLine" || type === "spline" || type === "area" || type === "stepArea" || type === "splineArea" || type === "stackedColumn" || type === "stackedLine" || type === "bubble" || type === "scatter"
    || type === "stackedArea" || type === "stackedColumn100" || type === "stackedLine100" || type === "stackedArea100"
    || type === "candlestick" || type === "ohlc" || type === "rangeColumn" || type === "rangeArea" || type === "rangeSplineArea") {
    return "normal";
  }
  else if (type === "bar" || type === "stackedBar" || type === "stackedBar100" || type === "rangeBar") {

    return "xySwapped";
  }
  else if (type === "pie" || type === "doughnut" || type === "funnel") {
    return "none";
  } else {
    window.console.log("Unknown Chart Type: " + type);
    return null;
  }
}

DataSeries.getDefaultLegendMarker = function (type) {

  //type = type.toLowerCase();

  if (type === "column" || type === "stackedColumn" || type === "stackedLine" || type === "bar" || type === "stackedBar" || type === "stackedBar100"
    || type === "bubble" || type === "scatter"
    || type === "stackedColumn100" || type === "stackedLine100" || type === "stepArea"
    || type === "candlestick" || type === "ohlc" || type === "rangeColumn" || type === "rangeBar" || type === "rangeArea" || type === "rangeSplineArea") {
    return "square";
  }
  else if (type === "line" || type === "stepLine" || type === "spline" || type === "pie" || type === "doughnut" || type === "funnel") {
    return "circle";
  } else if (type === "area" || type === "splineArea" || type === "stackedArea" || type === "stackedArea100") {
    return "triangle"
  } else {
    window.console.log("Unknown Chart Type: " + type);
    return null;
  }
}

//Finds dataPoint with the given x value. If findClosest is set, finds dataPoint with closest x value.
//Returns searchResult object if found, else returns null
DataSeries.prototype.getDataPointAtX = function (x, findClosest) {

  if (!this.dataPoints || this.dataPoints.length === 0) return null;

  var searchResult = {
    dataPoint: null, distance: Infinity, index: NaN
  };
  var dataPoint = null;

  var j = 0;
  var i = 0;
  var direction = 1; // +1 for foward and -1 for backward.

  var minimumXDistance = Infinity;
  var forwardMissCount = 0, backwardMissCount = 0;
  var maxMissCount = 1000;
  var searchStartIndex = 0;

  if (this.chart.plotInfo.axisPlacement !== "none") {

    //var xRange = (this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x);

    //if (xRange > 0)
    //	searchStartIndex = ((this.dataPoints.length - 1) / xRange * (x - this.dataPoints[0].x)) >> 0;
    //else
    //	searchStartIndex = 0;

    var xRange = (this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x);

    if (xRange > 0)
      searchStartIndex = Math.min(Math.max(((this.dataPoints.length - 1) / xRange * (x - this.dataPoints[0].x)) >> 0, 0), this.dataPoints.length);
    else
      searchStartIndex = 0;

    //searchStartIndex = ((this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x) / this.dataPoints.length * (x - this.dataPoints[0].x)) >> 0;
  }

  while (true) {

    i = (direction > 0) ? searchStartIndex + j : searchStartIndex - j;

    if (i >= 0 && i < this.dataPoints.length) {

      dataPoint = this.dataPoints[i];

      var distance = Math.abs(dataPoint.x - x);

      if (distance < searchResult.distance) {
        searchResult.dataPoint = dataPoint;
        searchResult.distance = distance;
        searchResult.index = i;
      }

      var xDistance = Math.abs(dataPoint.x - x);
      if (xDistance <= minimumXDistance)
        minimumXDistance = xDistance;
      else {
        if (direction > 0)
          forwardMissCount++;
        else
          backwardMissCount++;
      }

      if (forwardMissCount > maxMissCount && backwardMissCount > maxMissCount)
        break;


    } else if (searchStartIndex - j < 0 && searchStartIndex + j >= this.dataPoints.length)
      break;

    if (direction === -1) {
      j++;
      direction = 1;
    } else
      direction = -1;
  }


  if (!findClosest && searchResult.dataPoint.x === x)
    return searchResult;
  else if (findClosest && searchResult.dataPoint !== null)
    return searchResult;
  else
    return null;
}

// x & y should be in pixels. Can be used only after rendering the chart.
DataSeries.prototype.getDataPointAtXY = function (x, y, getClosest) {

  if (!this.dataPoints || this.dataPoints.length === 0) return null;

  getClosest = getClosest || false;
  var results = [];
  var j = 0, i = 0;
  var direction = 1; // +1 for foward and -1 for backward.
  var foundDataPoint = false;
  var minimumXDistance = Infinity;
  var forwardMissCount = 0, backwardMissCount = 0;
  var maxMissCount = 1000;
  var searchStartIndex = 0;

  if (this.chart.plotInfo.axisPlacement !== "none") {
    var xval = this.chart.axisX.getXValueAt({ x: x, y: y });

    var xRange = (this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x);

    if (xRange > 0)
      searchStartIndex = Math.min(Math.max(((this.dataPoints.length - 1) / xRange * (xval - this.dataPoints[0].x)) >> 0, 0), this.dataPoints.length);
    else
      searchStartIndex = 0;

    //var xRange = (this.axisX._absoluteMaximum - this.axisX._absoluteMinimum);

    //if (xRange > 0)
    //	searchStartIndex = Math.min(Math.max(((this.dataPoints.length - 1) / xRange * (xval - this.axisX._absoluteMinimum)) >> 0, 0), this.dataPoints.length);
    //else
    //	searchStartIndex = 0;
  }

  while (true) {

    //i = searchStartIndex + (j * direction);
    i = (direction > 0) ? searchStartIndex + j : searchStartIndex - j;

    if (i >= 0 && i < this.dataPoints.length) {

      var id = this.dataPointIds[i];
      var visualInfo = this.chart._eventManager.objectMap[id];
      var dataPoint = this.dataPoints[i];
      var distance = null;

      if (visualInfo) {

        switch (this.type) {

          case "column":
          case "stackedColumn":
          case "stackedColumn100":
          case "bar":
          case "stackedBar":
          case "stackedBar100":
          case "rangeColumn":
          case "rangeBar":

            if (x >= visualInfo.x1 && x <= visualInfo.x2 && y >= visualInfo.y1 && y <= visualInfo.y2) {
              results.push({
                dataPoint: dataPoint,
                dataPointIndex: i,
                dataSeries: this,
                distance: Math.min(Math.abs(visualInfo.x1 - x), Math.abs(visualInfo.x2 - x), Math.abs(visualInfo.y1 - y), Math.abs(visualInfo.y2 - y))
                //distance:0
              });

              foundDataPoint = true;
            }
            break;

          case "line":
          case "stepLine":
          case "spline":
          case "area":
          case "stepArea":
          case "stackedArea":
          case "stackedArea100":
          case "splineArea":
          case "scatter":
            var markerSize = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_utils__["p" /* getProperty */])("markerSize", dataPoint, this) || 4;
            var snapDistance = getClosest ? 20 : markerSize;

            distance = Math.sqrt(Math.pow(visualInfo.x1 - x, 2) + Math.pow(visualInfo.y1 - y, 2));
            if (distance <= snapDistance) {
              results.push({
                dataPoint: dataPoint,
                dataPointIndex: i,
                dataSeries: this,
                distance: distance
              });
            }

            var xDistance = Math.abs(visualInfo.x1 - x);
            if (xDistance <= minimumXDistance)
              minimumXDistance = xDistance;
            else {
              if (direction > 0)
                forwardMissCount++;
              else
                backwardMissCount++;
            }

            if (distance <= markerSize / 2) {
              foundDataPoint = true;
            }

            break;

          case "rangeArea":
          case "rangeSplineArea":

            var markerSize = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_utils__["p" /* getProperty */])("markerSize", dataPoint, this) || 4;
            var snapDistance = getClosest ? 20 : markerSize;

            distance = Math.min(Math.sqrt(Math.pow(visualInfo.x1 - x, 2) + Math.pow(visualInfo.y1 - y, 2)), Math.sqrt(Math.pow(visualInfo.x1 - x, 2) + Math.pow(visualInfo.y2 - y, 2)));
            if (distance <= snapDistance) {
              results.push({
                dataPoint: dataPoint,
                dataPointIndex: i,
                dataSeries: this,
                distance: distance
              });
            }

            var xDistance = Math.abs(visualInfo.x1 - x);
            if (xDistance <= minimumXDistance)
              minimumXDistance = xDistance;
            else {
              if (direction > 0)
                forwardMissCount++;
              else
                backwardMissCount++;
            }

            if (distance <= markerSize / 2) {
              foundDataPoint = true;
            }

            break;

          case "bubble":
            var markerSize = visualInfo.size;
            distance = Math.sqrt(Math.pow(visualInfo.x1 - x, 2) + Math.pow(visualInfo.y1 - y, 2));
            if (distance <= markerSize / 2) {
              results.push({
                dataPoint: dataPoint,
                dataPointIndex: i,
                dataSeries: this,
                distance: distance
              });

              foundDataPoint = true;
            }
            break;

          case "pie":
          case "doughnut":
            var center = visualInfo.center;
            var innerRadius = this.type === "doughnut" ? visualInfo.percentInnerRadius * visualInfo.radius : 0;

            distance = Math.sqrt(Math.pow(center.x - x, 2) + Math.pow(center.y - y, 2));
            if (distance < visualInfo.radius && distance > innerRadius) {

              var deltaY = y - center.y;
              var deltaX = x - center.x;
              var angle = Math.atan2(deltaY, deltaX);

              if (angle < 0)
                angle += Math.PI * 2;

              angle = Number((((angle / Math.PI * 180 % 360) + 360) % 360).toFixed(12));
              //console.log(angle);


              var startAngle = Number((((visualInfo.startAngle / Math.PI * 180 % 360) + 360) % 360).toFixed(12));
              var endAngle = Number((((visualInfo.endAngle / Math.PI * 180 % 360) + 360) % 360).toFixed(12));

              //So that data point is detected when there is only one dataPoint
              if (endAngle === 0 && visualInfo.endAngle > 1) {
                endAngle = 360;
              }

              if (startAngle >= endAngle && dataPoint.y !== 0) {
                endAngle += 360;

                if (angle < startAngle)
                  angle += 360;
              }


              if (angle > startAngle && angle < endAngle) {
                results.push({
                  dataPoint: dataPoint,
                  dataPointIndex: i,
                  dataSeries: this,
                  distance: 0
                });

                foundDataPoint = true;
              }

            }

            break;

          case "candlestick":
            if (((x >= (visualInfo.x1 - visualInfo.borderThickness / 2)) && (x <= (visualInfo.x2 + visualInfo.borderThickness / 2))
              && (y >= visualInfo.y2 - visualInfo.borderThickness / 2) && (y <= visualInfo.y3 + visualInfo.borderThickness / 2))
              || (Math.abs(visualInfo.x2 - x + visualInfo.x1 - x) < visualInfo.borderThickness && (y >= visualInfo.y1 && y <= visualInfo.y4))) {
              results.push({
                dataPoint: dataPoint,
                dataPointIndex: i,
                dataSeries: this,
                distance: Math.min(Math.abs(visualInfo.x1 - x), Math.abs(visualInfo.x2 - x), Math.abs(visualInfo.y2 - y), Math.abs(visualInfo.y3 - y))
                //distance:0
              });

              foundDataPoint = true;
            }
            break;

          case "ohlc":

            if ((Math.abs(visualInfo.x2 - x + visualInfo.x1 - x) < visualInfo.borderThickness && (y >= visualInfo.y2 && y <= visualInfo.y3))

              || (x >= visualInfo.x1 && (x <= (visualInfo.x2 + visualInfo.x1) / 2)
                && (y >= visualInfo.y1 - visualInfo.borderThickness / 2) && (y <= visualInfo.y1 + visualInfo.borderThickness / 2))

              || ((x >= (visualInfo.x1 + visualInfo.x2) / 2) && (x <= visualInfo.x2)
                && (y >= visualInfo.y4 - visualInfo.borderThickness / 2) && (y <= visualInfo.y4 + visualInfo.borderThickness / 2))) {

              results.push({
                dataPoint: dataPoint,
                dataPointIndex: i,
                dataSeries: this,
                distance: Math.min(Math.abs(visualInfo.x1 - x), Math.abs(visualInfo.x2 - x), Math.abs(visualInfo.y2 - y), Math.abs(visualInfo.y3 - y))
                //distance:0
              });

              foundDataPoint = true;
            }
            break;

        }

        if (foundDataPoint || (forwardMissCount > maxMissCount && backwardMissCount > maxMissCount))
          break;
      }

    } else if (searchStartIndex - j < 0 && searchStartIndex + j >= this.dataPoints.length)
      break;

    if (direction === -1) {
      j++;
      direction = 1;
    } else
      direction = -1;

  }



  var closestResult = null;

  for (var m = 0; m < results.length; m++) {
    if (!closestResult) {
      closestResult = results[m];
    } else if (results[m].distance <= closestResult.distance) {
      closestResult = results[m];
    }
  }

  //if (window.console)
  //	window.console.log("forwardMissCount: " + forwardMissCount + "; backwardMissCount: " + backwardMissCount + "; getClosest: " + getClosest);

  //if (window.console && closestResult)
  //    window.console.log(j + ": distance = " + closestResult.distance);

  return closestResult;
}

DataSeries.prototype.getMarkerProperties = function (index, x, y, ctx) {
  var dataPoints = this.dataPoints;
  var dataSeries = this;

  var markerColor = dataPoints[index].markerColor ? dataPoints[index].markerColor : dataSeries.markerColor ? dataSeries.markerColor : dataPoints[index].color ? dataPoints[index].color : dataSeries.color ? dataSeries.color : dataSeries._colorSet[index % dataSeries._colorSet.length];
  var markerBorderColor = dataPoints[index].markerBorderColor ? dataPoints[index].markerBorderColor : dataSeries.markerBorderColor ? dataSeries.markerBorderColor : null;
  var markerBorderThickness = dataPoints[index].markerBorderThickness ? dataPoints[index].markerBorderThickness : dataSeries.markerBorderThickness ? dataSeries.markerBorderThickness : null;
  var markerType = dataPoints[index].markerType ? dataPoints[index].markerType : dataSeries.markerType;
  var markerSize = dataPoints[index].markerSize ? dataPoints[index].markerSize : dataSeries.markerSize;


  return {
    x: x, y: y, ctx: ctx,
    type: markerType,
    size: markerSize,
    color: markerColor,
    borderColor: markerBorderColor,
    borderThickness: markerBorderThickness
  }
}

/* harmony default export */ __webpack_exports__["a"] = (DataSeries);


/***/ }),
/* 9 */
/*!********************************************************!*\
  !*** ./node_modules/canvasjs/src/core/culture_info.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasjs__ = __webpack_require__(/*! ./canvasjs */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_utils__ = __webpack_require__(/*! ../helpers/utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_culture__ = __webpack_require__(/*! ../constants/culture */ 10);





function CultureInfo(culture) {

  var cultureInfo;

  if (culture && __WEBPACK_IMPORTED_MODULE_2__constants_culture__["a" /* cultures */][culture]) cultureInfo = __WEBPACK_IMPORTED_MODULE_2__constants_culture__["a" /* cultures */][culture];

  CultureInfo.base.constructor.call(this, "CultureInfo", cultureInfo);

}

Object(__WEBPACK_IMPORTED_MODULE_1__helpers_utils__["i" /* extend */])(CultureInfo, __WEBPACK_IMPORTED_MODULE_0__canvasjs__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (CultureInfo);


/***/ }),
/* 10 */
/*!********************************************************!*\
  !*** ./node_modules/canvasjs/src/constants/culture.js ***!
  \********************************************************/
/*! exports provided: cultures, constants */
/*! exports used: cultures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const cultures = {
  "en": {
    //Derives from the default options
  }//,
  //"es": {
  //    decimalSeparator: ",",
  //    digitGroupSeparator: ".",
  //    zoomText: "zoom",
  //    panText: "pan",
  //    resetText: "reset",
  //    days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  //}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cultures;


const constants = {
  numberDuration: 1,
  yearDuration: 1000 * 60 * 60 * 24 * 364,
  monthDuration: 1000 * 60 * 60 * 24 * 30,
  weekDuration: 1000 * 60 * 60 * 24 * 7,
  dayDuration: 1000 * 60 * 60 * 24,
  hourDuration: 1000 * 60 * 60,
  minuteDuration: 1000 * 60,
  secondDuration: 1000,
  millisecondDuration: 1,

  dayOfWeekFromInt: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
/* unused harmony export constants */



/***/ }),
/* 11 */
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap__ = __webpack_require__(/*! bootstrap */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugins_flatpickr__ = __webpack_require__(/*! ../plugins/flatpickr */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugins_chart__ = __webpack_require__(/*! ../plugins/chart */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar__ = __webpack_require__(/*! ../components/navbar */ 39);





Object(__WEBPACK_IMPORTED_MODULE_3__components_navbar__["a" /* initUpdateNavbarOnScroll */])();

var sortable = Sortable.create(simpleList, {
  animation: 300,
  ghostClass: 'main-green-background',
  chosenClass: 'light-green-background',
  dragClass: 'light-green-background',
  dataIdAttr: 'data-id' });

var button = document.querySelector("#dirty-button");

button.addEventListener("click", function (event) {

  console.log(sortable.toArray());
});

var input = document.getElementById('answer_theme_ranking');
input.value = sortable.toArray();

$(document).ready(function () {
  $(".list-group-item.choice-date").click(function () {
    $(this).toggleClass("active");
  });
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 12 */
/*!***********************************************!*\
  !*** ./node_modules/bootstrap/dist/js/npm.js ***!
  \***********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
__webpack_require__(/*! ../../js/transition.js */ 13)
__webpack_require__(/*! ../../js/alert.js */ 14)
__webpack_require__(/*! ../../js/button.js */ 15)
__webpack_require__(/*! ../../js/carousel.js */ 16)
__webpack_require__(/*! ../../js/collapse.js */ 17)
__webpack_require__(/*! ../../js/dropdown.js */ 18)
__webpack_require__(/*! ../../js/modal.js */ 19)
__webpack_require__(/*! ../../js/tooltip.js */ 20)
__webpack_require__(/*! ../../js/popover.js */ 21)
__webpack_require__(/*! ../../js/scrollspy.js */ 22)
__webpack_require__(/*! ../../js/tab.js */ 23)
__webpack_require__(/*! ../../js/affix.js */ 24)

/***/ }),
/* 13 */
/*!*************************************************!*\
  !*** ./node_modules/bootstrap/js/transition.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: transition.js v3.4.0
 * https://getbootstrap.com/docs/3.4/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: https://modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // https://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 14 */
/*!********************************************!*\
  !*** ./node_modules/bootstrap/js/alert.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: alert.js v3.4.0
 * https://getbootstrap.com/docs/3.4/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.4.0'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    selector    = selector === '#' ? [] : selector
    var $parent = $(document).find(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 15 */
/*!*********************************************!*\
  !*** ./node_modules/bootstrap/js/button.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: button.js v3.4.0
 * https://getbootstrap.com/docs/3.4/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.4.0'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 16 */
/*!***********************************************!*\
  !*** ./node_modules/bootstrap/js/carousel.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: carousel.js v3.4.0
 * https://getbootstrap.com/docs/3.4/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.4.0'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      if (typeof $next === 'object' && $next.length) {
        $next[0].offsetWidth // force reflow
      }
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    if (href) {
      href = href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
    }

    var target  = $this.attr('data-target') || href
    var $target = $(document).find(target)

    if (!$target.hasClass('carousel')) return

    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 17 */
/*!***********************************************!*\
  !*** ./node_modules/bootstrap/js/collapse.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: collapse.js v3.4.0
 * https://getbootstrap.com/docs/3.4/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.4.0'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(document).find(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(document).find(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 18 */
/*!***********************************************!*\
  !*** ./node_modules/bootstrap/js/dropdown.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: dropdown.js v3.4.0
 * https://getbootstrap.com/docs/3.4/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.4.0'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(document).find(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 19 */
/*!********************************************!*\
  !*** ./node_modules/bootstrap/js/modal.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: modal.js v3.4.0
 * https://getbootstrap.com/docs/3.4/javascript/#modals
 * ========================================================================
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options = options
    this.$body = $(document.body)
    this.$element = $(element)
    this.$dialog = this.$element.find('.modal-dialog')
    this.$backdrop = null
    this.isShown = null
    this.originalBodyPad = null
    this.scrollbarWidth = 0
    this.ignoreBackdropClick = false
    this.fixedContent = '.navbar-fixed-top, .navbar-fixed-bottom'

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION = '3.4.0'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
          this.$element[0] !== e.target &&
          !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    var scrollbarWidth = this.scrollbarWidth
    if (this.bodyIsOverflowing) {
      this.$body.css('padding-right', bodyPad + scrollbarWidth)
      $(this.fixedContent).each(function (index, element) {
        var actualPadding = element.style.paddingRight
        var calculatedPadding = $(element).css('padding-right')
        $(element)
          .data('padding-right', actualPadding)
          .css('padding-right', parseFloat(calculatedPadding) + scrollbarWidth + 'px')
      })
    }
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
    $(this.fixedContent).each(function (index, element) {
      var padding = $(element).data('padding-right')
      $(element).removeData('padding-right')
      element.style.paddingRight = padding ? padding : ''
    })
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
    var href = $this.attr('href')
    var target = $this.attr('data-target') ||
      (href && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7

    var $target = $(document).find(target)
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 20 */
/*!**********************************************!*\
  !*** ./node_modules/bootstrap/js/tooltip.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: tooltip.js v3.4.0
 * https://getbootstrap.com/docs/3.4/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.4.0'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(document).find($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo($(document).find(this.options.container)) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 21 */
/*!**********************************************!*\
  !*** ./node_modules/bootstrap/js/popover.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: popover.js v3.4.0
 * https://getbootstrap.com/docs/3.4/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.4.0'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
        o.content.call($e[0]) :
        o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 22 */
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/scrollspy.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: scrollspy.js v3.4.0
 * https://getbootstrap.com/docs/3.4/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.4.0'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 23 */
/*!******************************************!*\
  !*** ./node_modules/bootstrap/js/tab.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: tab.js v3.4.0
 * https://getbootstrap.com/docs/3.4/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.4.0'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(document).find(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
        .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
        .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
          .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 24 */
/*!********************************************!*\
  !*** ./node_modules/bootstrap/js/affix.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: affix.js v3.4.0
 * https://getbootstrap.com/docs/3.4/javascript/#affix
 * ========================================================================
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    var target = this.options.target === Affix.DEFAULTS.target ? $(this.options.target) : $(document).find(this.options.target)

    this.$target = target
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.4.0'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 25 */
/*!*********************************************!*\
  !*** ./app/javascript/plugins/flatpickr.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flatpickr__ = __webpack_require__(/*! flatpickr */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flatpickr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flatpickr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flatpickr_dist_flatpickr_min_css__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flatpickr_dist_flatpickr_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_flatpickr_dist_flatpickr_min_css__);



__WEBPACK_IMPORTED_MODULE_0_flatpickr___default()(".datepicker", {});

function initFlatpickr() {
  __WEBPACK_IMPORTED_MODULE_0_flatpickr___default()(".datepicker", {});
}
window.initFlatpickr = initFlatpickr;

/***/ }),
/* 26 */
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* flatpickr v4.5.4, @license MIT */
(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.flatpickr = factory());
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var HOOKS = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange",
        "onPreCalendarPosition",
    ];
    var defaults = {
        _disable: [],
        _enable: [],
        allowInput: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" &&
            window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enable: [],
        enableSeconds: false,
        enableTime: false,
        errorHandler: function (err) {
            return typeof console !== "undefined" && console.warn(err);
        },
        getWeek: function (givenDate) {
            var date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return (1 +
                Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7));
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false
    };

    var english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year"
    };

    var pad = function (number) { return ("0" + number).slice(-2); };
    var int = function (bool) { return (bool === true ? 1 : 0); };
    /* istanbul ignore next */
    function debounce(func, wait, immediate) {
        if (immediate === void 0) { immediate = false; }
        var timeout;
        return function () {
            var context = this, args = arguments;
            timeout !== null && clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            }, wait);
            if (immediate && !timeout)
                func.apply(context, args);
        };
    }
    var arrayify = function (obj) {
        return obj instanceof Array ? obj : [obj];
    };

    function toggleClass(elem, className, bool) {
        if (bool === true)
            return elem.classList.add(className);
        elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined)
            e.textContent = content;
        return e;
    }
    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    function findParent(node, condition) {
        if (condition(node))
            return node;
        else if (node.parentNode)
            return findParent(node.parentNode, condition);
        return undefined; // nothing found
    }
    function createNumberInput(inputClassName, opts) {
        var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
        numInput.type = "text";
        numInput.pattern = "\\d*";
        if (opts !== undefined)
            for (var key in opts)
                numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
    }
    function getEventTarget(event) {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    }

    var do_nothing = function () { return undefined; };
    var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
    var revFormat = {
        D: do_nothing,
        F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        H: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        J: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        K: function (dateObj, amPM, locale) {
            dateObj.setHours((dateObj.getHours() % 12) +
                12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
        W: function (dateObj, weekNum) {
            var weekNumber = parseInt(weekNum);
            return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
        },
        Y: function (dateObj, year) {
            dateObj.setFullYear(parseFloat(year));
        },
        Z: function (_, ISODate) { return new Date(ISODate); },
        d: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        h: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        i: function (dateObj, minutes) {
            dateObj.setMinutes(parseFloat(minutes));
        },
        j: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        l: do_nothing,
        m: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        n: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        s: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        u: function (_, unixMillSeconds) {
            return new Date(parseFloat(unixMillSeconds));
        },
        w: do_nothing,
        y: function (dateObj, year) {
            dateObj.setFullYear(2000 + parseFloat(year));
        }
    };
    var tokenRegex = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    };
    var formats = {
        // get the date in UTC
        Z: function (date) { return date.toISOString(); },
        // weekday name, short, e.g. Thu
        D: function (date, locale, options) {
            return locale.weekdays.shorthand[formats.w(date, locale, options)];
        },
        // full month name e.g. January
        F: function (date, locale, options) {
            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
        },
        // padded hour 1-12
        G: function (date, locale, options) {
            return pad(formats.h(date, locale, options));
        },
        // hours with leading zero e.g. 03
        H: function (date) { return pad(date.getHours()); },
        // day (1-30) with ordinal suffix e.g. 1st, 2nd
        J: function (date, locale) {
            return locale.ordinal !== undefined
                ? date.getDate() + locale.ordinal(date.getDate())
                : date.getDate();
        },
        // AM/PM
        K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
        // shorthand month e.g. Jan, Sep, Oct, etc
        M: function (date, locale) {
            return monthToStr(date.getMonth(), true, locale);
        },
        // seconds 00-59
        S: function (date) { return pad(date.getSeconds()); },
        // unix timestamp
        U: function (date) { return date.getTime() / 1000; },
        W: function (date, _, options) {
            return options.getWeek(date);
        },
        // full year e.g. 2016
        Y: function (date) { return date.getFullYear(); },
        // day in month, padded (01-30)
        d: function (date) { return pad(date.getDate()); },
        // hour from 1-12 (am/pm)
        h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
        // minutes, padded with leading zero e.g. 09
        i: function (date) { return pad(date.getMinutes()); },
        // day in month (1-30)
        j: function (date) { return date.getDate(); },
        // weekday name, full, e.g. Thursday
        l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
        },
        // padded month number (01-12)
        m: function (date) { return pad(date.getMonth() + 1); },
        // the month number (1-12)
        n: function (date) { return date.getMonth() + 1; },
        // seconds 0-59
        s: function (date) { return date.getSeconds(); },
        // Unix Milliseconds
        u: function (date) { return date.getTime(); },
        // number of the day of the week
        w: function (date) { return date.getDay(); },
        // last two digits of year e.g. 16 for 2016
        y: function (date) { return String(date.getFullYear()).substring(2); }
    };

    var createDateFormatter = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (dateObj, frmt, overrideLocale) {
            var locale = overrideLocale || l10n;
            if (config.formatDate !== undefined) {
                return config.formatDate(dateObj, frmt, locale);
            }
            return frmt
                .split("")
                .map(function (c, i, arr) {
                return formats[c] && arr[i - 1] !== "\\"
                    ? formats[c](dateObj, locale, config)
                    : c !== "\\"
                        ? c
                        : "";
            })
                .join("");
        };
    };
    var createDateParser = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (date, givenFormat, timeless, customLocale) {
            if (date !== 0 && !date)
                return undefined;
            var locale = customLocale || l10n;
            var parsedDate;
            var date_orig = date;
            if (date instanceof Date)
                parsedDate = new Date(date.getTime());
            else if (typeof date !== "string" &&
                date.toFixed !== undefined // timestamp
            )
                // create a copy
                parsedDate = new Date(date);
            else if (typeof date === "string") {
                // date string
                var format = givenFormat || (config || defaults).dateFormat;
                var datestr = String(date).trim();
                if (datestr === "today") {
                    parsedDate = new Date();
                    timeless = true;
                }
                else if (/Z$/.test(datestr) ||
                    /GMT$/.test(datestr) // datestrings w/ timezone
                )
                    parsedDate = new Date(date);
                else if (config && config.parseDate)
                    parsedDate = config.parseDate(date, format);
                else {
                    parsedDate =
                        !config || !config.noCalendar
                            ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                            : new Date(new Date().setHours(0, 0, 0, 0));
                    var matched = void 0, ops = [];
                    for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                        var token_1 = format[i];
                        var isBackSlash = token_1 === "\\";
                        var escaped = format[i - 1] === "\\" || isBackSlash;
                        if (tokenRegex[token_1] && !escaped) {
                            regexStr += tokenRegex[token_1];
                            var match = new RegExp(regexStr).exec(date);
                            if (match && (matched = true)) {
                                ops[token_1 !== "Y" ? "push" : "unshift"]({
                                    fn: revFormat[token_1],
                                    val: match[++matchIndex]
                                });
                            }
                        }
                        else if (!isBackSlash)
                            regexStr += "."; // don't really care
                        ops.forEach(function (_a) {
                            var fn = _a.fn, val = _a.val;
                            return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                        });
                    }
                    parsedDate = matched ? parsedDate : undefined;
                }
            }
            /* istanbul ignore next */
            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                config.errorHandler(new Error("Invalid date provided: " + date_orig));
                return undefined;
            }
            if (timeless === true)
                parsedDate.setHours(0, 0, 0, 0);
            return parsedDate;
        };
    };
    /**
     * Compute the difference in dates, measured in ms
     */
    function compareDates(date1, date2, timeless) {
        if (timeless === void 0) { timeless = true; }
        if (timeless !== false) {
            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                new Date(date2.getTime()).setHours(0, 0, 0, 0));
        }
        return date1.getTime() - date2.getTime();
    }
    var isBetween = function (ts, ts1, ts2) {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
        DAY: 86400000
    };

    if (typeof Object.assign !== "function") {
        Object.assign = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!target) {
                throw TypeError("Cannot convert undefined or null to object");
            }
            var _loop_1 = function (source) {
                if (source) {
                    Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
                }
            };
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var source = args_1[_a];
                _loop_1(source);
            }
            return target;
        };
    }

    var DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
        var self = {
            config: __assign({}, flatpickr.defaultConfig),
            l10n: english
        };
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        self._handlers = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self._createElement = createElement;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;
        function setupHelperFunctions() {
            self.utils = {
                getDaysInMonth: function (month, yr) {
                    if (month === void 0) { month = self.currentMonth; }
                    if (yr === void 0) { yr = self.currentYear; }
                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                        return 29;
                    return self.l10n.daysInMonth[month];
                }
            };
        }
        function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile)
                build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
                if (self.config.enableTime) {
                    setHoursFromDate(self.config.noCalendar
                        ? self.latestSelectedDateObj || self.config.minDate
                        : undefined);
                }
                updateValue(false);
            }
            setCalendarWidth();
            self.showTimeInput =
                self.selectedDates.length > 0 || self.config.noCalendar;
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            /* TODO: investigate this further
        
              Currently, there is weird positioning behavior in safari causing pages
              to scroll up. https://github.com/chmln/flatpickr/issues/563
        
              However, most browsers are not Safari and positioning is expensive when used
              in scale. https://github.com/chmln/flatpickr/issues/1096
            */
            if (!self.isMobile && isSafari) {
                positionCalendar();
            }
            triggerEvent("onReady");
        }
        function bindToInstance(fn) {
            return fn.bind(self);
        }
        function setCalendarWidth() {
            var config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1)
                return;
            else if (config.noCalendar !== true) {
                window.requestAnimationFrame(function () {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== undefined) {
                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width =
                            daysWidth +
                                (self.weekWrapper !== undefined
                                    ? self.weekWrapper.offsetWidth
                                    : 0) +
                                "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                });
            }
        }
        /**
         * The handler for all events targeting the time inputs
         */
        function updateTime(e) {
            if (self.selectedDates.length === 0)
                return;
            if (e !== undefined && e.type !== "blur") {
                timeWrapper(e);
            }
            var prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
                self._debouncedChange();
            }
        }
        function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
        }
        function military2ampm(hour) {
            switch (hour % 24) {
                case 0:
                case 12:
                    return 12;
                default:
                    return hour % 12;
            }
        }
        /**
         * Syncs the selected date object time with user's time input
         */
        function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined)
                return;
            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                ? (parseInt(self.secondElement.value, 10) || 0) % 60
                : 0;
            if (self.amPM !== undefined) {
                hours = ampm2military(hours, self.amPM.textContent);
            }
            var limitMinHours = self.config.minTime !== undefined ||
                (self.config.minDate &&
                    self.minDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                        0);
            var limitMaxHours = self.config.maxTime !== undefined ||
                (self.config.maxDate &&
                    self.maxDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                        0);
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours())
                    minutes = Math.max(minutes, minTime.getMinutes());
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Syncs time input values with a date
         */
        function setHoursFromDate(dateObj) {
            var date = dateObj || self.latestSelectedDateObj;
            if (date)
                setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
        function setDefaultHours() {
            var hours = self.config.defaultHour;
            var minutes = self.config.defaultMinute;
            var seconds = self.config.defaultSeconds;
            if (self.config.minDate !== undefined) {
                var min_hr = self.config.minDate.getHours();
                var min_minutes = self.config.minDate.getMinutes();
                hours = Math.max(hours, min_hr);
                if (hours === min_hr)
                    minutes = Math.max(min_minutes, minutes);
                if (hours === min_hr && minutes === min_minutes)
                    seconds = self.config.minDate.getSeconds();
            }
            if (self.config.maxDate !== undefined) {
                var max_hr = self.config.maxDate.getHours();
                var max_minutes = self.config.maxDate.getMinutes();
                hours = Math.min(hours, max_hr);
                if (hours === max_hr)
                    minutes = Math.min(max_minutes, minutes);
                if (hours === max_hr && minutes === max_minutes)
                    seconds = self.config.maxDate.getSeconds();
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Sets the hours, minutes, and optionally seconds
         * of the latest selected date object and the
         * corresponding time inputs
         * @param {Number} hours the hour. whether its military
         *                 or am-pm gets inferred from config
         * @param {Number} minutes the minutes
         * @param {Number} seconds the seconds (optional)
         */
        function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile)
                return;
            self.hourElement.value = pad(!self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
                : hours);
            self.minuteElement.value = pad(minutes);
            if (self.amPM !== undefined)
                self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
            if (self.secondElement !== undefined)
                self.secondElement.value = pad(seconds);
        }
        /**
         * Handles the year input and incrementing events
         * @param {Event} event the keyup or increment event
         */
        function onYearInput(event) {
            var year = parseInt(event.target.value) + (event.delta || 0);
            if (year / 1000 > 1 ||
                (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                changeYear(year);
            }
        }
        /**
         * Essentially addEventListener + tracking
         * @param {Element} element the element to addEventListener to
         * @param {String} event the event name
         * @param {Function} handler the event handler
         */
        function bind(element, event, handler, options) {
            if (event instanceof Array)
                return event.forEach(function (ev) { return bind(element, ev, handler, options); });
            if (element instanceof Array)
                return element.forEach(function (el) { return bind(el, event, handler, options); });
            element.addEventListener(event, handler, options);
            self._handlers.push({
                element: element,
                event: event,
                handler: handler,
                options: options
            });
        }
        /**
         * A mousedown handler which mimics click.
         * Minimizes latency, since we don't need to wait for mouseup in most cases.
         * Also, avoids handling right clicks.
         *
         * @param {Function} handler the event handler
         */
        function onClick(handler) {
            return function (evt) {
                evt.which === 1 && handler(evt);
            };
        }
        function triggerChange() {
            triggerEvent("onChange");
        }
        /**
         * Adds all the necessary event listeners
         */
        function bindEvents() {
            if (self.config.wrap) {
                ["open", "close", "toggle", "clear"].forEach(function (evt) {
                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                        return bind(el, "click", self[evt]);
                    });
                });
            }
            if (self.isMobile) {
                setupMobile();
                return;
            }
            var debouncedResize = debounce(onResize, 50);
            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                bind(self.daysContainer, "mouseover", function (e) {
                    if (self.config.mode === "range")
                        onMouseOver(e.target);
                });
            bind(window.document.body, "keydown", onKeyDown);
            if (!self.config.static)
                bind(self._input, "keydown", onKeyDown);
            if (!self.config.inline && !self.config.static)
                bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined)
                bind(window.document, "click", documentClick);
            else
                bind(window.document, "mousedown", onClick(documentClick));
            bind(window.document, "focus", documentClick, { capture: true });
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "mousedown", onClick(self.open));
            }
            if (self.daysContainer !== undefined) {
                bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
                bind(self.monthNav, ["keyup", "increment"], onYearInput);
                bind(self.daysContainer, "mousedown", onClick(selectDate));
            }
            if (self.timeContainer !== undefined &&
                self.minuteElement !== undefined &&
                self.hourElement !== undefined) {
                var selText = function (e) {
                    return e.target.select();
                };
                bind(self.timeContainer, ["increment"], updateTime);
                bind(self.timeContainer, "blur", updateTime, { capture: true });
                bind(self.timeContainer, "mousedown", onClick(timeIncrement));
                bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                if (self.secondElement !== undefined)
                    bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
                if (self.amPM !== undefined) {
                    bind(self.amPM, "mousedown", onClick(function (e) {
                        updateTime(e);
                        triggerChange();
                    }));
                }
            }
        }
        /**
         * Set the calendar view to a particular date.
         * @param {Date} jumpDate the date to set the view to
         */
        function jumpToDate(jumpDate) {
            var jumpTo = jumpDate !== undefined
                ? self.parseDate(jumpDate)
                : self.latestSelectedDateObj ||
                    (self.config.minDate && self.config.minDate > self.now
                        ? self.config.minDate
                        : self.config.maxDate && self.config.maxDate < self.now
                            ? self.config.maxDate
                            : self.now);
            try {
                if (jumpTo !== undefined) {
                    self.currentYear = jumpTo.getFullYear();
                    self.currentMonth = jumpTo.getMonth();
                }
            }
            catch (e) {
                /* istanbul ignore next */
                e.message = "Invalid date supplied: " + jumpTo;
                self.config.errorHandler(e);
            }
            self.redraw();
        }
        /**
         * The up/down arrow handler for time inputs
         * @param {Event} e the click event
         */
        function timeIncrement(e) {
            if (~e.target.className.indexOf("arrow"))
                incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
        }
        /**
         * Increments/decrements the value of input associ-
         * ated with the up/down arrow by dispatching an
         * "increment" event on the input.
         *
         * @param {Event} e the click event
         * @param {Number} delta the diff (usually 1 or -1)
         * @param {Element} inputElem the input element
         */
        function incrementNumInput(e, delta, inputElem) {
            var target = e && e.target;
            var input = inputElem ||
                (target && target.parentNode && target.parentNode.firstChild);
            var event = createEvent("increment");
            event.delta = delta;
            input && input.dispatchEvent(event);
        }
        function build() {
            var fragment = window.document.createDocumentFragment();
            self.calendarContainer = createElement("div", "flatpickr-calendar");
            self.calendarContainer.tabIndex = -1;
            if (!self.config.noCalendar) {
                fragment.appendChild(buildMonthNav());
                self.innerContainer = createElement("div", "flatpickr-innerContainer");
                if (self.config.weekNumbers) {
                    var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                    self.innerContainer.appendChild(weekWrapper);
                    self.weekNumbers = weekNumbers;
                    self.weekWrapper = weekWrapper;
                }
                self.rContainer = createElement("div", "flatpickr-rContainer");
                self.rContainer.appendChild(buildWeekdays());
                if (!self.daysContainer) {
                    self.daysContainer = createElement("div", "flatpickr-days");
                    self.daysContainer.tabIndex = -1;
                }
                buildDays();
                self.rContainer.appendChild(self.daysContainer);
                self.innerContainer.appendChild(self.rContainer);
                fragment.appendChild(self.innerContainer);
            }
            if (self.config.enableTime) {
                fragment.appendChild(buildTime());
            }
            toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
            toggleClass(self.calendarContainer, "animate", self.config.animate === true);
            toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
            self.calendarContainer.appendChild(fragment);
            var customAppend = self.config.appendTo !== undefined &&
                self.config.appendTo.nodeType !== undefined;
            if (self.config.inline || self.config.static) {
                self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                if (self.config.inline) {
                    if (!customAppend && self.element.parentNode)
                        self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                    else if (self.config.appendTo !== undefined)
                        self.config.appendTo.appendChild(self.calendarContainer);
                }
                if (self.config.static) {
                    var wrapper = createElement("div", "flatpickr-wrapper");
                    if (self.element.parentNode)
                        self.element.parentNode.insertBefore(wrapper, self.element);
                    wrapper.appendChild(self.element);
                    if (self.altInput)
                        wrapper.appendChild(self.altInput);
                    wrapper.appendChild(self.calendarContainer);
                }
            }
            if (!self.config.static && !self.config.inline)
                (self.config.appendTo !== undefined
                    ? self.config.appendTo
                    : window.document.body).appendChild(self.calendarContainer);
        }
        function createDay(className, date, dayNumber, i) {
            var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
            if (className.indexOf("hidden") === -1 &&
                compareDates(date, self.now) === 0) {
                self.todayDateElem = dayElement;
                dayElement.classList.add("today");
                dayElement.setAttribute("aria-current", "date");
            }
            if (dateIsEnabled) {
                dayElement.tabIndex = -1;
                if (isDateSelected(date)) {
                    dayElement.classList.add("selected");
                    self.selectedDateElem = dayElement;
                    if (self.config.mode === "range") {
                        toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                            compareDates(date, self.selectedDates[0], true) === 0);
                        toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                            compareDates(date, self.selectedDates[1], true) === 0);
                        if (className === "nextMonthDay")
                            dayElement.classList.add("inRange");
                    }
                }
            }
            else {
                dayElement.classList.add("disabled");
            }
            if (self.config.mode === "range") {
                if (isDateInRange(date) && !isDateSelected(date))
                    dayElement.classList.add("inRange");
            }
            if (self.weekNumbers &&
                self.config.showMonths === 1 &&
                className !== "prevMonthDay" &&
                dayNumber % 7 === 1) {
                self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
            }
            triggerEvent("onDayCreate", dayElement);
            return dayElement;
        }
        function focusOnDayElem(targetNode) {
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        }
        function getFirstAvailableDay(delta) {
            var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            for (var m = startMonth; m != endMonth; m += delta) {
                var month = self.daysContainer.children[m];
                var startIndex = delta > 0 ? 0 : month.children.length - 1;
                var endIndex = delta > 0 ? month.children.length : -1;
                for (var i = startIndex; i != endIndex; i += delta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                        return c;
                }
            }
            return undefined;
        }
        function getNextAvailableDay(current, delta) {
            var givenMonth = current.className.indexOf("Month") === -1
                ? current.dateObj.getMonth()
                : self.currentMonth;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            var loopDelta = delta > 0 ? 1 : -1;
            for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                var month = self.daysContainer.children[m];
                var startIndex = givenMonth - self.currentMonth === m
                    ? current.$i + delta
                    : delta < 0
                        ? month.children.length - 1
                        : 0;
                var numMonthDays = month.children.length;
                for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 &&
                        isEnabled(c.dateObj) &&
                        Math.abs(current.$i - i) >= Math.abs(delta))
                        return focusOnDayElem(c);
                }
            }
            self.changeMonth(loopDelta);
            focusOnDay(getFirstAvailableDay(loopDelta), 0);
            return undefined;
        }
        function focusOnDay(current, offset) {
            var dayFocused = isInView(document.activeElement || document.body);
            var startElem = current !== undefined
                ? current
                : dayFocused
                    ? document.activeElement
                    : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                        ? self.selectedDateElem
                        : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                            ? self.todayDateElem
                            : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined)
                return self._input.focus();
            if (!dayFocused)
                return focusOnDayElem(startElem);
            getNextAvailableDay(startElem, offset);
        }
        function buildMonthDays(year, month) {
            var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
            var daysInMonth = self.utils.getDaysInMonth(month), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
            var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
            // prepend days from the ending of previous month
            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
            }
            // Start at 1 since there is no 0th day
            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
            }
            // append days from the next month
            for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
            }
            //updateNavigationCurrentMonth();
            var dayContainer = createElement("div", "dayContainer");
            dayContainer.appendChild(days);
            return dayContainer;
        }
        function buildDays() {
            if (self.daysContainer === undefined) {
                return;
            }
            clearNode(self.daysContainer);
            // TODO: week numbers for each month
            if (self.weekNumbers)
                clearNode(self.weekNumbers);
            var frag = document.createDocumentFragment();
            for (var i = 0; i < self.config.showMonths; i++) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
            }
            self.daysContainer.appendChild(frag);
            self.days = self.daysContainer.firstChild;
            if (self.config.mode === "range" && self.selectedDates.length === 1) {
                onMouseOver();
            }
        }
        function buildMonth() {
            var container = createElement("div", "flatpickr-month");
            var monthNavFragment = window.document.createDocumentFragment();
            var monthElement = createElement("span", "cur-month");
            var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
            var yearElement = yearInput.getElementsByTagName("input")[0];
            yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
            if (self.config.minDate)
                yearElement.setAttribute("data-min", self.config.minDate.getFullYear().toString());
            if (self.config.maxDate) {
                yearElement.setAttribute("data-max", self.config.maxDate.getFullYear().toString());
                yearElement.disabled =
                    !!self.config.minDate &&
                        self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
            }
            var currentMonth = createElement("div", "flatpickr-current-month");
            currentMonth.appendChild(monthElement);
            currentMonth.appendChild(yearInput);
            monthNavFragment.appendChild(currentMonth);
            container.appendChild(monthNavFragment);
            return {
                container: container,
                yearElement: yearElement,
                monthElement: monthElement
            };
        }
        function buildMonths() {
            clearNode(self.monthNav);
            self.monthNav.appendChild(self.prevMonthNav);
            if (self.config.showMonths) {
                self.yearElements = [];
                self.monthElements = [];
            }
            for (var m = self.config.showMonths; m--;) {
                var month = buildMonth();
                self.yearElements.push(month.yearElement);
                self.monthElements.push(month.monthElement);
                self.monthNav.appendChild(month.container);
            }
            self.monthNav.appendChild(self.nextMonthNav);
        }
        function buildMonthNav() {
            self.monthNav = createElement("div", "flatpickr-months");
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = createElement("span", "flatpickr-prev-month");
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = createElement("span", "flatpickr-next-month");
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, "_hidePrevMonthArrow", {
                get: function () { return self.__hidePrevMonthArrow; },
                set: function (bool) {
                    if (self.__hidePrevMonthArrow !== bool) {
                        toggleClass(self.prevMonthNav, "disabled", bool);
                        self.__hidePrevMonthArrow = bool;
                    }
                }
            });
            Object.defineProperty(self, "_hideNextMonthArrow", {
                get: function () { return self.__hideNextMonthArrow; },
                set: function (bool) {
                    if (self.__hideNextMonthArrow !== bool) {
                        toggleClass(self.nextMonthNav, "disabled", bool);
                        self.__hideNextMonthArrow = bool;
                    }
                }
            });
            self.currentYearElement = self.yearElements[0];
            updateNavigationCurrentMonth();
            return self.monthNav;
        }
        function buildTime() {
            self.calendarContainer.classList.add("hasTime");
            if (self.config.noCalendar)
                self.calendarContainer.classList.add("noCalendar");
            self.timeContainer = createElement("div", "flatpickr-time");
            self.timeContainer.tabIndex = -1;
            var separator = createElement("span", "flatpickr-time-separator", ":");
            var hourInput = createNumberInput("flatpickr-hour");
            self.hourElement = hourInput.getElementsByTagName("input")[0];
            var minuteInput = createNumberInput("flatpickr-minute");
            self.minuteElement = minuteInput.getElementsByTagName("input")[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getHours()
                : self.config.time_24hr
                    ? self.config.defaultHour
                    : military2ampm(self.config.defaultHour));
            self.minuteElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getMinutes()
                : self.config.defaultMinute);
            self.hourElement.setAttribute("data-step", self.config.hourIncrement.toString());
            self.minuteElement.setAttribute("data-step", self.config.minuteIncrement.toString());
            self.hourElement.setAttribute("data-min", self.config.time_24hr ? "0" : "1");
            self.hourElement.setAttribute("data-max", self.config.time_24hr ? "23" : "12");
            self.minuteElement.setAttribute("data-min", "0");
            self.minuteElement.setAttribute("data-max", "59");
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr)
                self.timeContainer.classList.add("time24hr");
            if (self.config.enableSeconds) {
                self.timeContainer.classList.add("hasSeconds");
                var secondInput = createNumberInput("flatpickr-second");
                self.secondElement = secondInput.getElementsByTagName("input")[0];
                self.secondElement.value = pad(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getSeconds()
                    : self.config.defaultSeconds);
                self.secondElement.setAttribute("data-step", self.minuteElement.getAttribute("data-step"));
                self.secondElement.setAttribute("data-min", self.minuteElement.getAttribute("data-min"));
                self.secondElement.setAttribute("data-max", self.minuteElement.getAttribute("data-max"));
                self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                self.timeContainer.appendChild(secondInput);
            }
            if (!self.config.time_24hr) {
                // add self.amPM if appropriate
                self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                    ? self.hourElement.value
                    : self.config.defaultHour) > 11)]);
                self.amPM.title = self.l10n.toggleTitle;
                self.amPM.tabIndex = -1;
                self.timeContainer.appendChild(self.amPM);
            }
            return self.timeContainer;
        }
        function buildWeekdays() {
            if (!self.weekdayContainer)
                self.weekdayContainer = createElement("div", "flatpickr-weekdays");
            else
                clearNode(self.weekdayContainer);
            for (var i = self.config.showMonths; i--;) {
                var container = createElement("div", "flatpickr-weekdaycontainer");
                self.weekdayContainer.appendChild(container);
            }
            updateWeekdays();
            return self.weekdayContainer;
        }
        function updateWeekdays() {
            var firstDayOfWeek = self.l10n.firstDayOfWeek;
            var weekdays = self.l10n.weekdays.shorthand.slice();
            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
            }
            for (var i = self.config.showMonths; i--;) {
                self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
            }
        }
        /* istanbul ignore next */
        function buildWeeks() {
            self.calendarContainer.classList.add("hasWeeks");
            var weekWrapper = createElement("div", "flatpickr-weekwrapper");
            weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
            var weekNumbers = createElement("div", "flatpickr-weeks");
            weekWrapper.appendChild(weekNumbers);
            return {
                weekWrapper: weekWrapper,
                weekNumbers: weekNumbers
            };
        }
        function changeMonth(value, is_offset) {
            if (is_offset === void 0) { is_offset = true; }
            var delta = is_offset ? value : value - self.currentMonth;
            if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                (delta > 0 && self._hideNextMonthArrow === true))
                return;
            self.currentMonth += delta;
            if (self.currentMonth < 0 || self.currentMonth > 11) {
                self.currentYear += self.currentMonth > 11 ? 1 : -1;
                self.currentMonth = (self.currentMonth + 12) % 12;
                triggerEvent("onYearChange");
            }
            buildDays();
            triggerEvent("onMonthChange");
            updateNavigationCurrentMonth();
        }
        function clear(triggerChangeEvent) {
            if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
            self.input.value = "";
            if (self.altInput !== undefined)
                self.altInput.value = "";
            if (self.mobileInput !== undefined)
                self.mobileInput.value = "";
            self.selectedDates = [];
            self.latestSelectedDateObj = undefined;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            self.showTimeInput = false;
            if (self.config.enableTime === true) {
                setDefaultHours();
            }
            self.redraw();
            if (triggerChangeEvent)
                // triggerChangeEvent is true (default) or an Event
                triggerEvent("onChange");
        }
        function close() {
            self.isOpen = false;
            if (!self.isMobile) {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.classList.remove("open");
                }
                if (self._input !== undefined) {
                    self._input.classList.remove("active");
                }
            }
            triggerEvent("onClose");
        }
        function destroy() {
            if (self.config !== undefined)
                triggerEvent("onDestroy");
            for (var i = self._handlers.length; i--;) {
                var h = self._handlers[i];
                h.element.removeEventListener(h.event, h.handler, h.options);
            }
            self._handlers = [];
            if (self.mobileInput) {
                if (self.mobileInput.parentNode)
                    self.mobileInput.parentNode.removeChild(self.mobileInput);
                self.mobileInput = undefined;
            }
            else if (self.calendarContainer && self.calendarContainer.parentNode) {
                if (self.config.static && self.calendarContainer.parentNode) {
                    var wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild)
                            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                }
                else
                    self.calendarContainer.parentNode.removeChild(self.calendarContainer);
            }
            if (self.altInput) {
                self.input.type = "text";
                if (self.altInput.parentNode)
                    self.altInput.parentNode.removeChild(self.altInput);
                delete self.altInput;
            }
            if (self.input) {
                self.input.type = self.input._type;
                self.input.classList.remove("flatpickr-input");
                self.input.removeAttribute("readonly");
                self.input.value = "";
            }
            [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config",
            ].forEach(function (k) {
                try {
                    delete self[k];
                }
                catch (_) { }
            });
        }
        function isCalendarElem(elem) {
            if (self.config.appendTo && self.config.appendTo.contains(elem))
                return true;
            return self.calendarContainer.contains(elem);
        }
        function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
                var eventTarget_1 = getEventTarget(e);
                var isCalendarElement = isCalendarElem(eventTarget_1);
                var isInput = eventTarget_1 === self.input ||
                    eventTarget_1 === self.altInput ||
                    self.element.contains(eventTarget_1) ||
                    // web components
                    // e.path is not present in all browsers. circumventing typechecks
                    (e.path &&
                        e.path.indexOf &&
                        (~e.path.indexOf(self.input) ||
                            ~e.path.indexOf(self.altInput)));
                var lostFocus = e.type === "blur"
                    ? isInput &&
                        e.relatedTarget &&
                        !isCalendarElem(e.relatedTarget)
                    : !isInput &&
                        !isCalendarElement &&
                        !isCalendarElem(e.relatedTarget);
                var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                    return elem.contains(eventTarget_1);
                });
                if (lostFocus && isIgnored) {
                    updateTime();
                    self.close();
                    if (self.config.mode === "range" && self.selectedDates.length === 1) {
                        self.clear(false);
                        self.redraw();
                    }
                }
            }
        }
        function changeYear(newYear) {
            if (!newYear ||
                (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                return;
            var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
            self.currentYear = newYearNum || self.currentYear;
            if (self.config.maxDate &&
                self.currentYear === self.config.maxDate.getFullYear()) {
                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            }
            else if (self.config.minDate &&
                self.currentYear === self.config.minDate.getFullYear()) {
                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }
            if (isNewYear) {
                self.redraw();
                triggerEvent("onYearChange");
            }
        }
        function isEnabled(date, timeless) {
            if (timeless === void 0) { timeless = true; }
            var dateToCheck = self.parseDate(date, undefined, timeless); // timeless
            if ((self.config.minDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                (self.config.maxDate &&
                    dateToCheck &&
                    compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                return false;
            if (self.config.enable.length === 0 && self.config.disable.length === 0)
                return true;
            if (dateToCheck === undefined)
                return false;
            var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
            for (var i = 0, d = void 0; i < array.length; i++) {
                d = array[i];
                if (typeof d === "function" &&
                    d(dateToCheck) // disabled by function
                )
                    return bool;
                else if (d instanceof Date &&
                    dateToCheck !== undefined &&
                    d.getTime() === dateToCheck.getTime())
                    // disabled by date
                    return bool;
                else if (typeof d === "string" && dateToCheck !== undefined) {
                    // disabled by date string
                    var parsed = self.parseDate(d, undefined, true);
                    return parsed && parsed.getTime() === dateToCheck.getTime()
                        ? bool
                        : !bool;
                }
                else if (
                // disabled by range
                typeof d === "object" &&
                    dateToCheck !== undefined &&
                    d.from &&
                    d.to &&
                    dateToCheck.getTime() >= d.from.getTime() &&
                    dateToCheck.getTime() <= d.to.getTime())
                    return bool;
            }
            return !bool;
        }
        function isInView(elem) {
            if (self.daysContainer !== undefined)
                return (elem.className.indexOf("hidden") === -1 &&
                    self.daysContainer.contains(elem));
            return false;
        }
        function onKeyDown(e) {
            // e.key                      e.keyCode
            // "Backspace"                        8
            // "Tab"                              9
            // "Enter"                           13
            // "Escape"     (IE "Esc")           27
            // "ArrowLeft"  (IE "Left")          37
            // "ArrowUp"    (IE "Up")            38
            // "ArrowRight" (IE "Right")         39
            // "ArrowDown"  (IE "Down")          40
            // "Delete"     (IE "Del")           46
            var isInput = e.target === self._input;
            var allowInput = self.config.allowInput;
            var allowKeydown = self.isOpen && (!allowInput || !isInput);
            var allowInlineKeydown = self.config.inline && isInput && !allowInput;
            if (e.keyCode === 13 && isInput) {
                if (allowInput) {
                    self.setDate(self._input.value, true, e.target === self.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                    return e.target.blur();
                }
                else
                    self.open();
            }
            else if (isCalendarElem(e.target) ||
                allowKeydown ||
                allowInlineKeydown) {
                var isTimeObj = !!self.timeContainer &&
                    self.timeContainer.contains(e.target);
                switch (e.keyCode) {
                    case 13:
                        if (isTimeObj)
                            updateTime();
                        else
                            selectDate(e);
                        break;
                    case 27: // escape
                        e.preventDefault();
                        focusAndClose();
                        break;
                    case 8:
                    case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;
                    case 37:
                    case 39:
                        if (!isTimeObj) {
                            e.preventDefault();
                            if (self.daysContainer !== undefined &&
                                (allowInput === false ||
                                    (document.activeElement && isInView(document.activeElement)))) {
                                var delta_1 = e.keyCode === 39 ? 1 : -1;
                                if (!e.ctrlKey)
                                    focusOnDay(undefined, delta_1);
                                else {
                                    e.stopPropagation();
                                    changeMonth(delta_1);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        }
                        else if (self.hourElement)
                            self.hourElement.focus();
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var delta = e.keyCode === 40 ? 1 : -1;
                        if ((self.daysContainer && e.target.$i !== undefined) ||
                            e.target === self.input) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                            else if (!isTimeObj)
                                focusOnDay(undefined, delta * 7);
                        }
                        else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement)
                                self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;
                    case 9:
                        var childElementCount = self.calendarContainer.childElementCount;
                        var expectedChildElementCount = 0;
                        if (self.config.enableTime)
                            expectedChildElementCount += 1;
                        if (!self.config.noCalendar)
                            expectedChildElementCount += 2;
                        if (isTimeObj) {
                            var elems = [
                                self.hourElement,
                                self.minuteElement,
                                self.secondElement,
                                self.amPM,
                            ].filter(function (x) { return x; });
                            var i = elems.indexOf(e.target);
                            if (i !== -1) {
                                var target = elems[i + (e.shiftKey ? -1 : 1)];
                                if (target !== undefined) {
                                    e.preventDefault();
                                    target.focus();
                                }
                                else if (childElementCount <= expectedChildElementCount) {
                                    self.element.focus();
                                }
                            }
                            break;
                        }
                        if (childElementCount <= expectedChildElementCount) {
                            self.element.focus();
                        }
                        break;
                    default:
                        break;
                }
            }
            if (self.amPM !== undefined && e.target === self.amPM) {
                switch (e.key) {
                    case self.l10n.amPM[0].charAt(0):
                    case self.l10n.amPM[0].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[0];
                        setHoursFromInputs();
                        updateValue();
                        break;
                    case self.l10n.amPM[1].charAt(0):
                    case self.l10n.amPM[1].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[1];
                        setHoursFromInputs();
                        updateValue();
                        break;
                }
            }
            triggerEvent("onKeyDown", e);
        }
        function onMouseOver(elem) {
            if (self.selectedDates.length !== 1 ||
                (elem &&
                    (!elem.classList.contains("flatpickr-day") ||
                        elem.classList.contains("disabled"))))
                return;
            var hoverDate = elem
                ? elem.dateObj.getTime()
                : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime()), lastDate = self.daysContainer.lastChild
                .lastChild.dateObj.getTime();
            var containsDisabled = false;
            var minRange = 0, maxRange = 0;
            for (var t = rangeStartDate; t < lastDate; t += duration.DAY) {
                if (!isEnabled(new Date(t), true)) {
                    containsDisabled =
                        containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                    if (t < initialDate && (!minRange || t > minRange))
                        minRange = t;
                    else if (t > initialDate && (!maxRange || t < maxRange))
                        maxRange = t;
                }
            }
            for (var m = 0; m < self.config.showMonths; m++) {
                var month = self.daysContainer.children[m];
                var prevMonth = self.daysContainer.children[m - 1];
                var _loop_1 = function (i, l) {
                    var dayElem = month.children[i], date = dayElem.dateObj;
                    var timestamp = date.getTime();
                    var outOfRange = (minRange > 0 && timestamp < minRange) ||
                        (maxRange > 0 && timestamp > maxRange);
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        ["inRange", "startRange", "endRange"].forEach(function (c) {
                            dayElem.classList.remove(c);
                        });
                        return "continue";
                    }
                    else if (containsDisabled && !outOfRange)
                        return "continue";
                    ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                        dayElem.classList.remove(c);
                    });
                    if (elem !== undefined) {
                        elem.classList.add(hoverDate < self.selectedDates[0].getTime()
                            ? "startRange"
                            : "endRange");
                        if (month.contains(elem) ||
                            !(m > 0 &&
                                prevMonth &&
                                prevMonth.lastChild.dateObj.getTime() >= timestamp)) {
                            if (initialDate < hoverDate && timestamp === initialDate)
                                dayElem.classList.add("startRange");
                            else if (initialDate > hoverDate && timestamp === initialDate)
                                dayElem.classList.add("endRange");
                            if (timestamp >= minRange &&
                                (maxRange === 0 || timestamp <= maxRange) &&
                                isBetween(timestamp, initialDate, hoverDate))
                                dayElem.classList.add("inRange");
                        }
                    }
                };
                for (var i = 0, l = month.children.length; i < l; i++) {
                    _loop_1(i, l);
                }
            }
        }
        function onResize() {
            if (self.isOpen && !self.config.static && !self.config.inline)
                positionCalendar();
        }
        function open(e, positionElement) {
            if (positionElement === void 0) { positionElement = self._positionElement; }
            if (self.isMobile === true) {
                if (e) {
                    e.preventDefault();
                    e.target && e.target.blur();
                }
                if (self.mobileInput !== undefined) {
                    self.mobileInput.focus();
                    self.mobileInput.click();
                }
                triggerEvent("onOpen");
                return;
            }
            if (self._input.disabled || self.config.inline)
                return;
            var wasOpen = self.isOpen;
            self.isOpen = true;
            if (!wasOpen) {
                self.calendarContainer.classList.add("open");
                self._input.classList.add("active");
                triggerEvent("onOpen");
                positionCalendar(positionElement);
                self.calendarContainer.focus();
                if (self.config.noCalendar === false) {
                    focusOnDay(undefined, 0);
                }
            }
            if (self.config.enableTime === true && self.config.noCalendar === true) {
                if (self.selectedDates.length === 0) {
                    self.setDate(self.config.minDate !== undefined
                        ? new Date(self.config.minDate.getTime())
                        : new Date(), false);
                    setDefaultHours();
                    updateValue();
                }
                if (self.config.allowInput === false &&
                    (e === undefined ||
                        !self.timeContainer.contains(e.relatedTarget))) {
                    setTimeout(function () { return self.hourElement.select(); }, 50);
                }
            }
        }
        function minMaxDateSetter(type) {
            return function (date) {
                var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
                var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
                if (dateObj !== undefined) {
                    self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                        dateObj.getHours() > 0 ||
                            dateObj.getMinutes() > 0 ||
                            dateObj.getSeconds() > 0;
                }
                if (self.selectedDates) {
                    self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                    if (!self.selectedDates.length && type === "min")
                        setHoursFromDate(dateObj);
                    updateValue();
                }
                if (self.daysContainer) {
                    redraw();
                    if (dateObj !== undefined)
                        self.currentYearElement[type] = dateObj.getFullYear().toString();
                    else
                        self.currentYearElement.removeAttribute(type);
                    self.currentYearElement.disabled =
                        !!inverseDateObj &&
                            dateObj !== undefined &&
                            inverseDateObj.getFullYear() === dateObj.getFullYear();
                }
            };
        }
        function parseConfig() {
            var boolOpts = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
            ];
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            var formats$$1 = {};
            self.config.parseDate = userConfig.parseDate;
            self.config.formatDate = userConfig.formatDate;
            Object.defineProperty(self.config, "enable", {
                get: function () { return self.config._enable; },
                set: function (dates) {
                    self.config._enable = parseDateRules(dates);
                }
            });
            Object.defineProperty(self.config, "disable", {
                get: function () { return self.config._disable; },
                set: function (dates) {
                    self.config._disable = parseDateRules(dates);
                }
            });
            var timeMode = userConfig.mode === "time";
            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                formats$$1.dateFormat =
                    userConfig.noCalendar || timeMode
                        ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                        : flatpickr.defaultConfig.dateFormat +
                            " H:i" +
                            (userConfig.enableSeconds ? ":S" : "");
            }
            if (userConfig.altInput &&
                (userConfig.enableTime || timeMode) &&
                !userConfig.altFormat) {
                formats$$1.altFormat =
                    userConfig.noCalendar || timeMode
                        ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                        : flatpickr.defaultConfig.altFormat +
                            (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
            }
            Object.defineProperty(self.config, "minDate", {
                get: function () { return self.config._minDate; },
                set: minMaxDateSetter("min")
            });
            Object.defineProperty(self.config, "maxDate", {
                get: function () { return self.config._maxDate; },
                set: minMaxDateSetter("max")
            });
            var minMaxTimeSetter = function (type) { return function (val) {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i");
            }; };
            Object.defineProperty(self.config, "minTime", {
                get: function () { return self.config._minTime; },
                set: minMaxTimeSetter("min")
            });
            Object.defineProperty(self.config, "maxTime", {
                get: function () { return self.config._maxTime; },
                set: minMaxTimeSetter("max")
            });
            if (userConfig.mode === "time") {
                self.config.noCalendar = true;
                self.config.enableTime = true;
            }
            Object.assign(self.config, formats$$1, userConfig);
            for (var i = 0; i < boolOpts.length; i++)
                self.config[boolOpts[i]] =
                    self.config[boolOpts[i]] === true ||
                        self.config[boolOpts[i]] === "true";
            HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
                self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
            });
            self.isMobile =
                !self.config.disableMobile &&
                    !self.config.inline &&
                    self.config.mode === "single" &&
                    !self.config.disable.length &&
                    !self.config.enable.length &&
                    !self.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            for (var i = 0; i < self.config.plugins.length; i++) {
                var pluginConf = self.config.plugins[i](self) || {};
                for (var key in pluginConf) {
                    if (HOOKS.indexOf(key) > -1) {
                        self.config[key] = arrayify(pluginConf[key])
                            .map(bindToInstance)
                            .concat(self.config[key]);
                    }
                    else if (typeof userConfig[key] === "undefined")
                        self.config[key] = pluginConf[key];
                }
            }
            triggerEvent("onParseConfig");
        }
        function setupLocale() {
            if (typeof self.config.locale !== "object" &&
                typeof flatpickr.l10ns[self.config.locale] === "undefined")
                self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
            self.l10n = __assign({}, flatpickr.l10ns["default"], (typeof self.config.locale === "object"
                ? self.config.locale
                : self.config.locale !== "default"
                    ? flatpickr.l10ns[self.config.locale]
                    : undefined));
            tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
            self.formatDate = createDateFormatter(self);
            self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        }
        function positionCalendar(customPositionElement) {
            if (self.calendarContainer === undefined)
                return;
            triggerEvent("onPreCalendarPosition");
            var positionElement = customPositionElement || self._positionElement;
            var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                (configPosVertical !== "below" &&
                    distanceFromBottom < calendarHeight &&
                    inputBounds.top > calendarHeight);
            var top = window.pageYOffset +
                inputBounds.top +
                (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
            toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
            if (self.config.inline)
                return;
            var left = window.pageXOffset +
                inputBounds.left -
                (configPosHorizontal != null && configPosHorizontal === "center"
                    ? (calendarWidth - inputBounds.width) / 2
                    : 0);
            var right = window.document.body.offsetWidth - inputBounds.right;
            var rightMost = left + calendarWidth > window.document.body.offsetWidth;
            var centerMost = right + calendarWidth > window.document.body.offsetWidth;
            toggleClass(self.calendarContainer, "rightMost", rightMost);
            if (self.config.static)
                return;
            self.calendarContainer.style.top = top + "px";
            if (!rightMost) {
                self.calendarContainer.style.left = left + "px";
                self.calendarContainer.style.right = "auto";
            }
            else if (!centerMost) {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = right + "px";
            }
            else {
                var doc = document.styleSheets[0];
                var bodyWidth = window.document.body.offsetWidth;
                var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                var centerBefore = ".flatpickr-calendar.centerMost:before";
                var centerAfter = ".flatpickr-calendar.centerMost:after";
                var centerIndex = doc.cssRules.length;
                var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                toggleClass(self.calendarContainer, "rightMost", false);
                toggleClass(self.calendarContainer, "centerMost", true);
                doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                self.calendarContainer.style.left = centerLeft + "px";
                self.calendarContainer.style.right = "auto";
            }
        }
        function redraw() {
            if (self.config.noCalendar || self.isMobile)
                return;
            updateNavigationCurrentMonth();
            buildDays();
        }
        function focusAndClose() {
            self._input.focus();
            if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                navigator.msMaxTouchPoints !== undefined) {
                // hack - bugs in the way IE handles focus keeps the calendar open
                setTimeout(self.close, 0);
            }
            else {
                self.close();
            }
        }
        function selectDate(e) {
            e.preventDefault();
            e.stopPropagation();
            var isSelectable = function (day) {
                return day.classList &&
                    day.classList.contains("flatpickr-day") &&
                    !day.classList.contains("disabled") &&
                    !day.classList.contains("notAllowed");
            };
            var t = findParent(e.target, isSelectable);
            if (t === undefined)
                return;
            var target = t;
            var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
            var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                selectedDate.getMonth() >
                    self.currentMonth + self.config.showMonths - 1) &&
                self.config.mode !== "range";
            self.selectedDateElem = target;
            if (self.config.mode === "single")
                self.selectedDates = [selectedDate];
            else if (self.config.mode === "multiple") {
                var selectedIndex = isDateSelected(selectedDate);
                if (selectedIndex)
                    self.selectedDates.splice(parseInt(selectedIndex), 1);
                else
                    self.selectedDates.push(selectedDate);
            }
            else if (self.config.mode === "range") {
                if (self.selectedDates.length === 2)
                    self.clear(false);
                self.latestSelectedDateObj = selectedDate;
                self.selectedDates.push(selectedDate);
                // unless selecting same date twice, sort ascendingly
                if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                    self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
            }
            setHoursFromInputs();
            if (shouldChangeMonth) {
                var isNewYear = self.currentYear !== selectedDate.getFullYear();
                self.currentYear = selectedDate.getFullYear();
                self.currentMonth = selectedDate.getMonth();
                if (isNewYear)
                    triggerEvent("onYearChange");
                triggerEvent("onMonthChange");
            }
            updateNavigationCurrentMonth();
            buildDays();
            updateValue();
            if (self.config.enableTime)
                setTimeout(function () { return (self.showTimeInput = true); }, 50);
            // maintain focus
            if (!shouldChangeMonth &&
                self.config.mode !== "range" &&
                self.config.showMonths === 1)
                focusOnDayElem(target);
            else if (self.selectedDateElem !== undefined &&
                self.hourElement === undefined) {
                self.selectedDateElem && self.selectedDateElem.focus();
            }
            if (self.hourElement !== undefined)
                self.hourElement !== undefined && self.hourElement.focus();
            if (self.config.closeOnSelect) {
                var single = self.config.mode === "single" && !self.config.enableTime;
                var range = self.config.mode === "range" &&
                    self.selectedDates.length === 2 &&
                    !self.config.enableTime;
                if (single || range) {
                    focusAndClose();
                }
            }
            triggerChange();
        }
        var CALLBACKS = {
            locale: [setupLocale, updateWeekdays],
            showMonths: [buildMonths, setCalendarWidth, buildWeekdays]
        };
        function set(option, value) {
            if (option !== null && typeof option === "object")
                Object.assign(self.config, option);
            else {
                self.config[option] = value;
                if (CALLBACKS[option] !== undefined)
                    CALLBACKS[option].forEach(function (x) { return x(); });
                else if (HOOKS.indexOf(option) > -1)
                    self.config[option] = arrayify(value);
            }
            self.redraw();
            jumpToDate();
            updateValue(false);
        }
        function setSelectedDate(inputDate, format) {
            var dates = [];
            if (inputDate instanceof Array)
                dates = inputDate.map(function (d) { return self.parseDate(d, format); });
            else if (inputDate instanceof Date || typeof inputDate === "number")
                dates = [self.parseDate(inputDate, format)];
            else if (typeof inputDate === "string") {
                switch (self.config.mode) {
                    case "single":
                    case "time":
                        dates = [self.parseDate(inputDate, format)];
                        break;
                    case "multiple":
                        dates = inputDate
                            .split(self.config.conjunction)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    case "range":
                        dates = inputDate
                            .split(self.l10n.rangeSeparator)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    default:
                        break;
                }
            }
            else
                self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
            self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });
            if (self.config.mode === "range")
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        function setDate(date, triggerChange, format) {
            if (triggerChange === void 0) { triggerChange = false; }
            if (format === void 0) { format = self.config.dateFormat; }
            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                return self.clear(triggerChange);
            setSelectedDate(date, format);
            self.showTimeInput = self.selectedDates.length > 0;
            self.latestSelectedDateObj = self.selectedDates[0];
            self.redraw();
            jumpToDate();
            setHoursFromDate();
            updateValue(triggerChange);
            if (triggerChange)
                triggerEvent("onChange");
        }
        function parseDateRules(arr) {
            return arr
                .slice()
                .map(function (rule) {
                if (typeof rule === "string" ||
                    typeof rule === "number" ||
                    rule instanceof Date) {
                    return self.parseDate(rule, undefined, true);
                }
                else if (rule &&
                    typeof rule === "object" &&
                    rule.from &&
                    rule.to)
                    return {
                        from: self.parseDate(rule.from, undefined),
                        to: self.parseDate(rule.to, undefined)
                    };
                return rule;
            })
                .filter(function (x) { return x; }); // remove falsy values
        }
        function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date();
            // Workaround IE11 setting placeholder as the input's value
            var preloadedDate = self.config.defaultDate ||
                ((self.input.nodeName === "INPUT" ||
                    self.input.nodeName === "TEXTAREA") &&
                    self.input.placeholder &&
                    self.input.value === self.input.placeholder
                    ? null
                    : self.input.value);
            if (preloadedDate)
                setSelectedDate(preloadedDate, self.config.dateFormat);
            self._initialDate =
                self.selectedDates.length > 0
                    ? self.selectedDates[0]
                    : self.config.minDate &&
                        self.config.minDate.getTime() > self.now.getTime()
                        ? self.config.minDate
                        : self.config.maxDate &&
                            self.config.maxDate.getTime() < self.now.getTime()
                            ? self.config.maxDate
                            : self.now;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            if (self.selectedDates.length > 0)
                self.latestSelectedDateObj = self.selectedDates[0];
            if (self.config.minTime !== undefined)
                self.config.minTime = self.parseDate(self.config.minTime, "H:i");
            if (self.config.maxTime !== undefined)
                self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
            self.minDateHasTime =
                !!self.config.minDate &&
                    (self.config.minDate.getHours() > 0 ||
                        self.config.minDate.getMinutes() > 0 ||
                        self.config.minDate.getSeconds() > 0);
            self.maxDateHasTime =
                !!self.config.maxDate &&
                    (self.config.maxDate.getHours() > 0 ||
                        self.config.maxDate.getMinutes() > 0 ||
                        self.config.maxDate.getSeconds() > 0);
            Object.defineProperty(self, "showTimeInput", {
                get: function () { return self._showTimeInput; },
                set: function (bool) {
                    self._showTimeInput = bool;
                    if (self.calendarContainer)
                        toggleClass(self.calendarContainer, "showTimeInput", bool);
                    self.isOpen && positionCalendar();
                }
            });
        }
        function setupInputs() {
            self.input = self.config.wrap
                ? element.querySelector("[data-input]")
                : element;
            /* istanbul ignore next */
            if (!self.input) {
                self.config.errorHandler(new Error("Invalid input element specified"));
                return;
            }
            // hack: store previous type to restore it after destroy()
            self.input._type = self.input.type;
            self.input.type = "text";
            self.input.classList.add("flatpickr-input");
            self._input = self.input;
            if (self.config.altInput) {
                // replicate self.element
                self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
                self._input = self.altInput;
                self.altInput.placeholder = self.input.placeholder;
                self.altInput.disabled = self.input.disabled;
                self.altInput.required = self.input.required;
                self.altInput.tabIndex = self.input.tabIndex;
                self.altInput.type = "text";
                self.input.setAttribute("type", "hidden");
                if (!self.config.static && self.input.parentNode)
                    self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
            }
            if (!self.config.allowInput)
                self._input.setAttribute("readonly", "readonly");
            self._positionElement = self.config.positionElement || self._input;
        }
        function setupMobile() {
            var inputType = self.config.enableTime
                ? self.config.noCalendar
                    ? "time"
                    : "datetime-local"
                : "date";
            self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
            self.mobileInput.step = self.input.getAttribute("step") || "any";
            self.mobileInput.tabIndex = 1;
            self.mobileInput.type = inputType;
            self.mobileInput.disabled = self.input.disabled;
            self.mobileInput.required = self.input.required;
            self.mobileInput.placeholder = self.input.placeholder;
            self.mobileFormatStr =
                inputType === "datetime-local"
                    ? "Y-m-d\\TH:i:S"
                    : inputType === "date"
                        ? "Y-m-d"
                        : "H:i:S";
            if (self.selectedDates.length > 0) {
                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
            }
            if (self.config.minDate)
                self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
            if (self.config.maxDate)
                self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
            self.input.type = "hidden";
            if (self.altInput !== undefined)
                self.altInput.type = "hidden";
            try {
                if (self.input.parentNode)
                    self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            }
            catch (_a) { }
            bind(self.mobileInput, "change", function (e) {
                self.setDate(e.target.value, false, self.mobileFormatStr);
                triggerEvent("onChange");
                triggerEvent("onClose");
            });
        }
        function toggle(e) {
            if (self.isOpen === true)
                return self.close();
            self.open(e);
        }
        function triggerEvent(event, data) {
            // If the instance has been destroyed already, all hooks have been removed
            if (self.config === undefined)
                return;
            var hooks = self.config[event];
            if (hooks !== undefined && hooks.length > 0) {
                for (var i = 0; hooks[i] && i < hooks.length; i++)
                    hooks[i](self.selectedDates, self.input.value, self, data);
            }
            if (event === "onChange") {
                self.input.dispatchEvent(createEvent("change"));
                // many front-end frameworks bind to the input event
                self.input.dispatchEvent(createEvent("input"));
            }
        }
        function createEvent(name) {
            var e = document.createEvent("Event");
            e.initEvent(name, true, true);
            return e;
        }
        function isDateSelected(date) {
            for (var i = 0; i < self.selectedDates.length; i++) {
                if (compareDates(self.selectedDates[i], date) === 0)
                    return "" + i;
            }
            return false;
        }
        function isDateInRange(date) {
            if (self.config.mode !== "range" || self.selectedDates.length < 2)
                return false;
            return (compareDates(date, self.selectedDates[0]) >= 0 &&
                compareDates(date, self.selectedDates[1]) <= 0);
        }
        function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav)
                return;
            self.yearElements.forEach(function (yearElement, i) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                self.monthElements[i].textContent =
                    monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) +
                        " ";
                yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow =
                self.config.minDate !== undefined &&
                    (self.currentYear === self.config.minDate.getFullYear()
                        ? self.currentMonth <= self.config.minDate.getMonth()
                        : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow =
                self.config.maxDate !== undefined &&
                    (self.currentYear === self.config.maxDate.getFullYear()
                        ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                        : self.currentYear > self.config.maxDate.getFullYear());
        }
        function getDateStr(format) {
            return self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, format); })
                .filter(function (d, i, arr) {
                return self.config.mode !== "range" ||
                    self.config.enableTime ||
                    arr.indexOf(d) === i;
            })
                .join(self.config.mode !== "range"
                ? self.config.conjunction
                : self.l10n.rangeSeparator);
        }
        /**
         * Updates the values of inputs associated with the calendar
         */
        function updateValue(triggerChange) {
            if (triggerChange === void 0) { triggerChange = true; }
            if (self.selectedDates.length === 0)
                return self.clear(triggerChange);
            if (self.mobileInput !== undefined && self.mobileFormatStr) {
                self.mobileInput.value =
                    self.latestSelectedDateObj !== undefined
                        ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                        : "";
            }
            self.input.value = getDateStr(self.config.dateFormat);
            if (self.altInput !== undefined) {
                self.altInput.value = getDateStr(self.config.altFormat);
            }
            if (triggerChange !== false)
                triggerEvent("onValueUpdate");
        }
        function onMonthNavClick(e) {
            e.preventDefault();
            var isPrevMonth = self.prevMonthNav.contains(e.target);
            var isNextMonth = self.nextMonthNav.contains(e.target);
            if (isPrevMonth || isNextMonth) {
                changeMonth(isPrevMonth ? -1 : 1);
            }
            else if (self.yearElements.indexOf(e.target) >= 0) {
                e.target.select();
            }
            else if (e.target.classList.contains("arrowUp")) {
                self.changeYear(self.currentYear + 1);
            }
            else if (e.target.classList.contains("arrowDown")) {
                self.changeYear(self.currentYear - 1);
            }
        }
        function timeWrapper(e) {
            e.preventDefault();
            var isKeyDown = e.type === "keydown", input = e.target;
            if (self.amPM !== undefined && e.target === self.amPM) {
                self.amPM.textContent =
                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            var min = parseFloat(input.getAttribute("data-min")), max = parseFloat(input.getAttribute("data-max")), step = parseFloat(input.getAttribute("data-step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
            var newValue = curValue + step * delta;
            if (typeof input.value !== "undefined" && input.value.length === 2) {
                var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                if (newValue < min) {
                    newValue =
                        max +
                            newValue +
                            int(!isHourElem) +
                            (int(isHourElem) && int(!self.amPM));
                    if (isMinuteElem)
                        incrementNumInput(undefined, -1, self.hourElement);
                }
                else if (newValue > max) {
                    newValue =
                        input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                    if (isMinuteElem)
                        incrementNumInput(undefined, 1, self.hourElement);
                }
                if (self.amPM &&
                    isHourElem &&
                    (step === 1
                        ? newValue + curValue === 23
                        : Math.abs(newValue - curValue) > step)) {
                    self.amPM.textContent =
                        self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
                }
                input.value = pad(newValue);
            }
        }
        init();
        return self;
    }
    /* istanbul ignore next */
    function _flatpickr(nodeList, config) {
        // spare ourselves some cycles
        if (nodeList.length === 0) {
            return [];
        }
        // static list
        var nodes = Array.from(nodeList).filter(function (x) { return x instanceof HTMLElement; });
        var instances = [];
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            try {
                if (node.getAttribute("data-fp-omit") !== null)
                    continue;
                if (node._flatpickr !== undefined) {
                    node._flatpickr.destroy();
                    node._flatpickr = undefined;
                }
                node._flatpickr = FlatpickrInstance(node, config || {});
                instances.push(node._flatpickr);
            }
            catch (e) {
                console.error(e);
            }
        }
        return instances.length === 1 ? instances[0] : instances;
    }
    /* istanbul ignore next */
    if (typeof HTMLElement !== "undefined") {
        // browser env
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
        HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
        };
    }
    /* istanbul ignore next */
    var flatpickr = function (selector, config) {
        if (typeof selector === "string") {
            return _flatpickr(window.document.querySelectorAll(selector), config);
        }
        else if (selector instanceof Node) {
            return _flatpickr([selector], config);
        }
        else {
            return _flatpickr(selector, config);
        }
    };
    /* istanbul ignore next */
    flatpickr.defaultConfig = defaults;
    flatpickr.l10ns = {
        en: __assign({}, english),
        "default": __assign({}, english)
    };
    flatpickr.localize = function (l10n) {
        flatpickr.l10ns["default"] = __assign({}, flatpickr.l10ns["default"], l10n);
    };
    flatpickr.setDefaults = function (config) {
        flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
    };
    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;
    /* istanbul ignore next */
    if (typeof jQuery !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
    }
    Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };
    if (typeof window !== "undefined") {
        window.flatpickr = flatpickr;
    }

    return flatpickr;

}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 0)))

/***/ }),
/* 27 */
/*!*******************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.min.css ***!
  \*******************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/*!*****************************************!*\
  !*** ./app/javascript/plugins/chart.js ***!
  \*****************************************/
/*! exports provided: initChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initChart */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_canvasjs__ = __webpack_require__(/*! canvasjs */ 29);


function initChart() {

  var chartdate = new __WEBPACK_IMPORTED_MODULE_0_canvasjs__["CanvasJS"].Chart("chartDateContainer", {
    animationEnabled: true,
    title: {
      text: "Dates Votes"
    },
    axisX: {
      valueFormatString: "YYYY"
    },
    axisY: {
      suffix: ""
    },
    toolTip: {
      shared: true
    },
    legend: {
      reversed: true,
      verticalAlign: "center",
      horizontalAlign: "right"
    },
    data: [{
      type: "stackedColumn100",
      name: "number of votes",
      showInLegend: false,
      xValueFormatString: "YYYY",
      yValueFormatString: "#,##0\"%\"",
      dataPoints: [{ x: new Date(2010, 0), y: 40 }, { x: new Date(2011, 0), y: 50 }, { x: new Date(2012, 0), y: 60 }, { x: new Date(2013, 0), y: 61 }, { x: new Date(2014, 0), y: 63 }, { x: new Date(2015, 0), y: 65 }, { x: new Date(2016, 0), y: 67 }]
    }, {
      type: "stackedColumn100",
      name: "unvoted",
      showInLegend: false,
      xValueFormatString: "YYYY",
      yValueFormatString: "#,##0\"%\"",
      dataPoints: [{ x: new Date(2010, 0), y: 28 }, { x: new Date(2011, 0), y: 18 }, { x: new Date(2012, 0), y: 12 }, { x: new Date(2013, 0), y: 10 }, { x: new Date(2014, 0), y: 10 }, { x: new Date(2015, 0), y: 7 }, { x: new Date(2016, 0), y: 5 }]
    }]
  });
  chartdate.render();

  var charttheme = new __WEBPACK_IMPORTED_MODULE_0_canvasjs__["CanvasJS"].Chart("chartThemeContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Themes Votes"
    },
    axisY: {
      title: ""
    },
    data: [{
      type: "column",
      showInLegend: false,
      legendMarkerColor: "grey",
      legendText: "",
      dataPoints: [{ y: 3, label: "Town" }, { y: 2, label: "Countryside" }, { y: 1, label: "Seaside" }, { y: 1, label: "Mountain" }]
    }]
  });
  charttheme.render();

  var chartbudget = new __WEBPACK_IMPORTED_MODULE_0_canvasjs__["CanvasJS"].Chart("chartBudgetContainer", {
    animationEnabled: true,
    title: {
      text: "Budget"
    },
    axisX: {
      minimum: new Date(2015, 1, 25),
      maximum: new Date(2017, 2, 15)
      // valueFormatString: "MMM YY"

    },
    axisY: {
      title: "",
      titleFontColor: "#4F81BC",
      suffix: "€"
    },
    data: [{
      indexLabelFontColor: "darkSlateGray",
      name: "views",
      type: "area",
      yValueFormatString: "#,##0.0mn",
      dataPoints: [{ x: new Date(2015, 11, 1), y: 48.0, label: "Q4-2015" }, { x: new Date(2016, 11, 1), y: 45.5, label: "Q4-2016" }]
    }]
  });
  chartbudget.render();
}



/***/ }),
/* 29 */
/*!*************************************************!*\
  !*** ./node_modules/canvasjs/src/main/index.js ***!
  \*************************************************/
/*! exports provided: Chart, addColorSet, addCultureInfo, formatNumber, formatDate */
/*! exports used: CanvasJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Chart */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_charts__ = __webpack_require__(/*! ../core/charts */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_culture_info__ = __webpack_require__(/*! ../core/culture_info */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_themes__ = __webpack_require__(/*! ../constants/themes */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_culture__ = __webpack_require__(/*! ../constants/culture */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_utils__ = __webpack_require__(/*! ../helpers/utils */ 1);
/**
* @preserve CanvasJS HTML5 & JavaScript Charts - v1.8.0 Beta 2 - http://canvasjs.com/
* CanvasJS Charts follows Dual Licensing Model as mentioned below.
*
* ---------------------Free for Non-Commercial Use--------------------
*
* For non-commercial purposes you can use the software for free under Creative Commons Attribution-NonCommercial 3.0 License. Refer to the following link for further details on the same.
* http://creativecommons.org/licenses/by-nc/3.0/deed.en_US
*
* ---------------------Commercial License--------------------
* Commercial use of CanvasJS requires you to purchase a license. Without a commercial license you can use it for evaluation purposes only. Please refer to the following link for further details.
* http://canvasjs.com/
*
**/






function Chart(containerId, options) {

  const _chart = new __WEBPACK_IMPORTED_MODULE_0__core_charts__["a" /* default */](containerId, options, this);

  this.render = () =>  _chart.render(this.options);

  this.options = _chart._options;
};


const addColorSet = (name, colorSet) => {

    __WEBPACK_IMPORTED_MODULE_2__constants_themes__["a" /* colorSets */][name] = colorSet;

};
/* unused harmony export addColorSet */


const addCultureInfo = (name, cultureInfo) => {

    __WEBPACK_IMPORTED_MODULE_3__constants_culture__["a" /* cultures */][name] = cultureInfo;

};
/* unused harmony export addCultureInfo */


const formatNumber = (number, formatString, culture) => {

    culture = culture || "en";
    formatString = formatString || "#,##0.##";

    if (!__WEBPACK_IMPORTED_MODULE_3__constants_culture__["a" /* cultures */][culture])throw "Unknown Culture Name";
    else Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["t" /* numberFormat */])(number, formatString, new __WEBPACK_IMPORTED_MODULE_1__core_culture_info__["a" /* default */](culture));

};
/* unused harmony export formatNumber */


const formatDate = (date, formatString, culture) => {

    culture = culture || "en";
    formatString = formatString || "DD MMM YYYY";

    if (!__WEBPACK_IMPORTED_MODULE_3__constants_culture__["a" /* cultures */][culture])throw "Unknown Culture Name";
    else Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["e" /* dateFormat */])(date, formatString, new __WEBPACK_IMPORTED_MODULE_1__core_culture_info__["a" /* default */](culture));

};
/* unused harmony export formatDate */


Chart.version = "v1.8.2";


/***/ }),
/* 30 */
/*!**************************************************!*\
  !*** ./node_modules/canvasjs/src/core/charts.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasjs__ = __webpack_require__(/*! ./canvasjs */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animator__ = __webpack_require__(/*! ./animator */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_series__ = __webpack_require__(/*! ./data_series */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_block__ = __webpack_require__(/*! ./text_block */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_render__ = __webpack_require__(/*! ../helpers/render */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_manager__ = __webpack_require__(/*! ./layout_manager */ 32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_manager__ = __webpack_require__(/*! ./event_manager */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tooltip__ = __webpack_require__(/*! ./tooltip */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_culture_info__ = __webpack_require__(/*! ../core/culture_info */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_axis__ = __webpack_require__(/*! ../core/axis */ 35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_title__ = __webpack_require__(/*! ../core/title */ 36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_legend__ = __webpack_require__(/*! ../core/legend */ 37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_animator__ = __webpack_require__(/*! ../helpers/animator */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_themes__ = __webpack_require__(/*! ../constants/themes */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_options__ = __webpack_require__(/*! ../constants/options */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__helpers_utils__ = __webpack_require__(/*! ../helpers/utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__charts_index__ = __webpack_require__(/*! ../charts/index */ 38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__charts_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__charts_index__);
















// import {inherits} from 'util';





function Chart(containerId, options, publicChartReference) {

	this._publicChartReference = publicChartReference;

	options = options || {};

	Chart.base.constructor.call(this, "Chart", options, options.theme ? options.theme : "theme1");

	var _this = this;

	this._containerId = containerId;
	this._objectsInitialized = false;
	this.ctx = null;
	this.overlaidCanvasCtx = null;
	this._indexLabels = [];
	this._panTimerId = 0;
	this._lastTouchEventType = "";
	this._lastTouchData = null;
	this.isAnimating = false;
	this.renderCount = 0;
	this.animatedRender = false;
	this.disableToolTip = false;


	this.panEnabled = false;
	this._defaultCursor = "default";
	this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
	this._dataInRenderedOrder = [];

	this._container = typeof (this._containerId) === "string" ? document.getElementById(this._containerId) : this._containerId;

	if (!this._container) {
		if (window.console)
			window.console.log("CanvasJS Error: Chart Container with id \"" + this._containerId + "\" was not found");
		return;
	}

	this._container.innerHTML = "";

	var width = 0;
	var height = 0;

	if (this._options.width)
		width = this.width;
	else
		width = this._container.clientWidth > 0 ? this._container.clientWidth : this.width;

	if (this._options.height)
		height = this.height;
	else
		height = this._container.clientHeight > 0 ? this._container.clientHeight : this.height;

	this.width = width;
	this.height = height;

	this.x1 = this.y1 = 0;
	this.x2 = this.width;
	this.y2 = this.height;


	this._selectedColorSet = typeof (__WEBPACK_IMPORTED_MODULE_13__constants_themes__["a" /* colorSets */][this.colorSet]) !== "undefined" ? __WEBPACK_IMPORTED_MODULE_13__constants_themes__["a" /* colorSets */][this.colorSet] : __WEBPACK_IMPORTED_MODULE_13__constants_themes__["a" /* colorSets */]["colorSet1"];

	this._canvasJSContainer = document.createElement("div");
	this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container");

	this._canvasJSContainer.style.position = "relative";
	this._canvasJSContainer.style.textAlign = "left";
	this._canvasJSContainer.style.cursor = "auto";

	if (!__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {
		this._canvasJSContainer.style.height = "0px";//In IE6 toolTip doesn't show at proper position if not set.
	}
	this._container.appendChild(this._canvasJSContainer);


	this.canvas = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["d" /* createCanvas */])(width, height);

	this.canvas.style.position = "absolute";
	if (this.canvas.getContext) {
		//try {
		//	this.canvas.style.background = this.backgroundColor;
		//} catch (e) { }
		this._canvasJSContainer.appendChild(this.canvas);
		this.ctx = this.canvas.getContext("2d");
		this.ctx.textBaseline = "top";
		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["j" /* extendCtx */])(this.ctx);

	} else return;

	//this.canvas.style.cursor = "pointer";

	if (!__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {
		this.plotArea.canvas = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["d" /* createCanvas */])(width, height);
		this.plotArea.canvas.style.position = "absolute";
		this.plotArea.canvas.setAttribute("class", "plotAreaCanvas");
		this._canvasJSContainer.appendChild(this.plotArea.canvas);

		this.plotArea.ctx = this.plotArea.canvas.getContext("2d");
	} else {
		this.plotArea.ctx = this.ctx;
	}

	this.overlaidCanvas = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["d" /* createCanvas */])(width, height);
	this.overlaidCanvas.style.position = "absolute";
	this._canvasJSContainer.appendChild(this.overlaidCanvas);
	this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d");
	this.overlaidCanvasCtx.textBaseline = "top";

	this._eventManager = new __WEBPACK_IMPORTED_MODULE_6__event_manager__["a" /* default */](this);

	Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(window, "resize", function () {
		//this._container.addEventListener("DOMSubtreeModified", function () {

		if (_this._updateSize())
			_this.render();
	});


	this._toolBar = document.createElement("div");
	this._toolBar.setAttribute("class", "canvasjs-chart-toolbar");
	this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;";
	this._canvasJSContainer.appendChild(this._toolBar);


	this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height };

	Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(this.overlaidCanvas, 'click', function (e) {
		_this._mouseEventHandler(e);
	});

	Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(this.overlaidCanvas, 'mousemove', function (e) {
		_this._mouseEventHandler(e);
	});

	Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(this.overlaidCanvas, 'mouseup', function (e) {
		_this._mouseEventHandler(e);
	});

	Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(this.overlaidCanvas, 'mousedown', function (e) {
		_this._mouseEventHandler(e);
		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["q" /* hide */])(_this._dropdownMenu);
	});

	Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(this.overlaidCanvas, 'mouseout', function (e) {
		_this._mouseEventHandler(e);
	});


	Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function (e) {
		_this._touchEventHandler(e);
	});

	Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : 'touchmove', function (e) {
		_this._touchEventHandler(e);
	});

	Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : 'touchend', function (e) {
		_this._touchEventHandler(e);
	});

	Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : 'touchcancel', function (e) {
		_this._touchEventHandler(e);
	});

	if (!this._creditLink) {

		this._creditLink = document.createElement("a");
		this._creditLink.setAttribute("class", "canvasjs-chart-credit");
		this._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:3px;top:" + (this.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif");

		this._creditLink.setAttribute("tabIndex", -1);

		this._creditLink.setAttribute("target", "_blank");
	}

	this._toolTip = new __WEBPACK_IMPORTED_MODULE_7__tooltip__["a" /* default */](this, this._options.toolTip, this.theme);

	this.data = null;
	this.axisX = null;
	this.axisY = null;
	this.axisY2 = null;

	this.sessionVariables = {
		axisX: {},
		axisY: {},
		axisY2: {}
	};
}

Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["i" /* extend */])(Chart, __WEBPACK_IMPORTED_MODULE_0__canvasjs__["a" /* default */]);

//Update Chart Properties
Chart.prototype._updateOptions = function () {

	var _this = this;

	this.updateOption("width");
	this.updateOption("height");
	this.updateOption("dataPointMaxWidth");
	this.updateOption("interactivityEnabled");
	this.updateOption("theme");

	if (this.updateOption("colorSet"))
		this._selectedColorSet = typeof (__WEBPACK_IMPORTED_MODULE_13__constants_themes__["a" /* colorSets */][this.colorSet]) !== "undefined" ? __WEBPACK_IMPORTED_MODULE_13__constants_themes__["a" /* colorSets */][this.colorSet] : __WEBPACK_IMPORTED_MODULE_13__constants_themes__["a" /* colorSets */]["colorSet1"];

	this.updateOption("backgroundColor");
	if (!this.backgroundColor)
		this.backgroundColor = "rgba(0,0,0,0)";

	this.updateOption("culture");
	this._cultureInfo = new __WEBPACK_IMPORTED_MODULE_8__core_culture_info__["a" /* default */](this._options.culture);

	this.updateOption("animationEnabled");
	this.animationEnabled = this.animationEnabled && __WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */];
	this.updateOption("animationDuration");

	this.updateOption("rangeChanging");
	this.updateOption("rangeChanged");

	//Need to check this._options.zoomEnabled because this.zoomEnabled is used internally to keep track of state - and hence changes.
	if (this._options.zoomEnabled) {

		if (!this._zoomButton) {

			Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["q" /* hide */])(this._zoomButton = document.createElement("button"));

			setButtonState(this, this._zoomButton, "pan");

			this._toolBar.appendChild(this._zoomButton);
			Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(this._zoomButton, "click", function () {
				if (_this.zoomEnabled) {
					_this.zoomEnabled = false;
					_this.panEnabled = true;

					setButtonState(_this, _this._zoomButton, "zoom");

				} else {
					_this.zoomEnabled = true;
					_this.panEnabled = false;

					setButtonState(_this, _this._zoomButton, "pan");
				}

				_this.render();
			});
		}


		if (!this._resetButton) {
			Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["q" /* hide */])(this._resetButton = document.createElement("button"));
			setButtonState(this, this._resetButton, "reset");
			this._toolBar.appendChild(this._resetButton);

			Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(this._resetButton, "click", function () {

				_this._toolTip.hide();

				if (_this.zoomEnabled || _this.panEnabled) {
					_this.zoomEnabled = true;
					_this.panEnabled = false;
					setButtonState(_this, _this._zoomButton, "pan");

					_this._defaultCursor = "default";
					_this.overlaidCanvas.style.cursor = _this._defaultCursor;
				} else {
					_this.zoomEnabled = false;
					_this.panEnabled = false;
				}
				//Reset axisX
				if (_this.sessionVariables.axisX) {
					_this.sessionVariables.axisX.newViewportMinimum = null;
					_this.sessionVariables.axisX.newViewportMaximum = null;
				}

				//Reset axisY
				if (_this.sessionVariables.axisY) {
					_this.sessionVariables.axisY.newViewportMinimum = null;
					_this.sessionVariables.axisY.newViewportMaximum = null;
				}

				//Reset axisY2
				if (_this.sessionVariables.axisY2) {
					_this.sessionVariables.axisY2.newViewportMinimum = null;
					_this.sessionVariables.axisY2.newViewportMaximum = null;
				}

				_this.resetOverlayedCanvas();

				Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["q" /* hide */])(_this._zoomButton, _this._resetButton);

				_this._dispatchRangeEvent("rangeChanging", "reset");
				_this.render();
				_this._dispatchRangeEvent("rangeChanged", "reset");
			});

			this.overlaidCanvas.style.cursor = _this._defaultCursor;
		}

		if (!this.zoomEnabled && !this.panEnabled) {
			if (!this._zoomButton) {
				this.zoomEnabled = true;
				this.panEnabled = false;
			} else {

				if (_this._zoomButton.getAttribute("state") === _this._cultureInfo.zoomText) {
					this.panEnabled = true;
					this.zoomEnabled = false;
				}
				else {
					this.zoomEnabled = true;
					this.panEnabled = false;
				}

				Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["v" /* show */])(_this._zoomButton, _this._resetButton);
			}
		}



	} else {
		this.zoomEnabled = false;
		this.panEnabled = false;
	}



	if (this._menuButton) {
		if (this.exportEnabled)
			Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["v" /* show */])(this._menuButton);
		else
			Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["q" /* hide */])(this._menuButton);
	} else if (this.exportEnabled && __WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {
		this._menuButton = document.createElement("button");
		setButtonState(this, this._menuButton, "menu");
		this._toolBar.appendChild(this._menuButton);

		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(this._menuButton, "click", function () {
			if (_this._dropdownMenu.style.display === "none") {

				if (_this._dropDownCloseTime && ((new Date()).getTime() - _this._dropDownCloseTime.getTime() <= 500))
					return;

				_this._dropdownMenu.style.display = "block";
				_this._menuButton.blur();
				_this._dropdownMenu.focus();
			}

		}, true);
	}


	if (!this._dropdownMenu && this.exportEnabled && __WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {
		this._dropdownMenu = document.createElement("div");
		this._dropdownMenu.setAttribute("tabindex", -1);
		this._dropdownMenu.style.cssText = "position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;";
		_this._dropdownMenu.style.display = "none";
		this._toolBar.appendChild(this._dropdownMenu);

		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(this._dropdownMenu, "blur", function () {
			Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["q" /* hide */])(_this._dropdownMenu);

			_this._dropDownCloseTime = new Date();
		}, true);

		var exportOption = document.createElement("div");
		exportOption.style.cssText = "padding: 2px 15px 2px 10px"
		exportOption.innerHTML = this._cultureInfo.saveJPGText;
		this._dropdownMenu.appendChild(exportOption);

		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(exportOption, "mouseover", function () {
			this.style.backgroundColor = "#EEEEEE";
		}, true);

		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(exportOption, "mouseout", function () {
			this.style.backgroundColor = "transparent";
		}, true);

		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(exportOption, "click", function () {
			exportCanvas(_this.canvas, "jpg", _this.exportFileName);
			Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["q" /* hide */])(_this._dropdownMenu);
		}, true);

		var exportOption = document.createElement("div");
		exportOption.style.cssText = "padding: 2px 15px 2px 10px"
		exportOption.innerHTML = this._cultureInfo.savePNGText;
		this._dropdownMenu.appendChild(exportOption);

		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(exportOption, "mouseover", function () {
			this.style.backgroundColor = "#EEEEEE";
		}, true);

		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(exportOption, "mouseout", function () {
			this.style.backgroundColor = "transparent";
		}, true);

		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["b" /* addEvent */])(exportOption, "click", function () {
			exportCanvas(_this.canvas, "png", _this.exportFileName);
			Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["q" /* hide */])(_this._dropdownMenu);
		}, true);
	}


	if (this._toolBar.style.display !== "none" && this._zoomButton) {

		this.panEnabled ? setButtonState(_this, _this._zoomButton, "zoom") : setButtonState(_this, _this._zoomButton, "pan");


		if (_this._resetButton.getAttribute("state") !== _this._cultureInfo.resetText)
			setButtonState(_this, _this._resetButton, "reset");
	}

	if (typeof (__WEBPACK_IMPORTED_MODULE_14__constants_options__["a" /* defaultOptions */].Chart.creditHref) === "undefined") {
		this.creditHref = "http://canvasjs.com/";
		this.creditText = "CanvasJS.com";
	} else {
		var creditTextChanged = this.updateOption("creditText");
		var creditHrefChanged = this.updateOption("creditHref");
	}

	if (this.renderCount === 0 || (creditTextChanged || creditHrefChanged)) {
		this._creditLink.setAttribute("href", this.creditHref);
		this._creditLink.innerHTML = this.creditText;
	}

	if (this.creditHref && this.creditText) {
		if (!this._creditLink.parentElement)
			this._canvasJSContainer.appendChild(this._creditLink);
	}
	else if (this._creditLink.parentElement)
		this._canvasJSContainer.removeChild(this._creditLink);

	if (this._options.toolTip && this._toolTip._options !== this._options.toolTip)
		this._toolTip._options = this._options.toolTip

	for (var prop in this._toolTip._options) {

		if (this._toolTip._options.hasOwnProperty(prop)) {
			this._toolTip.updateOption(prop);
		}
	}

}

Chart.prototype._updateSize = function () {
	var width = 0;
	var height = 0;

	if (this._options.width)
		width = this.width;
	else
		this.width = width = this._container.clientWidth > 0 ? this._container.clientWidth : this.width;

	if (this._options.height)
		height = this.height;
	else
		this.height = height = this._container.clientHeight > 0 ? this._container.clientHeight : this.height;

	if (this.canvas.width !== width * __WEBPACK_IMPORTED_MODULE_15__helpers_utils__["devicePixelBackingStoreRatio"] || this.canvas.height !== height * __WEBPACK_IMPORTED_MODULE_15__helpers_utils__["devicePixelBackingStoreRatio"]) {
		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["u" /* setCanvasSize */])(this.canvas, width, height);

		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["u" /* setCanvasSize */])(this.overlaidCanvas, width, height);
		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["u" /* setCanvasSize */])(this._eventManager.ghostCanvas, width, height);

		return true;
	}

	return false;
}

// initialize chart objects
Chart.prototype._initialize = function () {
	///<signature>
	///<summary>Initializes Chart objects/state. Creates DataSeries class instance for each DataSeries provided by ther user. Sets the Axis Type based on the user data</summary>
	///</signature>
	//this.width = this.width;

	if (!this._animator)
		this._animator = new __WEBPACK_IMPORTED_MODULE_1__animator__["a" /* default */](this);
	else {
		this._animator.cancelAllAnimations();
	}

	this.removeAllEventListeners();

	this.disableToolTip = false;

	this._axes = [];

	this.pieDoughnutClickHandler = null;
	//this._touchCurrentCoordinates = null;

	if (this.animationRequestId)
		this.cancelRequestAnimFrame.call(window, this.animationRequestId);

	this._updateOptions();

	this.animatedRender = __WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */] && this.animationEnabled && (this.renderCount === 0);

	this._updateSize();

	//this._selectedColorSet = colorSets["colorSet2"];

	//this.ctx.clearRect(0, 0, this.width, this.height);
	this.clearCanvas();
	this.ctx.beginPath();

	this.axisX = null;
	this.axisY = null;
	this.axisY2 = null;
	this._indexLabels = [];
	this._dataInRenderedOrder = [];

	this._events = [];
	if (this._eventManager)
		this._eventManager.reset();

	this.plotInfo = {
		axisPlacement: null,
		axisXValueType: null,
		plotTypes: []//array of plotType: {type:"", axisYType: "primary", dataSeriesIndexes:[]}
	};

	this.layoutManager = new __WEBPACK_IMPORTED_MODULE_5__layout_manager__["a" /* default */](0, 0, this.width, this.height, 2);

	if (this.plotArea.layoutManager)
		this.plotArea.layoutManager.reset();


	this.data = [];
	var dataSeriesIndex = 0;

	for (var series = 0; series < this._options.data.length; series++) {
		//for (series in this._options.data) {

		dataSeriesIndex++;

		if (!(!this._options.data[series].type || Chart._supportedChartTypes.indexOf(this._options.data[series].type) >= 0))
			continue;

		var dataSeries = new __WEBPACK_IMPORTED_MODULE_2__data_series__["a" /* default */](this, this._options.data[series], this.theme, dataSeriesIndex - 1, ++this._eventManager.lastObjectId);
		if (dataSeries.name === null)
			dataSeries.name = "DataSeries " + (dataSeriesIndex);

		if (dataSeries.color === null) {
			if (this._options.data.length > 1) {
				dataSeries._colorSet = [this._selectedColorSet[dataSeries.index % this._selectedColorSet.length]];
				dataSeries.color = this._selectedColorSet[dataSeries.index % this._selectedColorSet.length];
			} else {
				if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "area"
					|| dataSeries.type === "stepArea" || dataSeries.type === "splineArea" || dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100"
					|| dataSeries.type === "rangeArea" || dataSeries.type === "rangeSplineArea" || dataSeries.type === "candlestick" || dataSeries.type === "ohlc") {
					dataSeries._colorSet = [this._selectedColorSet[0]];
				}
				else
					dataSeries._colorSet = this._selectedColorSet;
			}
		} else {
			dataSeries._colorSet = [dataSeries.color];
		}

		if (dataSeries.markerSize === null) {
			if (((dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline") && dataSeries.dataPoints && dataSeries.dataPoints.length < this.width / 16) || dataSeries.type === "scatter") {
				//if (dataSeries.type === "line") {
				dataSeries.markerSize = 8;
			}
		}

		if ((dataSeries.type === "bubble" || dataSeries.type === "scatter") && dataSeries.dataPoints) {
			dataSeries.dataPoints.sort(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["c" /* compareDataPointX */])
		}

		//if (dataSeries.markerBorderThickness === null && dataSeries.type === "scatter") {
		//    dataSeries.markerBorderThickness = 2;
		//}

		//if (dataSeries.markerType === null) {
		//    if (dataSeries.type === "line" & dataSeries.dataPoints.length < 500) {
		//        dataSeries.markerType = "circle";
		//    }
		//}

		this.data.push(dataSeries);

		var seriesAxisPlacement = dataSeries.axisPlacement;

		//if (isDebugMode && window.console)
		//    window.console.log(dataSeries.type);

		var errorMessage;

		if (seriesAxisPlacement === "normal") {

			if (this.plotInfo.axisPlacement === "xySwapped") {
				errorMessage = "You cannot combine \"" + dataSeries.type + "\" with bar chart";
			} else if (this.plotInfo.axisPlacement === "none") {
				errorMessage = "You cannot combine \"" + dataSeries.type + "\" with pie chart";
			} else if (this.plotInfo.axisPlacement === null)
				this.plotInfo.axisPlacement = "normal";
		}
		else if (seriesAxisPlacement === "xySwapped") {

			if (this.plotInfo.axisPlacement === "normal") {
				errorMessage = "You cannot combine \"" + dataSeries.type + "\" with line, area, column or pie chart";
			} else if (this.plotInfo.axisPlacement === "none") {
				errorMessage = "You cannot combine \"" + dataSeries.type + "\" with pie chart";
			} else if (this.plotInfo.axisPlacement === null)
				this.plotInfo.axisPlacement = "xySwapped";
		}
		else if (seriesAxisPlacement == "none") {

			if (this.plotInfo.axisPlacement === "normal") {
				errorMessage = "You cannot combine \"" + dataSeries.type + "\" with line, area, column or bar chart";
			} else if (this.plotInfo.axisPlacement === "xySwapped") {
				errorMessage = "You cannot combine \"" + dataSeries.type + "\" with bar chart";
			} else if (this.plotInfo.axisPlacement === null)
				this.plotInfo.axisPlacement = "none";
		}

		if (errorMessage && window.console) {
			window.console.log(errorMessage);
			return;
		}
	}

	//if (isDebugMode && window.console) {
	//    window.console.log("xMin: " + this.plotInfo.viewPortXMin + "; xMax: " + this.plotInfo.viewPortXMax + "; yMin: " + this.plotInfo.yMin + "; yMax: " + this.plotInfo.yMax);
	//}

	this._objectsInitialized = true;
}

//indexOf is not supported in IE8-
Chart._supportedChartTypes = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["a" /* addArrayIndexOf */])(["line", "stepLine", "spline", "column", "area", "stepArea", "splineArea", "bar", "bubble", "scatter",
	"stackedColumn", "stackedColumn100", "stackedBar", "stackedBar100",
	"stackedArea", "stackedArea100",
	"candlestick",
	"ohlc",
	"rangeColumn",
	"rangeBar",
	"rangeArea",
	"rangeSplineArea",
	"pie", "doughnut", "funnel"
]);

Chart.prototype.render = function (options) {

	if (options)
		this._options = options;

	this._initialize();
	var plotAreaElements = []; //Elements to be rendered inside the plotArea

	//Create Primary and Secondary axis and assign them to the series
	for (var i = 0; i < this.data.length; i++) {

		if (this.plotInfo.axisPlacement === "normal" || this.plotInfo.axisPlacement === "xySwapped") {
			if (!this.data[i].axisYType || this.data[i].axisYType === "primary") {
				if (!this.axisY) {

					if (this.plotInfo.axisPlacement === "normal") {
						this._axes.push(this.axisY = new __WEBPACK_IMPORTED_MODULE_9__core_axis__["a" /* default */](this, this._options.axisY, "axisY", "left"));
					}
					else if (this.plotInfo.axisPlacement === "xySwapped") {
						this._axes.push(this.axisY = new __WEBPACK_IMPORTED_MODULE_9__core_axis__["a" /* default */](this, this._options.axisY, "axisY", "bottom"));
					}
				}
				this.data[i].axisY = this.axisY;
			}
			else if (this.data[i].axisYType === "secondary") {
				if (!this.axisY2) {
					if (this.plotInfo.axisPlacement === "normal") {
						this._axes.push(this.axisY2 = new __WEBPACK_IMPORTED_MODULE_9__core_axis__["a" /* default */](this, this._options.axisY2, "axisY", "right"));
					}
					else if (this.plotInfo.axisPlacement === "xySwapped") {
						this._axes.push(this.axisY2 = new __WEBPACK_IMPORTED_MODULE_9__core_axis__["a" /* default */](this, this._options.axisY2, "axisY", "top"));
					}
				}
				this.data[i].axisY = this.axisY2;
			}

			if (!this.axisX) {
				if (this.plotInfo.axisPlacement === "normal") {
					this._axes.push(this.axisX = new __WEBPACK_IMPORTED_MODULE_9__core_axis__["a" /* default */](this, this._options.axisX, "axisX", "bottom"));
				} else if (this.plotInfo.axisPlacement === "xySwapped") {
					this._axes.push(this.axisX = new __WEBPACK_IMPORTED_MODULE_9__core_axis__["a" /* default */](this, this._options.axisX, "axisX", "left"));
				}
			}

			this.data[i].axisX = this.axisX;
		}
	}

	//If Both Primary and Secondary axis are present, disable gridlines for one of them unless the user has set value for both
	if (this.axisY && this.axisY2) {
		if (this.axisY.gridThickness > 0 && typeof (this.axisY2._options.gridThickness) === "undefined")
			this.axisY2.gridThickness = 0;
		else if (this.axisY2.gridThickness > 0 && typeof (this.axisY._options.gridThickness) === "undefined")
			this.axisY.gridThickness = 0;
	}


	//Show toolBar when viewportMinimum/viewportMaximum are set
	var showToolBar = false;
	if (this._axes.length > 0 && (this.zoomEnabled || this.panEnabled)) {
		for (var i = 0; i < this._axes.length; i++) {
			if (this._axes[i].viewportMinimum !== null || this._axes[i].viewportMaximum !== null) {
				showToolBar = true;
				break;
			}
		}
	}

	if (showToolBar) {
		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["v" /* show */])(this._zoomButton, this._resetButton);
	} else {
		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["q" /* hide */])(this._zoomButton, this._resetButton);
	}


	this._processData();// Categorises the dataSeries and calculates min, max and other values

	if (this._options.title) {
		this._title = new __WEBPACK_IMPORTED_MODULE_10__core_title__["a" /* default */](this, this._options.title);

		if (!this._title.dockInsidePlotArea)
			this._title.render();
		else
			plotAreaElements.push(this._title);
	}

	if (this._options.subtitles) {
		for (var i = 0; i < this._options.subtitles.length; i++) {

			this.subtitles = [];

			var subtitle = new Subtitle(this, this._options.subtitles[i]);
			this.subtitles.push(subtitle);

			if (!subtitle.dockInsidePlotArea)
				subtitle.render();
			else
				plotAreaElements.push(subtitle);
		}
	}

	this.legend = new __WEBPACK_IMPORTED_MODULE_11__core_legend__["a" /* default */](this, this._options.legend, this.theme);
	for (var i = 0; i < this.data.length; i++) {
		if (this.data[i].showInLegend || this.data[i].type === "pie" || this.data[i].type === "doughnut") {
			this.legend.dataSeries.push(this.data[i]);
		}
	}

	if (!this.legend.dockInsidePlotArea)
		this.legend.render();
	else
		plotAreaElements.push(this.legend);

	//TBI: Revisit and check if the functionality is enough.
	if (this.plotInfo.axisPlacement === "normal" || this.plotInfo.axisPlacement === "xySwapped") {

		//var freeSpace = this.layoutManager.getFreeSpace();

		__WEBPACK_IMPORTED_MODULE_9__core_axis__["a" /* default */].setLayoutAndRender(this.axisX, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
	} else if (this.plotInfo.axisPlacement === "none") {
		//In case of charts with axis this method is called inside setLayoutAndRender
		this.preparePlotArea();
	}
	else {
		return;
	}

	var index = 0;
	for (index in plotAreaElements) {
		if(plotAreaElements.hasOwnProperty(index))
		plotAreaElements[index].render();
	}

	var animations = [];
	if (this.animatedRender) {
		var initialState = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["d" /* createCanvas */])(this.width, this.height);
		var initialStateCtx = initialState.getContext("2d");
		initialStateCtx.drawImage(this.canvas, 0, 0, this.width, this.height);
	}

	for (var i = 0; i < this.plotInfo.plotTypes.length; i++) {
		var plotType = this.plotInfo.plotTypes[i];

		for (var j = 0; j < plotType.plotUnits.length; j++) {

			var plotUnit = plotType.plotUnits[j];
			var animationInfo = null;

			plotUnit.targetCanvas = null; //In case chart updates before the animation is complete, previous canvases need to be removed

			if (this.animatedRender) {
				plotUnit.targetCanvas = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["d" /* createCanvas */])(this.width, this.height);
				plotUnit.targetCanvasCtx = plotUnit.targetCanvas.getContext("2d");
			}

			if (plotUnit.type === "line")
				animationInfo = this.renderLine(plotUnit);
			else if (plotUnit.type === "stepLine")
				animationInfo = this.renderStepLine(plotUnit);
			else if (plotUnit.type === "spline")
				animationInfo = this.renderSpline(plotUnit);
			else if (plotUnit.type === "column")
				animationInfo = this.renderColumn(plotUnit);
			else if (plotUnit.type === "bar")
				animationInfo = this.renderBar(plotUnit);
			else if (plotUnit.type === "area")
				animationInfo = this.renderArea(plotUnit);
			else if (plotUnit.type === "stepArea")
				animationInfo = this.renderStepArea(plotUnit);
			else if (plotUnit.type === "splineArea")
				animationInfo = this.renderSplineArea(plotUnit);
			else if (plotUnit.type === "stackedColumn")
				animationInfo = this.renderStackedColumn(plotUnit);
			else if (plotUnit.type === "stackedColumn100")
				animationInfo = this.renderStackedColumn100(plotUnit);
			else if (plotUnit.type === "stackedBar")
				animationInfo = this.renderStackedBar(plotUnit);
			else if (plotUnit.type === "stackedBar100")
				animationInfo = this.renderStackedBar100(plotUnit);
			else if (plotUnit.type === "stackedArea")
				animationInfo = this.renderStackedArea(plotUnit);
			else if (plotUnit.type === "stackedArea100")
				animationInfo = this.renderStackedArea100(plotUnit);
			else if (plotUnit.type === "bubble")
				animationInfo = animationInfo = this.renderBubble(plotUnit);
			else if (plotUnit.type === "scatter")
				animationInfo = this.renderScatter(plotUnit);
			else if (plotUnit.type === "pie")
				this.renderPie(plotUnit);
			else if (plotUnit.type === "doughnut")
				this.renderPie(plotUnit);
			else if (plotUnit.type === "candlestick")
				animationInfo = this.renderCandlestick(plotUnit);
			else if (plotUnit.type === "ohlc")
				animationInfo = this.renderCandlestick(plotUnit);
			else if (plotUnit.type === "rangeColumn")
				animationInfo = this.renderRangeColumn(plotUnit);
			else if (plotUnit.type === "rangeBar")
				animationInfo = this.renderRangeBar(plotUnit);
			else if (plotUnit.type === "rangeArea")
				animationInfo = this.renderRangeArea(plotUnit);
			else if (plotUnit.type === "rangeSplineArea")
				animationInfo = this.renderRangeSplineArea(plotUnit);

			for (var k = 0; k < plotUnit.dataSeriesIndexes.length; k++) {
				this._dataInRenderedOrder.push(this.data[plotUnit.dataSeriesIndexes[k]]);
			}

			if (this.animatedRender && animationInfo)
				animations.push(animationInfo);
		}
	}

	if (this.animatedRender && this._indexLabels.length > 0) {
		var indexLabelCanvas = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["d" /* createCanvas */])(this.width, this.height);
		var indexLabelCanvasCtx = indexLabelCanvas.getContext("2d");
		animations.push(this.renderIndexLabels(indexLabelCanvasCtx));
	}

	var _this = this;

	if (animations.length > 0) {
		//var animationCount = 0;
		_this.disableToolTip = true;
		_this._animator.animate(200, _this.animationDuration, function (fractionComplete) {

			//console.log(fractionComplete);
			//animationCount++;

			_this.ctx.clearRect(0, 0, _this.width, _this.height);


			//  _this.ctx.drawImage(initialState, 0, 0, _this.width * devicePixelBackingStoreRatio, _this.height * devicePixelBackingStoreRatio, 0, 0, _this.width, _this.height);
			_this.ctx.drawImage(initialState, 0, 0, Math.floor(_this.width * __WEBPACK_IMPORTED_MODULE_15__helpers_utils__["devicePixelBackingStoreRatio"]), Math.floor(_this.height * __WEBPACK_IMPORTED_MODULE_15__helpers_utils__["devicePixelBackingStoreRatio"]), 0, 0, _this.width, _this.height);

			for (var l = 0; l < animations.length; l++) {

				animationInfo = animations[l];

				if (fractionComplete < 1 && typeof (animationInfo.startTimePercent) !== "undefined") {
					if (fractionComplete >= animationInfo.startTimePercent) {
						//animationInfo.animationCallback(AnimationHelper.easing.linear(fractionComplete - animationInfo.startTimePercent, 0, 1, 1 - animationInfo.startTimePercent), animationInfo);

						animationInfo.animationCallback(animationInfo.easingFunction(fractionComplete - animationInfo.startTimePercent, 0, 1, 1 - animationInfo.startTimePercent), animationInfo);
					}
				} else {

					animationInfo.animationCallback(animationInfo.easingFunction(fractionComplete, 0, 1, 1), animationInfo);
				}
			}

			_this.dispatchEvent("dataAnimationIterationEnd",
								{
									chart: _this
								});

		}, function () {

			animations = [];

			var count = 0;

			//Delete all render target canvases used for animation.
			for (var i = 0; i < _this.plotInfo.plotTypes.length; i++) {
				var plotType = _this.plotInfo.plotTypes[i];

				for (var j = 0; j < plotType.plotUnits.length; j++) {
					var plotUnit = plotType.plotUnits[j];
					plotUnit.targetCanvas = null;
				}
			}

			initialState = null;
			_this.disableToolTip = false;
			//console.log("*********** Animation Complete - " + animationCount + " ***********");

		});
	} else {
		if (_this._indexLabels.length > 0)
			_this.renderIndexLabels();

		_this.dispatchEvent("dataAnimationIterationEnd",
				{
					chart: _this
				});
	}

	this.attachPlotAreaEventHandlers();

	if (!this.zoomEnabled && !this.panEnabled && this._zoomButton && this._zoomButton.style.display !== "none") {
		Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["q" /* hide */])(this._zoomButton, this._resetButton);
	}

	this._toolTip._updateToolTip();

	this.renderCount++;

	//if (window.console) {
	//    window.console.log(new Date().getTime() - dt);
	//}

	if (__WEBPACK_IMPORTED_MODULE_14__constants_options__["b" /* isDebugMode */]) {

		var _this = this;
		setTimeout(function () {
			var ghostCanvasCopy = document.getElementById("ghostCanvasCopy");

			if (ghostCanvasCopy) {
				//console.log(ghostCanvasCopy.clientWidth);
				Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["u" /* setCanvasSize */])(ghostCanvasCopy, _this.width, _this.height);
				var ghostCanvasCopyCtx = ghostCanvasCopy.getContext("2d");

				//ghostCanvasCopyCtx.scale(1, 1);
				//var imageData = this._eventManager.ghostCtx.getImageData(0, 0, this._container.clientWidth, this._container.clientHeight);
				//this._eventManager.ghostCtx.drawImage(this._eventManager.ghostCanvas, 0, 0);
				//this.ctx.drawImage(this._eventManager.ghostCanvas, 0, 0);

				ghostCanvasCopyCtx.drawImage(_this._eventManager.ghostCanvas, 0, 0);
				//_this._canvasJSContainer.appendChild(_this._eventManager.ghostCanvas);
				//_this.overlaidCanvasCtx.drawImage(_this._eventManager.ghostCanvas, 0, 0);
			}
		}, 2000);
	}
}

Chart.prototype.attachPlotAreaEventHandlers = function () {

	//this._toolBar.style.display = "inline";

	this.attachEvent({
		context: this,
		chart: this,
		mousedown: this._plotAreaMouseDown,
		mouseup: this._plotAreaMouseUp,
		mousemove: this._plotAreaMouseMove,
		cursor: this.zoomEnabled ? "col-resize" : "move",
		cursor: this.panEnabled ? "move" : "default",
		capture: true,
		bounds: this.plotArea
	});

}

Chart.prototype.categoriseDataSeries = function () {
	var dataSeries = "";

	for (var i = 0; i < this.data.length; i++) {
		dataSeries = this.data[i]
		if (!dataSeries.dataPoints || dataSeries.dataPoints.length === 0 || !dataSeries.visible)
			continue;

		if (Chart._supportedChartTypes.indexOf(dataSeries.type) >= 0) {

			var plotType = null;
			var plotTypeExists = false;

			var plotUnit = null;
			var plotUnitExists = false;

			for (var j = 0; j < this.plotInfo.plotTypes.length; j++) {
				if (this.plotInfo.plotTypes[j].type === dataSeries.type) {
					plotTypeExists = true;
					var plotType = this.plotInfo.plotTypes[j];
					break;
				}
			}

			if (!plotTypeExists) {
				plotType = {
					type: dataSeries.type,
					totalDataSeries: 0,
					plotUnits: []
				};
				this.plotInfo.plotTypes.push(plotType)
			}

			for (var j = 0; j < plotType.plotUnits.length; j++) {
				if (plotType.plotUnits[j].axisYType === dataSeries.axisYType) {
					plotUnitExists = true;
					var plotUnit = plotType.plotUnits[j];
					break;
				}
			}

			if (!plotUnitExists) {
				plotUnit = {
					type: dataSeries.type,
					previousDataSeriesCount: 0, //to be set next
					index: plotType.plotUnits.length,
					plotType: plotType,
					axisYType: dataSeries.axisYType,
					axisY: dataSeries.axisYType === "primary" ? this.axisY : this.axisY2,
					axisX: this.axisX,
					dataSeriesIndexes: [], //index of dataSeries
					yTotals: []
				}
				plotType.plotUnits.push(plotUnit);
			}

			plotType.totalDataSeries++;

			plotUnit.dataSeriesIndexes.push(i);

			dataSeries.plotUnit = plotUnit;
		}
	}

	for (var i = 0; i < this.plotInfo.plotTypes.length; i++) {
		var plotType = this.plotInfo.plotTypes[i];
		var previousDataSeriesCount = 0;

		for (var j = 0; j < plotType.plotUnits.length; j++) {

			plotType.plotUnits[j].previousDataSeriesCount = previousDataSeriesCount;

			previousDataSeriesCount += plotType.plotUnits[j].dataSeriesIndexes.length;
		}
	}
}

Chart.prototype.assignIdToDataPoints = function () {

	for (var i = 0; i < this.data.length; i++) {
		var dataSeries = this.data[i];

		if (!dataSeries.dataPoints)
			continue;

		var length = dataSeries.dataPoints.length;

		for (var j = 0; j < length; j++) {
			dataSeries.dataPointIds[j] = ++this._eventManager.lastObjectId;
		}
	}
}

Chart.prototype._processData = function () {
	this.assignIdToDataPoints();
	this.categoriseDataSeries();

	for (var i = 0; i < this.plotInfo.plotTypes.length; i++) {
		var plotType = this.plotInfo.plotTypes[i];

		for (var j = 0; j < plotType.plotUnits.length; j++) {

			var plotUnit = plotType.plotUnits[j];

			if (plotUnit.type === "line" || plotUnit.type === "stepLine" || plotUnit.type === "spline" || plotUnit.type === "column" || plotUnit.type === "area" || plotUnit.type === "stepArea" || plotUnit.type === "splineArea" || plotUnit.type === "bar" || plotUnit.type === "bubble" || plotUnit.type === "scatter")
				this._processMultiseriesPlotUnit(plotUnit);
			else if (plotUnit.type === "stackedColumn" || plotUnit.type === "stackedBar" || plotUnit.type === "stackedArea")
				this._processStackedPlotUnit(plotUnit);
			else if (plotUnit.type === "stackedColumn100" || plotUnit.type === "stackedBar100" || plotUnit.type === "stackedArea100")
				this._processStacked100PlotUnit(plotUnit);
			else if (plotUnit.type === "candlestick" || plotUnit.type === "ohlc" || plotUnit.type === "rangeColumn" || plotUnit.type === "rangeBar" || plotUnit.type === "rangeArea" || plotUnit.type === "rangeSplineArea")
				this._processMultiYPlotUnit(plotUnit);
		}
	}

}

Chart.prototype._processMultiseriesPlotUnit = function (plotUnit) {
	if (!plotUnit.dataSeriesIndexes || plotUnit.dataSeriesIndexes.length < 1)
		return;

	var axisYDataInfo = plotUnit.axisY.dataInfo;
	var axisXDataInfo = plotUnit.axisX.dataInfo;
	var dataPointX, dataPointY;
	var isDateTime = false;


	for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {
		var dataSeries = this.data[plotUnit.dataSeriesIndexes[j]];
		var i = 0;
		var isFirstDPInViewPort = false;
		var isLastDPInViewPort = false;

		if (dataSeries.axisPlacement === "normal" || dataSeries.axisPlacement === "xySwapped") {

			var plotAreaXMin = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : (this._options.axisX && this._options.axisX.viewportMinimum) ?
				this._options.axisX.viewportMinimum : (this._options.axisX && this._options.axisX.minimum) ? this._options.axisX.minimum : -Infinity;

			var plotAreaXMax = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : (this._options.axisX && this._options.axisX.viewportMaximum) ?
				this._options.axisX.viewportMaximum : (this._options.axisX && this._options.axisX.maximum) ? this._options.axisX.maximum : Infinity;
		}


		if (dataSeries.dataPoints[i].x && dataSeries.dataPoints[i].x.getTime || dataSeries.xValueType === "dateTime") {
			isDateTime = true;
		}

		for (i = 0; i < dataSeries.dataPoints.length; i++) {

			if (typeof dataSeries.dataPoints[i].x === "undefined") {
				dataSeries.dataPoints[i].x = i;
			}

			if (dataSeries.dataPoints[i].x.getTime) {
				isDateTime = true;
				dataPointX = dataSeries.dataPoints[i].x.getTime();//dataPointX is used so that getTime is called only once in case of dateTime values
			}
			else
				dataPointX = dataSeries.dataPoints[i].x;

			dataPointY = dataSeries.dataPoints[i].y;


			if (dataPointX < axisXDataInfo.min)
				axisXDataInfo.min = dataPointX;
			if (dataPointX > axisXDataInfo.max)
				axisXDataInfo.max = dataPointX;

			if (dataPointY < axisYDataInfo.min)
				axisYDataInfo.min = dataPointY;

			if (dataPointY > axisYDataInfo.max)
				axisYDataInfo.max = dataPointY;


			if (i > 0) {
				var xDiff = dataPointX - dataSeries.dataPoints[i - 1].x;
				xDiff < 0 && (xDiff = xDiff * -1); //If Condition shortcut

				if (axisXDataInfo.minDiff > xDiff && xDiff !== 0) {
					axisXDataInfo.minDiff = xDiff;
				}

				if (dataPointY !== null && dataSeries.dataPoints[i - 1].y !== null) {
					var yDiff = dataPointY - dataSeries.dataPoints[i - 1].y;
					yDiff < 0 && (yDiff = yDiff * -1); //If Condition shortcut

					if (axisYDataInfo.minDiff > yDiff && yDiff !== 0) {
						axisYDataInfo.minDiff = yDiff;
			}
				}
			}

			// This section makes sure that partially visible dataPoints are included in the begining
			if (dataPointX < plotAreaXMin && !isFirstDPInViewPort) {
				continue;
			} else if (!isFirstDPInViewPort) {
				isFirstDPInViewPort = true;

				if (i > 0) {
					i -= 2;
					continue;
				}
			}

			// This section makes sure that partially visible dataPoints are included at the end
			if (dataPointX > plotAreaXMax && !isLastDPInViewPort) {
				isLastDPInViewPort = true;
			} else if (dataPointX > plotAreaXMax && isLastDPInViewPort) {
				continue;
			}

			if (dataSeries.dataPoints[i].label)
				plotUnit.axisX.labels[dataPointX] = dataSeries.dataPoints[i].label;


			if (dataPointX < axisXDataInfo.viewPortMin)
				axisXDataInfo.viewPortMin = dataPointX;
			if (dataPointX > axisXDataInfo.viewPortMax)
				axisXDataInfo.viewPortMax = dataPointX;

			if (dataPointY === null)
				continue;

			if (dataPointY < axisYDataInfo.viewPortMin)
				axisYDataInfo.viewPortMin = dataPointY;
			if (dataPointY > axisYDataInfo.viewPortMax)
				axisYDataInfo.viewPortMax = dataPointY;
		}

		this.plotInfo.axisXValueType = dataSeries.xValueType = isDateTime ? "dateTime" : "number";
	}

	//this.dataPoints.sort(compareDataPointX);
	//this.dataPoints.sort(function (dataPoint1, dataPoint2) { return dataPoint1.x - dataPoint2.x; });
}

Chart.prototype._processStackedPlotUnit = function (plotUnit) {

	if (!plotUnit.dataSeriesIndexes || plotUnit.dataSeriesIndexes.length < 1)
		return;

	var axisYDataInfo = plotUnit.axisY.dataInfo;
	var axisXDataInfo = plotUnit.axisX.dataInfo;

	var dataPointX, dataPointY;
	var isDateTime = false;

	var dataPointYPositiveSums = [];
	var dataPointYNegativeSums = [];

	for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {
		var dataSeries = this.data[plotUnit.dataSeriesIndexes[j]];
		var i = 0;
		var isFirstDPInViewPort = false;
		var isLastDPInViewPort = false;

		if (dataSeries.axisPlacement === "normal" || dataSeries.axisPlacement === "xySwapped") {

			var plotAreaXMin = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : (this._options.axisX && this._options.axisX.viewportMinimum) ?
				this._options.axisX.viewportMinimum : (this._options.axisX && this._options.axisX.minimum) ? this._options.axisX.minimum : -Infinity;

			var plotAreaXMax = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : (this._options.axisX && this._options.axisX.viewportMaximum) ?
				this._options.axisX.viewportMaximum : (this._options.axisX && this._options.axisX.maximum) ? this._options.axisX.maximum : Infinity;
		}


		if (dataSeries.dataPoints[i].x && dataSeries.dataPoints[i].x.getTime || dataSeries.xValueType === "dateTime") {
			isDateTime = true;
		}

		for (i = 0; i < dataSeries.dataPoints.length; i++) {

			// Requird when no x values are provided
			if (typeof dataSeries.dataPoints[i].x === "undefined") {
				dataSeries.dataPoints[i].x = i;
			}

			if (dataSeries.dataPoints[i].x.getTime) {
				isDateTime = true;
				dataPointX = dataSeries.dataPoints[i].x.getTime();//dataPointX is used so that getTime is called only once in case of dateTime values
			}
			else
				dataPointX = dataSeries.dataPoints[i].x;

			dataPointY = dataSeries.dataPoints[i].y;



			if (dataPointX < axisXDataInfo.min)
				axisXDataInfo.min = dataPointX;
			if (dataPointX > axisXDataInfo.max)
				axisXDataInfo.max = dataPointX;

			if (i > 0) {
				var xDiff = dataPointX - dataSeries.dataPoints[i - 1].x;
				xDiff < 0 && (xDiff = xDiff * -1); //If Condition shortcut

				if (axisXDataInfo.minDiff > xDiff && xDiff !== 0) {
					axisXDataInfo.minDiff = xDiff;
				}

				if (dataPointY !== null && dataSeries.dataPoints[i - 1].y !== null) {
					var yDiff = dataPointY - dataSeries.dataPoints[i - 1].y;
					yDiff < 0 && (yDiff = yDiff * -1); //If Condition shortcut

					if (axisYDataInfo.minDiff > yDiff && yDiff !== 0) {
						axisYDataInfo.minDiff = yDiff;
			}
				}
			}

			// This section makes sure that partially visible dataPoints are included in the begining
			if (dataPointX < plotAreaXMin && !isFirstDPInViewPort) {
				continue;
			} else if (!isFirstDPInViewPort) {
				isFirstDPInViewPort = true;

				if (i > 0) {
					i -= 2;
					continue;
				}
			}

			// This section makes sure that partially visible dataPoints are included at the end
			if (dataPointX > plotAreaXMax && !isLastDPInViewPort) {
				isLastDPInViewPort = true;
			} else if (dataPointX > plotAreaXMax && isLastDPInViewPort) {
				continue;
			}


			if (dataSeries.dataPoints[i].label)
				plotUnit.axisX.labels[dataPointX] = dataSeries.dataPoints[i].label;

			if (dataPointX < axisXDataInfo.viewPortMin)
				axisXDataInfo.viewPortMin = dataPointX;
			if (dataPointX > axisXDataInfo.viewPortMax)
				axisXDataInfo.viewPortMax = dataPointX;

			if (dataPointY === null)
				continue;

			plotUnit.yTotals[dataPointX] = (!plotUnit.yTotals[dataPointX] ? 0 : plotUnit.yTotals[dataPointX]) + Math.abs(dataPointY);

			if (dataPointY >= 0) {
				if (dataPointYPositiveSums[dataPointX])
					dataPointYPositiveSums[dataPointX] += dataPointY;
				else
					dataPointYPositiveSums[dataPointX] = dataPointY;
			} else {
				if (dataPointYNegativeSums[dataPointX])
					dataPointYNegativeSums[dataPointX] += dataPointY;
				else
					dataPointYNegativeSums[dataPointX] = dataPointY;
			}
		}

		this.plotInfo.axisXValueType = dataSeries.xValueType = isDateTime ? "dateTime" : "number";
	}

	for (i in dataPointYPositiveSums) {
		if (dataPointYPositiveSums.hasOwnProperty(i)) {
		if (isNaN(i)) {
			continue;
		}
		var ySum = dataPointYPositiveSums[i];

		if (ySum < axisYDataInfo.min)
			axisYDataInfo.min = ySum;

		if (ySum > axisYDataInfo.max)
			axisYDataInfo.max = ySum;

		if (i < axisXDataInfo.viewPortMin || i > axisXDataInfo.viewPortMax)
			continue;

		if (ySum < axisYDataInfo.viewPortMin)
			axisYDataInfo.viewPortMin = ySum;
		if (ySum > axisYDataInfo.viewPortMax)
			axisYDataInfo.viewPortMax = ySum;
	}

	}

	for (i in dataPointYNegativeSums) {

		if (dataPointYNegativeSums.hasOwnProperty(i)) {
		if (isNaN(i)) {
			continue;
		}

		var ySum = dataPointYNegativeSums[i];

		if (ySum < axisYDataInfo.min)
			axisYDataInfo.min = ySum;

		if (ySum > axisYDataInfo.max)
			axisYDataInfo.max = ySum;

		if (i < axisXDataInfo.viewPortMin || i > axisXDataInfo.viewPortMax)
			continue;

		if (ySum < axisYDataInfo.viewPortMin)
			axisYDataInfo.viewPortMin = ySum;
		if (ySum > axisYDataInfo.viewPortMax)
			axisYDataInfo.viewPortMax = ySum;
	}

	}


	//this.dataPoints.sort(compareDataPointX);
	//this.dataPoints.sort(function (dataPoint1, dataPoint2) { return dataPoint1.x - dataPoint2.x; });

	//window.console.log("viewPortYMin: " + plotInfo.viewPortYMin + "; viewPortYMax: " + plotInfo.viewPortYMax);
}

Chart.prototype._processStacked100PlotUnit = function (plotUnit) {
	if (!plotUnit.dataSeriesIndexes || plotUnit.dataSeriesIndexes.length < 1)
		return;

	var axisYDataInfo = plotUnit.axisY.dataInfo;
	var axisXDataInfo = plotUnit.axisX.dataInfo;

	var dataPointX, dataPointY;
	var isDateTime = false;
	var containsPositiveY = false;
	var containsNegativeY = false;

	var dataPointYSums = [];

	for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {
		var dataSeries = this.data[plotUnit.dataSeriesIndexes[j]];
		var i = 0;
		var isFirstDPInViewPort = false;
		var isLastDPInViewPort = false;

		if (dataSeries.axisPlacement === "normal" || dataSeries.axisPlacement === "xySwapped") {

			var plotAreaXMin = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : (this._options.axisX && this._options.axisX.viewportMinimum) ?
				this._options.axisX.viewportMinimum : (this._options.axisX && this._options.axisX.minimum) ? this._options.axisX.minimum : -Infinity;

			var plotAreaXMax = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : (this._options.axisX && this._options.axisX.viewportMaximum) ?
				this._options.axisX.viewportMaximum : (this._options.axisX && this._options.axisX.maximum) ? this._options.axisX.maximum : Infinity;
		}


		if (dataSeries.dataPoints[i].x && dataSeries.dataPoints[i].x.getTime || dataSeries.xValueType === "dateTime") {
			isDateTime = true;
		}

		for (i = 0; i < dataSeries.dataPoints.length; i++) {

			// Requird when no x values are provided
			if (typeof dataSeries.dataPoints[i].x === "undefined") {
				dataSeries.dataPoints[i].x = i;
			}

			if (dataSeries.dataPoints[i].x.getTime) {
				isDateTime = true;
				dataPointX = dataSeries.dataPoints[i].x.getTime();//dataPointX is used so that getTime is called only once in case of dateTime values
			}
			else
				dataPointX = dataSeries.dataPoints[i].x;

			dataPointY = dataSeries.dataPoints[i].y;



			if (dataPointX < axisXDataInfo.min)
				axisXDataInfo.min = dataPointX;
			if (dataPointX > axisXDataInfo.max)
				axisXDataInfo.max = dataPointX;

			if (i > 0) {
				var xDiff = dataPointX - dataSeries.dataPoints[i - 1].x;
				xDiff < 0 && (xDiff = xDiff * -1); //If Condition shortcut

				if (axisXDataInfo.minDiff > xDiff && xDiff !== 0) {
					axisXDataInfo.minDiff = xDiff;
				}

				if (dataPointY !== null && dataSeries.dataPoints[i - 1].y !== null) {
					var yDiff = dataPointY - dataSeries.dataPoints[i - 1].y;
					yDiff < 0 && (yDiff = yDiff * -1); //If Condition shortcut

					if (axisYDataInfo.minDiff > yDiff && yDiff !== 0) {
						axisYDataInfo.minDiff = yDiff;
			}
				}
			}

			// This section makes sure that partially visible dataPoints are included in the begining
			if (dataPointX < plotAreaXMin && !isFirstDPInViewPort) {
				continue;
			} else if (!isFirstDPInViewPort) {
				isFirstDPInViewPort = true;

				if (i > 0) {
					i -= 2;
					continue;
				}
			}

			// This section makes sure that partially visible dataPoints are included at the end
			if (dataPointX > plotAreaXMax && !isLastDPInViewPort) {
				isLastDPInViewPort = true;
			} else if (dataPointX > plotAreaXMax && isLastDPInViewPort) {
				continue;
			}

			if (dataSeries.dataPoints[i].label)
				plotUnit.axisX.labels[dataPointX] = dataSeries.dataPoints[i].label;

			if (dataPointX < axisXDataInfo.viewPortMin)
				axisXDataInfo.viewPortMin = dataPointX;
			if (dataPointX > axisXDataInfo.viewPortMax)
				axisXDataInfo.viewPortMax = dataPointX;

			if (dataPointY === null)
				continue;

			plotUnit.yTotals[dataPointX] = (!plotUnit.yTotals[dataPointX] ? 0 : plotUnit.yTotals[dataPointX]) + Math.abs(dataPointY);

			if (dataPointY >= 0) {
				containsPositiveY = true;
			} else {
				containsNegativeY = true;
			}

			if (dataPointYSums[dataPointX])
				dataPointYSums[dataPointX] += Math.abs(dataPointY);
			else
				dataPointYSums[dataPointX] = Math.abs(dataPointY);
		}

		this.plotInfo.axisXValueType = dataSeries.xValueType = isDateTime ? "dateTime" : "number";
	}


	if (containsPositiveY && !containsNegativeY) {
		axisYDataInfo.max = 99;
		axisYDataInfo.min = 1;
	} else if (containsPositiveY && containsNegativeY) {
		axisYDataInfo.max = 99;
		axisYDataInfo.min = -99;
	} else if (!containsPositiveY && containsNegativeY) {
		axisYDataInfo.max = -1;
		axisYDataInfo.min = -99;
	}

	axisYDataInfo.viewPortMin = axisYDataInfo.min;
	axisYDataInfo.viewPortMax = axisYDataInfo.max;

	plotUnit.dataPointYSums = dataPointYSums;

	//this.dataPoints.sort(compareDataPointX);
	//this.dataPoints.sort(function (dataPoint1, dataPoint2) { return dataPoint1.x - dataPoint2.x; });

	//window.console.log("viewPortYMin: " + plotInfo.viewPortYMin + "; viewPortYMax: " + plotInfo.viewPortYMax);
}

Chart.prototype._processMultiYPlotUnit = function (plotUnit) {
	if (!plotUnit.dataSeriesIndexes || plotUnit.dataSeriesIndexes.length < 1)
		return;

	var axisYDataInfo = plotUnit.axisY.dataInfo;
	var axisXDataInfo = plotUnit.axisX.dataInfo;
	var dataPointX, dataPointY, dataPointYMin, dataPointYMax;
	var isDateTime = false;


	for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {
		var dataSeries = this.data[plotUnit.dataSeriesIndexes[j]];
		var i = 0;
		var isFirstDPInViewPort = false;
		var isLastDPInViewPort = false;

		if (dataSeries.axisPlacement === "normal" || dataSeries.axisPlacement === "xySwapped") {

			var plotAreaXMin = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : (this._options.axisX && this._options.axisX.viewportMinimum) ?
				this._options.axisX.viewportMinimum : (this._options.axisX && this._options.axisX.minimum) ? this._options.axisX.minimum : -Infinity;

			var plotAreaXMax = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : (this._options.axisX && this._options.axisX.viewportMaximum) ?
				this._options.axisX.viewportMaximum : (this._options.axisX && this._options.axisX.maximum) ? this._options.axisX.maximum : Infinity;
		}


		if (dataSeries.dataPoints[i].x && dataSeries.dataPoints[i].x.getTime || dataSeries.xValueType === "dateTime") {
			isDateTime = true;
		}

		for (i = 0; i < dataSeries.dataPoints.length; i++) {

			if (typeof dataSeries.dataPoints[i].x === "undefined") {
				dataSeries.dataPoints[i].x = i;
			}

			if (dataSeries.dataPoints[i].x.getTime) {
				isDateTime = true;
				dataPointX = dataSeries.dataPoints[i].x.getTime();//dataPointX is used so that getTime is called only once in case of dateTime values
			}
			else
				dataPointX = dataSeries.dataPoints[i].x;

			dataPointY = dataSeries.dataPoints[i].y;

			if (dataPointY && dataPointY.length) {
				dataPointYMin = Math.min.apply(null, dataPointY);
				dataPointYMax = Math.max.apply(null, dataPointY);
			}


			if (dataPointX < axisXDataInfo.min)
				axisXDataInfo.min = dataPointX;
			if (dataPointX > axisXDataInfo.max)
				axisXDataInfo.max = dataPointX;

			if (dataPointYMin < axisYDataInfo.min)
				axisYDataInfo.min = dataPointYMin;

			if (dataPointYMax > axisYDataInfo.max)
				axisYDataInfo.max = dataPointYMax;


			if (i > 0) {
				var xDiff = dataPointX - dataSeries.dataPoints[i - 1].x;
				xDiff < 0 && (xDiff = xDiff * -1); //If Condition shortcut

				if (axisXDataInfo.minDiff > xDiff && xDiff !== 0) {
					axisXDataInfo.minDiff = xDiff;
				}

				if (dataPointY[0] !== null && dataSeries.dataPoints[i - 1].y[0] !== null) {
					var yDiff = dataPointY[0] - dataSeries.dataPoints[i - 1].y[0];
					yDiff < 0 && (yDiff = yDiff * -1); //If Condition shortcut

					if (axisYDataInfo.minDiff > yDiff && yDiff !== 0) {
						axisYDataInfo.minDiff = yDiff;
			}
				}
			}

			// This section makes sure that partially visible dataPoints are included in the begining
			if (dataPointX < plotAreaXMin && !isFirstDPInViewPort) {
				continue;
			} else if (!isFirstDPInViewPort) {
				isFirstDPInViewPort = true;

				if (i > 0) {
					i -= 2;
					continue;
				}
			}

			// This section makes sure that partially visible dataPoints are included at the end
			if (dataPointX > plotAreaXMax && !isLastDPInViewPort) {
				isLastDPInViewPort = true;
			} else if (dataPointX > plotAreaXMax && isLastDPInViewPort) {
				continue;
			}

			if (dataSeries.dataPoints[i].label)
				plotUnit.axisX.labels[dataPointX] = dataSeries.dataPoints[i].label;


			if (dataPointX < axisXDataInfo.viewPortMin)
				axisXDataInfo.viewPortMin = dataPointX;
			if (dataPointX > axisXDataInfo.viewPortMax)
				axisXDataInfo.viewPortMax = dataPointX;

			if (dataPointY === null)
				continue;

			if (dataPointYMin < axisYDataInfo.viewPortMin)
				axisYDataInfo.viewPortMin = dataPointYMin;
			if (dataPointYMax > axisYDataInfo.viewPortMax)
				axisYDataInfo.viewPortMax = dataPointYMax;
		}

		this.plotInfo.axisXValueType = dataSeries.xValueType = isDateTime ? "dateTime" : "number";
	}

	//this.dataPoints.sort(compareDataPointX);
	//this.dataPoints.sort(function (dataPoint1, dataPoint2) { return dataPoint1.x - dataPoint2.x; });
}

//getClosest returns objects nearby and hence shouldn't be used for events like click, mouseover, mousemove, etc which require object that is exactly under the mouse.
Chart.prototype.getDataPointAtXY = function (mouseX, mouseY, getClosest) {

	getClosest = getClosest || false;
	var results = [];

	for (var i = this._dataInRenderedOrder.length - 1; i >= 0; i--) {
		var dataSeries = this._dataInRenderedOrder[i];

		var result = null;

		result = dataSeries.getDataPointAtXY(mouseX, mouseY, getClosest);
		if (result)
			results.push(result);
	}

	var closestResult = null;
	var onlyLineAreaTypes = false;

	for (var m = 0; m < results.length; m++) {

		if (results[m].dataSeries.type === "line" || results[m].dataSeries.type === "stepLine" || results[m].dataSeries.type === "area" || results[m].dataSeries.type === "stepArea") {
			var markerSize = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["p" /* getProperty */])("markerSize", results[m].dataPoint, results[m].dataSeries) || 8;
			if (results[m].distance <= markerSize / 2) {
				onlyLineAreaTypes = true;
				break;
			}
		}
	}

	for (m = 0; m < results.length; m++) {

		if (onlyLineAreaTypes && results[m].dataSeries.type !== "line" && results[m].dataSeries.type !== "stepLine" && results[m].dataSeries.type !== "area" && results[m].dataSeries.type !== "stepArea")
			continue;

		if (!closestResult) {
			closestResult = results[m];
		} else if (results[m].distance <= closestResult.distance) {
			closestResult = results[m];
		}
	}

	return closestResult;
}

Chart.prototype.getObjectAtXY = function (mouseX, mouseY, getClosest) {
	getClosest = getClosest || false;

	var id = null;

	var dataPointInfo = this.getDataPointAtXY(mouseX, mouseY, getClosest);

	if (dataPointInfo) {
		id = dataPointInfo.dataSeries.dataPointIds[dataPointInfo.dataPointIndex];
	} else if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {//IE9+
		id = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["o" /* getObjectId */])(mouseX, mouseY, this._eventManager.ghostCtx);
	}
	else {
		for (var i = 0; i < this.legend.items.length; i++) {
			var item = this.legend.items[i];

			if (mouseX >= item.x1 && mouseX <= item.x2 && mouseY >= item.y1 && mouseY <= item.y2) {
				id = item.id;
			}
		}
	}

	return id;
}

/// <summary>Calculates Font Size based on standardSize and Chart Size</summary>
/// <param name="standardSize" type="Number">Standard font size for a Chart with min(width,height) = 400px</param>
/// <returns type="Number">The area.</returns>
Chart.prototype.getAutoFontSize = function (standardSize, width, height) {

	width = width || this.width;
	height = height || this.height;

	var fontSizeScaleFactor = standardSize / 400;

	return Math.round(Math.min(this.width, this.height) * fontSizeScaleFactor);
}

//#region Events

Chart.prototype.resetOverlayedCanvas = function () {
	//var width = this.overlaidCanvas.width;
	//this.overlaidCanvas.width = 0;
	//this.overlaidCanvas.width = width;
	this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
}

Chart.prototype.clearCanvas = function () {
	this.ctx.clearRect(0, 0, this.width, this.height);

	if (this.backgroundColor) {
		this.ctx.fillStyle = this.backgroundColor;
		this.ctx.fillRect(0, 0, this.width, this.height);
	}
}

Chart.prototype.attachEvent = function (param) {
	this._events.push(param);
}

Chart.prototype._touchEventHandler = function (ev) {
	if (!ev.changedTouches || !this.interactivityEnabled)
		return;

	var mouseEvents = [];
	var touches = ev.changedTouches;
	var first = touches ? touches[0] : ev;
	var touchCurrentCoordinates = null;

	//window.console.log(touches.length);

	switch (ev.type) {
		case "touchstart": case "MSPointerDown":
			mouseEvents = ["mousemove", "mousedown"];
			this._lastTouchData = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["n" /* getMouseCoordinates */])(first);
			this._lastTouchData.time = new Date();
			break;
		case "touchmove": case "MSPointerMove": mouseEvents = ["mousemove"]; break;
		case "touchend": case "MSPointerUp": mouseEvents = (this._lastTouchEventType === "touchstart" || this._lastTouchEventType === "MSPointerDown") ? ["mouseup", "click"] : ["mouseup"];
			break;
		default: return;
	}

	if (touches && touches.length > 1) return;


	touchCurrentCoordinates = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["n" /* getMouseCoordinates */])(first);
	touchCurrentCoordinates.time = new Date();
	try {
		var dy = touchCurrentCoordinates.y - this._lastTouchData.y;
		var dx = touchCurrentCoordinates.x - this._lastTouchData.x;
		var dt = touchCurrentCoordinates.time - this._lastTouchData.time;

		if (Math.abs(dy) > 15 && (!!this._lastTouchData.scroll || dt < 200)) {
			//this._lastTouchData.y = touchCurrentCoordinates.y;
			this._lastTouchData.scroll = true;

			var win = window.parent || window;
			if (win && win.scrollBy)
				win.scrollBy(0, -dy);
		}
	} catch (e) { };

	this._lastTouchEventType = ev.type;

	if (!!this._lastTouchData.scroll && this.zoomEnabled) {
		if (this.isDrag)
			this.resetOverlayedCanvas();

		this.isDrag = false;
		return;
	}

	for (var i = 0; i < mouseEvents.length; i++) {

		var type = mouseEvents[i];
		var simulatedEvent = document.createEvent("MouseEvent");
		simulatedEvent.initMouseEvent(type, true, true, window, 1,
								  first.screenX, first.screenY,
								  first.clientX, first.clientY, false,
								  false, false, false, 0, null);

		first.target.dispatchEvent(simulatedEvent);

		if (ev.preventManipulation) {
			//alert("preventManipulation");
			ev.preventManipulation();
		}

		if (ev.preventDefault) {
			//alert("preventDefault");
			ev.preventDefault();
		}
	}
}

Chart.prototype._dispatchRangeEvent = function (eventName, triggerSource) {
	var eventParameter = {};

	eventParameter.chart = this._publicChartReference;
	eventParameter.type = eventName;
	eventParameter.trigger = triggerSource;

	var axes = [];

	if (this.axisX)
		axes.push("axisX");
	if (this.axisY)
		axes.push("axisY");
	if (this.axisY2)
		axes.push("axisY2");

	for (var i = 0; i < axes.length; i++) {
		eventParameter[axes[i]] = {
			viewportMinimum: this[axes[i]].sessionVariables.newViewportMinimum,
			viewportMaximum: this[axes[i]].sessionVariables.newViewportMaximum
		}
	}

	this.dispatchEvent(eventName, eventParameter, this._publicChartReference);
}

Chart.prototype._mouseEventHandler = function (ev) {

	if (!this.interactivityEnabled)
		return;

	if (this._ignoreNextEvent) {
		this._ignoreNextEvent = false;
		return;
	}

	// stop panning and zooming so we can draw
	if (ev.preventManipulation) {
		//alert("preventManipulation");
		ev.preventManipulation();
	}

	// we are handling this event
	if (ev.preventDefault) {
		//alert("preventDefault");
		ev.preventDefault();
	}

	//IE8- uses srcElement instead of target. So instead of checking this condition everytime, its better to create a reference called target.
	if (typeof (ev.target) === "undefined" && ev.srcElement)
		ev.target = ev.srcElement;

	//console.log(ev.type);

	var xy = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["n" /* getMouseCoordinates */])(ev);
	var type = ev.type;
	var eventParam;
	var rightclick;

	if (!ev) var e = window.event;
	if (ev.which) rightclick = (ev.which == 3);
	else if (ev.button) rightclick = (ev.button == 2);

	//window.console.log(type + " --> x: " + xy.x + "; y:" + xy.y);

	//if (type === "mouseout") {
	//    this._toolTip.hide();
	//}

	if (__WEBPACK_IMPORTED_MODULE_14__constants_options__["b" /* isDebugMode */] && window.console) {
		window.console.log(type + " --> x: " + xy.x + "; y:" + xy.y);
		if (rightclick)
			window.console.log(ev.which);

		if (type === "mouseup")
			window.console.log("mouseup");
	}

	if (rightclick)
		return;

	//if (this.plotInfo.axisPlacement === "xySwapped") {
	//    //var temp = xy.x;
	//    //xy.x = xy.y;
	//    //xy.y = temp;
	//    xy = {x: xy.y, y: xy.x};
	//}

	if (Chart.capturedEventParam) {
		eventParam = Chart.capturedEventParam;

		if (type === "mouseup") {
			Chart.capturedEventParam = null;

			if (eventParam.chart.overlaidCanvas.releaseCapture)
				eventParam.chart.overlaidCanvas.releaseCapture();
			else
				document.body.removeEventListener("mouseup", eventParam.chart._mouseEventHandler, false);

		}

		if (eventParam.hasOwnProperty(type))
			eventParam[type].call(eventParam.context, xy.x, xy.y);



	}
	else if (this._events) {

		for (var i = 0; i < this._events.length; i++) {
			if (!this._events[i].hasOwnProperty(type))
				continue;

			eventParam = this._events[i];
			var bounds = eventParam.bounds;

			if (xy.x >= bounds.x1 && xy.x <= bounds.x2 && xy.y >= bounds.y1 && xy.y <= bounds.y2) {
				eventParam[type].call(eventParam.context, xy.x, xy.y);

				if (type === "mousedown" && eventParam.capture === true) {
					Chart.capturedEventParam = eventParam;

					if (this.overlaidCanvas.setCapture)
						this.overlaidCanvas.setCapture();
					else {
						document.body.addEventListener("mouseup", this._mouseEventHandler, false);
						//addEvent(document.body, "mouseup", this._mouseEventHandler);
					}
				} else if (type === "mouseup") {
					if (eventParam.chart.overlaidCanvas.releaseCapture)
						eventParam.chart.overlaidCanvas.releaseCapture();
					else
						document.body.removeEventListener("mouseup", this._mouseEventHandler, false);
				}

				break;
			}
			else
				eventParam = null;
		}

		if (eventParam && eventParam.cursor) {
			ev.target.style.cursor = eventParam.cursor;
		}
		else
			ev.target.style.cursor = this._defaultCursor;

		//eventParam =
	}

	if (this._toolTip && this._toolTip.enabled) {

		var plotArea = this.plotArea;

		if (xy.x < plotArea.x1 || xy.x > plotArea.x2 || xy.y < plotArea.y1 || xy.y > plotArea.y2)
			this._toolTip.hide();
	}


	if ((!this.isDrag || !this.zoomEnabled) && this._eventManager) {

		this._eventManager.mouseEventHandler(ev);
		//this._updateToolTip(ev.x, ev.y);
	}

	//if (this._toolTip.enabled)
	//    this._toolTip.mouseMoveHandler(ev.x, ev.y);
}

Chart.prototype._plotAreaMouseDown = function (x, y) {
	this.isDrag = true;

	if (this.plotInfo.axisPlacement !== "none") {
		this.dragStartPoint = { x: x, y: y };
	} else {
		this.dragStartPoint = { x: x, y: y };
	}
}

Chart.prototype._plotAreaMouseUp = function (x, y) {

	if (this.plotInfo.axisPlacement === "normal" || this.plotInfo.axisPlacement === "xySwapped") {
		if (this.isDrag) {
			var dragDelta = 0,
				dragDeltaPY = y - this.dragStartPoint.y,
				dragDeltaPX = x - this.dragStartPoint.x,
				zoomPX = this.zoomType.indexOf("x") >= 0, //Whether to zoom horizontally
				zoomPY = this.zoomType.indexOf("y") >= 0, //Whether to zoom vertically
				reRender = false;

			this.resetOverlayedCanvas();

			if (this.plotInfo.axisPlacement === "xySwapped") {
				var temp = zoomPY;
				zoomPY = zoomPX;
				zoomPX = temp;
			}

			if (this.panEnabled || this.zoomEnabled) {
				if (this.panEnabled) {

					var overflow = 0;

					for (var i = 0; i < this._axes.length; i++) {
						var axis = this._axes[i];

						if (axis.viewportMinimum < axis.minimum) {

							overflow = axis.minimum - axis.viewportMinimum;

							axis.sessionVariables.newViewportMinimum = axis.viewportMinimum + overflow;
							axis.sessionVariables.newViewportMaximum = axis.viewportMaximum + overflow;

						reRender = true;
						} else if (axis.viewportMaximum > axis.maximum) {

							overflow = axis.viewportMaximum - axis.maximum;
							axis.sessionVariables.newViewportMinimum = axis.viewportMinimum - overflow;
							axis.sessionVariables.newViewportMaximum = axis.viewportMaximum - overflow;

						reRender = true;
					}
					}

				}
				else if (((!zoomPX || Math.abs(dragDeltaPX) > 2) && (!zoomPY || Math.abs(dragDeltaPY) > 2)) && this.zoomEnabled) {

					if (!this.dragStartPoint)
						return;

					var selectedRegion = {
						x1: zoomPX ? this.dragStartPoint.x : this.plotArea.x1,
						y1: zoomPY ? this.dragStartPoint.y : this.plotArea.y1,
						x2: zoomPX ? x : this.plotArea.x2,
						y2: zoomPY ? y : this.plotArea.y2
					};

					if (Math.abs(selectedRegion.x1 - selectedRegion.x2) > 2 && Math.abs(selectedRegion.y1 - selectedRegion.y2) > 2) {

						if (this._zoomPanToSelectedRegion(selectedRegion.x1, selectedRegion.y1, selectedRegion.x2, selectedRegion.y2)) {

							reRender = true;

								}
							}
						}

				if (reRender) {
					this._ignoreNextEvent = true;//Required so that click event doesn't fire after zooming into a section of the chart.

					this._dispatchRangeEvent("rangeChanging", "zoom");
								this.render();
					this._dispatchRangeEvent("rangeChanged", "zoom");

					if (reRender && this.zoomEnabled && this._zoomButton.style.display === "none") {
					Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["v" /* show */])(this._zoomButton, this._resetButton);
					setButtonState(this, this._zoomButton, "pan");
					setButtonState(this, this._resetButton, "reset");
				}
			}
		}
		}

	}

	this.isDrag = false;
}

Chart.prototype._plotAreaMouseMove = function (x, y) {
	if (this.isDrag && this.plotInfo.axisPlacement !== "none") {

		var dragDeltaPX = 0,
			dragDeltaPY = 0,
			alpha = null,
			selectedRegion = null,
			zoomPX = this.zoomType.indexOf("x") >= 0, //Whether to zoom horizontally
			zoomPY = this.zoomType.indexOf("y") >= 0, //Whether to zoom vertically
			_this = this;

		if (this.plotInfo.axisPlacement === "xySwapped") {
			var temp = zoomPY;
			zoomPY = zoomPX;
			zoomPX = temp;
		}

		dragDeltaPX = this.dragStartPoint.x - x;
		dragDeltaPY = this.dragStartPoint.y - y;

		if (Math.abs(dragDeltaPX) > 2 && Math.abs(dragDeltaPX) < 8 && (this.panEnabled || this.zoomEnabled)) {
			this._toolTip.hide();
		} else if (!this.panEnabled && !this.zoomEnabled) {
			this._toolTip.mouseMoveHandler(x, y);
		}

		if (((!zoomPX || Math.abs(dragDeltaPX) > 2) || (!zoomPY || Math.abs(dragDeltaPY) > 2)) && (this.panEnabled || this.zoomEnabled)) {
			if (this.panEnabled) {

				selectedRegion =
					{
						x1: zoomPX ? this.plotArea.x1 + dragDeltaPX : this.plotArea.x1,
						y1: zoomPY ? this.plotArea.y1 + dragDeltaPY : this.plotArea.y1,
						x2: zoomPX ? this.plotArea.x2 + dragDeltaPX : this.plotArea.x2,
						y2: zoomPY ? this.plotArea.y2 + dragDeltaPY : this.plotArea.y2
					};

				if (this._zoomPanToSelectedRegion(selectedRegion.x1, selectedRegion.y1, selectedRegion.x2, selectedRegion.y2, true)) {
					this._dispatchRangeEvent("rangeChanging", "pan");
					this.render();
					this._dispatchRangeEvent("rangeChanged", "pan");

					this.dragStartPoint.x = x;
					this.dragStartPoint.y = y;

					//clearTimeout(this._panTimerId);
					//this._panTimerId = setTimeout(function () {
					//	_this._dispatchRangeEvent("rangeChanging", "pan");
					//	_this.render();
					//	_this._dispatchRangeEvent("rangeChanged", "pan");
					//}, 0);
				}

			} else if (this.zoomEnabled) {

				this.resetOverlayedCanvas();

				alpha = this.overlaidCanvasCtx.globalAlpha;

				this.overlaidCanvasCtx.globalAlpha = .7;
				this.overlaidCanvasCtx.fillStyle = "#A0ABB8";

				var rect = {
					x1: zoomPX ? this.dragStartPoint.x : this.plotArea.x1,
					y1: zoomPY ? this.dragStartPoint.y : this.plotArea.y1,
					x2: zoomPX ? x - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
					y2: zoomPY ? y - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1
				};

				this.overlaidCanvasCtx.fillRect(rect.x1, rect.y1, rect.x2, rect.y2);

				this.overlaidCanvasCtx.globalAlpha = alpha;
			}
		}

	} else
		this._toolTip.mouseMoveHandler(x, y);
}

//#endregion Events

//Sets the viewport range of Axis based on the given rect bounds (pixels). Also limits the zooming/panning based on axis bounds. Returns a boolean to indicate whether it was succesful or not based on the selected region.
Chart.prototype._zoomPanToSelectedRegion = function (px1, py1, px2, py2, keepAxisIndependent) {

	keepAxisIndependent = keepAxisIndependent || false;

	var zoomPX = this.zoomType.indexOf("x") >= 0, //Whether to zoom horizontally
		zoomPY = this.zoomType.indexOf("y") >= 0, //Whether to zoom vertically
		validRegion = false;

	var axes = [], axesWithValidRange = [];
	if (this.axisX && zoomPX)
		axes.push(this.axisX);
	if (this.axisY && zoomPY)
		axes.push(this.axisY);
	if (this.axisY2 && zoomPY)
		axes.push(this.axisY2);

	var params = [];

	for (var i = 0; i < axes.length; i++) {
		var axis = axes[i];
		//var range = Math.abs(axis.viewportMaximum - axis.viewportMinimum);

		var val1 = axis.convertPixelToValue({ x: px1, y: py1 });
		var val2 = axis.convertPixelToValue({ x: px2, y: py2 });

		if (val1 > val2) {
			var temp = val2;
			val2 = val1;
			val1 = temp;
		}

		if (isFinite(axis.dataInfo.minDiff)) {
			if (!(Math.abs(val2 - val1) < 3 * Math.abs(axis.dataInfo.minDiff)
			|| (val1 < axis.minimum) || (val2 > axis.maximum))) {
				axesWithValidRange.push(axis);
				params.push({ val1: val1, val2: val2 });

				validRegion = true;
			} else if (!keepAxisIndependent) {
				validRegion = false;
				break;
			}
		}
	}

	if (validRegion) {
		for (var i = 0; i < axesWithValidRange.length; i++) {
			var axis = axesWithValidRange[i];
			var param = params[i];

			axis.setViewPortRange(param.val1, param.val2);
		}
	}

	return validRegion;
}

Chart.prototype.preparePlotArea = function () {

	var plotArea = this.plotArea;

	var yAxis = this.axisY ? this.axisY : this.axisY2;

	if (!__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */] && (plotArea.x1 > 0 || plotArea.y1 > 0)) {
		plotArea.ctx.translate(plotArea.x1, plotArea.y1);
	}

	if (this.axisX && yAxis) {
		plotArea.x1 = this.axisX.lineCoordinates.x1 < this.axisX.lineCoordinates.x2 ? this.axisX.lineCoordinates.x1 : yAxis.lineCoordinates.x1;
		plotArea.y1 = (this.axisX.lineCoordinates.y1 < yAxis.lineCoordinates.y1 ? this.axisX.lineCoordinates.y1 : yAxis.lineCoordinates.y1);

		plotArea.x2 = (this.axisX.lineCoordinates.x2 > yAxis.lineCoordinates.x2 ? this.axisX.lineCoordinates.x2 : yAxis.lineCoordinates.x2);
		plotArea.y2 = this.axisX.lineCoordinates.y2 > this.axisX.lineCoordinates.y1 ? this.axisX.lineCoordinates.y2 : yAxis.lineCoordinates.y2;

		plotArea.width = plotArea.x2 - plotArea.x1;
		plotArea.height = plotArea.y2 - plotArea.y1;
		//plotArea = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1 };
	} else {
		//ToDo: @sunil
		var freeSpace = this.layoutManager.getFreeSpace();
		plotArea.x1 = freeSpace.x1;
		plotArea.x2 = freeSpace.x2;
		plotArea.y1 = freeSpace.y1;
		plotArea.y2 = freeSpace.y2;

		plotArea.width = freeSpace.width;
		plotArea.height = freeSpace.height;
	}

	if (!__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {

		plotArea.canvas.width = plotArea.width;
		plotArea.canvas.height = plotArea.height;

		plotArea.canvas.style.left = plotArea.x1 + "px";
		plotArea.canvas.style.top = plotArea.y1 + "px";

		if (plotArea.x1 > 0 || plotArea.y1 > 0) {
			plotArea.ctx.translate(-plotArea.x1, -plotArea.y1);
		}
	}

	plotArea.layoutManager = new __WEBPACK_IMPORTED_MODULE_5__layout_manager__["a" /* default */](plotArea.x1, plotArea.y1, plotArea.x2, plotArea.y2, 2);
}

Chart.prototype.getPixelCoordinatesOnPlotArea = function (x, y) {
	return {
		x: this.axisX.getPixelCoordinatesOnAxis(x).x, y: this.axisY.getPixelCoordinatesOnAxis(y).y
	}
	//return { x: 5, y: 10 };
}

//#region Render Methods

Chart.prototype.renderIndexLabels = function (targetCtx) {
	var ctx = targetCtx || this.plotArea.ctx;

	var plotArea = this.plotArea;

	var mid = 0;
	var yMinLimit = 0;
	var yMaxLimit = 0;
	var xMinLimit = 0;
	var xMaxLimit = 0;
	var marginX = 0, marginY = 0; // Margin between label and dataPoint / PlotArea
	var offSetX = 0, offSetY = 0; // Distance to offSet textBlock (top) from dataPoint inorder to position it
	var visibleWidth = 0;
	var visibleHeight = 0;

	for (var i = 0; i < this._indexLabels.length; i++) {

		var indexLabel = this._indexLabels[i];
		var chartTypeLower = indexLabel.chartType.toLowerCase();

		var x, y, angle;

		var fontColor = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["p" /* getProperty */])("indexLabelFontColor", indexLabel.dataPoint, indexLabel.dataSeries);
		var fontSize = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["p" /* getProperty */])("indexLabelFontSize", indexLabel.dataPoint, indexLabel.dataSeries);
		var fontFamily = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["p" /* getProperty */])("indexLabelFontFamily", indexLabel.dataPoint, indexLabel.dataSeries);
		var fontStyle = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["p" /* getProperty */])("indexLabelFontStyle", indexLabel.dataPoint, indexLabel.dataSeries);
		var fontWeight = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["p" /* getProperty */])("indexLabelFontWeight", indexLabel.dataPoint, indexLabel.dataSeries);
		var backgroundColor = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["p" /* getProperty */])("indexLabelBackgroundColor", indexLabel.dataPoint, indexLabel.dataSeries);
		var maxWidth = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["p" /* getProperty */])("indexLabelMaxWidth", indexLabel.dataPoint, indexLabel.dataSeries);
		var indexLabelWrap = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["p" /* getProperty */])("indexLabelWrap", indexLabel.dataPoint, indexLabel.dataSeries);

		var percentAndTotal = {
			percent: null, total: null
		};
		var formatterParameter = null;

		if (indexLabel.dataSeries.type.indexOf("stacked") >= 0 || indexLabel.dataSeries.type === "pie" || indexLabel.dataSeries.type === "doughnut")
			percentAndTotal = this.getPercentAndTotal(indexLabel.dataSeries, indexLabel.dataPoint);

		if (indexLabel.dataSeries.indexLabelFormatter || indexLabel.dataPoint.indexLabelFormatter)
			formatterParameter = {
				chart: this._options, dataSeries: indexLabel.dataSeries, dataPoint: indexLabel.dataPoint, index: indexLabel.indexKeyword, total: percentAndTotal.total, percent: percentAndTotal.percent
			};


		var indexLabelText = indexLabel.dataPoint.indexLabelFormatter ? indexLabel.dataPoint.indexLabelFormatter(formatterParameter)
			: indexLabel.dataPoint.indexLabel ? this.replaceKeywordsWithValue(indexLabel.dataPoint.indexLabel, indexLabel.dataPoint, indexLabel.dataSeries, null, indexLabel.indexKeyword)
			: indexLabel.dataSeries.indexLabelFormatter ? indexLabel.dataSeries.indexLabelFormatter(formatterParameter)
			: indexLabel.dataSeries.indexLabel ? this.replaceKeywordsWithValue(indexLabel.dataSeries.indexLabel, indexLabel.dataPoint, indexLabel.dataSeries, null, indexLabel.indexKeyword) : null;

		if (indexLabelText === null || indexLabelText === "")
			continue;

		var placement = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["p" /* getProperty */])("indexLabelPlacement", indexLabel.dataPoint, indexLabel.dataSeries);
		var orientation = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["p" /* getProperty */])("indexLabelOrientation", indexLabel.dataPoint, indexLabel.dataSeries);
		var angle = 0;

		var direction = indexLabel.direction; // +1 for above the point and -1 for below the point

		var axisX = indexLabel.dataSeries.axisX;
		var axisY = indexLabel.dataSeries.axisY;


		var textBlock = new __WEBPACK_IMPORTED_MODULE_3__text_block__["a" /* default */](ctx, {
			x: 0,
			y: 0,
			maxWidth: maxWidth ? maxWidth : this.width * .5,
			maxHeight: indexLabelWrap ? fontSize * 5 : fontSize * 1.5,
			angle: orientation === "horizontal" ? 0 : -90,
			text: indexLabelText,
			padding: 0,
			backgroundColor: backgroundColor,
			horizontalAlign: "left",//left, center, right
			fontSize: fontSize,//in pixels
			fontFamily: fontFamily,
			fontWeight: fontWeight, //normal, bold, bolder, lighter,
			fontColor: fontColor,
			fontStyle: fontStyle, // normal, italic, oblique
			textBaseline: "top"
		});

		var textSize = textBlock.measureText();

		//if (indexLabel.dataPoint.x < axisX.viewportMinimum || indexLabel.dataPoint.x > axisX.viewportMaximum || indexLabel.dataPoint.y < axisY.viewportMinimum || indexLabel.dataPoint.y > axisY.viewportMaximum)
		//	continue;

		if (chartTypeLower.indexOf("line") >= 0 || chartTypeLower.indexOf("area") >= 0
				|| chartTypeLower.indexOf("bubble") >= 0 || chartTypeLower.indexOf("scatter") >= 0) {

			if (indexLabel.dataPoint.x < axisX.viewportMinimum || indexLabel.dataPoint.x > axisX.viewportMaximum || indexLabel.dataPoint.y < axisY.viewportMinimum || indexLabel.dataPoint.y > axisY.viewportMaximum)
				continue;
		}
		else {
			if (indexLabel.dataPoint.x < axisX.viewportMinimum || indexLabel.dataPoint.x > axisX.viewportMaximum)
				continue;
		}

		marginY = 2;
		marginX = 2;

		if (orientation === "horizontal") {
			visibleWidth = textBlock.width;
			visibleHeight = textBlock.height;
		} else {
			visibleHeight = textBlock.width;
			visibleWidth = textBlock.height;
		}

		if (this.plotInfo.axisPlacement === "normal") {

			if (chartTypeLower.indexOf("line") >= 0 || chartTypeLower.indexOf("area") >= 0) {

				placement = "auto";
				marginY = 4;

			} else if (chartTypeLower.indexOf("stacked") >= 0) {

				if (placement === "auto")
					placement = "inside";

			} else if (chartTypeLower === "bubble" || chartTypeLower === "scatter") {

				placement = "inside";

			}

			x = indexLabel.point.x - visibleWidth / 2;

			if (placement !== "inside") {	//outside or auto

				yMinLimit = plotArea.y1;
				yMaxLimit = plotArea.y2;

				if (direction > 0) {
					y = indexLabel.point.y - visibleHeight - marginY;

					if (y < yMinLimit) {
						if (placement === "auto") {
							y = Math.max(indexLabel.point.y, yMinLimit) + marginY;
						}
						else {
							y = yMinLimit + marginY;
						}
					}
				}
				else {
					y = indexLabel.point.y + marginY;

					if (y > yMaxLimit - visibleHeight - marginY) {
						if (placement === "auto") {
							y = Math.min(indexLabel.point.y, yMaxLimit) - visibleHeight - marginY;
						}
						else {
							y = yMaxLimit - visibleHeight - marginY;
						}
					}
				}

			} else {


				yMinLimit = Math.max(indexLabel.bounds.y1, plotArea.y1);
				yMaxLimit = Math.min(indexLabel.bounds.y2, plotArea.y2);


				if (chartTypeLower.indexOf("range") >= 0) {
					if (direction > 0)
						mid = Math.max(indexLabel.bounds.y1, plotArea.y1) + visibleHeight / 2 + marginY;
					else
						mid = Math.min(indexLabel.bounds.y2, plotArea.y2) - visibleHeight / 2 - marginY;
				}
				else
					mid = (Math.max(indexLabel.bounds.y1, plotArea.y1) + Math.min(indexLabel.bounds.y2, plotArea.y2)) / 2

				if (direction > 0) {
					y = Math.max(indexLabel.point.y, mid) - visibleHeight / 2;

					if (y < yMinLimit && (chartTypeLower === "bubble" || chartTypeLower === "scatter")) {
						y = Math.max(indexLabel.point.y - visibleHeight - marginY, plotArea.y1 + marginY);
					}
				}
				else {
					y = Math.min(indexLabel.point.y, mid) - visibleHeight / 2;

					if (y > yMaxLimit - visibleHeight - marginY && (chartTypeLower === "bubble" || chartTypeLower === "scatter")) {
						y = Math.min(indexLabel.point.y + marginY, plotArea.y2 - visibleHeight - marginY);
					}
				}

                  // Make Sure that it does not overlap the axis line
				y = Math.min(y, yMaxLimit - visibleHeight);
			}
		}
		else {

			if (chartTypeLower.indexOf("line") >= 0 || chartTypeLower.indexOf("area") >= 0
				|| chartTypeLower.indexOf("scatter") >= 0) {

				placement = "auto";
				marginX = 4;

			} else if (chartTypeLower.indexOf("stacked") >= 0) {

				if (placement === "auto")
					placement = "inside";

			} else if (chartTypeLower === "bubble") {

				placement = "inside";

			}

			y = indexLabel.point.y - visibleHeight / 2;

			if (placement !== "inside") {	//outside or auto

				xMinLimit = plotArea.x1;
				xMaxLimit = plotArea.x2;

				if (direction < 0) {
					x = indexLabel.point.x - visibleWidth - marginX;

					if (x < xMinLimit) {
						if (placement === "auto") {
							x = Math.max(indexLabel.point.x, xMinLimit) + marginX;
						}
						else {
							x = xMinLimit + marginX;
						}
					}
				}
				else {
					x = indexLabel.point.x + marginX;

					if (x > xMaxLimit - visibleWidth - marginX) {
						if (placement === "auto") {
							x = Math.min(indexLabel.point.x, xMaxLimit) - visibleWidth - marginX;
						}
						else {
							x = xMaxLimit - visibleWidth - marginX;
						}
					}
				}

			} else {

				xMinLimit = Math.max(indexLabel.bounds.x1, plotArea.x1);
				xMaxLimit = Math.min(indexLabel.bounds.x2, plotArea.x2);

				if (chartTypeLower.indexOf("range") >= 0) {
					if (direction < 0)
						mid = Math.max(indexLabel.bounds.x1, plotArea.x1) + visibleWidth / 2 + marginX;
					else
						mid = Math.min(indexLabel.bounds.x2, plotArea.x2) - visibleWidth / 2 - marginX;
				}
				else
					var mid = (Math.max(indexLabel.bounds.x1, plotArea.x1) + Math.min(indexLabel.bounds.x2, plotArea.x2)) / 2;

				if (direction < 0) {
					x = Math.max(indexLabel.point.x, mid) - visibleWidth / 2;

					//if (y < xMinLimit) {
					//	y = Math.max(indexLabel.point.y - visibleHeight - marginY, plotArea.y1 + marginY);
					//}
				}
				else {
					x = Math.min(indexLabel.point.x, mid) - visibleWidth / 2;

					//if (y > xMaxLimit - visibleHeight - marginY) {
					//	y = Math.min(indexLabel.point.y + marginY, plotArea.y2 - visibleHeight - marginY);
					//}
				}

			    // Make Sure that it does not overlap the axis line
			    x = Math.max(x, xMinLimit);
			}
		}


		if (orientation === "vertical") {
			y += visibleHeight;
		}

		textBlock.x = x;
		textBlock.y = y;

		//console.log(textBlock.text + ": " + textBlock.x + "; " + textBlock.y);

		textBlock.render(true);
	}

	//source and dest would be same when animation is not enabled
	var animationInfo = {
		source: ctx, dest: this.plotArea.ctx, animationCallback: __WEBPACK_IMPORTED_MODULE_12__helpers_animator__["a" /* default */].fadeInAnimation, easingFunction: __WEBPACK_IMPORTED_MODULE_12__helpers_animator__["a" /* default */].easing.easeInQuad, animationBase: 0, startTimePercent: .7
	};
	return animationInfo;
}

Chart.prototype.renderLine = function (plotUnit) {

	var ctx = plotUnit.targetCanvasCtx || this.plotArea.ctx;

	var totalDataSeries = plotUnit.dataSeriesIndexes.length;
	if (totalDataSeries <= 0)
		return;

	var ghostCtx = this._eventManager.ghostCtx;
	//var ghostCtx = this.overlaidCanvasCtx;

	ctx.save();

	var plotArea = this.plotArea;

	ctx.beginPath();
	ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
	ctx.clip();

	var markers = [];

	for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

		var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

		var dataSeries = this.data[dataSeriesIndex];
		ctx.lineWidth = dataSeries.lineThickness;
		var dataPoints = dataSeries.dataPoints;


		if (ctx.setLineDash) {
			ctx.setLineDash(Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["m" /* getLineDashArray */])(dataSeries.lineDashType, dataSeries.lineThickness));
		}

		var seriesId = dataSeries.id;
		this._eventManager.objectMap[seriesId] = {
			objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex
		};
		var hexColor = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["r" /* intToHexColorString */])(seriesId);
		ghostCtx.strokeStyle = hexColor;
		//ghostCtx.lineWidth = dataSeries.lineThickness;
		ghostCtx.lineWidth = dataSeries.lineThickness > 0 ? Math.max(dataSeries.lineThickness, 4) : 0;

		var colorSet = dataSeries._colorSet;
		var color = colorSet[0];
		ctx.strokeStyle = color;

		var isFirstDataPointInPlotArea = true;
		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

		//if (!dataSeries._options.markerSize && dataSeries.dataPoints.length < 1000)
		//    dataSeries.markerSize = 8;
		ctx.beginPath();
		if (dataPoints.length > 0) {
			//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

			//dataSeries.noDataPointsInPlotArea = 0
			var prevDataNull = false;
			for (i = 0; i < dataPoints.length; i++) {

				dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

				if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax)
					continue;

				//if (!isFinite(dataPoints[i].y))
				//    continue;

				if (typeof (dataPoints[i].y) !== "number") {
					if (i > 0) {// if first dataPoint is null then no need to call stroke method
						ctx.stroke();

						if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {
							ghostCtx.stroke();
						}
					}


					prevDataNull = true;
					continue;
				}

				x = (plotUnit.axisX.conversionParameters.reference + plotUnit.axisX.conversionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.conversionParameters.minimum) + .5) << 0;
				y = (plotUnit.axisY.conversionParameters.reference + plotUnit.axisY.conversionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.conversionParameters.minimum) + .5) << 0;

				var id = dataSeries.dataPointIds[i];
				this._eventManager.objectMap[id] = {
					id: id, objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y
				};


				//dataSeries.noDataPointsInPlotArea++;

				if (isFirstDataPointInPlotArea || prevDataNull) {
					ctx.beginPath();
					ctx.moveTo(x, y);


					if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {
						ghostCtx.beginPath();
						ghostCtx.moveTo(x, y);
					}

					isFirstDataPointInPlotArea = false;
					prevDataNull = false;
				} else {

					ctx.lineTo(x, y);

					if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */])
						ghostCtx.lineTo(x, y);

					if (i % 500 == 0) {
						ctx.stroke();
						ctx.beginPath();
						ctx.moveTo(x, y);

						if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {
							ghostCtx.stroke();
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}
					}
				}

				//Render Marker
				if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {

					var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
					markers.push(markerProps);

					//if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
					//	dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.conversionParameters.pixelPerUnit > 1 ? plotUnit.axisX.conversionParameters.pixelPerUnit - 1 : plotUnit.axisX.conversionParameters.pixelPerUnit);
					//}

					var markerColor = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["r" /* intToHexColorString */])(id);

					//window.console.log("index: " + i + "; id: " + id + "; hex: " + markerColor);

					if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {
						markers.push({
							x: x, y: y, ctx: ghostCtx,
							type: markerProps.type,
							size: markerProps.size,
							color: markerColor,
							borderColor: markerColor,
							borderThickness: markerProps.borderThickness
						});
					}
				}

				if (dataPoints[i].indexLabel || dataSeries.indexLabel || dataPoints[i].indexLabelFormatter || dataSeries.indexLabelFormatter) {

					this._indexLabels.push({
						chartType: "line",
						dataPoint: dataPoints[i],
						dataSeries: dataSeries,
						point: {
							x: x, y: y
						},
						direction: dataPoints[i].y >= 0 ? 1 : -1,
						color: color
					});

				}

			}

			ctx.stroke();

			if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */])
				ghostCtx.stroke();
		}

	}


	__WEBPACK_IMPORTED_MODULE_4__helpers_render__["a" /* default */].drawMarkers(markers);
	ctx.restore();

	ctx.beginPath();

	if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */])
		ghostCtx.beginPath();

	//source and dest would be same when animation is not enabled
	var animationInfo = {
		source: ctx, dest: this.plotArea.ctx, animationCallback: __WEBPACK_IMPORTED_MODULE_12__helpers_animator__["a" /* default */].xClipAnimation, easingFunction: __WEBPACK_IMPORTED_MODULE_12__helpers_animator__["a" /* default */].easing.linear, animationBase: 0
	};
	return animationInfo;
}

Chart.prototype.renderStepLine = function (plotUnit) {
	var ctx = plotUnit.targetCanvasCtx || this.plotArea.ctx;

	var totalDataSeries = plotUnit.dataSeriesIndexes.length;
	if (totalDataSeries <= 0)
		return;

	var ghostCtx = this._eventManager.ghostCtx;
	//var ghostCtx = this.overlaidCanvasCtx;

	ctx.save();

	var plotArea = this.plotArea;

	ctx.beginPath();
	ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
	ctx.clip();

	var markers = [];

	for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

		var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

		var dataSeries = this.data[dataSeriesIndex];
		ctx.lineWidth = dataSeries.lineThickness;
		var dataPoints = dataSeries.dataPoints;

		if (ctx.setLineDash) {
			ctx.setLineDash(Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["m" /* getLineDashArray */])(dataSeries.lineDashType, dataSeries.lineThickness));
		}

		var seriesId = dataSeries.id;
		this._eventManager.objectMap[seriesId] = {
			objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex
		};
		var hexColor = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["r" /* intToHexColorString */])(seriesId);
		ghostCtx.strokeStyle = hexColor;
		//ghostCtx.lineWidth = dataSeries.lineThickness;
		ghostCtx.lineWidth = dataSeries.lineThickness > 0 ? Math.max(dataSeries.lineThickness, 4) : 0;

		var colorSet = dataSeries._colorSet;
		var color = colorSet[0];
		ctx.strokeStyle = color;

		var isFirstDataPointInPlotArea = true;
		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

		//if (!dataSeries._options.markerSize && dataSeries.dataPoints.length < 1000)
		//    dataSeries.markerSize = 8;
		ctx.beginPath();
		if (dataPoints.length > 0) {
			//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

			//dataSeries.noDataPointsInPlotArea = 0
			var prevDataNull = false;
			for (i = 0; i < dataPoints.length; i++) {

				dataPointX = dataPoints[i].getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

				if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax)
					continue;

				//if (!isFinite(dataPoints[i].y))
				//    continue;

				if (typeof (dataPoints[i].y) !== "number") {
					if (i > 0) {// if first dataPoint is null then no need to call stroke method
						ctx.stroke();

						if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {
							ghostCtx.stroke();
						}
					}

					prevDataNull = true;
					continue;
				}

				var prevY = y;

				x = (plotUnit.axisX.conversionParameters.reference + plotUnit.axisX.conversionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.conversionParameters.minimum) + .5) << 0;
				y = (plotUnit.axisY.conversionParameters.reference + plotUnit.axisY.conversionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.conversionParameters.minimum) + .5) << 0;

				var id = dataSeries.dataPointIds[i];
				this._eventManager.objectMap[id] = {
					id: id, objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y
				};


				//dataSeries.noDataPointsInPlotArea++;

				if (isFirstDataPointInPlotArea || prevDataNull) {
					ctx.beginPath();
					ctx.moveTo(x, y);

					if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {
						ghostCtx.beginPath();
						ghostCtx.moveTo(x, y);
					}

					isFirstDataPointInPlotArea = false;
					prevDataNull = false;
				} else {

					ctx.lineTo(x, prevY);
					if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */])
						ghostCtx.lineTo(x, prevY);

					ctx.lineTo(x, y);
					if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */])
						ghostCtx.lineTo(x, y);

					if (i % 500 == 0) {
						ctx.stroke();
						ctx.beginPath();
						ctx.moveTo(x, y);

						if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {
							ghostCtx.stroke();
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}
					}
				}

				//Render Marker
				if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {

					var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
					markers.push(markerProps);

					//if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
					//	dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.conversionParameters.pixelPerUnit > 1 ? plotUnit.axisX.conversionParameters.pixelPerUnit - 1 : plotUnit.axisX.conversionParameters.pixelPerUnit);
					//}

					var markerColor = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["r" /* intToHexColorString */])(id);

					//window.console.log("index: " + i + "; id: " + id + "; hex: " + markerColor);
					if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */]) {
						markers.push({
							x: x, y: y, ctx: ghostCtx,
							type: markerProps.type,
							size: markerProps.size,
							color: markerColor,
							borderColor: markerColor,
							borderThickness: markerProps.borderThickness
						});
					}
				}

				if (dataPoints[i].indexLabel || dataSeries.indexLabel || dataPoints[i].indexLabelFormatter || dataSeries.indexLabelFormatter) {

					this._indexLabels.push({
						chartType: "stepLine",
						dataPoint: dataPoints[i],
						dataSeries: dataSeries,
						point: {
							x: x, y: y
						},
						direction: dataPoints[i].y >= 0 ? 1 : -1,
						color: color
					});

				}

			}

			ctx.stroke();
			if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */])
				ghostCtx.stroke();
		}
	}


	__WEBPACK_IMPORTED_MODULE_4__helpers_render__["a" /* default */].drawMarkers(markers);
	ctx.restore();

	ctx.beginPath();

	if (__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["s" /* isCanvasSupported */])
		ghostCtx.beginPath();

	//source and dest would be same when animation is not enabled
	var animationInfo = {
		source: ctx, dest: this.plotArea.ctx, animationCallback: __WEBPACK_IMPORTED_MODULE_12__helpers_animator__["a" /* default */].xClipAnimation, easingFunction: __WEBPACK_IMPORTED_MODULE_12__helpers_animator__["a" /* default */].easing.linear, animationBase: 0
	};
	return animationInfo;
}

Chart.prototype.animationRequestId = null;

Chart.prototype.requestAnimFrame = (function () {
	return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (callback) {
				window.setTimeout(callback, 1000 / 60);
			};
})();

Chart.prototype.cancelRequestAnimFrame = (function () {
	return window.cancelAnimationFrame ||
		window.webkitCancelRequestAnimationFrame ||
		window.mozCancelRequestAnimationFrame ||
		window.oCancelRequestAnimationFrame ||
		window.msCancelRequestAnimationFrame ||
		clearTimeout
})();

Chart.prototype.getPercentAndTotal = function (ds, dp) {

	var dpX = null;
	var total = null;
	var percent = null;

	if (ds.type.indexOf("stacked") >= 0) {
		total = 0;
		dpX = dp.x.getTime ? dp.x.getTime() : dp.x;
		if (dpX in ds.plotUnit.yTotals) {
			total = ds.plotUnit.yTotals[dpX];

			if (!isNaN(dp.y)) {
			    if (total === 0)
			        percent = 0;
                  else
			        percent = (dp.y / total) * 100;
			}
			else
			    percent = 0;
		}
	} else if (ds.type === "pie" || ds.type === "doughnut") {
		total = 0;
		for (var i = 0; i < ds.dataPoints.length; i++) {

			if (!isNaN(ds.dataPoints[i].y))
				total += ds.dataPoints[i].y;
		}

		if (!isNaN(dp.y))
			percent = (dp.y / total) * 100;
		else
			percent = 0;
	}

	return {
		percent: percent, total: total
	};
}

Chart.prototype.replaceKeywordsWithValue = function (str, dp, ds, dpIndex, indexKeywordValue) {
	//var regex = /\{\s*[a-zA-Z]+\s*\}|"[^"]*"|'[^']*'/g;
	var regex = /\{.*?\}|"[^"]*"|'[^']*'/g;
	var chart = this;
	indexKeywordValue = typeof (indexKeywordValue) === "undefined" ? 0 : indexKeywordValue;

	if ((ds.type.indexOf("stacked") >= 0 || (ds.type === "pie" || ds.type === "doughnut")) && (str.indexOf("#percent") >= 0 || str.indexOf("#total") >= 0)) {
		var percent = "#percent";
		var total = "#total";
		var dpX = null;

		var percentAndTotal = this.getPercentAndTotal(ds, dp);

		total = isNaN(percentAndTotal.total) ? total : percentAndTotal.total;
		percent = isNaN(percentAndTotal.percent) ? percent : percentAndTotal.percent;

		do {
			var percentFormatString = "";
			if (ds.percentFormatString)
				percentFormatString = ds.percentFormatString;
			else {
				percentFormatString = "#,##0.";
				var numberOfDecimals = Math.max(Math.ceil(Math.log(1 / Math.abs(percent)) / Math.LN10), 2);

				if (isNaN(numberOfDecimals) || !isFinite(numberOfDecimals))
					numberOfDecimals = 2;

				for (var n = 0; n < numberOfDecimals; n++) {
					percentFormatString += "#";
				}
			}

			str = str.replace("#percent", Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["t" /* numberFormat */])(percent, percentFormatString, chart._cultureInfo));
			str = str.replace("#total", Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["t" /* numberFormat */])(total, ds.yValueFormatString ? ds.yValueFormatString : "#,##0.########"));
		} while (str.indexOf("#percent") >= 0 || str.indexOf("#total") >= 0);
	}


	var fcn = function ($0) {
		if (($0[0] === "\"" && $0[$0.length - 1] === "\"") || ($0[0] === "\'" && $0[$0.length - 1] === "\'"))
			return $0.slice(1, $0.length - 1);

		var key = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["w" /* trimString */])($0.slice(1, $0.length - 1));
		key = key.replace("#index", indexKeywordValue);

		var index = null;

		try {
			var match = key.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
			if (match && match.length > 0) {
				index = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["w" /* trimString */])(match[2]);
				key = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["w" /* trimString */])(match[1]);
			}
		} catch (e) {
		};


		var obj = null;

		if (key === "color") {
			return dp.color ? dp.color : ds.color ? ds.color : ds._colorSet[dpIndex % ds._colorSet.length];
		}

		if (dp.hasOwnProperty(key))
			obj = dp;
		else if (ds.hasOwnProperty(key))
			obj = ds;
		else return "";

		var value = obj[key];
		if (index !== null)
			value = value[index];

		if (key === "x") {
			if (chart.axisX && chart.plotInfo.axisXValueType === "dateTime")
				return dateFormat(value, dp.xValueFormatString ? dp.xValueFormatString : ds.xValueFormatString ? ds.xValueFormatString : chart.axisX && chart.axisX.valueFormatString ? chart.axisX.valueFormatString : "DD MMM YY", chart._cultureInfo);
			else
				return Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["t" /* numberFormat */])(value, dp.xValueFormatString ? dp.xValueFormatString : ds.xValueFormatString ? ds.xValueFormatString : "#,##0.########", chart._cultureInfo);
		} else if (key === "y")
			return Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["t" /* numberFormat */])(value, dp.yValueFormatString ? dp.yValueFormatString : ds.yValueFormatString ? ds.yValueFormatString : "#,##0.########", chart._cultureInfo);
		else if (key === "z")
			return Object(__WEBPACK_IMPORTED_MODULE_15__helpers_utils__["t" /* numberFormat */])(value, dp.zValueFormatString ? dp.zValueFormatString : ds.zValueFormatString ? ds.zValueFormatString : "#,##0.########", chart._cultureInfo);
		else
			return value;
	}

	return str.replace(regex, fcn);
}


Chart.prototype.renderSpline = __WEBPACK_IMPORTED_MODULE_16__charts_index__["SplineChart"];

Chart.prototype.renderColumn = __WEBPACK_IMPORTED_MODULE_16__charts_index__["ColumnChart"]

Chart.prototype.renderStackedColumn = __WEBPACK_IMPORTED_MODULE_16__charts_index__["StackedColumnChart"];

Chart.prototype.renderStackedColumn100 = __WEBPACK_IMPORTED_MODULE_16__charts_index__["StackedColumn100Chart"];

Chart.prototype.renderBar = __WEBPACK_IMPORTED_MODULE_16__charts_index__["BarChart"];

Chart.prototype.renderStackedBar = __WEBPACK_IMPORTED_MODULE_16__charts_index__["StackedBarChart"];

Chart.prototype.renderStackedBar100 = __WEBPACK_IMPORTED_MODULE_16__charts_index__["StackedBar100Chart"];

Chart.prototype.renderArea = __WEBPACK_IMPORTED_MODULE_16__charts_index__["AreaChart"];

Chart.prototype.renderSplineArea = __WEBPACK_IMPORTED_MODULE_16__charts_index__["SplineAreaChart"];

Chart.prototype.renderStepArea = __WEBPACK_IMPORTED_MODULE_16__charts_index__["StepAreaChart"];

Chart.prototype.renderStackedArea = __WEBPACK_IMPORTED_MODULE_16__charts_index__["StackedAreaChart"];

Chart.prototype.renderStackedArea100 = __WEBPACK_IMPORTED_MODULE_16__charts_index__["StackedArea100Chart"];

Chart.prototype.renderBubble = __WEBPACK_IMPORTED_MODULE_16__charts_index__["BubbleChart"];

Chart.prototype.renderScatter = __WEBPACK_IMPORTED_MODULE_16__charts_index__["ScatterChart"];

Chart.prototype.renderCandlestick = __WEBPACK_IMPORTED_MODULE_16__charts_index__["CandlestickChart"];

Chart.prototype.renderRangeColumn = __WEBPACK_IMPORTED_MODULE_16__charts_index__["RangeColumnChart"];

Chart.prototype.renderRangeBar = __WEBPACK_IMPORTED_MODULE_16__charts_index__["RangeBarChart"];

Chart.prototype.renderRangeArea = __WEBPACK_IMPORTED_MODULE_16__charts_index__["RangeAreaChart"];

Chart.prototype.renderRangeSplineArea = __WEBPACK_IMPORTED_MODULE_16__charts_index__["RangeSplineAreaChart"];

Chart.prototype.renderPie = __WEBPACK_IMPORTED_MODULE_16__charts_index__["PieChart"];

/* harmony default export */ __webpack_exports__["a"] = (Chart);


/***/ }),
/* 31 */
/*!****************************************************!*\
  !*** ./node_modules/canvasjs/src/core/animator.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_animator__ = __webpack_require__(/*! ../helpers/animator */ 5);
//#region Animator



function Animator(chart) {

  this.chart = chart;
  this.ctx = this.chart.plotArea.ctx;
  this.animations = [];
  this.animationRequestId = null;
}

//Animator.prototype.animate = function (duration, base, dest, source, animationCallback, onComplete) {
Animator.prototype.animate = function (startDelay, duration, animationCallback, onComplete, easingFunction) {
  var _this = this;

  this.chart.isAnimating = true;
  easingFunction = easingFunction || __WEBPACK_IMPORTED_MODULE_0__helpers_animator__["a" /* default */].easing.linear;

  if (animationCallback) {

    this.animations.push({
      startTime: (new Date()).getTime() + (startDelay ? startDelay : 0),
      duration: duration,
      animationCallback: animationCallback,
      onComplete: onComplete
    });
  }

  var remainingAnimations = [];

  while (this.animations.length > 0) {

    var animation = this.animations.shift();
    var now = (new Date()).getTime();
    var fractionComplete = 0;
    //var fractionComplete = Math.min(((new Date()).getTime() - animation.startTime) / animation.duration, 1);

    if (animation.startTime <= now) {
      fractionComplete = easingFunction(Math.min((now - animation.startTime), animation.duration), 0, 1, animation.duration);
      //var fractionComplete = AnimationHelper.easing.easeOutQuad(Math.min(((new Date()).getTime() - animation.startTime), animation.duration), 0, 1, animation.duration);

      fractionComplete = Math.min(fractionComplete, 1);

      if (isNaN(fractionComplete) || !isFinite(fractionComplete))
        fractionComplete = 1;
    }

    if (fractionComplete < 1) {
      remainingAnimations.push(animation);
    }

    animation.animationCallback(fractionComplete);

    if (fractionComplete >= 1 && animation.onComplete)
      animation.onComplete();
  }

  this.animations = remainingAnimations;

  if (this.animations.length > 0) {
    this.animationRequestId = this.chart.requestAnimFrame.call(window, function () {
      _this.animate.call(_this);
    });
  } else {
    this.chart.isAnimating = false;
  }

}

Animator.prototype.cancelAllAnimations = function () {

  this.animations = [];

  if (this.animationRequestId) {
    this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
  }

  this.animationRequestId = null;
  this.chart.isAnimating = false;
}

/* harmony default export */ __webpack_exports__["a"] = (Animator);


/***/ }),
/* 32 */
/*!**********************************************************!*\
  !*** ./node_modules/canvasjs/src/core/layout_manager.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function LayoutManager(x1, y1, x2, y2, padding) {

  if (typeof (padding) === "undefined")
    padding = 0;

  this._padding = padding;

  this._x1 = x1;
  this._y1 = y1;
  this._x2 = x2;
  this._y2 = y2;

  this._topOccupied = this._padding;
  this._bottomOccupied = this._padding;
  this._leftOccupied = this._padding;
  this._rightOccupied = this._padding;
}

LayoutManager.prototype.registerSpace = function (position, size) {
  if (position === "top") {
    this._topOccupied += size.height;
  }
  else if (position === "bottom") {
    this._bottomOccupied += size.height;
  } else if (position === "left") {
    this._leftOccupied += size.width; // this is width when seen upright/vertically
  } else if (position === "right") {
    this._rightOccupied += size.width;// this is width when seen upright/vertically
  }
}

LayoutManager.prototype.unRegisterSpace = function (position, size) {
  if (position === "top") {
    this._topOccupied -= size.height;
  }
  else if (position === "bottom") {
    this._bottomOccupied -= size.height;
  } else if (position === "left") {
    this._leftOccupied -= size.width;// this is width when seen upright/vertically
  } else if (position === "right") {
    this._rightOccupied -= size.width;// this is width when seen upright/vertically
  }
}

LayoutManager.prototype.getFreeSpace = function () {
  ///<signature>
  ///<summary>Returns available free space {x1:number, y1:number, x2:number, y2:number}</summary>
  ///</signature>

  return {
    x1: this._x1 + this._leftOccupied,
    y1: this._y1 + this._topOccupied,
    x2: this._x2 - this._rightOccupied,
    y2: this._y2 - this._bottomOccupied,
    width: (this._x2 - this._x1) - this._rightOccupied - this._leftOccupied,
    height: (this._y2 - this._y1) - this._bottomOccupied - this._topOccupied
  };
}

LayoutManager.prototype.reset = function () {
  //so that there is enough padding.
  this._topOccupied = this._padding;
  this._bottomOccupied = this._padding;
  this._leftOccupied = this._padding;
  this._rightOccupied = this._padding;
}

/* harmony default export */ __webpack_exports__["a"] = (LayoutManager);


/***/ }),
/* 33 */
/*!*********************************************************!*\
  !*** ./node_modules/canvasjs/src/core/event_manager.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_utils__ = __webpack_require__(/*! ../helpers/utils */ 1);



function EventManager(chart) {
  this.chart = chart;
  this.lastObjectId = 0;
  var _this = this;
  this.objectMap = [];
  this.rectangularRegionEventSubscriptions = [];
  this.previousDataPointEventObject = null;
  //this.previousDataSeriesEventObject = null;

  this.ghostCanvas = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utils__["d" /* createCanvas */])(this.chart.width, this.chart.height);
  //this.ghostCanvas.width = this.chart.width;
  //this.ghostCanvas.height = this.chart.height;

  this.ghostCtx = this.ghostCanvas.getContext("2d");

  var eventHandler = function (ev) {
    _this.mouseEventHandler.call(_this, ev);
  };

  this.mouseoveredObjectMaps = [];
  //this.chart.canvas.addEventListener("mouseover", eventHandler);
  //this.chart.canvas.addEventListener("mousemove", eventHandler);
  //this.chart.canvas.addEventListener("mouseout", eventHandler);
  //this.chart.canvas.addEventListener("click", eventHandler);
}

EventManager.prototype.reset = function () {
  this.lastObjectId = 0;
  this.objectMap = [];
  this.rectangularRegionEventSubscriptions = [];
  this.previousDataPointEventObject = null;

  this.eventObjects = [];
  //this.ghostCanvas.width = this.chart.width;
  //this.ghostCanvas.height = this.chart.height;

  if (__WEBPACK_IMPORTED_MODULE_0__helpers_utils__["s" /* isCanvasSupported */]) {
    this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height);
    this.ghostCtx.beginPath();
  }
}

EventManager.prototype.getNewObjectTrackingId = function () {
  return ++this.lastObjectId;
}

EventManager.prototype.mouseEventHandler = function (ev) {

  if (ev.type !== "mousemove" && ev.type !== "click")
    return;

  var eventObjectMaps = [];
  var xy = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utils__["n" /* getMouseCoordinates */])(ev);
  var id = null;

  //var dataPointInfo = this.chart.getDataPointAtXY(xy.x, xy.y, false);

  //if (dataPointInfo) {
  //	id = dataPointInfo.dataSeries.dataPointIds[dataPointInfo.dataPointIndex];
  //} else if (isCanvasSupported) {//IE9+
  //	id = getObjectId(xy.x, xy.y, this.ghostCtx);
  //}
  id = this.chart.getObjectAtXY(xy.x, xy.y, false);

  if (id && typeof (this.objectMap[id]) !== "undefined") {

    var eventObjectMap = this.objectMap[id];

    if (eventObjectMap.objectType === "dataPoint") {
      var dataSeries = this.chart.data[eventObjectMap.dataSeriesIndex];
      var dataPoint = dataSeries.dataPoints[eventObjectMap.dataPointIndex];
      var dataPointIndex = eventObjectMap.dataPointIndex;

      //Event Parameter should not contain reference to dataSeries directly. But to its options.
      eventObjectMap.eventParameter = {
        x: xy.x, y: xy.y, dataPoint: dataPoint,
        dataSeries: dataSeries._options, dataPointIndex: dataPointIndex, dataSeriesIndex: dataSeries.index,
        chart: this.chart._publicChartReference
      };
      eventObjectMap.eventContext = {
        context: dataPoint, userContext: dataPoint, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click"
      };
      eventObjectMaps.push(eventObjectMap);

      //Add Dataseries too because mouse event on dataPoint also means there is an event on dataSeries. DataSeries is not present on ghost canvas
      eventObjectMap = this.objectMap[dataSeries.id];

      //Event Parameter should not contain reference to dataSeries directly. But to its options.
      eventObjectMap.eventParameter = {
        x: xy.x, y: xy.y,
        dataPoint: dataPoint, dataSeries: dataSeries._options, dataPointIndex: dataPointIndex, dataSeriesIndex: dataSeries.index,
        chart: this.chart._publicChartReference
      };

      eventObjectMap.eventContext = {
        context: dataSeries, userContext: dataSeries._options, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click"
      };
      eventObjectMaps.push(this.objectMap[dataSeries.id]);
    }
      //else if (eventObjectMap.objectType === "stripLine") {

      //	//Event Parameter should not contain reference to stripLine directly. But to its options.
      //	eventObjectMap.eventParameter = { x: xy.x, y: xy.y, stripLine: eventObjectMap.stripLine._options, axis: eventObjectMap.axis._options, stripLineIndex: eventObjectMap.stripLineIndex };
      //	eventObjectMap.eventContext = { context: eventObjectMap.stripLine, userContext: eventObjectMap.stripLine._options, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };

      //	eventObjectMaps.push(eventObjectMap);
      //}
    else if (eventObjectMap.objectType === "legendItem") {

      var dataSeries = this.chart.data[eventObjectMap.dataSeriesIndex];
      var dataPoint = eventObjectMap.dataPointIndex !== null ? dataSeries.dataPoints[eventObjectMap.dataPointIndex] : null;

      //Event Parameter should not contain reference to DataSeries directly. But to its options.
      eventObjectMap.eventParameter = {
        x: xy.x, y: xy.y,
        dataSeries: dataSeries._options, dataPoint: dataPoint, dataPointIndex: eventObjectMap.dataPointIndex, dataSeriesIndex: eventObjectMap.dataSeriesIndex,
        chart: this.chart._publicChartReference
      };
      eventObjectMap.eventContext = {
        context: this.chart.legend, userContext: this.chart.legend._options, mouseover: "itemmouseover", mousemove: "itemmousemove", mouseout: "itemmouseout", click: "itemclick"
      };
      eventObjectMaps.push(eventObjectMap);
    }
  }

  //Fire mouseout if existing mouseovered objects are not present in the objectmap.
  var mouseOutObjectMapsExcluded = [];
  for (var i = 0; i < this.mouseoveredObjectMaps.length; i++) {
    var mouseOut = true;

    for (var j = 0; j < eventObjectMaps.length; j++) {
      if (eventObjectMaps[j].id === this.mouseoveredObjectMaps[i].id) {
        mouseOut = false;
        break;
      }
    }

    if (mouseOut) {
      this.fireEvent(this.mouseoveredObjectMaps[i], "mouseout", ev);
    } else {
      mouseOutObjectMapsExcluded.push(this.mouseoveredObjectMaps[i]);
    }
  }

  this.mouseoveredObjectMaps = mouseOutObjectMapsExcluded;

  //Process new eventObectMaps
  //If they already don't exist, add them and fire mouseover
  //If ev.type is mousemove, then just fire mousemove
  //If ev.type is click, then fire two events - click followed by mousemove
  for (var i = 0; i < eventObjectMaps.length; i++) {

    var existing = false;

    for (var j = 0; j < this.mouseoveredObjectMaps.length; j++) {
      if (eventObjectMaps[i].id === this.mouseoveredObjectMaps[j].id) {
        existing = true;
        break;
      }
    }

    if (!existing) {
      this.fireEvent(eventObjectMaps[i], "mouseover", ev);
      this.mouseoveredObjectMaps.push(eventObjectMaps[i]);
    }

    if (ev.type === "click") {
      this.fireEvent(eventObjectMaps[i], "click", ev);
    } else if (ev.type === "mousemove") {
      this.fireEvent(eventObjectMaps[i], "mousemove", ev);
    }
  }
}

EventManager.prototype.fireEvent = function (eventObjectMap, eventType, ev) {

  if (!eventObjectMap || !eventType)
    return;

  var eventParameter = eventObjectMap.eventParameter;
  var eventContext = eventObjectMap.eventContext;
  //var context = eventObjectMap.eventContext.context;
  var userContext = eventObjectMap.eventContext.userContext

  if (userContext && eventContext && userContext[eventContext[eventType]])
    userContext[eventContext[eventType]].call(userContext, eventParameter);

  if (eventType !== "mouseout") {
    if (userContext.cursor && userContext.cursor !== ev.target.style.cursor) {
      ev.target.style.cursor = userContext.cursor;
    }
  } else {
    ev.target.style.cursor = this.chart._defaultCursor;
    delete eventObjectMap.eventParameter; // reference no longer required.
    delete eventObjectMap.eventContext; // reference no longer required.
  }

  //This is just a quick fix. Need to find a better way of calling internal event handlers.
  if (eventType === "click" && eventObjectMap.objectType === "dataPoint" && this.chart.pieDoughnutClickHandler) {
    this.chart.pieDoughnutClickHandler.call(this.chart.data[eventObjectMap.dataSeriesIndex], eventParameter);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (EventManager);


/***/ }),
/* 34 */
/*!***************************************************!*\
  !*** ./node_modules/canvasjs/src/core/tooltip.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_animator__ = __webpack_require__(/*! ../helpers/animator */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_render__ = __webpack_require__(/*! ../helpers/render */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canvasjs__ = __webpack_require__(/*! ./canvasjs */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_utils__ = __webpack_require__(/*! ../helpers/utils */ 1);






function ToolTip(chart, options, theme) {

  ToolTip.base.constructor.call(this, "ToolTip", options, theme);

  this.chart = chart;
  this.canvas = chart.canvas;
  this.ctx = this.chart.ctx;
  this.currentSeriesIndex = -1;
  this.currentDataPointIndex = -1;
  this._timerId = 0;
  this._prevX = NaN;
  this._prevY = NaN;

  this._initialize();
}

Object(__WEBPACK_IMPORTED_MODULE_3__helpers_utils__["i" /* extend */])(ToolTip, __WEBPACK_IMPORTED_MODULE_2__canvasjs__["a" /* default */]);

ToolTip.prototype._initialize = function () {

  if (this.enabled) {
    this.container = document.createElement("div");
    this.container.setAttribute("class", "canvasjs-chart-tooltip");
    this.container.style.position = "absolute";
    this.container.style.height = "auto";
    this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
    this.container.style.zIndex = "1000";
    //this.container.style.pointerEvents = "none";
    this.container.style.display = "none";
    //this.container.style.whiteSpace = "no-wrap";

    var toolTipHtml = "<div style=\" width: auto;";
    toolTipHtml += "height: auto;";
    toolTipHtml += "min-width: 50px;";
    toolTipHtml += "line-height: auto;";
    toolTipHtml += "margin: 0px 0px 0px 0px;";
    toolTipHtml += "padding: 5px;";
    toolTipHtml += "font-family: Calibri, Arial, Georgia, serif;";
    toolTipHtml += "font-weight: normal;";
    toolTipHtml += "font-style: " + (__WEBPACK_IMPORTED_MODULE_3__helpers_utils__["s" /* isCanvasSupported */] ? "italic;" : "normal;");
    toolTipHtml += "font-size: 14px;";
    toolTipHtml += "color: #000000;";
    toolTipHtml += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
    toolTipHtml += "text-align: left;";
    toolTipHtml += "border: 2px solid gray;";

    //Older browsers like IE8- don't support alpha values
    toolTipHtml += __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["s" /* isCanvasSupported */] ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";

    toolTipHtml += "text-indent: 0px;";
    toolTipHtml += "white-space: nowrap;";
    //toolTipHtml += "pointer-events:none;";
    toolTipHtml += "border-radius: 5px;";

    //Disable Text Selection
    toolTipHtml += "-moz-user-select:none;";
    toolTipHtml += "-khtml-user-select: none;";
    toolTipHtml += "-webkit-user-select: none;";
    toolTipHtml += "-ms-user-select: none;";
    toolTipHtml += "user-select: none;";

    //toolTipHtml += "opacity: 0;";
    //toolTipHtml += "filter: progid: DXImageTransform.Microsoft.gradient(GradientType = 0, startColorstr = '#4cffffff', endColorstr = '#4cffffff');";

    if (!__WEBPACK_IMPORTED_MODULE_3__helpers_utils__["s" /* isCanvasSupported */]) {
      //toolTipHtml += "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=90)'";
      //-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000')";
      /* For IE 5.5 - 7 */
      toolTipHtml += "filter: alpha(opacity = 90);";
      toolTipHtml += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');";
    }

    toolTipHtml += "} \"> Sample Tooltip</div>";

    this.container.innerHTML = toolTipHtml;
    this.contentDiv = this.container.firstChild;


    this.container.style.borderRadius = this.contentDiv.style.borderRadius;
    this.chart._canvasJSContainer.appendChild(this.container);
  }
}

ToolTip.prototype.mouseMoveHandler = function (x, y) {

  if (!(this._lastUpdated && (new Date().getTime() - this._lastUpdated) < 40)) {
    this._lastUpdated = new Date().getTime();
    this._updateToolTip(x, y);
  }
}

ToolTip.prototype._updateToolTip = function (mouseX, mouseY) {
  //return;

  if (this.chart.disableToolTip) // Disabled during animation, etc
    return;

  if (typeof (mouseX) === "undefined" || typeof (mouseY) === "undefined") {
    if (isNaN(this._prevX) || isNaN(this._prevY))
      return;
    else {
      mouseX = this._prevX;
      mouseY = this._prevY;
    }
  } else {
    this._prevX = mouseX;
    this._prevY = mouseY;
  }


  var dataPoint = null;
  var dataSeries = null;
  var toolTipContent = "";
  var entries = [];
  var toolTipRight;
  var toolTipBottom;
  var x = 0;

  if (this.shared && this.enabled && this.chart.plotInfo.axisPlacement !== "none") {
    // && this.chart.plotInfo.axisPlacement !== "none"
    if (this.chart.plotInfo.axisPlacement === "xySwapped") {
      x = (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.height * ((this.chart.axisX.lineCoordinates.y2 - mouseY)) + this.chart.axisX.viewportMinimum;
    }
    else {
      x = (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.width * (mouseX - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.viewportMinimum;
    }

    var nearbyEntries = [];

    for (var i = 0; i < this.chart.data.length; i++) {
      var entry = this.chart.data[i].getDataPointAtX(x, true);

      if (entry && entry.index >= 0) {
        entry.dataSeries = this.chart.data[i];

        if (entry.dataPoint.y !== null)
          nearbyEntries.push(entry);
      }
    }

    if (nearbyEntries.length === 0)
      return;

    nearbyEntries.sort(function (entry1, entry2) {
      return entry1.distance - entry2.distance;
    });

    var closest = nearbyEntries[0];

    for (i = 0; i < nearbyEntries.length; i++) {

      if (nearbyEntries[i].dataPoint.x.valueOf() === closest.dataPoint.x.valueOf())
        entries.push(nearbyEntries[i]);
    }

    nearbyEntries = null;

  } else {

    var dataPointInfo = this.chart.getDataPointAtXY(mouseX, mouseY, true);
    //dataPointInfo = null;

    if (dataPointInfo) {
      this.currentDataPointIndex = dataPointInfo.dataPointIndex;
      this.currentSeriesIndex = dataPointInfo.dataSeries.index;
    } else if (__WEBPACK_IMPORTED_MODULE_3__helpers_utils__["s" /* isCanvasSupported */]) {

      var id = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_utils__["o" /* getObjectId */])(mouseX, mouseY, this.chart._eventManager.ghostCtx);
      if (id > 0 && typeof this.chart._eventManager.objectMap[id] !== "undefined") {//DataPoint/DataSeries event
        var eventObject = this.chart._eventManager.objectMap[id];

        if (eventObject.objectType === "legendItem")
          return;

        //if (this.currentSeriesIndex === eventObject.dataSeriesIndex && this.currentDataPointIndex === eventObject.dataPointIndex)
        //  return;
        //else {
        this.currentSeriesIndex = eventObject.dataSeriesIndex;
        this.currentDataPointIndex = eventObject.dataPointIndex >= 0 ? eventObject.dataPointIndex : -1;
        //}

        //window.console.log("id: " + id + "; hex: " + intToHexColorString(id));
      } else
        this.currentDataPointIndex = -1;

    } else
      this.currentDataPointIndex = -1;


    if (this.currentSeriesIndex >= 0) {

      dataSeries = this.chart.data[this.currentSeriesIndex];

      var entry = {
      };

      if (this.currentDataPointIndex >= 0) {
        dataPoint = dataSeries.dataPoints[this.currentDataPointIndex];

        entry.dataSeries = dataSeries;
        entry.dataPoint = dataPoint;
        entry.index = this.currentDataPointIndex;
        entry.distance = Math.abs(dataPoint.x - x);
      } else if (this.enabled && (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "area" || dataSeries.type === "stepArea"
          || dataSeries.type === "splineArea" || dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100"
          || dataSeries.type === "rangeArea" || dataSeries.type === "rangeSplineArea"
          || dataSeries.type === "candlestick" || dataSeries.type === "ohlc")) {

        //var x = (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.width * (mouseX - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.viewportMinimum.valueOf();
        var x = dataSeries.axisX.conversionParameters.minimum + (mouseX - dataSeries.axisX.conversionParameters.reference) / dataSeries.axisX.conversionParameters.pixelPerUnit;


        entry = dataSeries.getDataPointAtX(x, true);
        entry.dataSeries = dataSeries;
        this.currentDataPointIndex = entry.index;
        dataPoint = entry.dataPoint;
      } else {
        //this.hide();
        return;
      }

      if (entry.dataPoint.y !== null) {
        if (entry.dataSeries.axisY) {
          if (entry.dataPoint.y.length > 0) {
            var unboundToViewport = 0;
            for (var i = 0; i < entry.dataPoint.y.length; i++)
              if (entry.dataPoint.y[i] < entry.dataSeries.axisY.viewportMinimum)
                unboundToViewport--;
              else if (entry.dataPoint.y[i] > entry.dataSeries.axisY.viewportMaximum)
                unboundToViewport++;
            if (unboundToViewport < entry.dataPoint.y.length && unboundToViewport > -entry.dataPoint.y.length)
              entries.push(entry);
          } else {
            if (entry.dataPoint.y >= entry.dataSeries.axisY.viewportMinimum && entry.dataPoint.y <= entry.dataSeries.axisY.viewportMaximum)
              entries.push(entry);
          }
        } else
        entries.push(entry);
    }

    }
  }


  if (entries.length > 0) {

    this.highlightObjects(entries);

    if (this.enabled) {

      var toolTipInnerHtml = "";

      toolTipInnerHtml = this.getToolTipInnerHTML({ entries: entries });

      if (toolTipInnerHtml !== null) {
        this.contentDiv.innerHTML = toolTipInnerHtml;

        this.contentDiv.innerHTML = toolTipInnerHtml;

        var previouslyHidden = false;
        if (this.container.style.display === "none") {
          previouslyHidden = true;
          this.container.style.display = "block";
        }

        try {
          this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["s" /* isCanvasSupported */] ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";

          this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.borderColor ? this.borderColor : entries[0].dataPoint.color ? entries[0].dataPoint.color : entries[0].dataSeries.color ? entries[0].dataSeries.color : entries[0].dataSeries._colorSet[entries[0].index % entries[0].dataSeries._colorSet.length];

          this.contentDiv.style.borderWidth = (this.borderThickness || this.borderThickness === 0) ? this.borderThickness + "px" : 2 + "px";

          this.contentDiv.style.borderRadius = (this.cornerRadius || this.cornerRadius === 0) ? this.cornerRadius + "px" : 5 + "px";
          this.container.style.borderRadius = this.contentDiv.style.borderRadius;


          this.contentDiv.style.fontSize = (this.fontSize || this.fontSize === 0) ? this.fontSize + "px" : 14 + "px";
          this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000";
          this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;";
          this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal";
          this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["s" /* isCanvasSupported */] ? "italic" : "normal";

        } catch (e) {
        }

        var toolTipLeft;

        if (entries[0].dataSeries.type === "pie" || entries[0].dataSeries.type === "doughnut" || entries[0].dataSeries.type === "funnel" || entries[0].dataSeries.type === "bar" || entries[0].dataSeries.type === "rangeBar" || entries[0].dataSeries.type === "stackedBar" || entries[0].dataSeries.type === "stackedBar100") {
          toolTipLeft = mouseX - 10 - this.container.clientWidth;
        } else {
          //toolTipLeft = (((this.chart.axisX.lineCoordinates.width / Math.abs(this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum)) * Math.abs(entries[0].dataPoint.x - this.chart.axisX.viewportMinimum)) + this.chart.axisX.lineCoordinates.x1 + .5) - this.container.clientWidth << 0;
          toolTipLeft = entries[0].dataSeries.axisX.conversionParameters.reference + entries[0].dataSeries.axisX.conversionParameters.pixelPerUnit * (entries[0].dataPoint.x - entries[0].dataSeries.axisX.conversionParameters.minimum) - this.container.clientWidth << 0;
          toolTipLeft -= 10;
        }


        if (toolTipLeft < 0) {
          toolTipLeft += this.container.clientWidth + 20;
        }

        if (toolTipLeft + this.container.clientWidth > this.chart._container.clientWidth)
          toolTipLeft = Math.max(0, this.chart._container.clientWidth - this.container.clientWidth);

        toolTipLeft += "px";

        if (entries.length === 1 && !this.shared && (entries[0].dataSeries.type === "line" || entries[0].dataSeries.type === "stepLine" || entries[0].dataSeries.type === "spline" || entries[0].dataSeries.type === "area" || entries[0].dataSeries.type === "stepArea" || entries[0].dataSeries.type === "splineArea" || entries[0].dataSeries.type === "stackedArea" || entries[0].dataSeries.type === "stackedArea100")) {
          //toolTipBottom = (entries[0].dataSeries.axisY.lineCoordinates.y2 - entries[0].dataSeries.axisY.lineCoordinates.height / Math.abs(entries[0].dataSeries.axisY.maximum - entries[0].dataSeries.axisY.viewportMinimum) * Math.abs(entries[0].dataPoint.y - entries[0].dataSeries.axisY.viewportMinimum) + .5) << 0;
          toolTipBottom = entries[0].dataSeries.axisY.conversionParameters.reference + entries[0].dataSeries.axisY.conversionParameters.pixelPerUnit * (entries[0].dataPoint.y - entries[0].dataSeries.axisY.viewportMinimum) + .5 << 0;
        } else if (entries[0].dataSeries.type === "bar" || entries[0].dataSeries.type === "rangeBar" || entries[0].dataSeries.type === "stackedBar" || entries[0].dataSeries.type === "stackedBar100") {
          //toolTipBottom = (entries[0].dataSeries.axisX.lineCoordinates.y2 - entries[0].dataSeries.axisX.lineCoordinates.height / Math.abs(entries[0].dataSeries.axisX.maximum - entries[0].dataSeries.axisX.viewportMinimum) * Math.abs(entries[0].dataPoint.x - entries[0].dataSeries.axisX.viewportMinimum) + .5) << 0;
          toolTipBottom = entries[0].dataSeries.axisX.conversionParameters.reference + entries[0].dataSeries.axisX.conversionParameters.pixelPerUnit * (entries[0].dataPoint.x - entries[0].dataSeries.axisX.viewportMinimum) + .5 << 0;
        }
        else {
          toolTipBottom = mouseY;
        }

        toolTipBottom = (-toolTipBottom + 10);

        if (toolTipBottom + this.container.clientHeight + 5 > 0) {
          toolTipBottom -= toolTipBottom + this.container.clientHeight + 5 - 0
        }

        toolTipBottom += "px";

        //this.container.style.right = toolTipRight;
        this.container.style.left = toolTipLeft;
        this.container.style.bottom = toolTipBottom;

        if (!this.animationEnabled || previouslyHidden) {
          this.disableAnimation();
        }
        else
          this.enableAnimation();
      } else {
        this.hide(false);
      }

    }

    //if (isDebugMode)
    //  console.log("searchX: " + x + " x: " + searchResult.dataPoint.x + "; y: " + searchResult.dataPoint.y + "; distance: " + searchResult.distance + "; steps: " + steps);
  }
}


ToolTip.prototype.highlightObjects = function (entries) {
  //if (!this.enabled)
  //	return;

  //this.chart.overlaidCanvasCtx.clearRect(0, 0, this.chart.overlaidCanvas.width, this.chart.overlaidCanvas.height);
  var overlaidCanvasCtx = this.chart.overlaidCanvasCtx;
  this.chart.resetOverlayedCanvas();

  overlaidCanvasCtx.clearRect(0,0,this.chart.width, this.chart.height);
  overlaidCanvasCtx.save();


  var plotArea = this.chart.plotArea;
  var offset = 0;

  overlaidCanvasCtx.rect(plotArea.x1, plotArea.y1, plotArea.x2 - plotArea.x1, plotArea.y2 - plotArea.y1);
  overlaidCanvasCtx.clip();


  for (var i = 0; i < entries.length; i++) {

    var entry = entries[i];

    var eventObject = this.chart._eventManager.objectMap[entry.dataSeries.dataPointIds[entry.index]];

    if (!eventObject || !eventObject.objectType || eventObject.objectType !== "dataPoint")
      continue;

    var dataSeries = this.chart.data[eventObject.dataSeriesIndex];
    var dataPoint = dataSeries.dataPoints[eventObject.dataPointIndex];
    var index = eventObject.dataPointIndex;

    if (dataPoint.highlightEnabled !== false && (dataSeries.highlightEnabled === true || dataPoint.highlightEnabled === true)) {

      if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "scatter"
        || dataSeries.type === "area" || dataSeries.type === "stepArea" || dataSeries.type === "splineArea"
        || dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100"
        || dataSeries.type === "rangeArea" || dataSeries.type === "rangeSplineArea") {
        var markerProps = dataSeries.getMarkerProperties(index, eventObject.x1, eventObject.y1, this.chart.overlaidCanvasCtx);
        markerProps.size = Math.max(markerProps.size * 1.5 << 0, 10);

        markerProps.borderColor = markerProps.borderColor || "#FFFFFF";
        markerProps.borderThickness = markerProps.borderThickness || Math.ceil(markerProps.size * .1);

        //overlaidCanvasCtx.globalAlpha = .8;
        __WEBPACK_IMPORTED_MODULE_1__helpers_render__["a" /* default */].drawMarkers([markerProps]);
        //overlaidCanvasCtx.globalAlpha = .8;

        if (typeof (eventObject.y2) !== "undefined") {

          var markerProps = dataSeries.getMarkerProperties(index, eventObject.x1, eventObject.y2, this.chart.overlaidCanvasCtx);
          markerProps.size = Math.max(markerProps.size * 1.5 << 0, 10);

          markerProps.borderColor = markerProps.borderColor || "#FFFFFF";
          markerProps.borderThickness = markerProps.borderThickness || Math.ceil(markerProps.size * .1);

          //overlaidCanvasCtx.globalAlpha = .8;
          __WEBPACK_IMPORTED_MODULE_1__helpers_render__["a" /* default */].drawMarkers([markerProps]);
          //overlaidCanvasCtx.globalAlpha = .8;
        }
      } else if (dataSeries.type === "bubble") {
        var markerProps = dataSeries.getMarkerProperties(index, eventObject.x1, eventObject.y1, this.chart.overlaidCanvasCtx);
        markerProps.size = eventObject.size;
        markerProps.color = "white";
        markerProps.borderColor = "white";
        //markerProps.borderThickness = 2;
        overlaidCanvasCtx.globalAlpha = .3;
        __WEBPACK_IMPORTED_MODULE_1__helpers_render__["a" /* default */].drawMarkers([markerProps]);
        overlaidCanvasCtx.globalAlpha = 1;
      } else if (dataSeries.type === "column" || dataSeries.type === "stackedColumn" || dataSeries.type === "stackedColumn100"
        || dataSeries.type === "bar" || dataSeries.type === "rangeBar" || dataSeries.type === "stackedBar" || dataSeries.type === "stackedBar100"
        || dataSeries.type === "rangeColumn") {
        Object(__WEBPACK_IMPORTED_MODULE_3__helpers_utils__["g" /* drawRect */])(overlaidCanvasCtx, eventObject.x1, eventObject.y1, eventObject.x2, eventObject.y2, "white", 0, null, false, false, false, false, .3);
      }
      else if (dataSeries.type === "pie" || dataSeries.type === "doughnut") {
        Object(__WEBPACK_IMPORTED_MODULE_3__helpers_utils__["h" /* drawSegment */])(overlaidCanvasCtx, eventObject.center, eventObject.radius, "white", dataSeries.type, eventObject.startAngle, eventObject.endAngle, .3, eventObject.percentInnerRadius);
      } else if (dataSeries.type === "candlestick") {

        overlaidCanvasCtx.globalAlpha = 1;
        overlaidCanvasCtx.strokeStyle = eventObject.color;
        overlaidCanvasCtx.lineWidth = eventObject.borderThickness * 2;
        offset = (overlaidCanvasCtx.lineWidth) % 2 === 0 ? 0 : .5;

        overlaidCanvasCtx.beginPath();
        overlaidCanvasCtx.moveTo(eventObject.x3 - offset, eventObject.y2);
        overlaidCanvasCtx.lineTo(eventObject.x3 - offset, Math.min(eventObject.y1, eventObject.y4));
        overlaidCanvasCtx.stroke();

        overlaidCanvasCtx.beginPath();
        overlaidCanvasCtx.moveTo(eventObject.x3 - offset, Math.max(eventObject.y1, eventObject.y4));
        overlaidCanvasCtx.lineTo(eventObject.x3 - offset, eventObject.y3);
        overlaidCanvasCtx.stroke();

        Object(__WEBPACK_IMPORTED_MODULE_3__helpers_utils__["g" /* drawRect */])(overlaidCanvasCtx, eventObject.x1, Math.min(eventObject.y1, eventObject.y4), eventObject.x2, Math.max(eventObject.y1, eventObject.y4), "transparent", eventObject.borderThickness * 2, eventObject.color, false, false, false, false);
        overlaidCanvasCtx.globalAlpha = 1;

      } else if (dataSeries.type === "ohlc") {
        overlaidCanvasCtx.globalAlpha = 1;

        overlaidCanvasCtx.strokeStyle = eventObject.color;
        overlaidCanvasCtx.lineWidth = eventObject.borderThickness * 2;

        offset = (overlaidCanvasCtx.lineWidth) % 2 === 0 ? 0 : .5;

        overlaidCanvasCtx.beginPath();
        overlaidCanvasCtx.moveTo(eventObject.x3 - offset, eventObject.y2);
        overlaidCanvasCtx.lineTo(eventObject.x3 - offset, eventObject.y3);
        overlaidCanvasCtx.stroke();

        overlaidCanvasCtx.beginPath();
        overlaidCanvasCtx.moveTo(eventObject.x3, eventObject.y1);
        overlaidCanvasCtx.lineTo(eventObject.x1, eventObject.y1);
        overlaidCanvasCtx.stroke();

        overlaidCanvasCtx.beginPath();
        overlaidCanvasCtx.moveTo(eventObject.x3, eventObject.y4);
        overlaidCanvasCtx.lineTo(eventObject.x2, eventObject.y4);
        overlaidCanvasCtx.stroke();

        overlaidCanvasCtx.globalAlpha = 1;

      }
    }
  }

  overlaidCanvasCtx.restore();
  overlaidCanvasCtx.globalAlpha = 1;
  overlaidCanvasCtx.beginPath();

  return;
}

ToolTip.prototype.getToolTipInnerHTML = function (e) {
  var entries = e.entries;
  var toolTipInnerHtml = null;
  var dataSeries = null;
  var dataPoint = null;
  var index = 0;
  var color = null;
  var toolTipContent = "";

  var isToolTipDefinedInData = true;
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].dataSeries.toolTipContent || entries[i].dataPoint.toolTipContent) {
      isToolTipDefinedInData = false;
      break;
    }
  }

  if (isToolTipDefinedInData && ((this.content && typeof (this.content) === "function") || this.contentFormatter)) {

    var param = {
      chart: this.chart, toolTip: this._options, entries: entries
    };
    toolTipInnerHtml = this.contentFormatter ? this.contentFormatter(param) : this.content(param);

  } else {

    if (this.shared && this.chart.plotInfo.axisPlacement !== "none") {

      var toolTipInnerHtmlPrefix = "";

      for (var i = 0; i < entries.length; i++) {
        dataSeries = entries[i].dataSeries;
        dataPoint = entries[i].dataPoint;
        index = entries[i].index;

        toolTipContent = "";

        if (i === 0 && isToolTipDefinedInData && !this.content) {
          toolTipInnerHtmlPrefix += typeof (this.chart.axisX.labels[dataPoint.x]) !== "undefined" ? this.chart.axisX.labels[dataPoint.x] : "{x}";
          toolTipInnerHtmlPrefix += "</br>";
          toolTipInnerHtmlPrefix = this.chart.replaceKeywordsWithValue(toolTipInnerHtmlPrefix, dataPoint, dataSeries, index);
        }

        //Allows disabling of toolTip for individual dataPoints/dataSeries
        if (dataPoint.toolTipContent === null || (typeof (dataPoint.toolTipContent) === "undefined" && dataSeries._options.toolTipContent === null))
          continue;


        if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "area" || dataSeries.type === "stepArea" || dataSeries.type === "splineArea" || dataSeries.type === "column" || dataSeries.type === "bar" || dataSeries.type === "scatter"
        || dataSeries.type === "stackedColumn" || dataSeries.type === "stackedColumn100" || dataSeries.type === "stackedBar" || dataSeries.type === "stackedBar100"
        || dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100") {
          toolTipContent += dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}";
        }
        else if (dataSeries.type === "bubble") {
          toolTipContent += dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
        } else if (dataSeries.type === "pie" || dataSeries.type === "doughnut" || dataSeries.type === "funnel") {
          toolTipContent += dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "&nbsp;&nbsp;{y}";
        } else if (dataSeries.type === "rangeColumn" || dataSeries.type === "rangeBar" || dataSeries.type === "rangeArea" || dataSeries.type === "rangeSplineArea") {
          toolTipContent += dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}";
        } else if (dataSeries.type === "candlestick" || dataSeries.type === "ohlc") {
          toolTipContent += dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>"
                  + "<br/>Open: &nbsp;&nbsp;{y[0]}"
                  + "<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}"
                  + "<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}"
                  + "<br/>Close: &nbsp;&nbsp;{y[3]}";
        }

        if (toolTipInnerHtml === null)
          toolTipInnerHtml = "";


        if (this.reversed === true) {

          toolTipInnerHtml = this.chart.replaceKeywordsWithValue(toolTipContent, dataPoint, dataSeries, index) + toolTipInnerHtml;

          if (i < entries.length - 1)
            toolTipInnerHtml = "</br>" + toolTipInnerHtml;

        } else {

          toolTipInnerHtml += this.chart.replaceKeywordsWithValue(toolTipContent, dataPoint, dataSeries, index);

          if (i < entries.length - 1)
            toolTipInnerHtml += "</br>";

        }

      }

      if (toolTipInnerHtml !== null)
        toolTipInnerHtml = toolTipInnerHtmlPrefix + toolTipInnerHtml;

    } else {

      dataSeries = entries[0].dataSeries;
      dataPoint = entries[0].dataPoint;
      index = entries[0].index;

      //Allows disabling of toolTip for individual dataPoints/dataSeries
      if (dataPoint.toolTipContent === null || (typeof (dataPoint.toolTipContent) === "undefined" && dataSeries._options.toolTipContent === null))
        return null;


      if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "area" || dataSeries.type === "stepArea" || dataSeries.type === "splineArea" || dataSeries.type === "column" || dataSeries.type === "bar" || dataSeries.type === "scatter"
        || dataSeries.type === "stackedColumn" || dataSeries.type === "stackedColumn100" || dataSeries.type === "stackedBar" || dataSeries.type === "stackedBar100"
        || dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100") {
        toolTipContent = dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>" + (dataPoint.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y}";
      } else if (dataSeries.type === "bubble") {
        toolTipContent = dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>" + (dataPoint.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
      } else if (dataSeries.type === "pie" || dataSeries.type === "doughnut" || dataSeries.type === "funnel") {
        toolTipContent = dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : (dataPoint.name ? "{name}:&nbsp;&nbsp;" : dataPoint.label ? "{label}:&nbsp;&nbsp;" : "") + "{y}";
      } else if (dataSeries.type === "rangeColumn" || dataSeries.type === "rangeBar" || dataSeries.type === "rangeArea" || dataSeries.type === "rangeSplineArea") {
        toolTipContent = dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>" + (dataPoint.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}";
      } else if (dataSeries.type === "candlestick" || dataSeries.type === "ohlc") {
        toolTipContent = dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>" + (dataPoint.label ? "{label}" : "{x}") + "</span>"
          + "<br/>Open: &nbsp;&nbsp;{y[0]}"
          + "<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}"
          + "<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}"
          + "<br/>Close: &nbsp;&nbsp;{y[3]}";
      }

      if (toolTipInnerHtml === null)
        toolTipInnerHtml = "";

      toolTipInnerHtml += this.chart.replaceKeywordsWithValue(toolTipContent, dataPoint, dataSeries, index);
    }
  }

  return toolTipInnerHtml;
}

ToolTip.prototype.enableAnimation = function () {
  if (this.container.style.WebkitTransition)
    return;

  this.container.style.WebkitTransition = "left .2s ease-out, bottom .2s ease-out";
  this.container.style.MozTransition = "left .2s ease-out, bottom .2s ease-out";
  this.container.style.MsTransition = "left .2s ease-out, bottom .2s ease-out";
  this.container.style.transition = "left .2s ease-out, bottom .2s ease-out";
}

ToolTip.prototype.disableAnimation = function () {
  if (!this.container.style.WebkitTransition)
    return;

  this.container.style.WebkitTransition = "";
  this.container.style.MozTransition = "";
  this.container.style.MsTransition = "";
  this.container.style.transition = "";
}

ToolTip.prototype.hide = function (resetOverlayedCanvas) {
  if (!this.enabled)
    return;

  resetOverlayedCanvas = typeof (resetOverlayedCanvas) === "undefined" ? true : resetOverlayedCanvas;

  this.container.style.display = "none";
  this.currentSeriesIndex = -1;
  this._prevX = NaN;
  this._prevY = NaN;
  //this.chart.overlaidCanvasCtx.clearRect(0, 0, this.chart.overlaidCanvas.width, this.chart.overlaidCanvas.height);
  if (resetOverlayedCanvas)
    this.chart.resetOverlayedCanvas();
}

/* harmony default export */ __webpack_exports__["a"] = (ToolTip);


/***/ }),
/* 35 */
/*!************************************************!*\
  !*** ./node_modules/canvasjs/src/core/axis.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasjs__ = __webpack_require__(/*! ./canvasjs */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_block__ = __webpack_require__(/*! ./text_block */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_utils__ = __webpack_require__(/*! ../helpers/utils */ 1);





function Axis(chart, options, type, position) {

	Axis.base.constructor.call(this, "Axis", options, chart.theme);

	this.chart = chart;
	this.canvas = chart.canvas;
	this.ctx = chart.ctx;
	this.maxWidth = 0;
	this.maxHeight = 0;
	this.intervalStartPosition = 0;
	this.labels = [];
	this._labels = null;

	//Processed information about the data that gets plotted against this axis
	this.dataInfo = {
		min: Infinity,
		max: -Infinity,
		viewPortMin: Infinity,
		viewPortMax: -Infinity,
		minDiff: Infinity // Used only in case of axisX
	};

	if (type === "axisX") {
		this.sessionVariables = this.chart.sessionVariables[type];

		if (!this._options.interval)
			this.intervalType = null;
	} else {
		if (position === "left" || position === "top")
			this.sessionVariables = this.chart.sessionVariables["axisY"];
		else {
			this.sessionVariables = this.chart.sessionVariables["axisY2"];
		}
	}



	if (typeof (this._options.titleFontSize) === "undefined") {

		this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize);

		//window.console.log("titleFontSize: " + this.titleFontSize);
	}

	if (typeof (this._options.labelFontSize) === "undefined") {

		this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize);

		//window.console.log("labelFontSize: " + this.labelFontSize);

	}

	//Axis Type : axisX, axisY
	this.type = type;
	if (type === "axisX" && (!options || typeof (options.gridThickness) === "undefined"))
		this.gridThickness = 0;

	this._position = position;

	this.lineCoordinates = {
		x1: null, y1: null, x2: null, y2: null, width: null
	};//{x1:, y1:, x2:, y2:, width:}
	//
	{
		this.labelAngle = ((this.labelAngle % 360) + 360) % 360;

		if (this.labelAngle > 90 && this.labelAngle <= 270)
			this.labelAngle -= 180;
		else if (this.labelAngle > 180 && this.labelAngle <= 270)
			this.labelAngle -= 180
		else if (this.labelAngle > 270 && this.labelAngle <= 360)
			this.labelAngle -= 360
	}

	if (this._options.stripLines && this._options.stripLines.length > 0) {

		this.stripLines = [];

		for (var i = 0; i < this._options.stripLines.length; i++) {
			this.stripLines.push(new StripLine(this.chart, this._options.stripLines[i], chart.theme, ++this.chart._eventManager.lastObjectId, this));
		}
	}

	this._titleTextBlock = null;

	if (!this.hasOptionChanged("viewportMinimum") && !isNaN(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum !== null)
		this.viewportMinimum = this.sessionVariables.newViewportMinimum;
	else
		this.sessionVariables.newViewportMinimum = null;

	if (!this.hasOptionChanged("viewportMaximum") && !isNaN(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum !== null)
		this.viewportMaximum = this.sessionVariables.newViewportMaximum;
	else
		this.sessionVariables.newViewportMaximum = null;

	if (this.minimum !== null && this.viewportMinimum !== null)
		this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);

	if (this.maximum !== null && this.viewportMaximum !== null)
		this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);

	this.trackChanges("viewportMinimum");
	this.trackChanges("viewportMaximum");
}

Object(__WEBPACK_IMPORTED_MODULE_2__helpers_utils__["i" /* extend */])(Axis, __WEBPACK_IMPORTED_MODULE_0__canvasjs__["a" /* default */]);

Axis.prototype.createLabels = function () {

	var textBlock;
	var i = 0;
	var endPoint;

	var labelMaxWidth = 0;
	var labelMaxHeight = 0;
	var intervalInPixels = 0;

	//var intervalInPixels = this.conversionParameters.pixelPerUnit * this.interval;


	if (this._position === "bottom" || this._position === "top") {
		intervalInPixels = this.lineCoordinates.width / Math.abs(this.viewportMaximum - this.viewportMinimum) * this.interval;

		if (this.labelAutoFit) {
			labelMaxWidth = typeof (this._options.labelMaxWidth) === "undefined" ? intervalInPixels * .9 >> 0 : this.labelMaxWidth;
		}
		else {
			labelMaxWidth = typeof (this._options.labelMaxWidth) === "undefined" ? this.chart.width * .7 >> 0 : this.labelMaxWidth;
		}

		labelMaxHeight = typeof (this._options.labelWrap) === "undefined" || this.labelWrap ? this.chart.height * .5 >> 0 : this.labelFontSize * 1.5;
	}
	else if (this._position === "left" || this._position === "right") {

		intervalInPixels = this.lineCoordinates.height / Math.abs(this.viewportMaximum - this.viewportMinimum) * this.interval;


		if (this.labelAutoFit) {
			labelMaxWidth = typeof (this._options.labelMaxWidth) === "undefined" ? this.chart.width * .3 >> 0 : this.labelMaxWidth;
		}
		else {
			labelMaxWidth = typeof (this._options.labelMaxWidth) === "undefined" ? this.chart.width * .5 >> 0 : this.labelMaxWidth;
		}

		labelMaxHeight = typeof (this._options.labelWrap) === "undefined" || this.labelWrap ? intervalInPixels * 2 >> 0 : this.labelFontSize * 1.5;
	}

	if (this.type === "axisX" && this.chart.plotInfo.axisXValueType === "dateTime") {
		endPoint = addToDateTime(new Date(this.viewportMaximum), this.interval, this.intervalType)
		//endPoint = this.viewportMaximum;

		for (i = this.intervalStartPosition; i < endPoint; addToDateTime(i, this.interval, this.intervalType)) {

			//var text = dateFormat(i, this.valueFormatString);
			var timeInMilliseconds = i.getTime();
			var text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this._options, value: i, label: this.labels[i] ? this.labels[i] : null })
				: this.type === "axisX" && this.labels[timeInMilliseconds] ? this.labels[timeInMilliseconds] : dateFormat(i, this.valueFormatString, this.chart._cultureInfo);

			textBlock = new __WEBPACK_IMPORTED_MODULE_1__text_block__["a" /* default */](this.ctx, {
				x: 0,
				y: 0,
				//maxWidth: this.maxHeight,
				//maxHeight: this.labelFontSize,
				maxWidth: labelMaxWidth,
				maxHeight: labelMaxHeight,
				angle: this.labelAngle,
				text: this.prefix + text + this.suffix,
				horizontalAlign: "left",//left, center, right
				fontSize: this.labelFontSize,//in pixels
				fontFamily: this.labelFontFamily,
				fontWeight: this.labelFontWeight, //normal, bold, bolder, lighter,
				fontColor: this.labelFontColor,
				fontStyle: this.labelFontStyle, // normal, italic, oblique
				textBaseline: "middle"
			});

			this._labels.push({ position: i.getTime(), textBlock: textBlock, effectiveHeight: null });
		}

	}
	else {
		endPoint = this.viewportMaximum;

		//if ((Math.floor(this.interval) < this.interval && !this._options.interval) || true) {

		//Check if it should be rendered as a category axis. If yes, then ceil the interval
		if (this.labels && this.labels.length) {
			var tempInterval = Math.ceil(this.interval);
			var tempStartPoint = Math.ceil(this.intervalStartPosition);
			var hasAllLabels = false;
			for (i = tempStartPoint; i < this.viewportMaximum; i += tempInterval) {
				if (this.labels[i]) {
					hasAllLabels = true;
				} else {
					hasAllLabels = false;
					break;
				}
			}

			if (hasAllLabels) {
				this.interval = tempInterval;
				this.intervalStartPosition = tempStartPoint;
			}
		}

		//parseFloat & toPrecision are being used to avoid issues related to precision.
		for (i = this.intervalStartPosition; i <= endPoint; i = parseFloat((i + this.interval).toFixed(14))) {

			var text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this._options, value: i, label: this.labels[i] ? this.labels[i] : null })
				: this.type === "axisX" && this.labels[i] ? this.labels[i] : Object(__WEBPACK_IMPORTED_MODULE_2__helpers_utils__["t" /* numberFormat */])(i, this.valueFormatString, this.chart._cultureInfo);

			textBlock = new __WEBPACK_IMPORTED_MODULE_1__text_block__["a" /* default */](this.ctx, {
				x: 0,
				y: 0,
				//maxWidth: this.maxHeight,
				//maxHeight: this.labelFontSize,
				maxWidth: labelMaxWidth,
				maxHeight: labelMaxHeight,
				angle: this.labelAngle,
				text: this.prefix + text + this.suffix,
				horizontalAlign: "left",//left, center, right
				fontSize: this.labelFontSize,//in pixels
				fontFamily: this.labelFontFamily,
				fontWeight: this.labelFontWeight, //normal, bold, bolder, lighter,
				fontColor: this.labelFontColor,
				fontStyle: this.labelFontStyle, // normal, italic, oblique
				textBaseline: "middle",
				borderThickness: 0
			});

			this._labels.push({ position: i, textBlock: textBlock, effectiveHeight: null });
		}
	}

	for (var i = 0; i < this.stripLines.length; i++) {

		var stripLine = this.stripLines[i];

		textBlock = new __WEBPACK_IMPORTED_MODULE_1__text_block__["a" /* default */](this.ctx, {
			x: 0,
			y: 0,
			//maxWidth: this.maxHeight,
			//maxHeight: this.labelFontSize,
			backgroundColor: stripLine.labelBackgroundColor,
			maxWidth: labelMaxWidth,
			maxHeight: labelMaxHeight,
			angle: this.labelAngle,
			text: stripLine.labelFormatter ? stripLine.labelFormatter({ chart: this.chart, axis: this, stripLine: stripLine }) : stripLine.label,
			horizontalAlign: "left",//left, center, right
			fontSize: stripLine.labelFontSize,//in pixels
			fontFamily: stripLine.labelFontFamily,
			fontWeight: stripLine.labelFontWeight, //normal, bold, bolder, lighter,
			fontColor: stripLine._options.labelFontColor || stripLine.color,
			fontStyle: stripLine.labelFontStyle, // normal, italic, oblique
			textBaseline: "middle",
			borderThickness: 0
		});

		this._labels.push({ position: stripLine.value, textBlock: textBlock, effectiveHeight: null, stripLine: stripLine });
	}

}

Axis.prototype.createLabelsAndCalculateWidth = function () {

	var maxLabelEffectiveWidth = 0;
	this._labels = [];

	if (this._position === "left" || this._position === "right") {

		this.createLabels();

		for (var i = 0; i < this._labels.length; i++) {

			var textBlock = this._labels[i].textBlock;

			var size = textBlock.measureText();

			//var hypotenuse = Math.sqrt(Math.pow(size.height / 2, 2) + Math.pow(size.width, 2));
			//labelEffectiveWidth = hypotenuse * Math.cos(Math.abs(Math.PI / 180 * this.labelAngle) - Math.abs(Math.acos(size.width / hypotenuse)));

			var labelEffectiveWidth = 0;

			if (this.labelAngle === 0)
				labelEffectiveWidth = size.width;
			else
				labelEffectiveWidth = (size.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) + (size.height / 2 * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)));


			if (maxLabelEffectiveWidth < labelEffectiveWidth)
				maxLabelEffectiveWidth = labelEffectiveWidth;

			this._labels[i].effectiveWidth = labelEffectiveWidth;
		}
	}



	var titleHeight = this.title ? getFontHeightInPixels(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0;

	var axisWidth = titleHeight + maxLabelEffectiveWidth + this.tickLength + 5;

	//if (isDebugMode && window.console) {
	//	window.console.log(this.type + "--- axisWidth: " + axisWidth);
	//}

	return axisWidth;
}

Axis.prototype.createLabelsAndCalculateHeight = function () {
	var maxLabelEffectiveHeight = 0;
	this._labels = [];
	var textBlock;
	var i = 0;

	this.createLabels();

	if (this._position === "bottom" || this._position === "top") {

		for (i = 0; i < this._labels.length; i++) {

			textBlock = this._labels[i].textBlock;

			var size = textBlock.measureText();
			//var diagonal = Math.sqrt(Math.pow(size.height, 2) + Math.pow(size.width, 2));

			//var hypotenuse = Math.sqrt(Math.pow(size.height / 2, 2) + Math.pow(size.width, 2));
			//var labelEffectiveHeight = hypotenuse * Math.cos(Math.PI / 2 - (Math.abs(Math.PI / 180 * this.labelAngle) + Math.abs(Math.acos(size.width / hypotenuse))));

			var labelEffectiveHeight = 0;

			if (this.labelAngle === 0)
				labelEffectiveHeight = size.height;
			else
				labelEffectiveHeight = (size.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) + (size.height / 2 * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)));

			if (maxLabelEffectiveHeight < labelEffectiveHeight)
				maxLabelEffectiveHeight = labelEffectiveHeight;

			this._labels[i].effectiveHeight = labelEffectiveHeight;
		}
	}

	//var titleHeight = this.title ? this.titleFontSize + 5 : 0;
	var titleHeight = this.title ? getFontHeightInPixels(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0;

	return titleHeight + maxLabelEffectiveHeight + this.tickLength + 5;
}

//Static Method that co-ordinates between axisX, axisY and renders them
Axis.setLayoutAndRender = function (axisX, axisY, axisY2, axisPlacement, freeSpace) {
	var x1, y1, x2, y2;
	var chart = axisX.chart;
	var ctx = chart.ctx;

	axisX.calculateAxisParameters();

	if (axisY)
		axisY.calculateAxisParameters();

	if (axisY2)
		axisY2.calculateAxisParameters();

	//if (axisY && axisY2 && typeof (axisY._options.viewportMaximum) === "undefined" && typeof (axisY._options.viewportMinimum) === "undefined" && typeof (axisY._options.interval) === "undefined"
	//		&& typeof (axisY2._options.viewportMaximum) === "undefined" && typeof (axisY2._options.viewportMinimum) === "undefined" && typeof (axisY2._options.interval) === "undefined") {

	//	var noTicksY = (axisY.viewportMaximum - axisY.viewportMinimum) / axisY.interval;

	//	var noTicksY2 = (axisY2.viewportMaximum - axisY2.viewportMinimum) / axisY2.interval;

	//	if (noTicksY > noTicksY2) {
	//		axisY2.viewportMaximum = axisY2.interval * noTicksY + axisY2.viewportMinimum;
	//	} else if (noTicksY2 > noTicksY) {
	//		axisY.viewportMaximum = axisY.interval * noTicksY2 + axisY.viewportMinimum;
	//	}
	//}

	var axisYlineThickness = axisY ? axisY.lineThickness ? axisY.lineThickness : 0 : 0;
	var axisY2lineThickness = axisY2 ? axisY2.lineThickness ? axisY2.lineThickness : 0 : 0;

	var axisYGridThickness = axisY ? axisY.gridThickness ? axisY.gridThickness : 0 : 0;
	var axisY2GridThickness = axisY2 ? axisY2.gridThickness ? axisY2.gridThickness : 0 : 0;

	var axisYMargin = axisY ? axisY.margin : 0;
	var axisY2Margin = axisY ? axisY.margin : 0;

	if (axisPlacement === "normal") {

		axisX.lineCoordinates = {
		};

		var axisYWidth = Math.ceil(axisY ? axisY.createLabelsAndCalculateWidth() : 0);
		x1 = Math.round(freeSpace.x1 + axisYWidth + axisYMargin);
		axisX.lineCoordinates.x1 = x1;

		var axisY2Width = Math.ceil(axisY2 ? axisY2.createLabelsAndCalculateWidth() : 0);
		x2 = Math.round(freeSpace.x2 - axisY2Width > axisX.chart.width - 10 ? axisX.chart.width - 10 : freeSpace.x2 - axisY2Width);
		axisX.lineCoordinates.x2 = x2;

		axisX.lineCoordinates.width = Math.abs(x2 - x1); // required early on inside createLabels of axisX

		var axisXHeight = Math.ceil(axisX.createLabelsAndCalculateHeight());

		// Position axisX based on the available free space, Margin and its height
		//x1 = freeSpace.x1 + axisYWidth + axisYMargin + axisYlineThickness / 2;
		y1 = Math.round(freeSpace.y2 - axisXHeight - axisX.margin);
		y2 = Math.round(freeSpace.y2 - axisX.margin);

		//axisX.lineCoordinates = { x1: x1, y1: y1, x2: x2, y2: y1, width: Math.abs(x2 - x1) }
		axisX.lineCoordinates.y1 = y1;
		axisX.lineCoordinates.y2 = y1;

		axisX.boundingRect = {
			x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1
		};

		//if (isDebugMode) {
		//	axisX.ctx.rect(axisX.boundingRect.x1, axisX.boundingRect.y1, axisX.boundingRect.width, axisX.boundingRect.height);
		//	axisX.ctx.stroke();
		//}

		// Position axisY based on the available free space, Margin and its height
		if (axisY) {
			x1 = Math.round(freeSpace.x1 + axisY.margin);
			y1 = Math.round(freeSpace.y1 < 10 ? 10 : freeSpace.y1);
			x2 = Math.round(freeSpace.x1 + axisYWidth + axisY.margin);
			//y2 = freeSpace.y2 - axisXHeight - axisX.margin - axisX.lineThickness / 2;
			y2 = Math.round(freeSpace.y2 - axisXHeight - axisX.margin);

			axisY.lineCoordinates = {
				x1: x2, y1: y1, x2: x2, y2: y2, height: Math.abs(y2 - y1)
			}

			axisY.boundingRect = {
				x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1
			};
		}

		//if (isDebugMode && axisY) {
		//	axisY.ctx.rect(axisY.boundingRect.x1, axisY.boundingRect.y1, axisY.boundingRect.width, axisY.boundingRect.height);
		//	axisY.ctx.stroke();
		//}

		// Position axisY2 based on the available free space, Margin and its height
		if (axisY2) {
			x1 = Math.round(axisX.lineCoordinates.x2);
			y1 = Math.round(freeSpace.y1 < 10 ? 10 : freeSpace.y1);
			x2 = Math.round(x1 + axisY2Width + axisY2.margin);
			//y2 = freeSpace.y2 - axisXHeight - axisX.margin - axisX.lineThickness / 2;
			y2 = Math.round(freeSpace.y2 - axisXHeight - axisX.margin);

			axisY2.lineCoordinates = {
				x1: x1, y1: y1, x2: x1, y2: y2, height: Math.abs(y2 - y1)
			}

			axisY2.boundingRect = {
				x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1
			};
		}


		axisX.calculateValueToPixelConversionParameters();

		if (axisY)
			axisY.calculateValueToPixelConversionParameters();

		if (axisY2)
			axisY2.calculateValueToPixelConversionParameters();


		ctx.save();
		ctx.rect(5, axisX.boundingRect.y1, axisX.chart.width - 10, axisX.boundingRect.height);
		ctx.clip();

		axisX.renderLabelsTicksAndTitle();
		ctx.restore();

		if (axisY)
			axisY.renderLabelsTicksAndTitle();

		if (axisY2)
			axisY2.renderLabelsTicksAndTitle();


		chart.preparePlotArea();
		var plotArea = axisX.chart.plotArea;

		ctx.save();

		ctx.rect(plotArea.x1, plotArea.y1, Math.abs(plotArea.x2 - plotArea.x1), Math.abs(plotArea.y2 - plotArea.y1));

		ctx.clip();

		axisX.renderStripLinesOfThicknessType("value");

		if (axisY)
			axisY.renderStripLinesOfThicknessType("value");

		if (axisY2)
			axisY2.renderStripLinesOfThicknessType("value");


		axisX.renderInterlacedColors();

		if (axisY)
			axisY.renderInterlacedColors();

		if (axisY2)
			axisY2.renderInterlacedColors();

		ctx.restore();


		axisX.renderGrid();

		if (axisY)
			axisY.renderGrid();

		if (axisY2)
			axisY2.renderGrid();


		axisX.renderAxisLine();

		if (axisY)
			axisY.renderAxisLine();

		if (axisY2)
			axisY2.renderAxisLine();


		//No need to clip to plotArea because stripLines need to render on top of gridlines
		axisX.renderStripLinesOfThicknessType("pixel");

		if (axisY)
			axisY.renderStripLinesOfThicknessType("pixel");

		if (axisY2)
			axisY2.renderStripLinesOfThicknessType("pixel");
	}
	else {
		var axisXWidth = Math.ceil(axisX.createLabelsAndCalculateWidth());

		if (axisY) {
			axisY.lineCoordinates = {
			};

			x1 = Math.round(freeSpace.x1 + axisXWidth + axisX.margin);
			x2 = Math.round(freeSpace.x2 > axisY.chart.width - 10 ? axisY.chart.width - 10 : freeSpace.x2);

			axisY.lineCoordinates.x1 = x1;
			axisY.lineCoordinates.x2 = x2;
			axisY.lineCoordinates.width = Math.abs(x2 - x1);
		}

		if (axisY2) {
			axisY2.lineCoordinates = {
			};
			x1 = Math.round(freeSpace.x1 + axisXWidth + axisX.margin);
			x2 = Math.round(freeSpace.x2 > axisY2.chart.width - 10 ? axisY2.chart.width - 10 : freeSpace.x2);

			axisY2.lineCoordinates.x1 = x1;
			axisY2.lineCoordinates.x2 = x2;
			axisY2.lineCoordinates.width = Math.abs(x2 - x1);
		}



		var axisYHeight = Math.ceil(axisY ? axisY.createLabelsAndCalculateHeight() : 0);
		var axisY2Height = Math.ceil(axisY2 ? axisY2.createLabelsAndCalculateHeight() : 0);


		// Position axisY based on the available free space, Margin and its height
		if (axisY) {
			//x1 = freeSpace.x1 + axisXWidth + axisX.margin + axisX.lineThickness / 2;
			//x2 = freeSpace.x2 > axisY.chart.width - 10 ? axisY.chart.width - 10 : freeSpace.x2;

			y1 = Math.round(freeSpace.y2 - axisYHeight - axisY.margin);
			y2 = Math.round(freeSpace.y2 - axisYMargin > axisY.chart.height - 10 ? axisY.chart.height - 10 : freeSpace.y2 - axisYMargin);

			//axisY.lineCoordinates = { x1: x1, y1: y1, x2: x2, y2: y1, width: Math.abs(x2 - x1) }
			axisY.lineCoordinates.y1 = y1;
			axisY.lineCoordinates.y2 = y1;

			axisY.boundingRect = {
				x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: axisYHeight
			};
		}

		// Position axisY based on the available free space, Margin and its height
		if (axisY2) {
			//x1 = freeSpace.x1 + axisXWidth + axisX.margin + axisX.lineThickness / 2;
			//x2 = freeSpace.x2 > axisY2.chart.width - 10 ? axisY2.chart.width - 10 : freeSpace.x2;

			y1 = Math.round(freeSpace.y1 + axisY2.margin);
			y2 = (freeSpace.y1 + axisY2.margin + axisY2Height);

			//axisY2.lineCoordinates = { x1: x1, y1: y2, x2: x2, y2: y2, width: Math.abs(x2 - x1) }
			axisY2.lineCoordinates.y1 = y2;
			axisY2.lineCoordinates.y2 = y2;

			axisY2.boundingRect = {
				x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: axisY2Height
			};
		}

		//axisY.ctx.rect(axisY.boundingRect.x1, axisY.boundingRect.y1, axisY.boundingRect.width, axisY.boundingRect.height);
		//axisY.ctx.stroke();

		// Position axisX based on the available free space, Margin and its height
		x1 = Math.round(freeSpace.x1 + axisX.margin);
		y1 = Math.round(axisY2 ? axisY2.lineCoordinates.y2 : (freeSpace.y1 < 10 ? 10 : freeSpace.y1));
		x2 = Math.round(freeSpace.x1 + axisXWidth + axisX.margin);
		y2 = Math.round(axisY ? axisY.lineCoordinates.y1 : (freeSpace.y2 - axisYMargin > axisX.chart.height - 10 ? axisX.chart.height - 10 : freeSpace.y2 - axisYMargin));


		axisX.lineCoordinates = {
			x1: x2, y1: y1, x2: x2, y2: y2, height: Math.abs(y2 - y1)
		};

		axisX.boundingRect = {
			x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1
		};

		//axisX.ctx.rect(axisX.boundingRect.x1, axisX.boundingRect.y1, axisX.boundingRect.width, axisX.boundingRect.height);
		//axisX.ctx.stroke();

		axisX.calculateValueToPixelConversionParameters();

		if (axisY)
			axisY.calculateValueToPixelConversionParameters();
		if (axisY2)
			axisY2.calculateValueToPixelConversionParameters();


		//ctx.save();
		//ctx.rect(axisY.boundingRect.x1 - 30, axisY.boundingRect.y1, axisY.boundingRect.width + 60, axisY.boundingRect.height);
		//ctx.clip();

		if (axisY)
			axisY.renderLabelsTicksAndTitle();

		if (axisY2)
			axisY2.renderLabelsTicksAndTitle();

		//ctx.restore();

		axisX.renderLabelsTicksAndTitle();

		chart.preparePlotArea();
		var plotArea = axisX.chart.plotArea;

		ctx.save();
		ctx.rect(plotArea.x1, plotArea.y1, Math.abs(plotArea.x2 - plotArea.x1), Math.abs(plotArea.y2 - plotArea.y1));

		ctx.clip();


		//No need to clip to plotArea because stripLines need to render on top of gridlines
		axisX.renderStripLinesOfThicknessType("value");

		if (axisY)
			axisY.renderStripLinesOfThicknessType("value");
		if (axisY2)
			axisY2.renderStripLinesOfThicknessType("value");

		axisX.renderInterlacedColors();

		if (axisY)
			axisY.renderInterlacedColors();
		if (axisY2)
			axisY2.renderInterlacedColors();

		ctx.restore();


		axisX.renderGrid();


		if (axisY)
			axisY.renderGrid();

		if (axisY2)
			axisY2.renderGrid();


		axisX.renderAxisLine();

		if (axisY)
			axisY.renderAxisLine();

		if (axisY2)
			axisY2.renderAxisLine();


		axisX.renderStripLinesOfThicknessType("pixel");

		if (axisY)
			axisY.renderStripLinesOfThicknessType("pixel");
		if (axisY2)
			axisY2.renderStripLinesOfThicknessType("pixel");
	}

}

Axis.prototype.renderLabelsTicksAndTitle = function () {

	var skipLabels = false;
	var totalLabelWidth = 0;
	var thresholdRatio = 1;
	var labelCount = 0;

	var intervalInPixels = this.conversionParameters.pixelPerUnit * this.interval;

	if (this.labelAngle !== 0 && this.labelAngle !== 360)
		thresholdRatio = 1.2;

	//Don't skip labels when interval is explicitely set
	if (typeof (this._options.interval) === "undefined") {
		if (this._position === "bottom" || this._position === "top") {

			//thresholdRatio = .9;// More space is preferred between labels when axis is horizontally aligned

			for (i = 0; i < this._labels.length; i++) {
				label = this._labels[i];
				if (label.position < this.viewportMinimum || label.stripLine)// don't consider stripLine's lable
					continue;

				var width = label.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + label.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle);

				totalLabelWidth += width;
			}

			if (totalLabelWidth > this.lineCoordinates.width * thresholdRatio) {
				skipLabels = true;
			}
		} if (this._position === "left" || this._position === "right") {
			for (i = 0; i < this._labels.length; i++) {
				label = this._labels[i];
				if (label.position < this.viewportMinimum || label.stripLine)// don't consider stripLine's lable
					continue;

				var width = label.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle);

				totalLabelWidth += width;
			}

			if (totalLabelWidth > this.lineCoordinates.height * thresholdRatio) {
				skipLabels = true;
			}
		}
	}

	if (this._position === "bottom") {
		var i = 0;

		var label;
		var xy;

		for (i = 0; i < this._labels.length; i++) {

			label = this._labels[i];
			if (label.position < this.viewportMinimum || label.position > this.viewportMaximum)
				continue;

			xy = this.getPixelCoordinatesOnAxis(label.position);

			if ((this.tickThickness && !this._labels[i].stripLine) || (this._labels[i].stripLine && this._labels[i].stripLine._thicknessType === "pixel")) {

				if (this._labels[i].stripLine) {
					stripLine = this._labels[i].stripLine;
					this.ctx.lineWidth = stripLine.thickness;
					this.ctx.strokeStyle = stripLine.color;

				} else {
					this.ctx.lineWidth = this.tickThickness;
					this.ctx.strokeStyle = this.tickColor;
				}


				var tickX = (this.ctx.lineWidth % 2 === 1) ? (xy.x << 0) + .5 : (xy.x << 0);
				this.ctx.beginPath();
				this.ctx.moveTo(tickX, xy.y << 0);
				this.ctx.lineTo(tickX, (xy.y + this.tickLength) << 0);
				this.ctx.stroke();
			}

			//Don't skip stripLine's labels
			if (skipLabels && labelCount++ % 2 !== 0 && !this._labels[i].stripLine)
				continue;

			if (label.textBlock.angle === 0) {
				xy.x -= label.textBlock.width / 2;
				//xy.y += this.tickLength + label.textBlock.height / 2;
				xy.y += this.tickLength + label.textBlock.fontSize / 2;

			} else {
				xy.x -= (this.labelAngle < 0 ? (label.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) : 0);
				xy.y += this.tickLength + Math.abs((this.labelAngle < 0 ? label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5));
			}
			label.textBlock.x = xy.x;
			label.textBlock.y = xy.y;

			label.textBlock.render(true);
		}

		if (this.title) {

			this._titleTextBlock = new __WEBPACK_IMPORTED_MODULE_1__text_block__["a" /* default */](this.ctx, {
				x: this.lineCoordinates.x1,// This is recalculated again
				y: this.boundingRect.y2 - this.titleFontSize - 5,// This is recalculated again
				maxWidth: this.lineCoordinates.width,
				maxHeight: this.titleFontSize * 1.5,
				angle: 0,
				text: this.title,
				horizontalAlign: "center",//left, center, right
				fontSize: this.titleFontSize,//in pixels
				fontFamily: this.titleFontFamily,
				fontWeight: this.titleFontWeight, //normal, bold, bolder, lighter,
				fontColor: this.titleFontColor,
				fontStyle: this.titleFontStyle, // normal, italic, oblique
				textBaseline: "top"
			});

			this._titleTextBlock.measureText();
			this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2;
			this._titleTextBlock.y = this.boundingRect.y2 - this._titleTextBlock.height - 3;
			this._titleTextBlock.render(true);
		}
	}
	else if (this._position === "top") {
		var i = 0;

		var label;
		var xy;
		var stripLine;

		for (i = 0; i < this._labels.length; i++) {
			label = this._labels[i];
			if (label.position < this.viewportMinimum || label.position > this.viewportMaximum)
				continue;

			xy = this.getPixelCoordinatesOnAxis(label.position);

			if ((this.tickThickness && !this._labels[i].stripLine) || (this._labels[i].stripLine && this._labels[i].stripLine._thicknessType === "pixel")) {


				if (this._labels[i].stripLine) {
					stripLine = this._labels[i].stripLine;

					this.ctx.lineWidth = stripLine.thickness;
					this.ctx.strokeStyle = stripLine.color;

				} else {
					this.ctx.lineWidth = this.tickThickness;
					this.ctx.strokeStyle = this.tickColor;
				}

				var tickX = (this.ctx.lineWidth % 2 === 1) ? (xy.x << 0) + .5 : (xy.x << 0);
				this.ctx.beginPath();
				this.ctx.moveTo(tickX, xy.y << 0);
				this.ctx.lineTo(tickX, (xy.y - this.tickLength) << 0);
				this.ctx.stroke();

			}

			//Don't skip stripLine's labels
			if (skipLabels && labelCount++ % 2 !== 0 && !this._labels[i].stripLine)
				continue;

			if (label.textBlock.angle === 0) {
				xy.x -= label.textBlock.width / 2;
				xy.y -= this.tickLength + label.textBlock.height / 2;
			} else {
				xy.x -= (this.labelAngle > 0 ? (label.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) : 0);
				xy.y -= this.tickLength + Math.abs((this.labelAngle > 0 ? label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5 : 5));
			}
			label.textBlock.x = xy.x;
			label.textBlock.y = xy.y;

			label.textBlock.render(true);
		}

		if (this.title) {

			this._titleTextBlock = new __WEBPACK_IMPORTED_MODULE_1__text_block__["a" /* default */](this.ctx, {
				x: this.lineCoordinates.x1,// This is recalculated again
				y: this.boundingRect.y1 + 1,
				maxWidth: this.lineCoordinates.width,
				maxHeight: this.titleFontSize * 1.5,
				angle: 0,
				text: this.title,
				horizontalAlign: "center",//left, center, right
				fontSize: this.titleFontSize,//in pixels
				fontFamily: this.titleFontFamily,
				fontWeight: this.titleFontWeight, //normal, bold, bolder, lighter,
				fontColor: this.titleFontColor,
				fontStyle: this.titleFontStyle, // normal, italic, oblique
				textBaseline: "top"
			});

			this._titleTextBlock.measureText();
			this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2;
			this._titleTextBlock.render(true);
		}
	}
	else if (this._position === "left") {


		var label;
		var xy;
		for (var i = 0; i < this._labels.length; i++) {
			label = this._labels[i];
			if (label.position < this.viewportMinimum || label.position > this.viewportMaximum)
				continue;

			xy = this.getPixelCoordinatesOnAxis(label.position);

			if ((this.tickThickness && !this._labels[i].stripLine) || (this._labels[i].stripLine && this._labels[i].stripLine._thicknessType === "pixel")) {

				if (this._labels[i].stripLine) {
					stripLine = this._labels[i].stripLine;

					this.ctx.lineWidth = stripLine.thickness;
					this.ctx.strokeStyle = stripLine.color;
				} else {
					this.ctx.lineWidth = this.tickThickness;
					this.ctx.strokeStyle = this.tickColor;
				}

				var tickY = (this.ctx.lineWidth % 2 === 1) ? (xy.y << 0) + .5 : (xy.y << 0);
				this.ctx.beginPath();
				this.ctx.moveTo(xy.x << 0, tickY);
				this.ctx.lineTo((xy.x - this.tickLength) << 0, tickY);
				this.ctx.stroke();
			}

			//Don't skip stripLine's labels
			if (skipLabels && labelCount++ % 2 !== 0 && !this._labels[i].stripLine)
				continue;

			label.textBlock.x = xy.x - (label.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) - this.tickLength - 5;

			if (this.labelAngle === 0) {
				label.textBlock.y = xy.y;
			} else
				label.textBlock.y = xy.y - (label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle));

			label.textBlock.render(true);
		}

		if (this.title) {

			this._titleTextBlock = new __WEBPACK_IMPORTED_MODULE_1__text_block__["a" /* default */](this.ctx, {
				x: this.boundingRect.x1 + 1,
				y: this.lineCoordinates.y2,
				maxWidth: this.lineCoordinates.height,
				maxHeight: this.titleFontSize * 1.5,
				angle: -90,
				text: this.title,
				horizontalAlign: "center",//left, center, right
				fontSize: this.titleFontSize,//in pixels
				fontFamily: this.titleFontFamily,
				fontWeight: this.titleFontWeight, //normal, bold, bolder, lighter,
				fontColor: this.titleFontColor,
				fontStyle: this.titleFontStyle, // normal, italic, oblique
				textBaseline: "top"
			});

			var size = this._titleTextBlock.measureText();

			//this._titleTextBlock.x -= 4;

			this._titleTextBlock.y = (this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1);
			this._titleTextBlock.render(true);

			//if (isDebugMode) {
			//	window.console.log("titleFontSize: " + this.titleFontSize + "; width: " + size.width + "; height: " + size.height);
			//	window.console.log("this.boundingRect.x1: " + this.boundingRect.x1);

			//	//this.ctx.rect(this._titleTextBlock.x, this._titleTextBlock.y, this._titleTextBlock.height, -this._titleTextBlock.width);
			//	//this.ctx.stroke();

			//}

		}
	}
	else if (this._position === "right") {


		var label;
		var xy;

		for (var i = 0; i < this._labels.length; i++) {
			label = this._labels[i];
			if (label.position < this.viewportMinimum || label.position > this.viewportMaximum)
				continue;

			xy = this.getPixelCoordinatesOnAxis(label.position);

			if ((this.tickThickness && !this._labels[i].stripLine) || (this._labels[i].stripLine && this._labels[i].stripLine._thicknessType === "pixel")) {

				if (this._labels[i].stripLine) {
					stripLine = this._labels[i].stripLine;

					this.ctx.lineWidth = stripLine.thickness;
					this.ctx.strokeStyle = stripLine.color;
				} else {
					this.ctx.lineWidth = this.tickThickness;
					this.ctx.strokeStyle = this.tickColor;
				}

				var tickY = (this.ctx.lineWidth % 2 === 1) ? (xy.y << 0) + .5 : (xy.y << 0);
				this.ctx.beginPath();
				this.ctx.moveTo(xy.x << 0, tickY);
				this.ctx.lineTo((xy.x + this.tickLength) << 0, tickY);
				this.ctx.stroke();

			}

			//Don't skip stripLine's labels
			if (skipLabels && labelCount++ % 2 !== 0 && !this._labels[i].stripLine)
				continue;

			label.textBlock.x = xy.x + this.tickLength + 5;
			//label.textBlock.y = xy.y - (label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle));
			if (this.labelAngle === 0) {
				label.textBlock.y = xy.y;
			}
			else
				label.textBlock.y = xy.y;

			label.textBlock.render(true);
		}

		if (this.title) {

			this._titleTextBlock = new __WEBPACK_IMPORTED_MODULE_1__text_block__["a" /* default */](this.ctx, {
				x: this.boundingRect.x2 - 1,
				y: this.lineCoordinates.y2,
				maxWidth: this.lineCoordinates.height,
				maxHeight: this.titleFontSize * 1.5,
				angle: 90,
				text: this.title,
				horizontalAlign: "center",//left, center, right
				fontSize: this.titleFontSize,//in pixels
				fontFamily: this.titleFontFamily,
				fontWeight: this.titleFontWeight, //normal, bold, bolder, lighter,
				fontColor: this.titleFontColor,
				fontStyle: this.titleFontStyle, // normal, italic, oblique
				textBaseline: "top"
			});

			this._titleTextBlock.measureText();
			this._titleTextBlock.y = (this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1);
			this._titleTextBlock.render(true);

		}
	}
}

Axis.prototype.renderInterlacedColors = function () {
	var ctx = this.chart.plotArea.ctx;
	//return;

	var interlacedGridStartPoint;
	var interlacedGridEndPoint;
	var plotAreaCoordinates = this.chart.plotArea;
	var i = 0, renderInterlacedGrid = true;

	if ((this._position === "bottom" || this._position === "top") && this.interlacedColor) {

		ctx.fillStyle = this.interlacedColor;

		for (i = 0; i < this._labels.length; i++) {

			if (this._labels[i].stripLine)
				continue;

			if (renderInterlacedGrid) {//So that the interlaced color alternates
				interlacedGridStartPoint = this.getPixelCoordinatesOnAxis(this._labels[i].position);

				if (i + 1 >= this._labels.length - 1)
					interlacedGridEndPoint = this.getPixelCoordinatesOnAxis(this.viewportMaximum);
				else
					interlacedGridEndPoint = this.getPixelCoordinatesOnAxis(this._labels[i + 1].position);

				ctx.fillRect(interlacedGridStartPoint.x, plotAreaCoordinates.y1, Math.abs(interlacedGridEndPoint.x - interlacedGridStartPoint.x), Math.abs(plotAreaCoordinates.y1 - plotAreaCoordinates.y2));
				renderInterlacedGrid = false;
			} else
				renderInterlacedGrid = true;

		}

	} else if ((this._position === "left" || this._position === "right") && this.interlacedColor) {

		ctx.fillStyle = this.interlacedColor;

		for (i = 0; i < this._labels.length; i++) {
		        if (this._labels[i].stripLine)
		            continue;

			if (renderInterlacedGrid) {//So that the interlaced color alternates

				interlacedGridEndPoint = this.getPixelCoordinatesOnAxis(this._labels[i].position);

				if (i + 1 >= this._labels.length - 1)
					interlacedGridStartPoint = this.getPixelCoordinatesOnAxis(this.viewportMaximum);
				else
					interlacedGridStartPoint = this.getPixelCoordinatesOnAxis(this._labels[i + 1].position);

				ctx.fillRect(plotAreaCoordinates.x1, interlacedGridStartPoint.y, Math.abs(plotAreaCoordinates.x1 - plotAreaCoordinates.x2), Math.abs(interlacedGridStartPoint.y - interlacedGridEndPoint.y));
				renderInterlacedGrid = false;
			} else
				renderInterlacedGrid = true;
		}
		    //throw "123";
	}

	ctx.beginPath();
}

//Renders stripLines of given thickness type.
Axis.prototype.renderStripLinesOfThicknessType = function (thicknessType) {

	if (!(this.stripLines && this.stripLines.length > 0) || !thicknessType)
		return;

	var _this = this;

	var i = 0;
	for (i = 0; i < this.stripLines.length; i++) {

		var stripLine = this.stripLines[i];

		if (stripLine._thicknessType !== thicknessType)
			continue;


		//Should be skipped only if thicknessType is "pixel". If it is "value" then clipping is automatically applied before calling.
		if (thicknessType === "pixel" && (stripLine.value < this.viewportMinimum || stripLine.value > this.viewportMaximum))
			continue;

		if (stripLine.showOnTop) {
			this.chart.addEventListener("dataAnimationIterationEnd", stripLine.render, stripLine);
		}
		else
			stripLine.render();
	}
};

Axis.prototype.renderGrid = function () {

	if (!(this.gridThickness && this.gridThickness > 0))
		return;

	//var ctx = this.chart.plotArea.ctx;
	var ctx = this.chart.ctx;

	var xy;
	var plotAreaCoordinates = this.chart.plotArea;
	var stripLine;
	var tempLineWidth, tempStrokeStyle;
	//return;

	ctx.lineWidth = this.gridThickness;
	ctx.strokeStyle = this.gridColor;

	if (ctx.setLineDash) {
		ctx.setLineDash(Object(__WEBPACK_IMPORTED_MODULE_2__helpers_utils__["m" /* getLineDashArray */])(this.gridDashType, this.gridThickness));
	}


	if (this._position === "bottom" || this._position === "top") {

		for (i = 0; i < this._labels.length && !this._labels[i].stripLine; i++) {

			if (this._labels[i].position < this.viewportMinimum || this._labels[i].position > this.viewportMaximum)
				continue;

			ctx.beginPath();

			xy = this.getPixelCoordinatesOnAxis(this._labels[i].position);

			var gridX = (ctx.lineWidth % 2 === 1) ? (xy.x << 0) + .5 : (xy.x << 0);

			ctx.moveTo(gridX, plotAreaCoordinates.y1 << 0);
			ctx.lineTo(gridX, plotAreaCoordinates.y2 << 0);

			ctx.stroke();
		}

	}
	else if (this._position === "left" || this._position === "right") {

		for (var i = 0; i < this._labels.length && !this._labels[i].stripLine; i++) {

			if (i === 0 && this.type === "axisY" && this.chart.axisX && this.chart.axisX.lineThickness)
				continue;

			if (this._labels[i].position < this.viewportMinimum || this._labels[i].position > this.viewportMaximum)
				continue;

			ctx.beginPath();

			xy = this.getPixelCoordinatesOnAxis(this._labels[i].position);

			var gridY = (ctx.lineWidth % 2 === 1) ? (xy.y << 0) + .5 : (xy.y << 0);

			ctx.moveTo(plotAreaCoordinates.x1 << 0, gridY);
			ctx.lineTo(plotAreaCoordinates.x2 << 0, gridY);

			ctx.stroke();
		}

	}
}

Axis.prototype.renderAxisLine = function () {
	//var ctx = this.chart.plotArea.ctx;
	var ctx = this.chart.ctx;

	if (this._position === "bottom" || this._position === "top") {
		if (this.lineThickness) {
			ctx.lineWidth = this.lineThickness;
			ctx.strokeStyle = this.lineColor ? this.lineColor : "black";

			if (ctx.setLineDash) {
				ctx.setLineDash(Object(__WEBPACK_IMPORTED_MODULE_2__helpers_utils__["m" /* getLineDashArray */])(this.lineDashType, this.lineThickness));
			}

			var lineY = (this.lineThickness % 2 === 1) ? (this.lineCoordinates.y1 << 0) + .5 : (this.lineCoordinates.y1 << 0);

			ctx.beginPath();
			ctx.moveTo(this.lineCoordinates.x1, lineY);
			ctx.lineTo(this.lineCoordinates.x2, lineY);
			ctx.stroke();
		}

	} else if (this._position === "left" || this._position === "right") {
		if (this.lineThickness) {
			ctx.lineWidth = this.lineThickness;
			ctx.strokeStyle = this.lineColor;

			if (ctx.setLineDash) {
				ctx.setLineDash(Object(__WEBPACK_IMPORTED_MODULE_2__helpers_utils__["m" /* getLineDashArray */])(this.lineDashType, this.lineThickness));
			}

			var lineX = (this.lineThickness % 2 === 1) ? (this.lineCoordinates.x1 << 0) + .5 : (this.lineCoordinates.x1 << 0);

			ctx.beginPath();
			ctx.moveTo(lineX, this.lineCoordinates.y1);
			ctx.lineTo(lineX, this.lineCoordinates.y2);
			ctx.stroke();
		}
	}
}

Axis.prototype.getPixelCoordinatesOnAxis = function (value) {
	var xy = {
	};
	var width = this.lineCoordinates.width;
	var height = this.lineCoordinates.height;

	if (this._position === "bottom" || this._position === "top") {
		//var pixelPerUnit = width / Math.abs(this.viewportMaximum - this.viewportMinimum);
		var pixelPerUnit = this.conversionParameters.pixelPerUnit;

		//xy.x = this.lineCoordinates.x1 + (pixelPerUnit * (value - this.viewportMinimum));
		xy.x = this.conversionParameters.reference + (pixelPerUnit * (value - this.viewportMinimum));
		xy.y = this.lineCoordinates.y1;
	}
	if (this._position === "left" || this._position === "right") {
		//var pixelPerUnit = height / Math.abs(this.viewportMaximum - this.viewportMinimum);
		var pixelPerUnit = -this.conversionParameters.pixelPerUnit;

		//xy.y = this.lineCoordinates.y2 - (pixelPerUnit * (value - this.viewportMinimum));
		xy.y = this.conversionParameters.reference - (pixelPerUnit * (value - this.viewportMinimum));
		xy.x = this.lineCoordinates.x2;
	}

	return xy;
}

Axis.prototype.convertPixelToValue = function (pixel) {

	if (!pixel)
		return null;

	var value = 0;
	var p = (this._position === "left" || this._position === "right") ? pixel.y : pixel.x;

	value = this.conversionParameters.minimum + (p - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;

	return value;
}

Axis.prototype.setViewPortRange = function (viewportMinimum, viewportMaximum) {

	this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(viewportMinimum, viewportMaximum);
	this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(viewportMinimum, viewportMaximum);

}

Axis.prototype.getXValueAt = function (pixel) {
	if (!pixel)
		return null;

	var xval = null;

	if (this._position === "left") {
		xval = (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.height * ((this.chart.axisX.lineCoordinates.y2 - pixel.y)) + this.chart.axisX.viewportMinimum;
	}
	else if (this._position === "bottom") {
		xval = (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.width * (pixel.x - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.viewportMinimum;
	}

	return xval;
}

Axis.prototype.calculateValueToPixelConversionParameters = function (value) {
	this.reversed = false;

	var conversionParameters = {
		pixelPerUnit: null, minimum: null, reference: null
	};

	var width = this.lineCoordinates.width;
	var height = this.lineCoordinates.height;

	conversionParameters.minimum = this.viewportMinimum;

	if (this._position === "bottom" || this._position === "top") {
		conversionParameters.pixelPerUnit = (this.reversed ? -1 : 1) * width / Math.abs(this.viewportMaximum - this.viewportMinimum);
		conversionParameters.reference = (this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1);
	}

	if (this._position === "left" || this._position === "right") {
		conversionParameters.pixelPerUnit = (this.reversed ? 1 : -1) * height / Math.abs(this.viewportMaximum - this.viewportMinimum);
		conversionParameters.reference = (this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2);
	}


	this.conversionParameters = conversionParameters;
}

Axis.prototype.calculateAxisParameters = function () {

	var freeSpace = this.chart.layoutManager.getFreeSpace();
	var availableWidth = 0;
	var availableHeight = 0;
	var isLessThanTwoDataPoints = false;

	if (this._position === "bottom" || this._position === "top") {
		this.maxWidth = freeSpace.width;
		this.maxHeight = freeSpace.height;
	} else {
		this.maxWidth = freeSpace.height;
		this.maxHeight = freeSpace.width;
	}

	var noTicks = this.type === "axisX" ? (this.maxWidth < 500 ? 8 : Math.max(6, Math.floor(this.maxWidth / 62))) : Math.max(Math.floor(this.maxWidth / 40), 2);
	var min, max;
	var minDiff;
	var range;
	var rangePadding = 0;


	if (this.viewportMinimum === null || isNaN(this.viewportMinimum))
		this.viewportMinimum = this.minimum;

	if (this.viewportMaximum === null || isNaN(this.viewportMaximum))
		this.viewportMaximum = this.maximum;

	if (this.type === "axisX") {
		min = (this.viewportMinimum !== null) ? this.viewportMinimum : this.dataInfo.viewPortMin;
		max = (this.viewportMaximum !== null) ? this.viewportMaximum : this.dataInfo.viewPortMax;

		if (max - min === 0) {
			rangePadding = typeof (this._options.interval) === "undefined" ? .4 : this._options.interval;

			max += rangePadding;
			min -= rangePadding;
		}

		if (this.dataInfo.minDiff !== Infinity)
			minDiff = this.dataInfo.minDiff;
		else if (max - min > 1) {
			minDiff = Math.abs(max - min) * .5;
		}
		else {
			minDiff = 1;

			if (this.chart.plotInfo.axisXValueType === "dateTime")
				isLessThanTwoDataPoints = true;
		}

	} else if (this.type === "axisY") {

		//min = typeof (this._options.viewportMinimum) === "undefined" || this._options.viewportMinimum === null ? this.dataInfo.viewPortMin : this._options.viewportMinimum;
		//max = typeof (this._options.viewportMaximum) === "undefined" || this._options.viewportMaximum === null ? this.dataInfo.viewPortMax : this._options.viewportMaximum;
		min = (this.viewportMinimum !== null) ? this.viewportMinimum : this.dataInfo.viewPortMin;
		max = (this.viewportMaximum !== null) ? this.viewportMaximum : this.dataInfo.viewPortMax;

		if (!isFinite(min) && !isFinite(max)) {
			max = typeof (this._options.interval) === "undefined" ? -Infinity : this._options.interval;
			min = 0;
		} else if (!isFinite(min)) {
			min = max;
		} else if (!isFinite(max)) {
			max = min;
		}

			if (min === 0 && max === 0) {// When all dataPoints are zero
				max += 9;
				min = 0;
			}
			else if (max - min === 0) {// When there is only a single dataPoint or when all dataPoints have same Y Value
				rangePadding = Math.min(Math.abs(Math.abs(max) * .01), 5);
				max += rangePadding;
				min -= rangePadding;
			}
			else if (min > max) {
				rangePadding = Math.min(Math.abs(Math.abs(max - min) * .01), 5);

				if (max >= 0)
					min = max - rangePadding;
				else
					max = min + rangePadding;
			}
			else {

				rangePadding = Math.min(Math.abs(Math.abs(max - min) * .01), .05);

				if (max !== 0)
					max += rangePadding;
				if (min !== 0)
					min -= rangePadding;
			}

		if (this.dataInfo.minDiff !== Infinity)
			minDiff = this.dataInfo.minDiff;
		else if (max - min > 1) {
			minDiff = Math.abs(max - min) * .5;
		}
		else {
			minDiff = 1;
		}


		//Apply includeZero
		if (this.includeZero && (this.viewportMinimum === null || isNaN(this.viewportMinimum))) {
			if (min > 0)
				min = 0;
		}
		if (this.includeZero && (this.viewportMaximum === null || isNaN(this.viewportMaximum))) {
			if (max < 0)
				max = 0;
		}
	}

	range = (isNaN(this.viewportMaximum) || this.viewportMaximum === null ? max : this.viewportMaximum) - (isNaN(this.viewportMinimum) || this.viewportMinimum === null ? min : this.viewportMinimum);

	if (this.type === "axisX" && this.chart.plotInfo.axisXValueType === "dateTime") {

		if (!this.intervalType) {

			if (range / (1 * 1) <= noTicks) {
				this.interval = 1;
				this.intervalType = "millisecond";
			} else if (range / (1 * 2) <= noTicks) {
				this.interval = 2;
				this.intervalType = "millisecond";
			} else if (range / (1 * 5) <= noTicks) {
				this.interval = 5;
				this.intervalType = "millisecond";
			} else if (range / (1 * 10) <= noTicks) {
				this.interval = 10;
				this.intervalType = "millisecond";
			} else if (range / (1 * 20) <= noTicks) {
				this.interval = 20;
				this.intervalType = "millisecond";
			} else if (range / (1 * 50) <= noTicks) {
				this.interval = 50;
				this.intervalType = "millisecond";
			} else if (range / (1 * 100) <= noTicks) {
				this.interval = 100;
				this.intervalType = "millisecond";
			} else if (range / (1 * 200) <= noTicks) {
				this.interval = 200;
				this.intervalType = "millisecond";
			} else if (range / (1 * 250) <= noTicks) {
				this.interval = 250;
				this.intervalType = "millisecond";
			} else if (range / (1 * 300) <= noTicks) {
				this.interval = 300;
				this.intervalType = "millisecond";
			} else if (range / (1 * 400) <= noTicks) {
				this.interval = 400;
				this.intervalType = "millisecond";
			} else if (range / (1 * 500) <= noTicks) {
				this.interval = 500;
				this.intervalType = "millisecond";
			} else if (range / (constants.secondDuration * 1) <= noTicks) {
				this.interval = 1;
				this.intervalType = "second";
			} else if (range / (constants.secondDuration * 2) <= noTicks) {
				this.interval = 2;
				this.intervalType = "second";
			} else if (range / (constants.secondDuration * 5) <= noTicks) {
				this.interval = 5;
				this.intervalType = "second";
			} else if (range / (constants.secondDuration * 10) <= noTicks) {
				this.interval = 10;
				this.intervalType = "second";
			} else if (range / (constants.secondDuration * 15) <= noTicks) {
				this.interval = 15;
				this.intervalType = "second";
			} else if (range / (constants.secondDuration * 20) <= noTicks) {
				this.interval = 20;
				this.intervalType = "second";
			} else if (range / (constants.secondDuration * 30) <= noTicks) {
				this.interval = 30;
				this.intervalType = "second";
			} else if (range / (constants.minuteDuration * 1) <= noTicks) {
				this.interval = 1;
				this.intervalType = "minute";
			} else if (range / (constants.minuteDuration * 2) <= noTicks) {
				this.interval = 2;
				this.intervalType = "minute";
			} else if (range / (constants.minuteDuration * 5) <= noTicks) {
				this.interval = 5;
				this.intervalType = "minute";
			} else if (range / (constants.minuteDuration * 10) <= noTicks) {
				this.interval = 10;
				this.intervalType = "minute";
			} else if (range / (constants.minuteDuration * 15) <= noTicks) {
				this.interval = 15;
				this.intervalType = "minute";
			} else if (range / (constants.minuteDuration * 20) <= noTicks) {
				this.interval = 20;
				this.intervalType = "minute";
			} else if (range / (constants.minuteDuration * 30) <= noTicks) {
				this.interval = 30;
				this.intervalType = "minute";
			} else if (range / (constants.hourDuration * 1) <= noTicks) {
				this.interval = 1;
				this.intervalType = "hour";
			} else if (range / (constants.hourDuration * 2) <= noTicks) {
				this.interval = 2;
				this.intervalType = "hour";
			} else if (range / (constants.hourDuration * 3) <= noTicks) {
				this.interval = 3;
				this.intervalType = "hour";
			} else if (range / (constants.hourDuration * 6) <= noTicks) {
				this.interval = 6;
				this.intervalType = "hour";
			} else if (range / (constants.dayDuration * 1) <= noTicks) {
				this.interval = 1;
				this.intervalType = "day";
			} else if (range / (constants.dayDuration * 2) <= noTicks) {
				this.interval = 2;
				this.intervalType = "day";
			} else if (range / (constants.dayDuration * 4) <= noTicks) {
				this.interval = 4;
				this.intervalType = "day";
			} else if (range / (constants.weekDuration * 1) <= noTicks) {
				this.interval = 1;
				this.intervalType = "week";
			} else if (range / (constants.weekDuration * 2) <= noTicks) {
				this.interval = 2;
				this.intervalType = "week";
			} else if (range / (constants.weekDuration * 3) <= noTicks) {
				this.interval = 3;
				this.intervalType = "week";
			} else if (range / (constants.monthDuration * 1) <= noTicks) {
				this.interval = 1;
				this.intervalType = "month";
			} else if (range / (constants.monthDuration * 2) <= noTicks) {
				this.interval = 2;
				this.intervalType = "month";
			} else if (range / (constants.monthDuration * 3) <= noTicks) {
				this.interval = 3;
				this.intervalType = "month";
			} else if (range / (constants.monthDuration * 6) <= noTicks) {
				this.interval = 6;
				this.intervalType = "month";
			} else if (range / (constants.yearDuration * 1) <= noTicks) {
				this.interval = 1;
				this.intervalType = "year";
			} else if (range / (constants.yearDuration * 2) <= noTicks) {
				this.interval = 2;
				this.intervalType = "year";
			} else if (range / (constants.yearDuration * 4) <= noTicks) {
				this.interval = 4;
				this.intervalType = "year";
			} else {
				this.interval = Math.floor(Axis.getNiceNumber(range / (noTicks - 1), true) / constants.yearDuration);
				this.intervalType = "year";
			}

		}

		if (this.viewportMinimum === null || isNaN(this.viewportMinimum))
			this.viewportMinimum = min - minDiff / 2;

		if (this.viewportMaximum === null || isNaN(this.viewportMaximum))
			this.viewportMaximum = max + minDiff / 2;


		if (!this.valueFormatString) {
			if (isLessThanTwoDataPoints) {
				this.valueFormatString = "MMM DD YYYY HH:mm";
			} else if (this.intervalType === "year") {
				this.valueFormatString = "YYYY";
			} else if (this.intervalType === "month") {
				this.valueFormatString = "MMM YYYY";
			} else if (this.intervalType === "week") {
				this.valueFormatString = "MMM DD YYYY";
			} else if (this.intervalType === "day") {
				this.valueFormatString = "MMM DD YYYY";
			} else if (this.intervalType === "hour") {
				this.valueFormatString = "hh:mm TT";
			} else if (this.intervalType === "minute") {
				this.valueFormatString = "hh:mm TT";
			} else if (this.intervalType === "second") {
				this.valueFormatString = "hh:mm:ss TT";
			} else if (this.intervalType === "millisecond") {
				this.valueFormatString = "fff'ms'";
			}
		}

	} else {

		this.intervalType = "number";

		range = Axis.getNiceNumber(range, false);

		if (this._options && this._options.interval)
			this.interval = this._options.interval;
		else {
			this.interval = Axis.getNiceNumber(range / (noTicks - 1), true);
		}

		if (this.viewportMinimum === null || isNaN(this.viewportMinimum)) {
			if (this.type === "axisX")
				this.viewportMinimum = min - minDiff / 2;
			else
				this.viewportMinimum = Math.floor(min / this.interval) * this.interval;
		}

		if (this.viewportMaximum === null || isNaN(this.viewportMaximum)) {
			if (this.type === "axisX")
				this.viewportMaximum = max + minDiff / 2;
			else
				this.viewportMaximum = Math.ceil(max / this.interval) * this.interval;
		}

		if (this.viewportMaximum === 0 && this.viewportMinimum === 0) {

			if (this._options.viewportMinimum === 0) {
				this.viewportMaximum += 10;
			}
			else if (this._options.viewportMaximum === 0) {
				this.viewportMinimum -= 10;
			}

			if (this._options && typeof (this._options.interval) === "undefined") {
				this.interval = Axis.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (noTicks - 1), true);
			}
		}
	}

	//Calculate minimum and maximum if not provided by the user
	if (this.minimum === null || this.maximum === null) {
		if (this.type === "axisX") {
			min = (this.minimum !== null) ? this.minimum : this.dataInfo.min;
			max = (this.maximum !== null) ? this.maximum : this.dataInfo.max;

			if (max - min === 0) {
				rangePadding = typeof (this._options.interval) === "undefined" ? .4 : this._options.interval;

				max += rangePadding;
				min -= rangePadding;
			}

			if (this.dataInfo.minDiff !== Infinity)
				minDiff = this.dataInfo.minDiff;
			else if (max - min > 1) {
				minDiff = Math.abs(max - min) * .5;
			}
			else {
				minDiff = 1;
			}

		} else if (this.type === "axisY") {

			min = (this.minimum !== null) ? this.minimum : this.dataInfo.min;
			max = (this.maximum !== null) ? this.maximum : this.dataInfo.max;

			if (!isFinite(min) && !isFinite(max)) {
				max = typeof (this._options.interval) === "undefined" ? -Infinity : this._options.interval;
				min = 0;
			}
			else
				if (min === 0 && max === 0) {// When all dataPoints are zero
					max += 9;
					min = 0;
				}
				else if (max - min === 0) {// When there is only a single dataPoint or when all dataPoints have same Y Value
					rangePadding = Math.min(Math.abs(Math.abs(max) * .01), 5);
					max += rangePadding;
					min -= rangePadding;
				}
				else if (min > max) {
					rangePadding = Math.min(Math.abs(Math.abs(max - min) * .01), 5);

					if (max >= 0)
						min = max - rangePadding;
					else
						max = min + rangePadding;
				}
				else {

					rangePadding = Math.min(Math.abs(Math.abs(max - min) * .01), .05);

					if (max !== 0)
						max += rangePadding;
					if (min !== 0)
						min -= rangePadding;
				}

			if (this.dataInfo.minDiff !== Infinity)
				minDiff = this.dataInfo.minDiff;
			else if (max - min > 1) {
				minDiff = Math.abs(max - min) * .5;
			}
			else {
				minDiff = 1;
			}


			//Apply includeZero
			if (this.includeZero && (this.minimum === null || isNaN(this.minimum))) {
				if (min > 0)
					min = 0;
			}
			if (this.includeZero && (this.maximum === null || isNaN(this.maximum))) {
				if (max < 0)
					max = 0;
			}
		}

		range = max - min;

		if (this.type === "axisX" && this.chart.plotInfo.axisXValueType === "dateTime") {

			if (this.minimum === null || isNaN(this.minimum))
				this.minimum = min - minDiff / 2;

			if (this.maximum === null || isNaN(this.maximum))
				this.maximum = max + minDiff / 2;

		} else {

			this.intervalType = "number";

			if (this.minimum === null) {
				if (this.type === "axisX")
					this.minimum = min - minDiff / 2;
		else
			this.minimum = Math.floor(min / this.interval) * this.interval;

				this.minimum = Math.min(this.minimum, this.sessionVariables.viewportMinimum === null || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
			}

			if (this.maximum === null) {
				if (this.type === "axisX")
					this.maximum = max + minDiff / 2;
		else
			this.maximum = Math.ceil(max / this.interval) * this.interval;

				this.maximum = Math.max(this.maximum, this.sessionVariables.viewportMaximum === null || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum);
			}

		//var nfrac = Math.max(-Math.floor(Math.log(d)/Math.LN10), 0); //number of fractional digits to show


		if (this.maximum === 0 && this.minimum === 0) {

			if (this._options.minimum === 0) {
				this.maximum += 10;
			}
			else if (this._options.maximum === 0) {
				this.minimum -= 10;
			}
			}
			}
		}

	this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
	this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);

	if (this.type === "axisX" && this.chart.plotInfo.axisXValueType === "dateTime")
		this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval);
	else
		this.intervalStartPosition = Math.floor((this.viewportMinimum + (this.interval * .2)) / this.interval) * this.interval;

	//Set valueFormatString
	if (!this.valueFormatString) {
		this.valueFormatString = "#,##0.##";

		range = Math.abs(this.viewportMaximum - this.viewportMinimum);

		if (range < 1) {
			var numberOfDecimals = Math.floor(Math.abs(Math.log(range) / Math.LN10)) + 2;

			if (isNaN(numberOfDecimals) || !isFinite(numberOfDecimals))
				numberOfDecimals = 2;

			if (numberOfDecimals > 2) {
				for (var i = 0; i < numberOfDecimals - 2; i++)
					this.valueFormatString += "#";
			}
		}

	}

	//if (isDebugMode && window.console) {
	//    window.console.log(this.type + ": Min = " + this.viewportMinimum);
	//    window.console.log(this.type + ": Max = " + this.viewportMaximum);
	//    window.console.log(this.type + ": Interval = " + this.interval);
	//}
}

Axis.getNiceNumber = function (x, round) {

	var exp = Math.floor(Math.log(x) / Math.LN10);
	var f = x / Math.pow(10, exp);
	var nf;

	if (round) {
		if (f < 1.5)
			nf = 1;
		else if (f < 3)
			nf = 2;
		else if (f < 7)
			nf = 5;
		else
			nf = 10;
	}
	else {
		if (f <= 1)
			nf = 1;
		else if (f <= 2)
			nf = 2;
		else if (f <= 5)
			nf = 5;
		else nf = 10;
	}

	return Number((nf * Math.pow(10, exp)).toFixed(20));
}

Axis.prototype.getLabelStartPoint = function () {

	var intervalInMilliseconds = convertToNumber(this.interval, this.intervalType);
	var minimum = Math.floor((this.viewportMinimum) / intervalInMilliseconds) * intervalInMilliseconds;
	var dateTime = new Date(minimum);

	if (this.intervalType === "millisecond") {
		//millisecond = dateTime.getMilliSecond();
		//millisecond = Math.floor((millisecond + this.interval) / this.interval) * this.interval;
	}
	else if (this.intervalType === "second") {
		if (dateTime.getMilliseconds() > 0) {
			dateTime.setSeconds(dateTime.getSeconds() + 1);
			dateTime.setMilliseconds(0);
		}
	}
	else if (this.intervalType === "minute") {
		if (dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
			dateTime.setMinutes(dateTime.getMinutes() + 1);
			dateTime.setSeconds(0);
			dateTime.setMilliseconds(0);
		}
	}
	else if (this.intervalType === "hour") {
		if (dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
			dateTime.setHours(dateTime.getHours() + 1);
			dateTime.setMinutes(0);
			dateTime.setSeconds(0);
			dateTime.setMilliseconds(0);
		}
	}
	else if (this.intervalType === "day") {
		if (dateTime.getHours() > 0 || dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
			dateTime.setDate(dateTime.getDate() + 1);
			dateTime.setHours(0);
			dateTime.setMinutes(0);
			dateTime.setSeconds(0);
			dateTime.setMilliseconds(0);
		}
	}
	else if (this.intervalType === "week") {
		if (dateTime.getDay() > 0 || dateTime.getHours() > 0 || dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
			dateTime.setDate(dateTime.getDate() + (7 - dateTime.getDay()));
			dateTime.setHours(0);
			dateTime.setMinutes(0);
			dateTime.setSeconds(0);
			dateTime.setMilliseconds(0);
		}
	}
	else if (this.intervalType === "month") {
		if (dateTime.getDate() > 1 || dateTime.getHours() > 0 || dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
			dateTime.setMonth(dateTime.getMonth() + 1);
			dateTime.setDate(1);
			dateTime.setHours(0);
			dateTime.setMinutes(0);
			dateTime.setSeconds(0);
			dateTime.setMilliseconds(0);
		}
	}
	else if (this.intervalType === "year") {
		if (dateTime.getMonth() > 0 || dateTime.getDate() > 1 || dateTime.getHours() > 0 || dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
			dateTime.setFullYear(dateTime.getFullYear() + 1);
			dateTime.setMonth(0);
			dateTime.setDate(1);
			dateTime.setHours(0);
			dateTime.setMinutes(0);
			dateTime.setSeconds(0);
			dateTime.setMilliseconds(0);
		}
	}

	return dateTime;
}

/* harmony default export */ __webpack_exports__["a"] = (Axis);


/***/ }),
/* 36 */
/*!*************************************************!*\
  !*** ./node_modules/canvasjs/src/core/title.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasjs__ = __webpack_require__(/*! ./canvasjs */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_block__ = __webpack_require__(/*! ./text_block */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_utils__ = __webpack_require__(/*! ../helpers/utils */ 1);





function Title(chart, options) {
	Title.base.constructor.call(this, "Title", options, chart.theme);

	this.chart = chart;
	this.canvas = chart.canvas;
	this.ctx = this.chart.ctx;


	if (typeof (this._options.fontSize) === "undefined") {

		this.fontSize = this.chart.getAutoFontSize(this.fontSize);

		//window.console.log("Chart Title fontSize: " + this.fontSize);
	}

	this.width = null,//read only
	this.height = null//read only
	this.bounds = {
		x1: null, y1: null, x2: null, y2: null
	};
}

Object(__WEBPACK_IMPORTED_MODULE_2__helpers_utils__["i" /* extend */])(Title, __WEBPACK_IMPORTED_MODULE_0__canvasjs__["a" /* default */]);

Title.prototype.render = function () {

	if (!this.text) return;

	var container = (!this.dockInsidePlotArea ? this.chart : this.chart.plotArea);
	var freespace = container.layoutManager.getFreeSpace();
	var left = freespace.x1;
	var top = freespace.y1;
	var angle = 0;
	var maxHeight = 0;
	var containerMargin = 2; //Margin towards the container
	var rightOffset = this.chart._menuButton && this.chart.exportEnabled && this.verticalAlign === "top" ? 22 : 0; //So that Title doesn't overlap menu button.

	var textBlockHorizontalAlign;
	var position;

	if (this.verticalAlign === "top" || this.verticalAlign === "bottom") {
		if (this.maxWidth === null)
			this.maxWidth = freespace.width - containerMargin * 2 - rightOffset * (this.horizontalAlign === "center" ? 2 : 1);

		maxHeight = freespace.height * .5 - this.margin - containerMargin;
		angle = 0;
	}
	else if (this.verticalAlign === "center") {

		if (this.horizontalAlign === "left" || this.horizontalAlign === "right") {
			if (this.maxWidth === null)
				this.maxWidth = freespace.height - containerMargin * 2;

			maxHeight = freespace.width * .5 - this.margin - containerMargin;
		} else if (this.horizontalAlign === "center") {
			if (this.maxWidth === null)
				this.maxWidth = freespace.width - containerMargin * 2;

			maxHeight = freespace.height * .5 - containerMargin * 2;
		}
	}

	if (!this.wrap)
		maxHeight = Math.min(maxHeight, Math.max(this.fontSize * 1.5, this.fontSize + this.padding * 2.5));
	//console.log(this.maxWidth);

	var textBlock = new __WEBPACK_IMPORTED_MODULE_1__text_block__["a" /* default */](this.ctx, {
		fontSize: this.fontSize, fontFamily: this.fontFamily, fontColor: this.fontColor,
		fontStyle: this.fontStyle, fontWeight: this.fontWeight,
		horizontalAlign: this.horizontalAlign, verticalAlign: this.verticalAlign,
		borderColor: this.borderColor, borderThickness: this.borderThickness,
		backgroundColor: this.backgroundColor,
		maxWidth: this.maxWidth, maxHeight: maxHeight,
		cornerRadius: this.cornerRadius,
		text: this.text,
		padding: this.padding,
		textBaseline: "top"
	});

	var textBlockSize = textBlock.measureText();

	if (this.verticalAlign === "top" || this.verticalAlign === "bottom") {

		if (this.verticalAlign === "top") {
			top = freespace.y1 + containerMargin;
			position = "top";
		}
		else if (this.verticalAlign === "bottom") {
			top = freespace.y2 - containerMargin - textBlockSize.height;
			position = "bottom";
		}

		if (this.horizontalAlign === "left") {
			left = freespace.x1 + containerMargin;
		}
		else if (this.horizontalAlign === "center") {
			left = freespace.x1 + freespace.width / 2 - textBlockSize.width / 2;
		}
		else if (this.horizontalAlign === "right") {
			left = freespace.x2 - containerMargin - textBlockSize.width - rightOffset;
		}

		textBlockHorizontalAlign = this.horizontalAlign;

		this.width = textBlockSize.width;
		this.height = textBlockSize.height;
	}
	else if (this.verticalAlign === "center") {

		if (this.horizontalAlign === "left") {

			left = freespace.x1 + containerMargin;
			top = freespace.y2 - containerMargin - (this.maxWidth / 2 - textBlockSize.width / 2);
			angle = -90;

			position = "left";
			this.width = textBlockSize.height;
			this.height = textBlockSize.width;
		}
		else if (this.horizontalAlign === "right") {
			left = freespace.x2 - containerMargin;
			top = freespace.y1 + containerMargin + (this.maxWidth / 2 - textBlockSize.width / 2);
			angle = 90;

			position = "right";
			this.width = textBlockSize.height;
			this.height = textBlockSize.width;
		}
		else if (this.horizontalAlign === "center") {
			top = container.y1 + (container.height / 2 - textBlockSize.height / 2);
			left = container.x1 + (container.width / 2 - textBlockSize.width / 2);

			position = "center";
			this.width = textBlockSize.width;
			this.height = textBlockSize.height;
		}

		textBlockHorizontalAlign = "center";
	}

	textBlock.x = left;
	textBlock.y = top;
	textBlock.angle = angle;
	textBlock.horizontalAlign = textBlockHorizontalAlign;
	textBlock.render(true);

	container.layoutManager.registerSpace(position, {
		width: this.width + (position === "left" || position === "right" ? this.margin + containerMargin : 0),
		height: this.height + (position === "top" || position === "bottom" ? this.margin + containerMargin : 0)
	});

	this.bounds = {
		x1: left, y1: top, x2: left + this.width, y2: top + this.height
	};

	this.ctx.textBaseline = "top";
}

/* harmony default export */ __webpack_exports__["a"] = (Title);


/***/ }),
/* 37 */
/*!**************************************************!*\
  !*** ./node_modules/canvasjs/src/core/legend.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_series__ = __webpack_require__(/*! ./data_series */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvasjs__ = __webpack_require__(/*! ./canvasjs */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_block__ = __webpack_require__(/*! ./text_block */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_render__ = __webpack_require__(/*! ../helpers/render */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_utils__ = __webpack_require__(/*! ../helpers/utils */ 1);







function Legend(chart, options, theme) {
  Legend.base.constructor.call(this, "Legend", options, theme);

  this.chart = chart;
  this.canvas = chart.canvas;
  this.ctx = this.chart.ctx;
  this.ghostCtx = this.chart._eventManager.ghostCtx;
  this.items = [];

  this.width = 0,
  //this.fontSize = 12,
  this.height = 0,
  this.orientation = null,
  this.dataSeries = [];
  this.bounds = {
    x1: null, y1: null, x2: null, y2: null
  };

  if (typeof (this._options.fontSize) === "undefined") {
    this.fontSize = this.chart.getAutoFontSize(this.fontSize);
    //window.console.log("fontSize: " + this.fontSize);
  }

  this.lineHeight = Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["k" /* getFontHeightInPixels */])(this.fontFamily, this.fontSize, this.fontWeight);

  this.horizontalSpacing = this.fontSize;
}

Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils__["i" /* extend */])(Legend, __WEBPACK_IMPORTED_MODULE_1__canvasjs__["a" /* default */]);

Legend.prototype.render = function () {

  var container = (!this.dockInsidePlotArea ? this.chart : this.chart.plotArea);
  var freeSpace = container.layoutManager.getFreeSpace();
  var position = null;
  var top = 0;
  var left = 0;
  var maxWidth = 0;
  var maxHeight = 0;
  var itemMargin = 5;

  var items = [];
  var rows = [];

  //this.ctx.font = getFontString("", this, null);
  //this.ctx.fontColor = this.fontColor;

  if (this.verticalAlign === "top" || this.verticalAlign === "bottom") {
    this.orientation = "horizontal";
    position = this.verticalAlign;

    maxWidth = this.maxWidth !== null ? this.maxWidth : freeSpace.width * .7;
    maxHeight = this.maxHeight !== null ? this.maxHeight : freeSpace.height * .5;
  }
  else if (this.verticalAlign === "center") {
    this.orientation = "vertical";
    position = this.horizontalAlign;

    maxWidth = this.maxWidth !== null ? this.maxWidth : freeSpace.width * .5;
    maxHeight = this.maxHeight !== null ? this.maxHeight : freeSpace.height * .7;
  }

  for (var i = 0; i < this.dataSeries.length; i++) {
    var dataSeries = this.dataSeries[i];


    if (dataSeries.type !== "pie" && dataSeries.type !== "doughnut" && dataSeries.type !== "funnel") {

      var markerType = dataSeries.legendMarkerType ? dataSeries.legendMarkerType : (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "scatter" || dataSeries.type === "bubble") && dataSeries.markerType ? dataSeries.markerType : __WEBPACK_IMPORTED_MODULE_0__data_series__["a" /* default */].getDefaultLegendMarker(dataSeries.type);
      var legendText = dataSeries.legendText ? dataSeries.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this._options, dataSeries: dataSeries, dataPoint: null })
        : dataSeries.name;
      var markerColor = dataSeries.legendMarkerColor ? dataSeries.legendMarkerColor : dataSeries.markerColor ? dataSeries.markerColor : dataSeries._colorSet[0];
      var markerSize = (!dataSeries.markerSize && (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline")) ? 0 : this.lineHeight * .6;
      var markerBorderColor = dataSeries.legendMarkerBorderColor ? dataSeries.legendMarkerBorderColor : dataSeries.markerBorderColor;
      var markerBorderThickness = dataSeries.legendMarkerBorderThickness ? dataSeries.legendMarkerBorderThickness : dataSeries.markerBorderThickness ? Math.max(1, Math.round(markerSize * .2)) : 0;
      var lineColor = dataSeries._colorSet[0];

      legendText = this.chart.replaceKeywordsWithValue(legendText, dataSeries.dataPoints[0], dataSeries, i);
      var item = {
        markerType: markerType, markerColor: markerColor, text: legendText, textBlock: null, chartType: dataSeries.type, markerSize: markerSize, lineColor: dataSeries._colorSet[0],
        dataSeriesIndex: dataSeries.index, dataPointIndex: null, markerBorderColor: markerBorderColor, markerBorderThickness: markerBorderThickness
      };

      items.push(item);
    } else {
      for (var dataPointIndex = 0; dataPointIndex < dataSeries.dataPoints.length; dataPointIndex++) {

        var dataPoint = dataSeries.dataPoints[dataPointIndex];

        var markerType = dataPoint.legendMarkerType ? dataPoint.legendMarkerType : dataSeries.legendMarkerType ? dataSeries.legendMarkerType : __WEBPACK_IMPORTED_MODULE_0__data_series__["a" /* default */].getDefaultLegendMarker(dataSeries.type);
        var legendText = dataPoint.legendText ? dataPoint.legendText : dataSeries.legendText ? dataSeries.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this._options, dataSeries: dataSeries, dataPoint: dataPoint })
          : dataPoint.name ? dataPoint.name : "DataPoint: " + (dataPointIndex + 1);
        var markerColor = dataPoint.legendMarkerColor ? dataPoint.legendMarkerColor : dataSeries.legendMarkerColor ? dataSeries.legendMarkerColor : dataPoint.color ? dataPoint.color : dataSeries.color ? dataSeries.color : dataSeries._colorSet[dataPointIndex % dataSeries._colorSet.length];
        var markerSize = this.lineHeight * .6;
        var markerBorderColor = dataPoint.legendMarkerBorderColor ? dataPoint.legendMarkerBorderColor : dataSeries.legendMarkerBorderColor ? dataSeries.legendMarkerBorderColor : dataPoint.markerBorderColor ? dataPoint.markerBorderColor : dataSeries.markerBorderColor;
        var markerBorderThickness = dataPoint.legendMarkerBorderThickness ? dataPoint.legendMarkerBorderThickness : dataSeries.legendMarkerBorderThickness ? dataSeries.legendMarkerBorderThickness : dataPoint.markerBorderThickness || dataSeries.markerBorderThickness ? Math.max(1, Math.round(markerSize * .2)) : 0;

        legendText = this.chart.replaceKeywordsWithValue(legendText, dataPoint, dataSeries, dataPointIndex);

        var item = {
          markerType: markerType, markerColor: markerColor, text: legendText, textBlock: null, chartType: dataSeries.type, markerSize: markerSize,
          dataSeriesIndex: i, dataPointIndex: dataPointIndex, markerBorderColor: markerBorderColor, markerBorderThickness: markerBorderThickness
        };

        if (dataPoint.showInLegend || (dataSeries.showInLegend && dataPoint.showInLegend !== false)) {
          items.push(item);
        }
      }
    }
    item = null;
  }
  if (this.reversed === true) {
    items.reverse();
  }

  // Find out the required width and height of Legend and position the items relative to the container
  if (items.length > 0) {
    var row = null;
    var rowIndex = 0; // required for vertical orientation
    var textMaxWidth = 0;
    var columnHeight = 0;

    if (this.itemWidth !== null) {
      if (this.itemMaxWidth !== null) {
        textMaxWidth = Math.min(this.itemWidth, this.itemMaxWidth, maxWidth);
      } else {
        textMaxWidth = Math.min(this.itemWidth, maxWidth);
      }
    } else {
      if (this.itemMaxWidth !== null) {
        textMaxWidth = Math.min(this.itemMaxWidth, maxWidth);
      } else {
        textMaxWidth = maxWidth;
      }
    }

    markerSize = (markerSize === 0 ? this.lineHeight * .6 : markerSize);
    textMaxWidth = textMaxWidth - (markerSize + this.horizontalSpacing * .1);

    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      if (item.chartType === "line" || item.chartType === "spline" || item.chartType === "stepLine") {
        textMaxWidth = textMaxWidth - 2 * (this.lineHeight * .1);
      }

      if (maxHeight <= 0 || typeof (maxHeight) === "undefined" || textMaxWidth <= 0 || typeof (textMaxWidth) === "undefined") {
        continue;
      }

      if (this.orientation === "horizontal") {

        item.textBlock = new __WEBPACK_IMPORTED_MODULE_2__text_block__["a" /* default */](this.ctx, {
          x: 0,
          y: 0,//TBI
          maxWidth: textMaxWidth,
          maxHeight: this.itemWrap ? maxHeight : this.lineHeight, //TBI: FontSize
          angle: 0,
          text: item.text,
          horizontalAlign: "left",//left, center, right
          fontSize: this.fontSize,//in pixels
          fontFamily: this.fontFamily,
          fontWeight: this.fontWeight, //normal, bold, bolder, lighter,
          fontColor: this.fontColor,
          fontStyle: this.fontStyle, // normal, italic, oblique
          textBaseline: "top"
        });
        item.textBlock.measureText();

        if (this.itemWidth !== null) {
          item.textBlock.width = this.itemWidth - (markerSize + this.horizontalSpacing * .1 + ((item.chartType === "line" || item.chartType === "spline" || item.chartType === "stepLine") ? 2 * (this.lineHeight * .1) : 0));
        }

        if (!row || row.width + Math.round(item.textBlock.width + this.horizontalSpacing * .1 + markerSize + (row.width === 0 ? 0 : (this.horizontalSpacing)) + ((item.chartType === "line" || item.chartType === "spline" || item.chartType === "stepLine") ? 2 * (this.lineHeight * .1) : 0)) > maxWidth) {
          row = {
            items: [], width: 0
          };
          rows.push(row);
          this.height += columnHeight;
          columnHeight = 0;
        }

        columnHeight = Math.max(columnHeight, item.textBlock.height);

        item.textBlock.x = row.width;
        item.textBlock.y = 0;

        row.width += Math.round(item.textBlock.width + this.horizontalSpacing * .1 + markerSize + (row.width === 0 ? 0 : this.horizontalSpacing) + ((item.chartType === "line" || item.chartType === "spline" || item.chartType === "stepLine") ? 2 * (this.lineHeight * .1) : 0));
        row.items.push(item);

        this.width = Math.max(row.width, this.width);
      } else {

        item.textBlock = new __WEBPACK_IMPORTED_MODULE_2__text_block__["a" /* default */](this.ctx, {
          x: 0,
          y: 0,//TBI
          maxWidth: textMaxWidth,
          maxHeight: this.itemWrap === true ? maxHeight : this.fontSize * 1.5, //TBI: FontSize
          angle: 0,
          text: item.text,
          horizontalAlign: "left",//left, center, right
          fontSize: this.fontSize,//in pixels
          fontFamily: this.fontFamily,
          fontWeight: this.fontWeight, //normal, bold, bolder, lighter,
          fontColor: this.fontColor,
          fontStyle: this.fontStyle, // normal, italic, oblique
          textBaseline: "top"
        });

        item.textBlock.measureText();

        if (this.itemWidth !== null) {
          item.textBlock.width = this.itemWidth - (markerSize + this.horizontalSpacing * .1 + ((item.chartType === "line" || item.chartType === "spline" || item.chartType === "stepLine") ? 2 * (this.lineHeight * .1) : 0));
        }

        if (this.height <= maxHeight) {
          row = {
            items: [], width: 0
          };
          rows.push(row);
        } else {
          row = rows[rowIndex];
          rowIndex = (rowIndex + 1) % rows.length;
        }

        this.height += item.textBlock.height;

        item.textBlock.x = row.width; // relative to the row
        item.textBlock.y = 0; // relative to the row

        row.width += Math.round(item.textBlock.width + this.horizontalSpacing * .1 + markerSize + (row.width === 0 ? 0 : this.horizontalSpacing) + ((item.chartType === "line" || item.chartType === "spline" || item.chartType === "stepLine") ? 2 * (this.lineHeight * .1) : 0));
        row.items.push(item);

        this.width = Math.max(row.width, this.width);
      }
    }

    if (this.itemWrap === false) {
      this.height = rows.length * (this.lineHeight);
    } else {
      this.height += columnHeight;
    }

    this.height = Math.min(maxHeight, this.height);
    this.width = Math.min(maxWidth, this.width);
  }

  if (this.verticalAlign === "top") {
    if (this.horizontalAlign === "left")
      left = freeSpace.x1;
    else if (this.horizontalAlign === "right")
      left = freeSpace.x2 - this.width;
    else
      left = freeSpace.x1 + freeSpace.width / 2 - this.width / 2;

    top = freeSpace.y1;
  } else if (this.verticalAlign === "center") {
    if (this.horizontalAlign === "left")
      left = freeSpace.x1;
    else if (this.horizontalAlign === "right")
      left = freeSpace.x2 - this.width;
    else
      left = freeSpace.x1 + freeSpace.width / 2 - this.width / 2;

    top = freeSpace.y1 + freeSpace.height / 2 - this.height / 2;
  } else if (this.verticalAlign === "bottom") {
    if (this.horizontalAlign === "left")
      left = freeSpace.x1;
    else if (this.horizontalAlign === "right")
      left = freeSpace.x2 - this.width;
    else
      left = freeSpace.x1 + freeSpace.width / 2 - this.width / 2;

    top = freeSpace.y2 - this.height;
  }

  this.items = items;

  //Assign ids to all legendItems
  for (var i = 0; i < this.items.length; i++) {

    var item = items[i];

    item.id = ++this.chart._eventManager.lastObjectId;
    this.chart._eventManager.objectMap[item.id] = {
      id: item.id, objectType: "legendItem", legendItemIndex: i, dataSeriesIndex: item.dataSeriesIndex, dataPointIndex: item.dataPointIndex
    };
    //delete item.textBlock;// Not Required anymore
  }

  var rowHeight = 0;
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var columnHeight = 0;
    for (var itemIndex = 0; itemIndex < row.items.length; itemIndex++) {
      var item = row.items[itemIndex];

      var itemX = item.textBlock.x + left + (itemIndex === 0 ? markerSize * .2 : this.horizontalSpacing);
      var itemY = top + rowHeight;

      var ghostX = itemX;

      if (!this.chart.data[item.dataSeriesIndex].visible)
        this.ctx.globalAlpha = .5;

      this.ctx.save();
      this.ctx.rect(left, top, maxWidth, maxHeight);
      this.ctx.clip();

      if (item.chartType === "line" || item.chartType === "stepLine" || item.chartType === "spline") {
        this.ctx.strokeStyle = item.lineColor;
        this.ctx.lineWidth = Math.ceil(this.lineHeight / 8);
        this.ctx.beginPath();
        this.ctx.moveTo(itemX - this.lineHeight * .1, itemY + this.lineHeight / 2);
        this.ctx.lineTo(itemX + this.lineHeight * .7, itemY + this.lineHeight / 2);
        this.ctx.stroke();

        ghostX -= this.lineHeight * .1;
      }

      __WEBPACK_IMPORTED_MODULE_3__helpers_render__["a" /* default */].drawMarker(itemX + markerSize / 2, itemY + (this.lineHeight / 2), this.ctx, item.markerType, item.markerSize, item.markerColor, item.markerBorderColor, item.markerBorderThickness);

      item.textBlock.x = itemX + this.horizontalSpacing * .1 + markerSize;

      if (item.chartType === "line" || item.chartType === "stepLine" || item.chartType === "spline") {
        item.textBlock.x = item.textBlock.x + this.lineHeight * .1;
      }

      item.textBlock.y = itemY;

      item.textBlock.render(true);

      this.ctx.restore();

      if (itemIndex > 0) {
        columnHeight = Math.max(columnHeight, item.textBlock.height);
      } else {
        columnHeight = item.textBlock.height;
      }

      if (!this.chart.data[item.dataSeriesIndex].visible)
        this.ctx.globalAlpha = 1;

      var hexColor = intToHexColorString(item.id);
      this.ghostCtx.fillStyle = hexColor;
      this.ghostCtx.beginPath();
      this.ghostCtx.fillRect(ghostX, item.textBlock.y, item.textBlock.x + item.textBlock.width - ghostX, item.textBlock.height);

      item.x1 = this.chart._eventManager.objectMap[item.id].x1 = ghostX;
      item.y1 = this.chart._eventManager.objectMap[item.id].y1 = item.textBlock.y;
      item.x2 = this.chart._eventManager.objectMap[item.id].x2 = item.textBlock.x + item.textBlock.width;
      item.y2 = this.chart._eventManager.objectMap[item.id].y2 = item.textBlock.y + item.textBlock.height;
    }
    rowHeight = rowHeight + columnHeight;
  }

  //this.ctx.beginPath();
  //this.ctx.lineWidth = 2;
  //this.ctx.strokeStyle = "red";
  //this.ctx.rect(left, top, this.width, this.height);
  //this.ctx.stroke();

  container.layoutManager.registerSpace(position, { width: this.width + 2 + 2, height: this.height + 5 + 5 });

  this.bounds = {
    x1: left, y1: top, x2: left + this.width, y2: top + this.height
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Legend);


/***/ }),
/* 38 */
/*!***************************************************!*\
  !*** ./node_modules/canvasjs/src/charts/index.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! exports used: AreaChart, BarChart, BubbleChart, CandlestickChart, ColumnChart, PieChart, RangeAreaChart, RangeBarChart, RangeColumnChart, RangeSplineAreaChart, ScatterChart, SplineAreaChart, SplineChart, StackedArea100Chart, StackedAreaChart, StackedBar100Chart, StackedBarChart, StackedColumn100Chart, StackedColumnChart, StepAreaChart */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:7)\nYou may need an appropriate loader to handle this file type.\n| export SplineChart from '../charts/spline';\n| export ColumnChart from '../charts/column';\n| export StackedColumnChart from '../charts/stacked_column';");

/***/ }),
/* 39 */
/*!*********************************************!*\
  !*** ./app/javascript/components/navbar.js ***!
  \*********************************************/
/*! exports provided: initUpdateNavbarOnScroll */
/*! exports used: initUpdateNavbarOnScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initUpdateNavbarOnScroll; });
var initUpdateNavbarOnScroll = function initUpdateNavbarOnScroll() {
  var navbar = document.querySelector('.navbar-home');
  var button = document.querySelector('.button-home');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-wagon-blue');
        button.classList.add('btn-action-white');
        button.classList.remove('btn-action');
      } else {
        navbar.classList.remove('navbar-wagon-blue');
        button.classList.toggle('btn-action-white');
        button.classList.add('btn-action');
      }
    });
  }
};



/***/ })
/******/ ]);
//# sourceMappingURL=application-dbf326027c5c4709f09a.js.map