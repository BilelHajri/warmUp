// Using jQuery, create a function, that takes the input from the text field, 
//creates a list item and add it to the unordered list, then add a class to the added item alternatively
 //(So first time Class1 then next time Class2 then Class1 and repeat)

console.log("hello")

$('#btn').click(function(){
	$('ul').append('<li> ' + $('input').val() + '</li>');
	$('li:even').addClass('firstColor')
	$('li:odd').addClass('secondColor')
	console.log($('li'))
})
