import "babel-polyfill";
import messages_reducer from "./messages_reducer";
import { baseLambda, wrapReducerCallback } from "../utils/lambda_utils";
/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */

const messagesReducer = async (event, context, callback) =>
  wrapReducerCallback(event, callback, messages_reducer);

export default messagesReducer;
