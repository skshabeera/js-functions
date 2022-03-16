function multiplesOfNumbers(limit){
var sum=0
for (var i=0;i<=limit;i++){
if (i%3===0){
sum+=i
}
else if(i%5===0){
sum+=i
}
}
console.log(sum)
}
// console.log(sum)
multiplesOfNumbers(10)