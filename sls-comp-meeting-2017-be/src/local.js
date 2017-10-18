import Messages_Lambda from "./messages/handler";
import Users_Lambda from "./users/handler";

const lambdas = { Messages_Lambda, Users_Lambda };

export const getLambda = functionName =>
  process.env.IS_OFFLINE ? lambdas[functionName] : process.env[functionName];
