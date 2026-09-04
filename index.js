const mongoose = require('mongoose');

main()
.then(() =>{
    //console.log("connection successfully");
    console.log("connection successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User",userSchema);

User.deleteOne({name : "Anisha"}).then((res) =>{
  console.log(res);
});

/*User.updateOne({name: "Vedisha"},{age:20})
  .then((res) =>{
    console.log(res);
}).catch((err) =>{
  console.log(err);
}); */

/*User.findOne({age:{$gt:22} }).then((res) => {
  console.log(res);
}).catch(err => {
  console.log(err);
}); */

/*User.insertMany([
  {name :"Anisha" , email:"Anisha@yahoo.com" , age: 23},
  {name :"Yadnesh" , email:"Yadnesh@yahoo.com" , age: 25},
  {name :"Vedisha" , email:"Vedisha@yahoo.com" , age: 10},
]).then((res) =>{
  console.log(res);
});*/


 /*const user2 = new User({
   name: "Eve",
   email: "eve@yahoo.in",
   age: 48,
 });

 user2
   .save()
   .then((res) => {
     console.log(res);
   })
   .catch((err) => {
     console.log(err);
   });*/