// Return the number (count) of vowels in the given string. stard 
// const vowels = ["a", "e", "i", "o", "u"]

// function countVowel(str) {

//   let count = 0;

//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }
//   return count
// }


// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(result);

// Return the number (count) of vowels in the given string. end


 // String cleaning stard

// let pattern = /[+*\n]|^\d+/g;
// let string = "123456789.+\n";
// string = string
//   .replace(pattern, " ")
//   .replace(/[ ]{2,}/g, " ")
//   .trim();

// console.log(string);

 // String cleaning end

// JavaScript Program to illustrate split() function 

 // Split Strings start
      
    // function func() { 
    //     //Original string 
    //     var str = 'Geeks for Geeks for mohibur'
    //     var array = str.split("for"); 
    //    console.log(array); 
    // } 
    // func();

 // Split Strings end


// The Hashtag Generator start

// function makeHashtag (str) {
//   let wordArray = str.split(' ').filter(char => char !== "");
//   let result = "#";
  
//   if (wordArray.length === 0) {
//     return false;
//   };
  
//   result = result + wordArray.map(word => {
//     let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//     return capitalizedWord;
//   }).join('');
  
//   if(result.length > 140) {
//     return false;
//   } else{
//     console.log(output);
//     return result;
//   };
// };
// The Hashtag Generator end


 // Counting Duplicates stard 

// const counts = {};
// const sampleArray = ['a', 'a', 'b', 'c'];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts)

 // Counting Duplicates end 


 // Credit Card Mask


// var cardNumbers = [
//   "1234567898765432",
//   "1234-5678-9876-5432",
//   "1234 5678 9876 5432"
// ];

// console.log(cardNumbers.map(maskCardNumber));
// //> ["************5432", "************5432", "************5432"]

// function maskCardNumber(cardNumber) {
//   return cardNumber.replace(/^[\d-\s]+(?=\d{4})/, "************");
// };
 // Credit Card Mask end

// Valid Parentheses stard

// const str = "()[]{}";
// const isValid = (str = '') => {
//    const map=new Map();
//    map.set('{','}');
//    map.set('(',')');
//    map.set('[',']');
//    const b=[];
//    for(let i=0;i<str.length;i++){
//       if(map.has(str.charAt(i))){
//          b.push(str.charAt(i));
//       } else{
//          let pop=b.pop();
//          if(map.get(pop)!==str.charAt(i)){
//             return false;
//          }
//       };
//    };
//    return b.length===0;
// };
// console.log(isValid(str));

// Valid Parentheses end