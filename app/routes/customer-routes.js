module.exports = app => {
    const customer = require("../controller/customer-controller")
    var router = require("express").Router()
    router.get("/" , customer.allCustomer)
    app.use("api/customer" ,router)
}