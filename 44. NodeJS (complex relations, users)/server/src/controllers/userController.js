const {
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
} = require("../services/userService");
const formatMongoData = require("../utils/formatMongoData");
const { sendVerifyEmail } = require("../utils/sendMailService");

//getAll clients
const getAllClients = async (_, res, next) => {
  try {
    const clients = await getAllClient();
    if (!clients) throw new Error("clients not found!");
    res.status(200).json({
      message: "clients retrieved successfully!",
      data: formatMongoData(clients),
    });
  } catch (error) {
    next(error);
  }
};

//get all admins
const getAllAdmins = async (_, res, next) => {
  try {
    const admins = await getAllAdmin();
    if (!admins) throw new Error("admins not found!");
    res.status(200).json({
      message: "admins retrieved successfully!",
      data: formatMongoData(admins),
    });
  } catch (error) {
    next(error);
  }
};

//register (update verify LINK)
const registerClient = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.public_id = req.file.filename;
      req.body.profileImage = req.file.path;
    }
    const registeredUser = await register(req.body);

    //send verify email
    sendVerifyEmail({
      fullName: req.body.fullName,
      email: req.body.email,
      verifyLink: "https://google.com",
    });

    res.status(201).json({
      message: "user registered successfully, verify your email!",
      data: formatMongoData(registeredUser),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllClients,
  getAllAdmins,
  registerClient,
};
