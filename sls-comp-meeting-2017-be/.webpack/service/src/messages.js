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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messages_reducer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_lambda_utils__ = __webpack_require__(9);


/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__utils_lambda_utils__["a" /* baseLambda */])(__WEBPACK_IMPORTED_MODULE_0__messages_reducer__["a" /* default */]));

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* harmony default export */ __webpack_exports__["a"] = ((() => {
  var _ref = _asyncToGenerator(function* (action) {
    console.log('--- REDUCER', JSON.stringify(action), action.type);
    switch (action.type) {
      case 'CREATE_MESSAGE':
        console.log('--- reducer create message', action);
        return __WEBPACK_IMPORTED_MODULE_0__service__["a" /* createMessage */](action).then(function (message) {
          return { type: 'ADD_MESSAGE', message };
        });
      case 'UPDATE_MESSAGE':
        return __WEBPACK_IMPORTED_MODULE_0__service__["e" /* updateMessage */](action).then(function (message) {
          return { type: 'UPDATE_MESSAGE', message };
        });
      case 'DELETE_MESSAGE':
        return __WEBPACK_IMPORTED_MODULE_0__service__["b" /* deleteMessage */](action).then(function () {
          return _extends({}, action, { remote: false });
        });
      case 'LIST_MESSAGES':
        return __WEBPACK_IMPORTED_MODULE_0__service__["d" /* getMessages */](action).then(function (messages) {
          return { type: 'RECEIVE_MESSAGES', messages };
        });
      case 'GET_MESSAGE':
        return __WEBPACK_IMPORTED_MODULE_0__service__["c" /* getMessage */](action);
      default:
        return action;
    }
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dynamo_adapter__ = __webpack_require__(5);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



const ServerlessHelpers = __webpack_require__(8).loadEnv();

const messageTable = process.env.Messages_Table;

const message = ['id', 'message', 'createdAt', 'userId'];

let createMessage = (() => {
  var _ref = _asyncToGenerator(function* ({ message }) {
    console.log('--- createMessage', message, messageTable);
    return Object(__WEBPACK_IMPORTED_MODULE_0__utils_dynamo_adapter__["a" /* createEntity */])(messageTable, message);
  });

  return function createMessage(_x) {
    return _ref.apply(this, arguments);
  };
})();

let updateMessage = (() => {
  var _ref2 = _asyncToGenerator(function* ({ message }) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__utils_dynamo_adapter__["f" /* updateEntity */])(messageTable, message);
  });

  return function updateMessage(_x2) {
    return _ref2.apply(this, arguments);
  };
})();

let getMessages = (() => {
  var _ref3 = _asyncToGenerator(function* (args) {
    const { userId, attributesToGet = message, limit = 200 } = args ? args : {};
    console.log('--- getMessages', args, userId, limit);
    return userId ? Object(__WEBPACK_IMPORTED_MODULE_0__utils_dynamo_adapter__["e" /* getRelatedEntities */])('userId', [userId], messageTable, attributesToGet) : Object(__WEBPACK_IMPORTED_MODULE_0__utils_dynamo_adapter__["c" /* getEntities */])(messageTable, attributesToGet).then(function (res = []) {
      return res.sort(function (a, b) {
        return b.createdAt - a.createdAt;
      }).splice(0, limit);
    });
  });

  return function getMessages(_x3) {
    return _ref3.apply(this, arguments);
  };
})();

let getMessage = (() => {
  var _ref4 = _asyncToGenerator(function* ({ id, attributesToGet = message }) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__utils_dynamo_adapter__["d" /* getEntity */])(messageTable, id, attributesToGet);
  });

  return function getMessage(_x4) {
    return _ref4.apply(this, arguments);
  };
})();

let deleteMessage = (() => {
  var _ref5 = _asyncToGenerator(function* ({ id }) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__utils_dynamo_adapter__["b" /* deleteEntity */])(messageTable, id);
  });

  return function deleteMessage(_x5) {
    return _ref5.apply(this, arguments);
  };
})();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getRelatedEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updateEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk_clients_dynamoDB__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk_clients_dynamoDB___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aws_sdk_clients_dynamoDB__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




let dynamoConfig = {
  sessionToken: process.env.AWS_SESSION_TOKEN,
  region: process.env.AWS_REGION
};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  dynamoConfig = {
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  };
}

const docClient = new __WEBPACK_IMPORTED_MODULE_0_aws_sdk_clients_dynamoDB___default.a.DocumentClient(dynamoConfig);

let getRelatedEntities = (() => {
  var _ref = _asyncToGenerator(function* (keyName, keyValues = [], tableName, attributesToGet = []) {
    const end = function (length, i, endString) {
      return i + 1 < length ? endString : '';
    };
    const eq = function (i, query, keyName, keyValues) {
      return `${query}${keyName} = :${keyName}${i}${end(keyValues.length, i, ' or ')}`;
    };

    const contains = function (i, query, keyName, keyValues) {
      return `${query}contains(${keyName}, :${keyName}${i})${end(keyValues.length, i, ' or ')}`;
    };

    const buildQuery = function (keyName, keyValues = []) {
      const query = keyValues.reduce(function (query, keyValue, i) {
        const res = many ? contains(i, query, keyName, keyValues) : eq(i, query, keyName, keyValues);
        return res;
      }, '');
      return query;
    };
    const buildExpressionAttibuteValues = function (keyName, keyValues) {
      return keyValues.reduce(function (e, keyValue, i) {
        return _extends({}, e, { [`:${keyName}${i}`]: keyValue });
      }, {});
    };
    const params = {
      TableName: tableName,
      FilterExpression: buildQuery(keyName, keyValues),
      ProjectionExpression: attributesToGet.reduce(function (pe, attribute, i) {
        return `${pe}${attribute}${end(attributesToGet.length, i, ',')}`;
      }, ''),
      ExpressionAttributeValues: buildExpressionAttibuteValues(keyName, keyValues)
    };
    console.log('--- params', JSON.stringify(params, null, 2));

    return docClient.scan(params).promise().then(function (data) {
      console.log('--- getRelatedEntities', tableName, JSON.stringify(data), JSON.stringify(data.Items));
      return data.Items;
    });
  });

  return function getRelatedEntities(_x) {
    return _ref.apply(this, arguments);
  };
})();

let getEntities = (() => {
  var _ref2 = _asyncToGenerator(function* (tableName, attributesToGet) {
    const params = {
      TableName: tableName,
      AttributesToGet: attributesToGet
    };
    console.log('--- getEntities', params);

    return docClient.scan(params).promise().then(function (data) {
      console.log('--- getEntities', tableName, JSON.stringify(data));
      return data.Items;
    });
  });

  return function getEntities(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
})();

let getEntity = (() => {
  var _ref3 = _asyncToGenerator(function* (tableName, id, attributesToGet) {
    const params = {
      TableName: tableName,
      Key: {
        id: `${id}`
      },
      AttributesToGet: attributesToGet
    };
    return docClient.get(params).promise().then(function (data) {
      console.log('---getEntity', tableName, JSON.stringify(data));
      return data && data.Item;
    });
  });

  return function getEntity(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
})();

let createEntity = (() => {
  var _ref4 = _asyncToGenerator(function* (tableName, entity) {
    // set an id if not set
    console.log('--- createEntity', entity);
    const createdAt = new Date();
    entity = _extends({}, entity, { id: entity.id ? entity.id : Object(__WEBPACK_IMPORTED_MODULE_1_uuid__["v4"])() });
    entity = _extends({}, entity, { createdAt: createdAt.getTime() });
    const params = {
      TableName: tableName,
      Item: entity
    };
    console.log('--- entity params', JSON.stringify(params));
    return docClient.put(params).promise().then(function () {
      return entity;
    });
  });

  return function createEntity(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
})();

let deleteEntity = (() => {
  var _ref5 = _asyncToGenerator(function* (tableName, id, idName = 'id') {
    const params = {
      TableName: tableName,
      Key: {
        [idName]: id
      }
    };
    return docClient.delete(params).promise().then(function (err, data) {
      if (err) {
        const msg = `DeleteItem succeeded:, ${JSON.stringify(data, null, 2)}`;
        console.error(msg);
        return new Error(msg);
      } else {
        const msg = `DeleteItem succeeded:, ${JSON.stringify(data, null, 2)}`;
        console.log(msg);
        return msg;
      }
    });
  });

  return function deleteEntity(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
})();

let updateEntity = (() => {
  var _ref6 = _asyncToGenerator(function* (tableName, entity, idName = 'id') {
    // set an id if not set
    if (!entity[idName]) throw new Error('Id was null when trying to update an entity');
    console.log('--- update entity', JSON.stringify(entity));
    const params = {
      TableName: tableName,
      Item: entity
    };
    return docClient.put(params).promise().then(function () {
      return entity;
    });
  });

  return function updateEntity(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
})();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk/clients/dynamoDB");

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export wrapCallback */
/* unused harmony export invokeLambda */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aws_sdk__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



let wrapCallback = (() => {
  var _ref = _asyncToGenerator(function* (event, callback, fn) {
    try {
      const result = yield fn(event);
      callback(null, result);
    } catch (e) {
      callback(e, null);
    }
  });

  return function wrapCallback(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

const baseLambda = service => (() => {
  var _ref2 = _asyncToGenerator(function* (event, context, callback) {
    console.log('--- message event', JSON.stringify(event, null, 2));
    // pass the event through the reducer
    wrapCallback(event, callback, reduce);
  });

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
})();
/* harmony export (immutable) */ __webpack_exports__["a"] = baseLambda;


const promiseCb = (resolve, reject) => (err, data) => {
  if (err) reject(err); // console.log(err, err.stack); // an error occurred
  else resolve(data);
};

let invokeLambda = (() => {
  var _ref3 = _asyncToGenerator(function* (FunctionName, event) {
    const lambda = new __WEBPACK_IMPORTED_MODULE_0_aws_sdk___default.a.Lambda();
    const params = {
      FunctionName,
      Payload: JSON.stringify(event)
    };
    console.log('--- invoke lambda', params);
    return new Promise(function (resolve, reject) {
      return lambda.invoke(params, promiseCb(resolve, reject));
    });
  });

  return function invokeLambda(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
})();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ })
/******/ ])));