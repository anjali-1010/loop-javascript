let n=require("readline-sync");
let choose_ascii=n.questionInt("enter number: ");
var ascii_char=97+choose_ascii
var st=""
for (var i=97;i<ascii_char;i++) {
       st+=String.fromCharCode(i)
}
console.log(st)

