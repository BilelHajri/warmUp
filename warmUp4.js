// 1-Write a function that takes a string as an input and returns the reverse of each letter 


//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseString(str){
    var result = "" ;
    var arr = str.split('')
    var counter = 0 
    var  i = arr.length -  1
    while(i>=0){
        result += arr[i] + counter 
        counter ++
		i--
    }
    return result 
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLength(array){

    var obj = {}
    obj[array[0].length] = [array[0]]
    // to convert the array to an object with keys are the lengths and values are  word with relative length key
    for (var i = 1; i < array.length ; i++){

        if (obj[array[i].length] === undefined){
            obj[array[i].length] =  [array[i]]
            console.log(obj[array[i].length] )
        }else {
            obj[array[i].length].push(array[i])
        }
    }
    //to get the most repeated word with the same length 
    var arrayResult = Object.values(obj)
    var result= arrayResult[0]
    for(var i = 1; i < arrayResult.length; i++ ){
        if (arrayResult[i].length > result.length){
            result = arrayResult[i]
        }
    }

    return result;
}