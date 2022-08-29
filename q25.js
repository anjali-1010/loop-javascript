const a=require("readline-sync");
var b=a.question("how many time want input")
s=0
for (i=0;i<b;i++){
    var c=parseInt(a.question("enter a number"));
    s=s+c
}
console.log(s)


