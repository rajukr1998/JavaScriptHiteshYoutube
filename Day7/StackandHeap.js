// Stack, Heap Memory

// Stack (Primitive) Copy milta h
// Heap (Non-primitive) Reference milta 

let myYoutubename = "hiteshchaudhary"
let anothername = myYoutubename
anothername = "chaiorcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "hitest@google.com"
console.log(userOne.email);
console.log(userTwo.email);