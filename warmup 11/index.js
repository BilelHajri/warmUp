var i = 0
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
})

