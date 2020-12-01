//const fs = require('fs');

    console.log("Hi");
    
    $("#ibmugLink").click(function() {
        //Do stuff when clicked
        console.log("Clicking the link");
        clearHero();
        init();

    });



    $("#portfolioLink").click(function() {
        //Do stuff when clicked
       clearHero();
       checkWork();

    });

    $("#mediaLink").click(function() {
        //Do stuff when clicked
       clearHero();
       clickMedia();

    });

    $("#readmeLink").click(function() {
        //Do stuff when clicked
        console.log("doing something");
       clearHero();
       createREADME();

    });


   


function init(){

    const bioDiv = $('<div>');
    bioDiv.addClass('container has-text-centered');
    const quickTitle = $('<h1>');
    quickTitle.addClass('title');
    quickTitle.text("Rodrigo Sanchez");
    const quickSubTitle = $('<h2>');
    quickTitle.addClass('subtitle');
    quickSubTitle.text("FullStack Developer && Tech Analyst");
    bioDiv.append(quickTitle);
    bioDiv.append(quickSubTitle);
    $("#mainHero").append(bioDiv);  
}


function checkWork(){
    const bioDiv = $('<div>');
    bioDiv.addClass('container has-text-centered');
    const quickTitle = $('<h1>');
    quickTitle.addClass('title');
    quickTitle.text("Some of My Work");
    quickTitle.addClass('subtitle');
    bioDiv.append(quickTitle);
    $("#mainHero").append(bioDiv);
    var imgLink = $('<a>');
    var imgDiv = $('<figure>');
    imgDiv.addClass('image is-3by4');
    var img = $('<img>');
    var imgPath = "./assets/img/";
    var images ={   paths:["Unity_Game.JPG", "buscaCovid.jpg", "simpleSchedule.JPG"],
                    urls:["https://ibmug.github.io/juegoma_dev/", "https://ibmug.github.io/proyecto_1/", "https://ibmug.github.io/simpleDaySchedule/",]};
                
    var rand =Math.floor(Math.random() * 3);
    var completePath = imgPath+images.paths[rand];
    imgLink.attr('href',images.urls[rand]);
    console.log(rand);
    img.attr('src',completePath);
    imgLink.attr('target','_blank');
    imgDiv.append(img)
    imgLink.append(imgDiv);
    bioDiv.append(imgLink);
}
function clickMedia(){

    const mediaObj = {
        text: ["Streams ","Music ","Instagram ","Git ","LinkedIn "],
        url: ["https://twitch.tv/ibmug", "https://soundcloud.com/ibmug","https://www.instagram.com/ibmug/","https://github.com/ibmug","https://linkedin.com/in/rodrigosv8"],
        class:["fab fa-twitch","fab fa-soundcloud","fab fa-instagram","fab fa-github","fab fa-linkedin"]
    };

//Create
const mediaDiv = $('<div>');
mediaDiv.addClass("container rows is-centered");
//<a class="nav-link" href="https://twitch.tv/ibmug" target="_blank"><i class="fab fa-twitch"></i> Streams</a>
console.log("ok..." + mediaObj.text.length);
for(var x=0; x<mediaObj.text.length;x++){
    console.log("something");
    let mediaLink = $("<a>");
    mediaLink.text(mediaObj.text[x]);
    mediaLink.addClass("row is-full myLink");
    mediaLink.attr("href", mediaObj.url[x]);
    mediaLink.attr("target","_blank");
    const fabIcon = $("<i>");
    fabIcon.addClass(mediaObj.class[x]);
    

    mediaLink.append(fabIcon);
    mediaDiv.append(mediaLink);
}

$("#mainHero").append(mediaDiv);

}

function clearHero(){
    $('#mainHero').empty();
}


function createREADME(){
    const  titleString = "## READ.ME";
    const titleString2 = "## Guitar Stuff\n\n"
    const titleString3 = "## Synth/Sample Stuff\n\n"
    const contentString3 = "I currently own multiple electronic instruments"
    const contentString31 = "Including: Digitakt, Model:Samples, Digitone, Novation's Circuit, Op-1 && OP-Z"
   // console.log(veryBigString);
    var textDiv = $("<div>");
    
    createElement("<h1>",titleString,textDiv);
    createElement("<p>","This website has information on me and stuff I've done/do, hope you like it.",textDiv);
    createElement("<p>","I'm trying to get the game uploaded but I'm having a hard time to do that with Unity, might go back to Phaser.io or something similar.'",textDiv);
    createElement("<h1>",titleString2,textDiv);
    createElement("<p>","I currently own 6 six string guitars and 1 5string bass",textDiv);
    createElement("<p>","Using a Line6(I know..) and a fender Rumble",textDiv);
    createElement("<h1>",titleString3,textDiv);
    createElement("<p>","I currently own multiple electronic instruments" ,textDiv);
    createElement("<p>","Including: Digitakt, Model:Samples, Digitone, Novation's Circuit, Op-1 && OP-Z",textDiv);

    $("#mainHero").append(textDiv);

}
init();


function createElement(type,text,object){
    var element = $(type);
    if(type ==="<h1>"){
        element.addClass("has-text-centered is-size-6 has-text-weight-bold");
    }
    element.text(text);
    object.append(element);
}