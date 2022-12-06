

function translate (input){

let lowerCase = input.toLowerCase()

let vowels = lowerCase.search(/[aeiou]/)
switch(vowels){
    case 0: lowerCase = lowerCase + "way";
    break;
    case -1: lowerCase = lowerCase + "ay";
    break;
    default: lowerCase = lowerCase.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay")
    break;
}  
} 
// console.log(lowerCase)
// }
// translate("Apple")
// translate("else")
// translate("index")
// translate("giraffe")

module.exports = { translate }
