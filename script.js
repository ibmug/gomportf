
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

}

function clearHero(){
    $('#mainHero').empty();
}

init();