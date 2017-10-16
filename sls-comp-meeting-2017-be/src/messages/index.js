import messages_reducer from "./messages_reducer";
import {baseLambda} from "../utils/lambda_utils";
/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */
export default baseLambda(messages_reducer);
