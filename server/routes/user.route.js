const { addUser, getUser } = require("../controller/user.ctrl");

module.exports = (router) => {
  router.route("/add").post(addUser);
  router.route("/get").get(getUser);
};
