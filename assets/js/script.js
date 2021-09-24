// Get document elements from index and assign to variables
var task9 = $("#text-9");
var task10 = $("#text-10");
var task11 = $("#text-11");
var task12 = $("#text-12");
var task13 = $("#text-13");
var task14 = $("#text-14");
var task15 = $("#text-15");
var task16 = $("#text-16");
var task17 = $("#text-17");

// get current date
var dayIs = moment().format("dddd, MMMM Do, YYYY");

// get stuff from localstorage
var task9Saved = localStorage.getItem("text-9");
var task10Saved = localStorage.getItem("text-10");
var task11Saved = localStorage.getItem("text-11");
var task12Saved = localStorage.getItem("text-12");
var task13Saved = localStorage.getItem("text-13");
var task14Saved = localStorage.getItem("text-14");
var task15Saved = localStorage.getItem("text-15");
var task16Saved = localStorage.getItem("text-16");
var task17Saved = localStorage.getItem("text-17");

// create function to start app
function beginApp() {
    // do ternaries for local storage
    task9 = (task9Saved != null) ? task9.val(task9Saved) : task9.attr("placeholder","Enter a task.");
    console.log(task9Saved + " - value of task9Saved", task9, " - value of task9");
    task10 = (task10Saved != null) ? task10.val(task10Saved) : task10.attr("placeholder","Enter a task.");
    console.log(task10Saved + " - value of task10Saved", task10, " - value of task10");
    task11 = (task11Saved != null) ? task11.val(task11Saved) : task11.attr("placeholder","Enter a task.");
    task12 = (task12Saved != null) ? task12.val(task12Saved) : task12.attr("placeholder","Enter a task.");
    task13 = (task13Saved != null) ? task13.val(task13Saved) : task13.attr("placeholder","Enter a task.");
    task14 = (task14Saved != null) ? task14.val(task14Saved) : task14.attr("placeholder","Enter a task.");
    task15 = (task15Saved != null) ? task15.val(task15Saved) : task15.attr("placeholder","Enter a task.");
    task16 = (task16Saved != null) ? task16.val(task16Saved) : task16.attr("placeholder","Enter a task.");
    task17 = (task17Saved != null) ? task17.val(task17Saved) : task17.attr("placeholder","Enter a task.");

    // set current day at top of page
    $("#currentDay").text(dayIs);

    // figure out what hour it is
    var currentHour = moment().hours();
    console.log(currentHour + " is the current hour");
    
    // have each time block discover if it is past, present or future
    $(".time-block").each(function (){
        //get int value from hour listing
        var hour = parseInt($(this).attr("data-val"));
        
        if (hour < currentHour) { // hour is in the past
            console.log(hour < currentHour, "past " + hour, currentHour);
            // grey out block
            $(this).addClass("past");
            // remove blinker
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (hour == currentHour) {  //hour is now
            console.log(hour == currentHour, "present " + hour, currentHour);
            // remove coloring
            $(this).removeClass("past");
            $(this).removeClass("future")
            // add coloring
            $(this).addClass("present");
            // add blinker
        } 
        else {
            console.log(hour > currentHour, "future " + hour, currentHour);
            //remove wrong coloring
            $(this).removeClass("past");
            $(this).removeClass("present");

            //add right coloring
            $(this).addClass("future");
        }
    });
};

// start app
beginApp();

// capture clicks to save tasks
$(".saveBtn").on("click", function(event){
    // stop browser from doing browser things
    event.preventDefault();

    // grab the sibling of savebutton
    var taskEntered = $(this).prev();

    // grab the id of the text area for saving
    var taskId = taskEntered.attr("id");

    // save the value of the text area for saving
    var textEntered = taskEntered.val();

    // save things to localStorage
    localStorage.setItem(taskId, textEntered);
})