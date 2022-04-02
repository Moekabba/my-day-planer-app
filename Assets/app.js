// Implement third-party libraries such as Bootstrap, jQuery, and Moment.js

// Perform DOM traversals and manipulations with jQuery
var timeBlockEl = $(".time-block");
var hrEL = $(".hr");
var saveButtonEl = $(".saveButton");
var inputEL = $(".description");

// Use jQuery to save user input in local storage
// var saveInput = function () {
//   localStorage.setItem("inputEl", JSON.stringify(inputEL));
// };

saveButtonEl.on("click", function (event) {
  console.log(event);
  var textArea = $(event.target).siblings("textarea");
  // console.log(textArea.val());
  // saveInput(); setting local storage
  var oldList = JSON.parse(localStorage.getItem("inputEl")) || {};
  var hrClick = event.target.dataset.hr;
  oldList[hrClick] = textArea.val();
  localStorage.setItem("inputEl", JSON.stringify(oldList));
});

function paplText() {
  var oldList = JSON.parse(localStorage.getItem("inputEl")) || {};
  console.log(oldList);
  // iterating ovr property of an object
  for (var hr in oldList) {
    var textArea = $(`[data-hr="${hr}"]`).siblings("textarea");
    textArea.val(oldList[hr]);
  }
  // showing current day and time using momnet
  var today = moment();
  $("#currentDay").text(today);
  console.log(today.hour());
  for (var i = 0; i < timeBlockEl.length; i++) {
    console.log(timeBlockEl[i]);
    // console.log(timeBlockEl[i].id);
    if (timeBlockEl[i].id > today.hour()) {
      // this time block is in the future
      var textArea = $(timeBlockEl[i]).children("textarea");
      textArea.css("background-color", "green");
    } else if (timeBlockEl[i].id < today.hour()) {
      // this time block is in the past
      var textArea = $(timeBlockEl[i]).children("textarea");

      textArea.css("background-color", "red");
    } else {
      // this is the current time block
    }
  }
}

// Work with the Bootstrap grid layout in HTML
paplText();
// Work with Bootstrap components

// Add custom color styles to an existing CSS framework

// Work with custom fonts and icons via a content delivery network (CDN)
// var number = 0
// var text = "andrew" + number + "donnahue"
// // andrew0donnahue
// var text = `andrew${number}donnahue`
