const bcrypt = require('bcrypt');

let user = {
    email: 'twan91@list.ru',
    password: 'pass123'
};
// console.log(user);
bcrypt.genSalt((err, salt) => {
    // console.log(salt);
    bcrypt.hash(user.password, salt, (err, hashPass) => {
            user.password = hashPass;
            checkPass(user.password);
            console.log(user.password +' vs '+ ps)
        }
    )
});

const ps = 'pass123';


const checkPass = (password) => {
    bcrypt.compare(ps, password, (err, result) => {
        if (result) {
            console.log('similar passwords', result)
        } else {
            console.log('different passwords', result)
        }
    });
};
