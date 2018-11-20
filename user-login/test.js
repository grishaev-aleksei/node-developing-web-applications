const bcrypt = require('bcrypt');

let user = {
    email: 'twan91@list.ru',
    password: 'pass123'
};
console.log(user);
bcrypt.genSalt((err, salt) => {
    console.log(salt);
    bcrypt.hash(user.password, salt, (err, hashPass) => {
            user.password = hashPass;
            console.log(user)
        }
    )
});