
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
    var imgDiv = $('<figure>');
    imgDiv.addClass('image is-16by9');
    var img = $('<img>');
    var imgPath = "./assets/img/";
    var images =["Unity_Game.JPG", "buscaCovid.jpg"];
    var completePath = imgPath+images[Math.random()];
    img.attr('src',completePath);
    imgDiv.append(img)
    bioDiv.append(imgDiv);
}
function clickMedia(){

}

function clearHero(){
    $('#mainHero').empty();
}

init();