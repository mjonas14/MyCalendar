$(document).ready(function () {

  // Display current date and time in header
  $('#currentDay').append("Today's Date: ", dayjs().format("MMMM D YYYY"));

  $(function () {

    $('.saveBtn').on('click', function() {
      var key = $(this).parent().attr('id');
      var keyVal = $(this).siblings(".description").val();
      //console.log("EVENT: ", element.siblings(".text-center").text());
      localStorage.setItem(key, keyVal)

    });

    // Deleting agenda item when trash button is clicked
    $('.trashBtn').on('click', function() {
      var key = $(this).parent().attr('id');
      return $(this).siblings(".description").val(localStorage.removeItem(key));
    });

    // Dynamically updating colours on time stamps
    $('.row').each(function() {
      var key = $(this).attr('id');
      $(this).children('.description').val(localStorage.getItem(key));
      var currentHour = parseInt(dayjs().format("HH"));
      var tenseHour = parseInt($(this).attr('id').split('hour-')[1]);

      // Update tense classes based on current time
      if (tenseHour < currentHour) {
        $(this).addClass('past');
      } else if (tenseHour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }

    });

  });

});
