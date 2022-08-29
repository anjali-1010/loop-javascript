// console.log("gassing game")
// const a =require("readline-sync")
// let user_name= a.question("enter a name : ")
// console.log("welcome",user_name)
// var secret_number=8
// var gassing_number=parseInt( a.question("enter a gassing_number  : "))
// if ( gassing_number==secr12et_number){
//     console.log("you win")
// }
// else if (gassing_number<secret_number){
//     console.log("secret_number is greater then gassing_number")

// }
// else if(gassing_number>secret_number)[
//     console.log("secret_number is small then gassing_number")

// ]

console.log("Guessing Game");
var  input=require("readline-sync")
const username=input.question("enter your name-->>");
console.log("Welcome",username);
let secret_number=Math.floor(Math.random() * 10) + 1;
// console.log(secret_number)
let chance=input.question("how many chance you want-->>");
var i=1;
while (i<=chance){
    let user=input.questionInt("Guess a 1 to 10 number-->>");
    if (i==chance){
        console.log("Game over")
    }
    else if (user==secret_number){
        console.log("correct");
        console.log("Congrats!! 🥳 Your Guess is correct.. You won 🥳!!");
        break;
    }
    else if (user>secret_number){
        console.log("Guess Above 10! try again")
    }
    else if (user<secret_number){
        console.log("Guess Below 10! try again")
    }
    i++
}