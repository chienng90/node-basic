import User from "../models/UserModel.js";

const getUsers = async (req, res, next) => {
  const result = await User.findAll();

  res.send(result);
};

const getUser = async (req, res, next) => {
  const userId = req.params.id;
  const result = await User.findOne({ where: { id: userId } });

  res.send(result);
};

export { getUsers, getUser };
