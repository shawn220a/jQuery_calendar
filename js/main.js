$(document).ready(() => {
  let date = $("#date");
  let currentHour = moment().format('ha');

  // Color codes the input boxes for future, past, and current
  var timeArr = $('input');
  for (i = 0; i < timeArr.length; i++) {
    let hour = $(timeArr[i]).attr('id');
    let difference = moment(hour, 'ha').diff(moment(currentHour, 'ha'), 'hours');
    if (difference < 0) {
      $(timeArr[i]).css('background', '#d3d3d3');
    } 
    else if (difference === 0) {
      $(timeArr[i]).css('background', 'red');
      $(timeArr[i]).css('color', 'white');
    } 
    else {
      $(timeArr[i]).css('background', 'green');
      $(timeArr[i]).css('color', 'white');
    }
  }

  // Get items from local Storage
  let sevenAM = localStorage.getItem('0700');
  let eightAM = localStorage.getItem('0800');
  let nineAM = localStorage.getItem('0900');
  let tenAM = localStorage.getItem('1000');
  let elevenAM = localStorage.getItem('1100');
  let twelvePM = localStorage.getItem('1200');
  let onePM = localStorage.getItem('1300');
  let twoPM = localStorage.getItem('1400');
  let threePM = localStorage.getItem('1500');
  let fourPM = localStorage.getItem('1600');
  let fivePM = localStorage.getItem('1700');
  let sixPM = localStorage.getItem('1800');

  // Write items in local storage to the main page
  $('#sevenAM input').val(sevenAM);
  $('#eightAM input').val(eightAM);
  $('#nineAM input').val(nineAM);
  $('#tenAM input').val(tenAM);
  $('#elevenAM input').val(elevenAM);
  $('#twelvePM input').val(twelvePM);
  $('#onePM input').val(onePM);
  $('#twoPM input').val(twoPM);
  $('#threePM input').val(threePM);
  $('#fourPM input').val(fourPM);
  $('#fivePM input').val(fivePM);
  $('#sixPM input').val(sixPM);

  // Initializes the date and time
  date.text(Date());

  // Updates time by the second
  setInterval(() => {
    date.empty();
    date.text(Date());
  }, 1000);

  // Saves 0700 item in local storage
  $('#sevenAM button').click(function() {
    let value = $('#sevenAM input').val();
    localStorage.setItem('0700', value);
  })

  // Saves 0800 item in local storage
  $('#eightAM button').click(function() {
    let value = $('#eightAM input').val();
    localStorage.setItem('0800', value);
  })

  // Saves 0900 item in local storage
  $('#nineAM button').click(function() {
    let value = $('#nineAM input').val();
    localStorage.setItem('0900', value);
  })

  // Saves 1000 item in local storage
  $('#tenAM button').click(function() {
    let value = $('#tenAM input').val();
    localStorage.setItem('1000', value);
  })

  // Saves 1100 item in local storage
  $('#elevenAM button').click(function() {
    let value = $('#elevenAM input').val();
    localStorage.setItem('1100', value);
  })

  // Saves 1200 item in local storage
  $('#twelvePM button').click(function() {
    let value = $('#twelvePM input').val();
    localStorage.setItem('1200', value);
  })

  // Saves 1300 item in local storage
  $('#onePM button').click(function() {
    let value = $('#onePM input').val();
    localStorage.setItem('1300', value);
  })

  // Saves 1400 item in local storage
  $('#twoPM button').click(function() {
    let value = $('#twoPM input').val();
    localStorage.setItem('1400', value);
  })

  // Saves 1500 item in local storage
  $('#threePM button').click(function() {
    let value = $('#threePM input').val();
    localStorage.setItem('1500', value);
  })

  // Saves 1600 item in local storage
  $('#fourPM button').click(function() {
    let value = $('#fourPM input').val();
    localStorage.setItem('1600', value);
  })

  // Saves 1700 item in local storage
  $('#fivePM button').click(function() {
    let value = $('#fivePM input').val();
    localStorage.setItem('1700', value);
  })

  // Saves 1800 item in local storage
  $('#sixPM button').click(function() {
    let value = $('#sixPM input').val();
    localStorage.setItem('1800', value);
  })

});