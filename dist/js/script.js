const slider = tns({
    container: '.feature__inner',
    items: 5,
    slideBy: 1,
    autoplay: false,
    controls: false,
    nav: false,
    navPosition: 'bottom',
    speed: 1000,
    loop: true,
    responsive: {
        1: {
            nav: true   
        },
        1200: {
            nav: false
        }
    }
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

$(document).ready(function(){
    $( function() {
        $( "#datepicker" ).datepicker({
            changeMonth: true,
            changeYear: true,
            firstDay: 1,
            showAnim: 'slideDown',
            currentText: "Now"
        });
        // $("#datepicker").datepicker("setDate", new Date());
    });

    $('input.timepicker').timepicker({});
});