const User = require("../model/user.model");
const addUser = async (req, res) => {
  const user = new User({
    name: "Jon Doe",
    password: "jdpassword123",
  });
  await user.save();
  res.send(user);
};
const getUser = async (req, res) => {
  const user = await User.find({});
  res.send(user);
};

module.exports = {
  addUser,
  getUser,
};
