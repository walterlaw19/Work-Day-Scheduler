// var todayIs = document.querySelector("#currentDay");



var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentTime.toString());

var TimeInterval = setInterval(function ()  {
    
    $("#currentDay").text(currentTime);
},1000);



// $("#currentDay").text(currentTime);


// $("#errand").on("click") 