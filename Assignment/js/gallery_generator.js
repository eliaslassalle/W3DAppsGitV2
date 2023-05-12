var xmlHttp = new XMLHttpRequest();

var htmlCode = "";

var temp = 1;

var response;

//Can

$(document).ready(function() {
    
    var send = "scripts/php/hook.php"

    xmlHttp.open("GET", send, true);

    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4)
        {
            alert(xmlHttp.responseText);
            response = xmlHttp.responseText.split("~");
            for (var i=0;i<response.length;i++) {
                temp ++;


                htmlCode += '<div class="col-sm-12">';
                htmlCode += '<a href="assets/images/gallery_images/can' + response[i] + '">';
                htmlCode += '<img class = "img-padding" src="assets/images/gallery_images/can'+response[i] + '"/>';
                htmlCode += '</a>';
                htmlCode += '</div>';

            }

            document.getElementById('gallery_can').innerHTML = htmlCode;
            //document.getElementById('gallery_sprite').innerHTML = htmlCode;
        }
    }
})

//Bottle

$(document).ready(function() {
    
    var send = "scripts/php/hook.php"

    xmlHttp.open("GET", send, true);

    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4)
        {
            //alert(xmlHttp.responseText);
            response = xmlHttp.responseText.split("~");
            for (var i=0;i<response.length;i++) {
                temp ++;
                

                htmlCode += '<div class="col-sm-12">';
                htmlCode += '<a href="assets/images/gallery_images/bottle' + response[i] + '">';
                htmlCode += '<img class = "img-padding" src="assets/images/gallery_images/bottle'+response[i] + '"/>';
                htmlCode += '</a>';
                htmlCode += '</div>';

            }

            document.getElementById('gallery_bottle').innerHTML = htmlCode;
            //document.getElementById('gallery_sprite').innerHTML = htmlCode;
        }
    }
})

//Cup

$(document).ready(function() {
    
    var send = "scripts/php/hook.php"

    xmlHttp.open("GET", send, true);

    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4)
        {
            //alert(xmlHttp.responseText);
            response = xmlHttp.responseText.split("~");
            for (var i=0;i<response.length;i++) {
                temp ++;
                

                htmlCode += '<div class="col-sm-12">';
                htmlCode += '<a href="assets/images/gallery_images/cup' + response[i] + '">';
                htmlCode += '<img class = "img-padding" src="assets/images/gallery_images/cup'+response[i] + '"/>';
                htmlCode += '</a>';
                htmlCode += '</div>';

            }

            document.getElementById('gallery_cup').innerHTML = htmlCode;
            document.getElementById('gallery_bottle').innerHTML = htmlCode;
            document.getElementById('gallery_can').innerHTML = htmlCode;
            //document.getElementById('gallery_sprite').innerHTML = htmlCode;
        }
    }
})


//Cup

$(document).ready(function() {
    
    var send = "scripts/php/hook.php"

    xmlHttp.open("GET", send, true);

    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4)
        {
            //alert(xmlHttp.responseText);
            response = xmlHttp.responseText.split("~");
            for (var i=0;i<response.length;i++) {
                temp ++;
                

                htmlCode += '<div class="col-sm-12">';
                htmlCode += '<a href="assets/images/gallery_images/cup' + response[i] + '">';
                htmlCode += '<img class = "img-padding" src="assets/images/gallery_images/cup'+response[i] + '"/>';
                htmlCode += '</a>';
                htmlCode += '</div>';

            }

            document.getElementById('gallery_cup').innerHTML = htmlCode;
            document.getElementById('gallery_bottle').innerHTML = htmlCode;
            document.getElementById('gallery_can').innerHTML = htmlCode;
            document.getElementById('gallery_glass').innerHTML = htmlCode;
            //document.getElementById('gallery_sprite').innerHTML = htmlCode;
        }
    }
})