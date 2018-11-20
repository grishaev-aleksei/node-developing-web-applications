const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const passwordValidator = require('password-validator');
const secPass = new passwordValidator();
secPass
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().not().spaces();

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        minlength: 5,
        // unique: true,
        validate: {
            validator: function (value) {
                validator.isEmail(value)
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        require: true,
        validate: {
            validator: function (value) {
                secPass.validate(value)
            },
            message: props => `${props.value} is not secure!`
        }
    }
});

userSchema.pre('save', function (next) {
    const user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt((err, salt) => {
            bcrypt.hash(user.password, salt, (err, hashPass) => {
                    user.password = hashPass;
                    next();
                }
            )
        });
    } else {
        next();
    }
});

//
const User = mongoose.model('User', userSchema);
// const newUser = new User({
//     email: 'so111me.mail@list.ru',
//     password: 'wanamana1'
// });
// newUser.save()
//     .then((newUser) => {
//         return newUser
//     })
//     .catch((err) => {
//         console.log(err)
//     });


module.exports = {User};