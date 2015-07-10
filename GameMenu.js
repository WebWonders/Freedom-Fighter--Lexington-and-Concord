//game menu code

//introScene code (animated logo)
//var introScene = document.getElementById('introScene');
$(document).ready(function() {
    //hide all objects except the intro video
    $('#menu').hide();
    $('#game').hide();
    $('#about').hide();
    $('#how2play').hide();
    $('#gameCanvas-level1').hide();
    $('#BGTrack').hide();
    $('#audioButton').hide();
    
    //when the user clicks the video, it will stop and the menu will show
    $('#introScene').click(function() {
        $(this).hide();
        $('#menu').show();
        $('#audioButton').show();
        //introScene.pause();
    });
});

//menu code
//var menu = document.getElementById('menu');
var audioOn = true;
$(document).ready(function() {
    $('#audioButton').click(function() {
        if (audioOn === true) {
            $('#track').pause();
            audioOn = false;
        }
        if (audioOn === false) {
            $('#track').play();
            audioOn = true;
        }
    });

    $('#playButton').click(function() {
        $('#menu').hide();
        $('#gameCanvas-level1').show();
        $('#game').show();
        init();
    });
    
    $('#aboutButton').click(function() {
        $('#menu').hide();
        $('#about').show();

        $('#about').click(function() {
            $('#about').hide();
            $('#menu').show();
        });
    });
    
    $('#how2playButton').click(function() {
        $('#menu').hide();
        $('#how2play').show();

        $('#how2play').click(function() {
            $('#how2play').hide();
            $('#menu').show();
        });
    });
});
