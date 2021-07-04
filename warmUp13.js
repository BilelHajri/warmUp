/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 
You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
        starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC)
         and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 
    
    2. Complete the method/function so that it converts dash/underscore delimited words into camel casing.
     The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, 
        also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
    
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

// Refactoreted function 
function romain(str){
    var result = 0
    var arr1 = str.split('')
    var objRomKey = { 
      I : 1,
      V : 5,
      X : 10,
      L : 50,
      C : 100,
      D : 500,
      M : 1000 }
    
    var exception=["IV","IX","XL","XC","CD","CM"]
    var exceptionObj = {
      IV : 4,
      IX : 9,
      XL : 40,
      XC : 90,
      CD : 400,
      CM : 900
    }
    for( var i=0 ; i < arr1.length ; i++ ){
        var ch = arr1[i]+arr1[i+1]
        console.log(ch)
      if( exception.indexOf(ch) === -1){
        console.log("not exisit in exception  ++ ", objRomKey[arr1[i]] )
        result += objRomKey[arr1[i]] 
    
      }else{
          console.log("else  ++ " + exceptionObj[ch])
          result += exceptionObj[ch]
         i++
        }
        
    }
  
    return result
}

function camelCase(input){
    var result = ""
    for (var i=0 ; i < input.length ; i++ ){
        if(input[i] === "-" || input[i] === "-"){
            result += input[i+1].toUpperCase()
            i++
        }else {
            result += input[i]
        }
    }
return result
        
}

function filter_list(tab){
    var result = []
    for (var i = 0 ; i< tab.length ; i++ ){
        if (Number.isInteger(tab[i]) && result.indexOf(tab[i])=== -1){
            result.push(tab[i])
        }
    }
    return result 
}
