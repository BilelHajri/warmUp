// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//    ok -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     ok -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

/*classmate attribute: 
    name: string
    surName: string,
    gender : string
    age: number
    country : string
    phone: string
*/

function classmates(name,surName,gender,age,country,phone){
    return {
        name: name,
        surName: surName,
        gender: gender,
        age: age,
        country: country,
        phone: phone
    }
}


var classmate1 = classmates("maher","surname","male",28,452255)
var classmate2 = classmates("fatouk","surname","male",30,110255)
var classmate3 = classmates("dhia","surname","Female",69,988255)
var classmate4 = classmates("hani","surname","Male",12,68555)

var allClassMate = [classmate1,classmate2,classmate3]

function addFriend(mate){
    allClassMate.push(mate)
    return allClassMate;
}
function displayClassmates(mate){
    return mate.name + " " + mate.surName + " from " + mate.country;
}

function nbOfMale(allClassMate){
    var result = 0
    for (var i = 0 ; i < allClassMate.length ; i++ ){
        if (allClassMate[i]["gender"] = "m".toLocaleUpperCase()){
            result += 1
        }
    }
    return "number of Male in the class is  : " + result
}

function searchMates(query,allClassMate){

        for (var i = 0 ; i < allClassMate.length ; i++){
            if( (query === allClassMate[i]["name"] ) || ( query === allClassMate[i]["surName"] )
            ||( query === allClassMate[i]["age"]) ||
            ( query === allClassMate[i]["phone"]) ){
                return allClassMate[i]
            }
        }
        return "not found !!"
}
