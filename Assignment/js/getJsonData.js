
// JavaScript Document
$(document).ready(function(){

    //AJAX service request to get the main text data from the json data store
    $.getJSON('./model/data.json', function(jsonObj) {
       console.log(jsonObj);
       //Get the home page main text data
       $('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '<h2>');
       $('#subTitle_home').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
       $('#description_home').html('<p>' + jsonObj.pageTextData[0].description + '</p>');


       //Get the home page boxes
       $('#title_1st').html('<h2>' + jsonObj.pageTextData[1].title + '<h2>');
       $('#subTitle_1st').html('<h3>' + jsonObj.pageTextData[1].subTitle + '</h3>');
       $('#description_1st').html('<p>' + jsonObj.pageTextData[1].description + '</p>');	
       $('#image_home1').html('<img class="card-img-top img-fluid" src="'+ jsonObj.pageTextData[1].image +'" alt="CocaColaImage">');

       $('#title_2nd').html('<h2>' + jsonObj.pageTextData[2].title + '<h2>');
       $('#subTitle_2nd').html('<h3>' + jsonObj.pageTextData[2].subTitle + '</h3>');
       $('#description_2nd').html('<p>' + jsonObj.pageTextData[2].description + '</p>');	
       $('#image_home2').html('<img class="card-img-top img-fluid" src="'+ jsonObj.pageTextData[2].image +'" alt="Sprite">');
       
       $('#title_3rd').html('<h2>' + jsonObj.pageTextData[3].title + '<h2>');
       $('#subTitle_3rd').html('<h3>' + jsonObj.pageTextData[3].subTitle + '</h3>');
       $('#description_3rd').html('<p>' + jsonObj.pageTextData[3].description + '</p>');
       $('#image_home3').html('<img class="card-img-top img-fluid" src="'+ jsonObj.pageTextData[3].image +'" alt="DrPepper">');

       $('#title_4th').html('<h2>' + jsonObj.pageTextData[4].title + '<h2>');
       $('#subTitle_4th').html('<h3>' + jsonObj.pageTextData[4].subTitle + '</h3>');
       $('#description_4th').html('<p>' + jsonObj.pageTextData[4].description + '</p>');	
       $('#image_home4').html('<img class="card-img-top img-fluid" src="'+ jsonObj.pageTextData[4].image +'" alt="Fanta">');

       $('#x3dModelTitle_Can').html('<h1>' + jsonObj.pageTextData[5].x3dModelTitle + '<h2>');
       $('#subTitle_can').html('<h2>' + jsonObj.pageTextData[5].subTitle + '</h3>');
       $('#description_can').html('<p>' + jsonObj.pageTextData[5].description + '</p>');

       $('#x3dModelTitle_Bottle').html('<h1>' + jsonObj.pageTextData[6].x3dModelTitle + '<h2>');
       $('#subTitle_bottle').html('<h2>' + jsonObj.pageTextData[6].subTitle + '</h3>');
       $('#description_bottle').html('<p>' + jsonObj.pageTextData[6].description + '</p>');

       $('#x3dModelTitle_Cup').html('<h1>' + jsonObj.pageTextData[7].x3dModelTitle + '<h2>');
       $('#subTitle_cup').html('<h2>' + jsonObj.pageTextData[7].subTitle + '</h3>');
       $('#description_cup').html('<p>' + jsonObj.pageTextData[7].description + '</p>');

       $('#x3dModelTitle_Glass').html('<h1>' + jsonObj.pageTextData[8].x3dModelTitle + '<h2>');
       $('#subTitle_glass').html('<h2>' + jsonObj.pageTextData[8].subTitle + '</h3>');
       $('#description_glass').html('<p>' + jsonObj.pageTextData[8].description + '</p>');

       $('#aboutTitle').html('<h1>' + jsonObj.pageTextData[9].aboutTitle + '<h1>');
       $('#aboutDescription').html('<p>' + jsonObj.pageTextData[9].aboutDescription + '</p>');
       $('#imageAbout').html('<img class = "img-padding" src=' + jsonObj.pageTextData[9].imageAbout + '>');

    });
});







