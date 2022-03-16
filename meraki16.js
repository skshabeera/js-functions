function perfect(number){
var sum=0
for (var i=1;i<number;i++){
if (number%i==0){
sum+=i
}
}
if (sum==number){
    console.log("perfect number")

}
else{
    console.log("not perfect number")
}
} 
m=require("readline-sync")
number=m.question("enter the number")
perfect(number)