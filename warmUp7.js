// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
var firstName="maher"
var lastName = "bouzid"
var fullName = firstName + " " + lastName 

function number(nb){
    return nb % 3 === 0
}

var tab = [13,14,13,15,16,17,19,13,16,15]
function avgAge(array){
    var sum = 0
    for (var i = 0 ; i < tab.length ; i++){
        sum += tab[i]
    }
    return (sum / tab.length)
}

function ageSecond(age){
    return "your age is :" + age*356*24*60*60 + " second "
}