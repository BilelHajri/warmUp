// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

var females = ["fatima","ruba","insaf","ons"]
var males = ["maher","farouk","saif","dhia","hani"]
var instructors = ["matt", "saif", "youssef"]

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

<<<<<<< HEAD
function middle(array){
    if ((array.length) % 2 === 1){
        return array[ ((array.length +1) /2) -1 ]
    }
    return array[(array.length/2)-1]
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function changeArray(array){
   
    for (var i = 0 ; i < array.length ; i++){
        if (i % 2 === 0 && typeof(array[i]=== "number ")){ array[i] *= 2 }
        
    }
    return array;
}
=======
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
