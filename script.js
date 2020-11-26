
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

   


function init(){

    const bioDiv = $('<div>');
    bioDiv.addClass('container has-text-centered');
    const quickTitle = $('<h1>');
    quickTitle.addClass('title');
    quickTitle.text("Rodrigo Sanchez");
    const quickSubTitle = $('<h2>');
    quickTitle.addClass('subtitle');
    quickSubTitle.text("FullStack Developer");
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
    var images ={   paths:["Unity_Game.JPG", "buscaCovid.jpg", "simpleSchedule.jpg"],
                    urls:["https://ibmug.github.io/juegoma_dev/", "https://ibmug.github.io/proyecto_1/", "https://ibmug.github.io/simpleDaySchedule/"]};
                
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
        text: ["Streams ","Music ","Instagram ","Git "],
        url: ["https://twitch.tv/ibmug", "https://soundcloud.com/ibmug","https://www.instagram.com/ibmug/","https://github.com/ibmug"],
        class:["fab fa-twitch","fab fa-soundcloud","fab fa-instagram","fab fa-github"]
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

init();