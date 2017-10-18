(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEntity = exports.deleteEntity = exports.createEntity = exports.getEntity = exports.getEntities = exports.getRelatedEntities = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(2);

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperty2 = __webpack_require__(14);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(3);

var _extends4 = _interopRequireDefault(_extends3);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getRelatedEntities = exports.getRelatedEntities = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(keyName) {
    var keyValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var tableName = arguments[2];
    var attributesToGet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var end, eq, contains, buildQuery, buildExpressionAttibuteValues, params;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            end = function end(length, i, endString) {
              return i + 1 < length ? endString : '';
            };

            eq = function eq(i, query, keyName, keyValues) {
              return '' + query + keyName + ' = :' + keyName + i + end(keyValues.length, i, ' or ');
            };

            contains = function contains(i, query, keyName, keyValues) {
              return query + 'contains(' + keyName + ', :' + keyName + i + ')' + end(keyValues.length, i, ' or ');
            };

            buildQuery = function buildQuery(keyName) {
              var keyValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

              var query = keyValues.reduce(function (query, keyValue, i) {
                var res = many ? contains(i, query, keyName, keyValues) : eq(i, query, keyName, keyValues);
                return res;
              }, '');
              return query;
            };

            buildExpressionAttibuteValues = function buildExpressionAttibuteValues(keyName, keyValues) {
              return keyValues.reduce(function (e, keyValue, i) {
                return (0, _extends4.default)({}, e, (0, _defineProperty3.default)({}, ':' + keyName + i, keyValue));
              }, {});
            };

            params = {
              TableName: tableName,
              FilterExpression: buildQuery(keyName, keyValues),
              ProjectionExpression: attributesToGet.reduce(function (pe, attribute, i) {
                return '' + pe + attribute + end(attributesToGet.length, i, ',');
              }, ''),
              ExpressionAttributeValues: buildExpressionAttibuteValues(keyName, keyValues)
            };

            console.log('--- params', (0, _stringify2.default)(params, null, 2));

            return _context.abrupt('return', docClient.scan(params).promise().then(function (data) {
              console.log('--- getRelatedEntities', tableName, (0, _stringify2.default)(data), (0, _stringify2.default)(data.Items));
              return data.Items;
            }));

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getRelatedEntities(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getEntities = exports.getEntities = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(tableName, attributesToGet) {
    var params;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = {
              TableName: tableName,
              AttributesToGet: attributesToGet
            };

            console.log('--- getEntities', params);

            return _context2.abrupt('return', docClient.scan(params).promise().then(function (data) {
              console.log('--- getEntities', tableName, (0, _stringify2.default)(data));
              return data.Items;
            }));

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getEntities(_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var getEntity = exports.getEntity = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(tableName, id, attributesToGet) {
    var params;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            params = {
              TableName: tableName,
              Key: {
                id: '' + id
              },
              AttributesToGet: attributesToGet
            };
            return _context3.abrupt('return', docClient.get(params).promise().then(function (data) {
              console.log('---getEntity', tableName, (0, _stringify2.default)(data));
              return data && data.Item;
            }));

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getEntity(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var createEntity = exports.createEntity = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(tableName, entity) {
    var createdAt, params;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // set an id if not set
            console.log('--- createEntity', entity);
            createdAt = new Date();

            entity = (0, _extends4.default)({}, entity, { id: entity.id ? entity.id : (0, _uuid.v4)() });
            entity = (0, _extends4.default)({}, entity, { createdAt: createdAt.getTime() });
            params = {
              TableName: tableName,
              Item: entity
            };

            console.log('--- entity params', (0, _stringify2.default)(params));
            return _context4.abrupt('return', docClient.put(params).promise().then(function () {
              return entity;
            }));

          case 7:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function createEntity(_x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();

var deleteEntity = exports.deleteEntity = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(tableName, id) {
    var idName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
    var params;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            params = {
              TableName: tableName,
              Key: (0, _defineProperty3.default)({}, idName, id)
            };
            return _context5.abrupt('return', docClient.delete(params).promise().then(function (err, data) {
              if (err) {
                var msg = 'DeleteItem succeeded:, ' + (0, _stringify2.default)(data, null, 2);
                console.error(msg);
                return new Error(msg);
              } else {
                var _msg = 'DeleteItem succeeded:, ' + (0, _stringify2.default)(data, null, 2);
                console.log(_msg);
                return _msg;
              }
            }));

          case 2:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function deleteEntity(_x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();

var updateEntity = exports.updateEntity = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(tableName, entity) {
    var idName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
    var params;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (entity[idName]) {
              _context6.next = 2;
              break;
            }

            throw new Error('Id was null when trying to update an entity');

          case 2:
            console.log('--- update entity', (0, _stringify2.default)(entity));
            params = {
              TableName: tableName,
              Item: entity
            };
            return _context6.abrupt('return', docClient.put(params).promise().then(function () {
              return entity;
            }));

          case 5:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function updateEntity(_x15, _x16) {
    return _ref6.apply(this, arguments);
  };
}();

var _awsSdk = __webpack_require__(6);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _uuid = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var docClient = void 0;
// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  console.log("--- Dynamo is offline!");
  docClient = new _awsSdk2.default.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  });
} else {
  docClient = new _awsSdk2.default.DynamoDB.DocumentClient({
    sessionToken: process.env.AWS_SESSION_TOKEN,
    region: process.env.AWS_REGION
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("serverless-helpers-js");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invokeLambda = exports.baseLambda = exports.wrapReducerCallback = exports.wrapCallback = undefined;

var _promise = __webpack_require__(16);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(2);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var wrapCallback = exports.wrapCallback = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event, callback, fn) {
    var result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fn(event);

          case 3:
            result = _context.sent;

            console.log("---- callback result", (0, _stringify2.default)(result, null, 2));
            callback(null, result);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

            callback(_context.t0, null);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  return function wrapCallback(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var wrapReducerCallback = exports.wrapReducerCallback = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event, callback, fn) {
    var result;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            console.log(event);
            _context2.next = 4;
            return fn(_ramda2.default.pathOr({}, ["body", "action"], event));

          case 4:
            result = _context2.sent;

            console.log("---- reducer callback result", (0, _stringify2.default)(result, null, 2));
            callback(null, result);
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);

            callback(_context2.t0, null);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 9]]);
  }));

  return function wrapReducerCallback(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

// FunctionName is the name of the env var in the serverless.yml file
var invokeLambda = exports.invokeLambda = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(FunctionName, event, context) {
    var lambda, params;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!process.env.IS_OFFLINE) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return", new _promise2.default(function (resolve, reject) {
              return new Promise(function(resolve) { resolve(); }).then((function (require) {
                return FunctionName(event, context, promiseCb(resolve, reject));
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
            }));

          case 4:
            lambda = new _awsSdk2.default.Lambda();
            params = {
              FunctionName: FunctionName,
              Payload: (0, _stringify2.default)(event)
            };

            console.log("--- invoke lambda", (0, _stringify2.default)(params, null, 2));
            return _context4.abrupt("return", new _promise2.default(function (resolve, reject) {
              return lambda.invoke(params, promiseCb(resolve, reject));
            }));

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function invokeLambda(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

var _awsSdk = __webpack_require__(6);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _ramda = __webpack_require__(17);

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseLambda = exports.baseLambda = function baseLambda(service) {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event, context, callback) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log("--- message event", (0, _stringify2.default)(event, null, 2));
              // pass the event through the reducer
              wrapCallback(event, callback, service);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var promiseCb = function promiseCb(resolve, reject) {
  return function (err, data) {
    if (err) reject(err); // console.log(err, err.stack); // an error occurred
    else resolve(data);
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handler = __webpack_require__(11);

Object.defineProperty(exports, "messages", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_handler).default;
  }
});

var _handler2 = __webpack_require__(18);

Object.defineProperty(exports, "users", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_handler2).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

__webpack_require__(4);

var _messages_reducer = __webpack_require__(12);

var _messages_reducer2 = _interopRequireDefault(_messages_reducer);

var _lambda_utils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */

var reducer = exports.reducer = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event, context, callback) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _lambda_utils.wrapReducerCallback)(event, callback, _messages_reducer2.default));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function reducer(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = reducer;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(3);

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__(2);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _service = __webpack_require__(13);

var messageService = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(action) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('--- Messages REDUCER', (0, _stringify2.default)(action, null, 2));
            _context.t0 = action.type;
            _context.next = _context.t0 === 'CREATE_MESSAGE' ? 4 : _context.t0 === 'UPDATE_MESSAGE' ? 6 : _context.t0 === 'DELETE_MESSAGE' ? 7 : _context.t0 === 'LIST_MESSAGES' ? 8 : _context.t0 === 'GET_MESSAGE' ? 10 : 11;
            break;

          case 4:
            console.log('--- reducer create message', action);
            return _context.abrupt('return', messageService.createMessage(action).then(function (message) {
              return { type: 'ADD_MESSAGE', message: message };
            }));

          case 6:
            return _context.abrupt('return', messageService.updateMessage(action).then(function (message) {
              return { type: 'UPDATE_MESSAGE', message: message };
            }));

          case 7:
            return _context.abrupt('return', messageService.deleteMessage(action).then(function () {
              return (0, _extends3.default)({}, action, { remote: false });
            }));

          case 8:
            console.log("---- list_messages");
            return _context.abrupt('return', messageService.getMessages(action).then(function (messages) {
              return { type: 'RECEIVE_MESSAGES', messages: messages };
            }));

          case 10:
            return _context.abrupt('return', messageService.getMessage(action));

          case 11:
            return _context.abrupt('return', action);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMessage = exports.getMessage = exports.getMessages = exports.updateMessage = exports.createMessage = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var createMessage = exports.createMessage = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var message = _ref2.message;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('--- createMessage', message, messageTable);
            return _context.abrupt('return', (0, _dynamo_adapter.createEntity)(messageTable, { message: message }));

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createMessage(_x) {
    return _ref.apply(this, arguments);
  };
}();

var updateMessage = exports.updateMessage = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref4) {
    var message = _ref4.message;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', (0, _dynamo_adapter.updateEntity)(messageTable, { message: message }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function updateMessage(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var getMessages = exports.getMessages = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(args) {
    var _ref6, userId, _ref6$attributesToGet, attributesToGet, _ref6$limit, limit;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref6 = args ? args : {}, userId = _ref6.userId, _ref6$attributesToGet = _ref6.attributesToGet, attributesToGet = _ref6$attributesToGet === undefined ? message : _ref6$attributesToGet, _ref6$limit = _ref6.limit, limit = _ref6$limit === undefined ? 200 : _ref6$limit;

            console.log('--- getMessages', args, userId, limit);
            return _context3.abrupt('return', userId ? (0, _dynamo_adapter.getRelatedEntities)('userId', [userId], messageTable, attributesToGet) : (0, _dynamo_adapter.getEntities)(messageTable, attributesToGet).then(function () {
              var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              return res.sort(function (a, b) {
                return b.createdAt - a.createdAt;
              }).splice(0, limit);
            }));

          case 3:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getMessages(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var getMessage = exports.getMessage = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref8) {
    var id = _ref8.id,
        _ref8$attributesToGet = _ref8.attributesToGet,
        attributesToGet = _ref8$attributesToGet === undefined ? message : _ref8$attributesToGet;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', (0, _dynamo_adapter.getEntity)(messageTable, id, attributesToGet));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getMessage(_x5) {
    return _ref7.apply(this, arguments);
  };
}();

var deleteMessage = exports.deleteMessage = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref10) {
    var id = _ref10.id;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', (0, _dynamo_adapter.deleteEntity)(messageTable, id));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function deleteMessage(_x6) {
    return _ref9.apply(this, arguments);
  };
}();

var _dynamo_adapter = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServerlessHelpers = __webpack_require__(7).loadEnv();

var messageTable = process.env.Messages_Table;

var message = ['id', 'message', 'createdAt', 'userId'];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

__webpack_require__(4);

var _users_reducer = __webpack_require__(19);

var _users_reducer2 = _interopRequireDefault(_users_reducer);

var _lambda_utils = __webpack_require__(8);

var _local = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */

var reducer = exports.reducer = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event, context, callback) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _lambda_utils.wrapReducerCallback)(event, callback, _users_reducer2.default);
            console.log("--- invoking lambda", "Messages_Lambda");

            (0, _lambda_utils.invokeLambda)((0, _local.getLambda)("Messages_Lambda"), event, context);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function reducer(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = reducer;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(3);

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__(2);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _service = __webpack_require__(20);

var service = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(action) {
    var user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('--- REDUCER', (0, _stringify2.default)(action, null, 2));
            _context.t0 = action.type;
            _context.next = _context.t0 === 'CREATE_USER' ? 4 : _context.t0 === 'UPDATE_USER' ? 6 : _context.t0 === 'DELETE_USER' ? 7 : _context.t0 === 'LIST_USERS' ? 8 : _context.t0 === 'GET_USER' ? 11 : 13;
            break;

          case 4:
            console.log('--- reducer create user', action);
            return _context.abrupt('return', service.createUser(action).then(function (user) {
              return { type: 'ADD_USER', user: user };
            }));

          case 6:
            return _context.abrupt('return', service.updateUser(action).then(function (user) {
              return { type: 'UPDATE_USER', user: user };
            }));

          case 7:
            return _context.abrupt('return', service.deleteUser(action).then(function () {
              return (0, _extends3.default)({}, action, { remote: false });
            }));

          case 8:
            console.log("---- list_users");
            invokeLambda();
            return _context.abrupt('return', service.getUsers(action).then(function (users) {
              return { type: 'RECEIVE_USERS', users: users };
            }));

          case 11:
            user = service.getUser(action);
            return _context.abrupt('return', user);

          case 13:
            return _context.abrupt('return', action);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.getUser = exports.getUsers = exports.updateUser = exports.createUser = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var createUser = exports.createUser = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(user) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("--- createUser", user, usersTable);
            return _context.abrupt("return", (0, _dynamo_adapter.createEntity)(usersTable, user));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

var updateUser = exports.updateUser = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(user) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", (0, _dynamo_adapter.updateEntity)(usersTable, user));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function updateUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getUsers = exports.getUsers = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(args) {
    var _ref4, userId, _ref4$attributesToGet, attributesToGet, _ref4$limit, limit;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref4 = args ? args : {}, userId = _ref4.userId, _ref4$attributesToGet = _ref4.attributesToGet, attributesToGet = _ref4$attributesToGet === undefined ? user : _ref4$attributesToGet, _ref4$limit = _ref4.limit, limit = _ref4$limit === undefined ? 200 : _ref4$limit;

            console.log("--- getUsers", args, userId, limit);
            return _context3.abrupt("return", userId ? (0, _dynamo_adapter.getRelatedEntities)("userId", [userId], messagesTable, message) : (0, _dynamo_adapter.getEntities)(usersTable, attributesToGet).then(function () {
              var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              return res.sort(function (a, b) {
                return b.createdAt - a.createdAt;
              }).splice(0, limit);
            }));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getUsers(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var getUser = exports.getUser = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref6) {
    var id = _ref6.id,
        _ref6$attributesToGet = _ref6.attributesToGet,
        attributesToGet = _ref6$attributesToGet === undefined ? user : _ref6$attributesToGet;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", (0, _dynamo_adapter.getEntity)(usersTable, id, attributesToGet));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getUser(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var deleteUser = exports.deleteUser = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref8) {
    var id = _ref8.id;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", (0, _dynamo_adapter.deleteEntity)(usersTable, id));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function deleteUser(_x6) {
    return _ref7.apply(this, arguments);
  };
}();

var _dynamo_adapter = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServerlessHelpers = __webpack_require__(7).loadEnv();

var usersTable = process.env.Users_Table;
var messagesTable = process.env.Messages_Table;

var user = ["id", "username", "firstname", "lastname", "email", "createdAt", "userId"];

var message = ['id', 'message', 'createdAt', 'userId'];

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLambda = undefined;

var _handler = __webpack_require__(11);

var _handler2 = _interopRequireDefault(_handler);

var _handler3 = __webpack_require__(18);

var _handler4 = _interopRequireDefault(_handler3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lambdas = { Messages_Lambda: _handler2.default, Users_Lambda: _handler4.default };

var getLambda = exports.getLambda = function getLambda(functionName) {
  return process.env.IS_OFFLINE ? lambdas[functionName] : process.env[functionName];
};

/***/ })
/******/ ])));