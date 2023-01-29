const db= require("../models");
const Customer = db.customer


//Post Api for all customers 
exports.addCustomer

//Get  Api for all customers..
exports.allCustomer = (req,res) => {
    const customerId = req.query.customerId;
    Customer.find({})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:err.message || "Some error occurred while  retrieving customer with customerId"
        })
    })
}