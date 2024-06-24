const { authenticate } = require("@feathersjs/authentication").hooks;
const includeUser = require("../../hooks/include/user");
const includeProduct = require("../../hooks/include/product");

const handleCreatedBy = () => {
  return async (context) => {
    const { params, data } = context;
    data.user_id = params.user.id;
    return context;
  };
};

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [includeProduct(), includeUser({ attributes: ["fullname", "email"] })],
    get: [],
    create: [handleCreatedBy()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
