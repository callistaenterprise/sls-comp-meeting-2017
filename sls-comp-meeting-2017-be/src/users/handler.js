import "babel-polyfill";
import usersReducer from "./users_reducer";
import { invokeLambda, baseLambda, wrapReducerCallback } from "../utils/lambda_utils";
import { getLambda } from "../local";
/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */

export const reducer = async (event, context, callback) => {
  wrapReducerCallback(event, callback, usersReducer);
  console.log("--- invoking lambda", "Messages_Lambda");

  invokeLambda(getLambda("Messages_Lambda"), event, context);
}

export default reducer;
