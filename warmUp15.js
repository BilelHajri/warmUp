// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr(str){
	var result = []
	var ch = ""
	var newString =""
	for(var i = 0 ; i < str.length ; i++){
		if(str[i] !== " "){
			ch += str[i]
		}
		if(str[i] === " " || str[i+1] === str[str.length] ){
			result.push(ch)
			ch = ""
		}

	}
	for(var j = result.length-1 ; j >= 0; j--){
		if(j !== 0){
			newString += result[j] +" "
		}else{
			newString += result[j] 
		}
		
	}
	//console.log(result)
	return newString
}