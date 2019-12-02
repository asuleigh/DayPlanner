// Function for setting day and month at top of page using Moment
$('#currentDate').text(moment().format('dddd, MMMM Do'));

/* Create a function for displaying colors inside of the input sections according
   to time of day*/
function display() {
    // Creates currentBGTime variable, which calls the ids of the inputs and puts them into an array
    var currentBGTime = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
    // Creates currentBGHours variable, which creates an array using hours of the day
    var currentBGHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]; 
    // Creates variable for current time using moment.js
    var currentTime = moment();

    /* Create a for loop to set the input id with a value of [i] in localStorage, then get the id from local storage 
       to use in if/else if statements*/
    for (var i = 0; i < 9; i++) {
        $("#" + currentBGTime[i]).val(localStorage.getItem(currentBGTime[i] + "inputBG"));

    /* Use if and else if statements to grab the currentBGHours variable and compare it to the currentTime variable
       after the currentTime variable gets the current hour using .hour()*/
        if (currentBGHours[i] < currentTime.hour()) {
    /*Then under each statement set up function that grabs the current time that, after comparing to
       each statement, changes the background color of the input fields according to the time of day*/
            $("#" + currentBGTime[i]).css("background-color", "#b8b3b3");
        }

        else if (currentBGHours[i] === currentTime.hour()) {
            $("#" + currentBGTime[i]).css("background-color", "#c70a0a");
        }

        else if (currentBGHours[i] > currentTime.hour()) {
            $("#" + currentBGTime[i]).css("background-color", "#54ca93");
        };
    };
};

// Display function for input colors
display();

/* Setting up function to get values from localStorage using ids from 
the input areas in the HTML*/
$('#9am').val(localStorage.getItem('#9am'));
$('#10am').val(localStorage.getItem('#10am'));
$('#11am').val(localStorage.getItem('#11am'));
$('#12pm').val(localStorage.getItem('#12pm'));
$('#1pm').val(localStorage.getItem('#1pm'));
$('#2pm').val(localStorage.getItem('#2pm'));
$('#3pm').val(localStorage.getItem('#3pm'));
$('#4pm').val(localStorage.getItem('#4pm'));
$('#5pm').val(localStorage.getItem('#5pm'));

/* Function for storing input upon clicking the save button using the 
(this) method */
$('.btn').click( function() {
    let storeInput = $(this).val();
    localStorage.setItem(storeInput, $(storeInput).val());
    });

