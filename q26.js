for (let i=1;i<=20;i++){
    if (i%3==0){
        console.log("nav");
    }
    else if (i%7==0){
        console.log("gurukl")
    }
    else if (i%3==0 && i%7==0){
        console.log("navgurukul")
    }
    else{
        console.log(i)
    }
}