// const user = require('./models/users')
// const bcrypt = require('bcrypt');
// async function createAdmin() {
//     try{
//         //let email=req.body.email;
//         let user = await user.findOne({
//             email: 'admin@example.com'
//         });
//         if(user) {
//             console.log('Admin user already exists')
//         }else{
//             user = new user();
//             user.firstName = 'ADITYA';
//             user.lastName = 'NARAYAN';
//             user.mobileNo = '9998887770'
//             user.email = 'aditya18.pr@gmail.com';
//             let password = bcrypt.hashSync('aditya@123', 10);
//             user.password = password;
//             user.userType = 'admin';
//             await user.save();
//             console.log("user created successfully...");
//             }
//             return newUser.save();
//         }catch(err){
//         console.error('Error creating admin:', err);
// }
// }
// module.exports=createAdmin

const User = require('./models/users');
const bcrypt = require('bcrypt');

async function createAdmin() {
    try {

        const existingUser = await User.findOne({
            email: 'aditya18.pr@gmail.com'
        });

        if (existingUser) {
            console.log('Admin user already exists');
            return;
        }

        const password = bcrypt.hashSync('aditya@123', 10);

        const newUser = new User({
            FirstName: 'ADITYA',
            LastName: 'NARAYAN',
            MobileNo: 9998887770,
            email: 'aditya18.pr@gmail.com',
            password: password,
            profileImage: 'default.jpg',
            userType: 'admin',
            status: 'active'
        });

        await newUser.save();

        console.log('Admin user created successfully');

    } catch (err) {
        console.error('Error creating admin:', err);
    }
}

module.exports = createAdmin;