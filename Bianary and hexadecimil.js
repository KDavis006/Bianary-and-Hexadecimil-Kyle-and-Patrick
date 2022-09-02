// This first let statement is asking what the input you want to insert
let number = Number(prompt("What is the decimal form?"))
// This let statement converts the number into bianary
let result = number.toString(2)
// This sets it to a string
result = String(result)
// This makes it so where the bianary is 8 digits
function convert(numb){
 let num = numb
 // Puts it in a while loop until it has 8 digits
 while(num.length < 9){
  num = '0' + num
  if(num.length == 8){
   return num
  }
 }
}
// This outputs your answer for the bianary
alert("The Bianary of " + number + " is " + convert(result))


// This converts your input to hexadecimal
let result2 = number.toString(16)
// This is the output for the hexadecimal
alert("The Hexadecimal of " + number + " is " + result2)