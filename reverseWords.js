/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
  let index = 0;
  let tempStr = "";
  let reverseStr = "";
  
  while(index < str.length) {
    while((str[index] != ' ') && (index < str.length)) {
      tempStr += str[index];
      index++;
    }
    for(let i = (tempStr.length - 1); i >= 0; i--) {
      reverseStr += tempStr[i];
    }
    while(str[index] == ' ') {
      reverseStr += " ";
      index++;
    }
    tempStr = "";
  }
  return reverseStr;
}