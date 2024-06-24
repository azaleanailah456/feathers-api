const { mergeWithKey, concat } = require("ramda");

const concatValue = (k, l, r) => (k === "include" ? concat(l, r) : r);

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async (context) => {
    const sequelize = context.app.get("sequelizeClient");
    const { product } = sequelize.models;
    const include = [
      {
        model: product,
        as: "product",
      },
    ];

    const sequelizeOptions = mergeWithKey(
      concatValue,
      context.params.sequelize,
      { include, raw: false }
    );

    context.params.sequelize = sequelizeOptions;

    return context;
  };
};
