
const express = require('express')
const mongoose = require('mongoose')
const Coupon = require('../models/coupon.models')
const {validCoupon, setExpired} = require('../controller/myController')
const route = express.Router()

route.get('/',async (req, res) => {
    let coupon = await Coupon.find()
    res.status(200).json({coupon})
})

route.post('/add', async (req, res) => {
    let {name, amount, couponType, expiredON} = req.body
    
    try {
        let newCoupon = new Coupon({
            name, amount, couponType, expiredON : setExpired(expiredON)
        })
        let couponSave = await newCoupon.save()
        if (couponSave) return res.status(200).json({coupon : couponSave})
        else return res.status(400).json({message : "coupon is not created"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({message : "Something went wrong", error})
    }
})
route.post('/check-coupon', async (req, res) => {
    //check 
    let {id} = req.body

    if (mongoose.isValidObjectId(id)) {
        let coupon = await Coupon.findById(id)
        if (!coupon) return res.status(404).json({valid : false, message : "Coupon not Found"})
        else {
            if (!validCoupon(coupon.expiredON)) return res.status(400).json({valid : false, message : "Your coupon has been expired"})
            else {
                let result;
                if (coupon.couponType.toUpperCase() === "FIX") result = `$${coupon.amount}`
                else if (coupon.couponType.toUpperCase() === "PERCENTAGE") result = `${coupon.amount}%`

                return res.status(200).json({valid : true, message : "Congratulations!!, Your Coupon is valid" , value : result})
            }
        }
    } else return res.status(404).json({valid : false, message : "Coupon id is not valid"})

})

module.exports = route
