/* var i = 0
$('#left').on('click',function(){
    i+=1
    $('ul#left').append('<li>'+i+'</li>')
})
var j = 0;
$('#right').on('click',function(){
    j+=1
    $('ul#right').append('<li>'+j+'</li>')
})

$('#create').on('click',function(){
    var ulDiv = $('.ulDIv')
    var $ulRight = $('ul#rightUl')
    var $ulLeft = $('ul#leftUl')

    //$(ulDiv).append($ulRight)
    //$(ulDiv).append($ulLeft)
}) */
console.log("hello")
var i = 0
var j = 0
var clicked = "";
var leftClicked = $('#left').click(function(e,i){
    return clicked = "left"
})
var rightClicked = $('#right').click(function(e){
    return clicked = "right"
})
$('#btn-create').click(function(){
    if (clicked === "left"){
         i+=1
         $('#ul-left').append('<li> element '+ i +' added </li>')
         clicked = ""
    }else if (clicked === "right"){
        j+=1;
        $('#ul-right').append('<li> element '+ j +' added </li>')
        clicked = ""
    }else{
        alert("click on left or right ")
    }
})