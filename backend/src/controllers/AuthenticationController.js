module.exports = {
    register (req, res) {
            res.send ({
                message: `Your username ${req.body.email} has been registered`
            })
        }
    }