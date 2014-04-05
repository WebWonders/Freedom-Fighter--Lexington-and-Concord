var introScene = document.getElementById('intoScene');
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

