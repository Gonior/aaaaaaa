const mongoose = require('mongoose')

const CouponSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    amount : {
        type : Number,
        require : true
    },
    couponType: {
        type : String,
        require : true
    },
    createON : {
        type : Date,
        default : Date.now()
    },
    updatedON : {
        type : Date,
        default : Date.now(),
        require : true
    },
    expiredON : {
        type : Date,
        require : true
    },


})

module.exports = mongoose.model('Coupon', CouponSchema)