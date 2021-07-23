// var todayIs = document.querySelector("#currentDay");

function updateTime() {
    currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentTime);
}

updateTime()
console.log(currentTime.toString());

var TimeInterval = setInterval(function ()  {
    updateTime()
},1000);



function hourTracker() {
    var currentHour = moment().hour();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, currentHour)
    })
}

hourTracker();





// $("#currentDay").text(currentTime);


// $("#errand").on("click") 

const hourIds = [
    "7a", "8a", "9a", "10a"
]

for (let index = 0; index < hourIds.length; index++) {
    $('#btn-' + hourIds[index]).on('click', function(event) {
        console.log($(event.target).siblings()[1].value)
        // set to localstorage
        localStorage.setItem(hourIds[index], $(event.target).siblings()[1].value)
    });
}


