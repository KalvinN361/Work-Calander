  // display current day on page
  $('#currentDay').text(moment().format('dddd, MMMM Do'));

// creat a function for the save event where there is notification and value is saved to local storage
$(document). ready(function() {
  // save button on click function that will do the not, save when clicked. 
  $(".saveBtn").on("click", function () {
    // getting value of time and plan
    var time = $(this).parent().attr("id");
    var plan = $(this).siblings(".description").val();


    // save the var time, value to local storage
    localStorage.setItem(time, plan);

    // Show notification that item was saved to localStorage by adding class "show"
    $(".notification").addClass("show");

    // Timeout to remove "show" class after 5 seconds
    setTimeout(function () {
      $(".notification").removeClass("show");
    }, 2500);
  });
})

function colortimeBlock() {
    var currHour = moment().hours();

// creating if statments to add classes and color code the blocks
    $('.time-block').each(function() {
      var blockHour = parseInt($(this).attr("id"));
    
      if (currHour < blockHour) {
        $(this).addClass("future");
      } else if (currHour === blockHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("past");
    }
  })
};
// this variable will constantly update the page time
var interval = setInterval(colortimeBlock, 15000);

// load any saved data from localStorage
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));


colortimeBlock();























































// var saveBtn = $(".saveBtn");

// /**
//  * FUNCTIONS
//  */

// // current day is displayed at the top of the calendar
// $("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

// $(".notification").addClass("show");

// // Timeout to remove "show" class after 5 seconds
//     setTimeout(function () {
//     $(".notification").removeClass("show");
//     }, 2500);


// // each time block is color-coded to indicate whether it is in the past, present, or future
// function timeBlockColor() {
//     var hour = moment().hours();

//     $(".time-block").each(function() {
//         var currHour = parseInt($(this).attr("id"));

//         // console.log(this); //each time-block

//         if (currHour > hour) {
//             $(this).addClass("future");
//         } else if (currHour === hour) {
//             $(this).addClass("present");
//         } else {
//             $(this).addClass("past");
//         }
//     })
// };

// // WHEN I click the save button for that time block
// saveBtn.on("click", function() {

//     // console.log(this); //save button
//     var time = $(this).siblings(".hour").text();
//     var plan = $(this).siblings(".plan").val();

//     // THEN the text for that event is saved in local storage
//     localStorage.setItem(time, plan);
// });

// // WHEN I refresh the page
// // THEN the saved events persist
// function usePlanner() {

//     $(".hour").each(function() {
//         var currHour = $(this).text();
//         var currPlan = localStorage.getItem(currHour);

//         // console.log(this);
//         // console.log(currHour);

//         if(currPlan !== null) {
//             $(this).siblings(".plan").val(currPlan);
//         }
//     });
// }

// /**
//  * CALL FUNCTIONS
//  */

// timeBlockColor();
// usePlanner();