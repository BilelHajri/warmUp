// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1',
// else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

function check(str){
    var obj ={}
    var result = ""
    for(var i = 0 ; i < str.length ; i++){
      if(obj[str[i]] === undefined){
          obj[str[i]] = 1
      }else{
          obj[str[i]] += 1
      }
    }

    for(key in obj){
        n = obj[key]
        for(var j=1 ; j <= n ; j++){
            result += j 
        }
    }
    console.log(obj)
    return result
}