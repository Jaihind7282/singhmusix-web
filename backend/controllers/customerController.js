const Customer = require("../models/customer");

exports.registerCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json({ message: "Thank you for registration!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving data" });
  }
};
