 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const bcrypt = require('bcryptjs');

 const UserSchema = Schema({
     name: {
         type: String,
         require: true,
         trim: true
     },
     email: {
         type: String,
         require: true,
         trim: true,
         unique: true,
         index: true
     },
     password: {
         type: String,
         require: true,
         trim: true,
         minlength: 6,
     },
     role: {
         type: String,
         default: 'member',

     }

 })

 UserSchema.methods.encryptPassword = async function(password) {
     const salt = await bcrypt.genSalt(10);
     const hashPassword = await bcrypt.hash(password, salt);
     return hashPassword;
 }
 UserSchema.methods.comparePassword = async function(password) {
     const isMatch = await bcrypt.compare(password, this.password);
     return isMatch;
 }

 var User = mongoose.model('users', UserSchema);

 module.exports = User;