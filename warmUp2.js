// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(nb1, nb2){
    if(nb1 <0 || nb2 < 0 ){
        return " the two number shoud be postive "
    }
   // console.log(nb1)
    // console.log(nb2)
    if (nb2 === 0 ){
        return nb1
    }

    return  gcd(nb2, nb1 % nb2 )
}

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
<<<<<<< HEAD
//you can only add one at each summetion, you'll need to use recursion in this.


function sum (nb1, nb2){
    if ( nb2 === 0 ){
        return nb1
    }
    return sum (nb1+1 , nb2-1)
}
=======
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
