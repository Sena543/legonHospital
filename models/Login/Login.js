import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const loginSchema = new mongoose.Schema({
    staffID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

loginSchema.pre('save', function (next) {
    let staff = this
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err)
        bcrypt.hash(staff.password, salt, function (err, hash) {
            if (err) return next(err)
            staff.password = hash;
            next()
        });
    });
})

// loginSchema.method("validatePasswords", async function(){
//     return await bcrypt.compare(password, _login.password)
// })

export default mongoose.model('Login', loginSchema,)