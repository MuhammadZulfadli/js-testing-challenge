 function repeatLetter(string){
      var string = Array.prototype.map.call(string, function(char) {
        var balikkata = '';
        while (balikkata.length < 2){
          balikkata += char;
        }
        return balikkata;
      }).join('');
   return string; 
  }
  module.exports = repeatLetter;


// function repeatLetter(string, times=1) {
//   let str = '';
//   for (let i=0;i<string.length;i++){

//       let sub = string.substring(i, i+1);
//       str += (sub.trim()=='') ? sub : sub.repeat(times);
//   }
//   //console.log(str)
//   return times > 0 ? str : ""

// }
// //repeatLetter('Hello World', 2)
// module.exports = repeatLetter