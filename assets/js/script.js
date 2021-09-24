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
var task9Saved = localStorage.getItem("input9");
var task10Saved = localStorage.getItem("input10");
var task11Saved = localStorage.getItem("input11");
var task12Saved = localStorage.getItem("input12");
var task13Saved = localStorage.getItem("input13");
var task14Saved = localStorage.getItem("input14");
var task15Saved = localStorage.getItem("input15");
var task16Saved = localStorage.getItem("input16");
var task17Saved = localStorage.getItem("input17");

// create function to start app
function beginApp() {
    // do ternaries for local storage
    task9 = (task9Saved != null) ? task9.attr("val",task9Saved) : task9.attr("placeholder","Enter a task.");
    task10 = (task10Saved != null) ? task10.attr("val",task10Saved) : task10.attr("placeholder","Enter a task.");
    task11 = (task11Saved != null) ? task11.attr("val",task11Saved) : task11.attr("placeholder","Enter a task.");
    task12 = (task12Saved != null) ? task12.attr("val",task12Saved) : task12.attr("placeholder","Enter a task.");
    task13 = (task13Saved != null) ? task13.attr("val",task13Saved) : task13.attr("placeholder","Enter a task.");
    task14 = (task14Saved != null) ? task14.attr("val",task14Saved) : task14.attr("placeholder","Enter a task.");
    task15 = (task15Saved != null) ? task15.attr("val",task15Saved) : task15.attr("placeholder","Enter a task.");
    task16 = (task16Saved != null) ? task16.attr("val",task16Saved) : task16.attr("placeholder","Enter a task.");
    task17 = (task17Saved != null) ? task17.attr("val",task17Saved) : task17.attr("placeholder","Enter a task.");

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
