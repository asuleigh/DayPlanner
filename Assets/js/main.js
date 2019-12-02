// Function for setting day and month at top of page using Moment
$('#currentDate').text(moment().format('dddd, MMMM Do'));

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


