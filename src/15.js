function roman(str1) {
    if(str1 == null) return -1;
    let num = char_to_int(str1.charAt(0));
    let pre, curr;
    
    for(let i = 1; i < str1.length; i++){
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i-1));
    if(curr <= pre){
    num += curr;
    } else {
    num = num - pre*2 + curr;
    }
    }
    
    return num;
    }
    
    function char_to_int(c){
    switch (c){
    case 'I': return 1;
    case 'II': return 2;
    case 'III': return 3;
    case 'V': return 5;
    case 'VI': return 6;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    case 'MMXVIII': return 2018;
    default: return -1;
    }
    }
    
    module.exports = roman;