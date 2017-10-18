import {
  getEntity,
  getEntities,
  getRelatedEntities,
  createEntity,
  updateEntity,
  deleteEntity
} from "../utils/dynamo_adapter";

const ServerlessHelpers = require("serverless-helpers-js").loadEnv();

const usersTable = process.env.Users_Table;
const messagesTable = process.env.Messages_Table;

const user = [
  "id",
  "username",
  "firstname",
  "lastname",
  "email",
  "createdAt",
  "userId"
];

const message = [
  'id',
  'message',
  'createdAt',
  'userId'
];

export async function createUser(user) {
  console.log("--- createUser",user, usersTable);
  return createEntity(usersTable, user);
}

export async function updateUser(user) {
  return updateEntity(usersTable, user);
}

export async function getUsers(args) {
  const { userId, attributesToGet = user, limit = 200 } = args ? args : {};
  console.log("--- getUsers", args, userId, limit);
  return userId
    ? getRelatedEntities("userId", [userId], messagesTable, message)
    : getEntities(usersTable, attributesToGet).then((res = []) =>
        res.sort((a, b) => b.createdAt - a.createdAt).splice(0, limit)
      );
}

export async function getUser({ id, attributesToGet = user }) {
  return getEntity(usersTable, id, attributesToGet);
}

export async function deleteUser({ id }) {
  return deleteEntity(usersTable, id);
}
