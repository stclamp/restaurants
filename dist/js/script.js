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
            nav: true,
            items: 1,
            navAsThumbnails: true  
        },
        768: {
            items: 2
        },
        1200: {
            nav: false,
            items: 5
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


    // ACCORDION    
    $("#all").click(function () {
        $('input:checkbox').not(this).prop('checked', this.checked);
    });

    // TABS
    $('.js-tab-trigger').click(function() {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="'+ id +'"]');
        
        $('.js-tab-trigger.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2
        
        $('.js-tab-content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
     });
});

// HAMBURGER

var x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("nav");
  element.classList.toggle("open");
  
  x.classList.toggle("change");
}

// var y = document.getElementsByTagName("#nav li");
// y.addEventListener("mouseover", myFunction2);

// function myFunction2() {

  
//  x.classList.toggle("hover");
  
// }


// x.addEventListener("mouseout", myFunction3);

// function myFunction2() {
  
//  x.classList.toggle("hover");
  
// }