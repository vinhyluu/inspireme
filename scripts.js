// Create app namespace to hold all methods
const inspireApp = {};
inspireApp.key = "N9v9JMc3XLWox8Kk9jekb5Jy8wzzpFHF";

// Make AJAX request with user inputted data
inspireApp.getImages = function (query) {
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search",
        method: "GET",
        dataType: "json",
        data: {
            api_key: inspireApp.key,
            format: "json",
            q: query,
            limit: 200
        }
    }).then(function(result){
        // console.log(result);
        inspireApp.displayImages(result.data);
    });
};

inspireApp.getQuote = function (i) {
    for (i = 1; i <= 5; i++){
    $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method: 'GET',
        data: {
            reqUrl: 'https://favqs.com/api/quotes',
            params: {
                key: "a93f2db81323d51c8ac27920010c1bb8",
                format: "json",
                filter: "inspire",
                page: i
            },
            proxyHeaders: {
                Authorization: `Token token=${"a93f2db81323d51c8ac27920010c1bb8"}`,
            },
            xmlToJSON: false
        }
    }).then(function (res) {
        console.log(res);
        inspireApp.displayQuote(res.quotes);
        });
    };
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
/////////////Calling GIPHY API to get only cat images/////////////////////////////////////////

inspireApp.catImages = function () {
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search",
        method: "GET",
        dataType: "json",
        data: {
            api_key: inspireApp.key,
            format: "json",
            q: "cats",
            limit: 200
        }
    }).then(function (cats) {
        // console.log(cats);
        inspireApp.displayCats(cats.data);
    });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////Shuffling cat images and displaying them on the page/////////////////////////////////

inspireApp.displayCats = function(catArray){
    // console.log(catArray);
    $("ul li.cat").on("click", function(){
        $("#gifContainer").empty();
        const shuffledCats = _.shuffle(catArray).slice(2, 11);
        // console.log(shuffledCats);
        shuffledCats.forEach(function(catImage){
            const catGridImage = $("<img>").attr("src", catImage.images.downsized_large.url);
            $("#gifContainer").append(catGridImage);
            $(".resultsPage").show();
        })
            $('html,body').animate({
                scrollTop: $(".resultsPage").offset().top}, 1000);
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////Calling GIPHY API to get only dog images and displaying them////////////////////////////////////////////

inspireApp.dogImages = function () {
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search",
        method: "GET",
        dataType: "json",
        data: {
            api_key: inspireApp.key,
            format: "json",
            q: "dogs",
            limit: 200
        }
    }).then(function (dogs) {
        // console.log(dogs);
        inspireApp.displayDogs(dogs.data);
    });
};

inspireApp.displayDogs = function (dogArray) {
    // console.log(dogArray);
    $("ul li.dog").on("click", function () {
        $("#gifContainer").empty();
        const shuffledDogs = _.shuffle(dogArray).slice(2, 11);
        // console.log(shuffledDogs);
        shuffledDogs.forEach(function (dogImage) {
            const dogGridImage = $("<img>").attr("src", dogImage.images.downsized_large.url);
            $("#gifContainer").append(dogGridImage);
            $(".resultsPage").show();
        })
        $('html,body').animate({
            scrollTop: $(".resultsPage").offset().top}, 1000);
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////  ///////Calling GIPHY API to get only programming images and displaying them////////////////////////////////////////////

inspireApp.programmingImages = function () {
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search",
        method: "GET",
        dataType: "json",
        data: {
            api_key: inspireApp.key,
            format: "json",
            q: "programming",
            limit: 200
        }
    }).then(function (programming) {
        // console.log(programming);
        inspireApp.displayProgramming(programming.data);
    });
};

inspireApp.displayProgramming = function (programmingArray) {
    // console.log(programmingArray);
    $("ul li.programming").on("click", function () {
        $("#gifContainer").empty();
        const shuffledProgramming = _.shuffle(programmingArray).slice(2, 11);
        // console.log(shuffledProgramming);
        shuffledProgramming.forEach(function (programmingImage) {
            const programmingGridImage = $("<img>").attr("src", programmingImage.images.downsized_large.url);
            $("#gifContainer").append(programmingGridImage);
            $(".resultsPage").show();
        })
        $('html,body').animate({
            scrollTop: $(".resultsPage").offset().top}, 1000);
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////Calling GIPHY API to randomize images and displaying them////////////////////////////////////////////

inspireApp.randomImages = function () {
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search",
        method: "GET",
        dataType: "json",
        data: {
            api_key: inspireApp.key,
            format: "json",
            limit: 200,
            q: "hilarious"
        }
    }).then(function (random) {
        // console.log(random);
        inspireApp.displayRandom(random.data);
    });
};

inspireApp.displayRandom = function (randomArray) {
    // console.log(randomArray);
    $(".randomize").on("click", function () {
        $("#gifContainer").empty();
        const shuffledRandom = _.shuffle(randomArray).slice(2, 11);
        // console.log(shuffledRandom);
        shuffledRandom.forEach(function (randomImage) {
            const randomGridImage = $("<img>").attr("src", randomImage.images.downsized_large.url);
            $("#gifContainer").append(randomGridImage);
            $(".resultsPage").show();
        })
        $('html,body').animate({
            scrollTop: $(".resultsPage").offset().top}, 1000);
    });
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////// Collect user input /////////////////////////////
$(".resultsPage").hide();
inspireApp.events = function () {
    $("form").on("submit", function(e){
        e.preventDefault();
        
        const storedWord = $("#enteredWord").val(); 
            if(storedWord.length > 0){
                inspireApp.getImages(storedWord);
            $("input").val("");
        }
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Displaying and appending images based off of search////////////////////////////
inspireApp.displayImages = function(inspireArray){
    $("#gifContainer").empty();
    // console.log(inspireArray);
    
    const shuffledImages = _.shuffle(inspireArray).slice(2,11);
    // console.log(shuffledImages);
    
    shuffledImages.forEach(function(relevantImage){
        const image = $("<img>").attr("src", relevantImage.images.downsized_large.url);
            $("#gifContainer").append(image);
        });
    }
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////Displaying random quotes on submit of search///////////////////////////////            
inspireApp.displayQuote = function(quoteArray){
    $("form").on("submit", function(e){
        e.preventDefault();
        $("#quoteContainer").empty();
        // console.log(quoteArray);
        
        const shuffledQuotes = _.shuffle(quoteArray).pop();
        // console.log(shuffledQuotes);
        const quote = $("<h1>").text('"' + shuffledQuotes.body + '"');
        const author = $("<p>").text("- " + shuffledQuotes.author);
        const quoteAuthor = $("<div>").append(quote, author)
        $("#quoteContainer").append(quoteAuthor);
    });

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////Displaying random quotes on click of list items (Popular Search categories/////////////////////////////// 
    $("ul li").on("click", function(e){
        e.preventDefault();
        $("#quoteContainer").empty();
        
        const shuffledQuotes = _.shuffle(quoteArray).pop();
        // console.log(shuffledQuotes);
        const quote = $("<h1>").text('"' + shuffledQuotes.body + '"');
        const author = $("<p>").text("- " + shuffledQuotes.author);
        const quoteAuthor = $("<div>").append(quote, author)
        $("#quoteContainer").append(quoteAuthor);
    });
    
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////On click of randomize button, display shuffled quotes/////////////////////////////// 

    $(".randomize").on("click", function (e) {
        e.preventDefault();
        $("#quoteContainer").empty();

        const shuffledQuotes = _.shuffle(quoteArray).pop();
        // console.log(shuffledQuotes);
        const quote = $("<h1>").text('"' + shuffledQuotes.body + '"');
        const author = $("<p>").text("- " + shuffledQuotes.author);
        const quoteAuthor = $("<div>").append(quote, author)
        $("#quoteContainer").append(quoteAuthor);
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////On submit of search, show the second results page with a scrolling animation/////////////////////////////// 
    $("form").on("submit", function(){
        $(".resultsPage").show();
            $('html,body').animate({
                scrollTop: $(".resultsPage").offset().top}, 1000);
        });    

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////On click of arrow up on second page, scroll back up to the top of the page/////////////////////////////// 

    $(".backUp").on("click", function () {
        $('html,body').animate({
            scrollTop: $(".landingPage").offset().top}, 1000);
    });

// Start app
inspireApp.init = function () {
    inspireApp.getImages();
    inspireApp.catImages();
    inspireApp.dogImages();
    inspireApp.programmingImages();
    inspireApp.getQuote();
    inspireApp.events();
    inspireApp.randomImages();
}

$(function () {
    inspireApp.init();
});

