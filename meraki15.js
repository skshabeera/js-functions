function eligible_for_vote(age){
    if (age>18){
        console.log("your eligible")
    }
    else{
        console.log("your not eligible")
}
} 
n=require("readline-sync")
age=n.question("enter the age")
eligible_for_vote(age)