function whisper(String) {
  return String.toLowerCase()
}
function shout(string) {
  return string.toUpperCase()
}
function logShout(string) {
console.log(string.toUpperCase())
}
function logWhisper(String) {
  console.log(String.toLowerCase())
}

var uppercase = "YES INDEED!"
uppercase.toUpperCase('yes indeed') === uppercase

var lowercase = "I can't hear you!"
lowercase.toLowerCase(" I can't hear you!")

var mixedCase = 'I love you,Grandma!'
 
mixedCase.toLowerCase('I love you Grandma') === mixedCase 
 
mixedCase.toUpperCase() === mixedCase 

if(function sayHiToGrandma(String){
return String.toLowerCase("I can't hear you!")
} else if { (function sayHiToGrandma(string) {
  return string.toUpperCase('yes indeed!')
} else { (function sayHiToGrandma(string ==='I love you,Grandma') {
  return string('I love too')
}
