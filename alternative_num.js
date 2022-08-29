const a=require("readline-sync");
let b=a.question("enter a number");
for (i=1;i<b;i++){
    if (i%2!=0){
        console.log(i)
    }
    else {
        console.log(-i)
    }

}