
// show current time and keep it running
function updateTime() {
    currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentTime);
}

updateTime()
console.log(currentTime.toString());

var TimeInterval = setInterval(function ()  {
    updateTime()
},1000);







// const HoursIds
const hourIds = [
    "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p"
]
// for loop to get the text on all hours
for (let index = 0; index < hourIds.length; index++) {
    $('#btn-' + hourIds[index]).on('click', function(event) {
        console.log($(event.target).siblings()[1].value)
        // set to localstorage
        localStorage.setItem(hourIds[index], $(event.target).siblings()[1].value)
    });
}

// load localstorage
var loadSchedule = function() {
    $("#hour9am .description").val(localStorage.getItem("9a"));
    $("#hour10am .description").val(localStorage.getItem("10a"));
    $("#hour11am .description").val(localStorage.getItem("11a"));
    $("#hour12pm .description").val(localStorage.getItem("12p"));
    $("#hour1pm .description").val(localStorage.getItem("1p"));
    $("#hour2pm .description").val(localStorage.getItem("2p"));
    $("#hour3pm .description").val(localStorage.getItem("3p"));
    $("#hour4pm .description").val(localStorage.getItem("4p"));
    $("#hour5pm .description").val(localStorage.getItem("5p"));
    
};



loadSchedule();

// past,present,future
function timeTracker() {
    var timeTracker = moment().hour();
    
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, timeTracker)

        if (blockHour < timeTracker) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } 
        else if (blockHour === timeTracker) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } 
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

timeTracker();