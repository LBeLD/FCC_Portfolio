$(document).ready(function() {
  //get year for footer
  var date = new Date();
  var year = date.getFullYear();
  $('#year').html(year + ' ');

  //scroll animation when clicking nav bar buttons
  $('#portfolioNav').click(function(){
    $('html,body').animate({
      scrollTop: $('#portfolio').offset().top
    },2000);
  });

  $('#aboutNav').click(function(){
    $('html,body').animate({
      scrollTop: $('#about').offset().top
    },2000);
  });

  $('#contactNav').click(function(){
    $('html,body').animate({
      scrollTop: $('#contact').offset().top
    },2000);
  });

  //change color of text and bar on mouseover, portfolio section
  $('.thumbnail').mouseover(function() {
    $(this).toggleClass('color');
    $(this).find('h4').toggleClass('color');
    $(this).find('img').css('border', '5px solid #0998CC');
  });
  $('.thumbnail').mouseout(function() {
    $(this).removeClass('color');
    $(this).find('h4').removeClass('color');
    $(this).find('img').css('border', 'none');
  });

//for mandatory fields check
$('#contactForm').submit(function(event) {
  var name = $('#nameForm'),
      email = $('#emailForm'),
      phone = $('#phoneForm'),
      message = $('#messageForm');
    //if empty show error message
  if (!name.val() || !email.val() || !message.val()){
    $('#errorMessage').show();
    $('#errorMessage').fadeOut(5000);
    event.preventDefault();
  } else {
    //ajax call to send info to formspree
    $.ajax({
    url: "https://formspree.io/lbbrizolla@gmail.com",
    method: "POST",
    data: $(this).serialize(),
    dataType: "json"
    });
    event.preventDefault();
    //show success message and clean the fields
    $('#sentMessage').show();
    $('#errorMessage').hide();
    $(this).get(0).reset();
    $('#sentMessage').fadeOut(8000);
  }

});


});
