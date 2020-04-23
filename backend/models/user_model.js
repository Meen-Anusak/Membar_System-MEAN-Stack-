 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;


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
         maxlength: 20,
     },
     role: {
         type: String,
         default: 'member',

     }

 })

 var User = mongoose.model('users', UserSchema);