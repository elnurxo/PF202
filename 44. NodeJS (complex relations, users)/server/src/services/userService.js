const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const getAllClient = async () =>
  await UserModel.find({ role: "client" }).select("-password");

const getAllAdmin = async () =>
  await UserModel.find({ role: "admin" }).select("-password");

const getClientById = async (id) =>
  await UserModel.findById(id, { role: "client" }).select("-password");

const getAdminById = async (id) =>
  await UserModel.findById(id, { role: "admin" }).select("-password");

const verifyEmail = async (userId) => {
  return UserModel.findByIdAndUpdate(
    userId,
    { emailVerified: true },
    { new: true }
  );
};

const getUserOrders = async (userId) => {
  return UserModel.findById(userId).populate("orders");
};

const addToWishlist = async (userId, productId) => {
  return UserModel.findByIdAndUpdate(
    userId,
    { $addToSet: { wishlist: productId } },
    { new: true }
  );
};

const removeFromWishlist = async (userId, productId) => {
  return UserModel.findByIdAndUpdate(
    userId,
    { $pull: { wishlist: productId } },
    { new: true }
  );
};

const banUser = async (userId, banUntilDate) => {
  return UserModel.findByIdAndUpdate(
    userId,
    { isBanned: true, banUntil: banUntilDate },
    { new: true }
  );
};

const unbanUser = async (userId) => {
  return UserModel.findByIdAndUpdate(
    userId,
    { isBanned: false, banUntil: null },
    { new: true }
  );
};

const updateUserById = async (id, updateData) => {
  return UserModel.findByIdAndUpdate(id, updateData, { new: true }).select(
    "-password"
  );
};

const register = async (userData) => {
  const duplicateUser = await UserModel.findOne({
    $or: [
      { email: userData.email.toLowerCase() },
      { username: userData.username.toLowerCase() },
    ],
  });

  if (duplicateUser) {
    throw new Error("username or email already taken!");
  } else {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    const user = new UserModel({
      ...userData,
      password: hashedPassword,
    });
    return user.save();
  }
};

const loginUser = async ({ identifier, password }) => {
  const user = await UserModel.findOne({
    $or: [
      { email: identifier.toLowerCase() },
      { username: identifier.toLowerCase() },
    ],
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Check if user is banned and if ban is still active
  if (user.isBanned) {
    if (user.banUntil && new Date() < new Date(user.banUntil)) {
      throw new Error(`User is banned until ${user.banUntil.toISOString()}`);
    } else {
      user.isBanned = false;
      user.banUntil = null;
      await user.save();
    }
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  // Return user data without password
  const userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

module.exports = {
  getAllClient,
  getAllAdmin,
  getAdminById,
  getClientById,
  verifyEmail,
  getUserOrders,
  addToWishlist,
  removeFromWishlist,
  banUser,
  unbanUser,
  updateUserById,
  register,
  loginUser,
};
