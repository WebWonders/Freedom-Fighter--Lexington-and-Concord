//game menu code

//introScene code (animated logo)
//var introScene = document.getElementById('introScene');
$(document).ready(function() {
    //hide all objects except the intro video
    $('#menu').hide();
    $('#game').hide();
    $('#about').hide();
    $('#how2play').hide();
    
    //when the user clicks the video, it will stop and the menu will show
    $('#introScene').onClick(function() {
        $(this).hide();
        $('#menu').show();
        //introScene.pause();
    });
});

//menu code
//var menu = document.getElementById('menu');
$(document).ready(function() {
    $('#playButton').onClick(function() {
        //play game
    });
    $('#aboutButton').onClick(function() {
        $('#menu').hide();
        $('#about').show();
    });
    $('#how2playButton').onClick(function() {
        $('#menu').hide();
        $('#how2play').show();
    });
});