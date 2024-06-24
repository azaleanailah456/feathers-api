const { authenticate } = require('@feathersjs/authentication').hooks;
const includeAddress = require("../../hooks/include/address");

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [ includeAddress() ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
