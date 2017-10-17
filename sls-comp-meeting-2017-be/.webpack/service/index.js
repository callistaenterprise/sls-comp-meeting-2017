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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handler = __webpack_require__(2);

Object.defineProperty(exports, "messages", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_handler).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(3);

var _messages_reducer = __webpack_require__(4);

var _messages_reducer2 = _interopRequireDefault(_messages_reducer);

var _lambda_utils = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */

var messagesReducer = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event, context, callback) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
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

  return function messagesReducer(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = messagesReducer;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _service = __webpack_require__(5);

var messageService = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(action) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('--- REDUCER', JSON.stringify(action, null, 2));
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
              return _extends({}, action, { remote: false });
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMessage = exports.getMessage = exports.getMessages = exports.updateMessage = exports.createMessage = undefined;

var createMessage = exports.createMessage = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
    var message = _ref2.message;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref4) {
    var message = _ref4.message;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(args) {
    var _ref6, userId, _ref6$attributesToGet, attributesToGet, _ref6$limit, limit;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref8) {
    var id = _ref8.id,
        _ref8$attributesToGet = _ref8.attributesToGet,
        attributesToGet = _ref8$attributesToGet === undefined ? message : _ref8$attributesToGet;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref10) {
    var id = _ref10.id;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
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

var _dynamo_adapter = __webpack_require__(6);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var ServerlessHelpers = __webpack_require__(8).loadEnv();

var messageTable = process.env.Messages_Table;

var message = ['id', 'message', 'createdAt', 'userId'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEntity = exports.deleteEntity = exports.createEntity = exports.getEntity = exports.getEntities = exports.getRelatedEntities = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getRelatedEntities = exports.getRelatedEntities = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(keyName) {
    var keyValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var tableName = arguments[2];
    var attributesToGet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var end, eq, contains, buildQuery, buildExpressionAttibuteValues, params;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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
                return _extends({}, e, _defineProperty({}, ':' + keyName + i, keyValue));
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

            console.log('--- params', JSON.stringify(params, null, 2));

            return _context.abrupt('return', docClient.scan(params).promise().then(function (data) {
              console.log('--- getRelatedEntities', tableName, JSON.stringify(data), JSON.stringify(data.Items));
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(tableName, attributesToGet) {
    var params;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = {
              TableName: tableName,
              AttributesToGet: attributesToGet
            };

            console.log('--- getEntities', params);

            return _context2.abrupt('return', docClient.scan(params).promise().then(function (data) {
              console.log('--- getEntities', tableName, JSON.stringify(data));
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(tableName, id, attributesToGet) {
    var params;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
              console.log('---getEntity', tableName, JSON.stringify(data));
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
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(tableName, entity) {
    var createdAt, params;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // set an id if not set
            console.log('--- createEntity', entity);
            createdAt = new Date();

            entity = _extends({}, entity, { id: entity.id ? entity.id : (0, _uuid.v4)() });
            entity = _extends({}, entity, { createdAt: createdAt.getTime() });
            params = {
              TableName: tableName,
              Item: entity
            };

            console.log('--- entity params', JSON.stringify(params));
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
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(tableName, id) {
    var idName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
    var params;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            params = {
              TableName: tableName,
              Key: _defineProperty({}, idName, id)
            };
            return _context5.abrupt('return', docClient.delete(params).promise().then(function (err, data) {
              if (err) {
                var msg = 'DeleteItem succeeded:, ' + JSON.stringify(data, null, 2);
                console.error(msg);
                return new Error(msg);
              } else {
                var _msg = 'DeleteItem succeeded:, ' + JSON.stringify(data, null, 2);
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
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(tableName, entity) {
    var idName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
    var params;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (entity[idName]) {
              _context6.next = 2;
              break;
            }

            throw new Error('Id was null when trying to update an entity');

          case 2:
            console.log('--- update entity', JSON.stringify(entity));
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

var _awsSdk = __webpack_require__(0);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _uuid = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("serverless-helpers-js");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invokeLambda = exports.baseLambda = exports.wrapReducerCallback = exports.wrapCallback = undefined;

var wrapCallback = exports.wrapCallback = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event, callback, fn) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fn(event);

          case 3:
            result = _context.sent;

            console.log("---- callback result", JSON.stringify(result, null, 2));
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event, callback, fn) {
    var result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            console.log(event);
            _context2.next = 4;
            return fn(_ramda2.default.pathOr({}, ["body", "action"], event));

          case 4:
            result = _context2.sent;

            console.log("---- reducer callback result", JSON.stringify(result, null, 2));
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

var invokeLambda = exports.invokeLambda = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(FunctionName, event) {
    var lambda, params;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            lambda = new _awsSdk2.default.Lambda();
            params = {
              FunctionName: FunctionName,
              Payload: JSON.stringify(event)
            };

            console.log("--- invoke lambda", JSON.stringify(params, null, 2));
            return _context4.abrupt("return", new Promise(function (resolve, reject) {
              return lambda.invoke(params, promiseCb(resolve, reject));
            }));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function invokeLambda(_x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();

var _awsSdk = __webpack_require__(0);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _ramda = __webpack_require__(10);

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var baseLambda = exports.baseLambda = function baseLambda(service) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event, context, callback) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log("--- message event", JSON.stringify(event, null, 2));
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ })
/******/ ])));