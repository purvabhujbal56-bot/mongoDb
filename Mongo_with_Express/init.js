const mongoose = require('mongoose');
const chat = require("./models/chat.js");

main()
    .then(() => {
    console.log("connection successfully ")
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
  {
    from: "Purva",
    to: "Yadnesh",
    msg: "Hello! How are you?",
    created_at: new Date(),
  },
  {
    from: "Anisha",
    to: "Purva",
    msg: "I am fine. What about you?",
    created_at: new Date(),
  },
  {
    from: "Rahul",
    to: "Priya",
    msg: "Can we meet tomorrow?",
    created_at: new Date(),
  },
  {
    from: "Priya",
    to: "Rahul",
    msg: "Yes, sure!",
    created_at: new Date(),
  },
  {
    from: "Tony",
    to: "Peter",
    msg: "I love you 3000",
    created_at: new Date(),
  },
];

chat.insertMany(allChats);