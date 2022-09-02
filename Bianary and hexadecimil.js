let number = Number(prompt("What is the decimal form?"))
let result = number.toString(2)
result = String(result)
function convert(numb){
 let num = numb
 while(num.length < 9){
  num = '0' + num
  if(num.length == 8){
   return num
  }
 }


}
alert(convert(result))