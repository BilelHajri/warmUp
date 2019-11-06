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
	var nb = 0
	//var ch = ""
	
	for (var i= 0; i < str.length; i++){
		for(key in obj){
			//console.log(obj[key])
			if(str[i] === key){
				obj[key] +=1
				nb +=1
			}
		}
	}
	// console.log(nb/7)
	//7 is the total number of str
	return nb/7
}