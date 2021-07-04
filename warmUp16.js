// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon h"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function check(str){
	var obj = {
		b:0,
		a:0,
		l:0,
		l:0,
		o:0,
		o:0,
		n:0
	}
	// to check how manay charc in inside the input match with balloon
	for (var i= 0; i < str.length; i++){
		for(key in obj){

			if(str[i] === key){
				obj[key] +=1
				nb +=1
			}
		}
	}
	// to calc the output 
	// the output will be ch.length / 7 (number of charc inside "balloon")
	var ch =""
	for (key in obj){
		while(obj[key] !== 0){
			obj[key] -= 1
			ch += key
		}
	}
	if(ch.length % 7 === 0){ 
		return ch.length /7 
	}
	return 0
}