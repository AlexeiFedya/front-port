const {Router} = require('express')
const User = require('../models/User')
const {check, validationResult} = require('express-validator')
const router = Router()
// /api/mess/send


router.post(
    '/send', 
    [
        check('email', 'The format of the e-mail address is incorrect').normalizeEmail().isEmail(),
        check('name', 'The format of the name is incorrect').isLength({min: 3}),
        check('mess', 'The format of the name is incorrect').isLength({min: 10})
    ],
    async(req, res)=> {
    try{

        // console.log("Bodyyy", req.body)

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'The format of the data is incorrect'
            })
        }

        const {email, name, mess} = req.body

        const user = new User ({ email, name, mess })

        await user.save()

        res.status(201).json({ message: 'I am grateful for message. I`ll be in touch soon '})

    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, try again'})
    }
})


module.exports = router