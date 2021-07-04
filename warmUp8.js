//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], [ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], [ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ], [ 3, 3, 3, "a" ] => false

function isSubset(arr1,arr2){

    for (var i = 0; i <= arr1.length ; i++){
        var check = arr1.indexOf(arr2[0])
        //console.log(check)
        arr1.splice(check,1)
        //console.log(arr1)
        arr2.splice(0,1)
        //console.log(arr2)
       
    }
   return ( arr2.length === 0)

}