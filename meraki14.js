function check(num1,num2){
if (num1%2===0 && num2%2===0){
console.log("both are even")
}
else{
console.log("not even")
}
}
function add_list(list1,list2){
for (var i=0;i<6;i++){
check(list1[i],list2[i])
}
}
add_list([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])