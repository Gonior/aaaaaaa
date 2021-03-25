module.exports = {
    setExpired : (days) => {
        return Date.now() + days * 60 * 60 * 24 * 1000
    },
    validCoupon : (ex) => {
        return Date.now() < ex.getTime()
    }
}