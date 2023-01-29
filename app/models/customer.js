module.exports = (mongoose) => {
  const Customer = mongoose.model(
    "Customer",
    mongoose.Schema(
      {
        name: String,
        contact: Number,
        email: String,
        customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customer" },
      },
      { timestamps: true }
    )
  );
  return Customer;
};
