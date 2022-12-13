
$(document).ready(function() {
  $("#currentDay").text(dayjs().format('MM DD YYYY')); //Current Date
  //Listener Event for button to save
  $(".saveBtn").on("click", function() { 
    
  //Getting values
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
  //Storing to local storage
    localStorage.setItem(time, text);
  })
  //Loads any saved data on lines
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  //Current number of hours
  function hourKeeper() {
    var presentHour = dayjs().hour();
    //Loop for time blocks
    $(".time-block").each(function() {
      var hourSection = parseInt($(this).attr("id").split("hour")[1]);
      console.log(hourSection, presentHour);
      //Checks for past, present, or future.
      if (hourSection < presentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      else if (hourSection === presentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      }
      else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    })
  }//Rerun function
  hourKeeper();
});


