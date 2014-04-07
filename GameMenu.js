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

var menu = document.getElementById('menu');
var menuCtx = menu.getContext('2d');

function menuButton(width, height, xC, yC, text, ref) {
    this.width = width;
    this.height = height;
    this.x = xC;
    this.y = yC;
    this.text = text;
    this.ref = href;

    this.linkUp = function() {
        
    }
}