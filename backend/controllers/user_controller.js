const User = require('../models/user_model');
const jwt = require('jsonwebtoken');

const configs = require('../configs/config')

exports.register = async(req, res, next) => {


    try {
        const { fname, lname, email, password } = req.body;


        const user = await User.findOne({ email: email });
        if (user) {
            const error = new Error('อีเมล์นี้มีผู้ใช้งานแล้ว');
            error.statusCode = 400;
            throw error;
        } else {
            let newuser = new User();
            newuser.fname = fname;
            newuser.lname = lname
            newuser.email = email;
            newuser.password = await newuser.encryptPassword(password);

            await newuser.save();
            res.json({ message: 'ลงทะเบียนเรียบร้อย' })
        }
    } catch (error) {
        next(error)
    }

};

exports.Login = async(req, res, next) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        if (!user) {
            const error = new Error('ไม่พบผู้ใช้งานนี้ในระบบ');
            error.statusCode = 422;
            throw error;
        }

        const checkPassword = await user.comparePassword(password);
        if (!checkPassword) {
            const error = new Error('รหัสผ่านไม่ถูกต้อง');
            error.statusCode = 422;
            throw error;
        }

        const token = await jwt.sign({
            id: user._id,
            role: user.role,

        }, configs.SECRET_KEY, { expiresIn: '1 day' });

        const expiresIn = jwt.decode(token)

        res.json({
            access_token: token,
            exp: expiresIn.exp,
            message: 'เข้าสู่ระบบสำเร็จ'
        })

    } catch (error) {
        next(error)
    }
}

exports.getProfile = async(req, res, next) => {
    const { role, fname, lname, email } = req.user;
    res.json({
        fname: fname,
        lname: lname,
        email: email,
        role: role
    })
}