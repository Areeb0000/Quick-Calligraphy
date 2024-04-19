(function ($) {
    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    }); 
})(jQuery);

// Contact Form Clear Input Fields

function clearform() {
    var a = document.getElementById("name").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("subject").value;
    var d = document.getElementById("message").value;
    var empty = !a || !b || !c || !d;
  
    if (empty) {
      alert("Please Filled Out All Fields.");
    } else {
      alert("Thank You For Getting In Touch! We Will Contact You As Soon As Possible.");
  
// Clear input fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    }
};

// Feedback Form Alert

function myfunction() {
    var a = document.getElementById("name1").value;
    var b = document.getElementById("email1").value;
    var c = document.getElementById("message1").value;
    var empty = !a || !b || !c;
  
    if (empty) {
      alert("Please Filled Out All Fields.");
    } else {
      alert("Feedback Send Successfully.");
  
// Clear input fields
      document.getElementById("name1").value = "";
      document.getElementById("email1").value = "";
      document.getElementById("message1").value = "";
    }
};

// Navbar Hide After Clicking On Navlink
  $('.nav-item , .dropdown-item').click(function() {
    $(".navbar-collapse").collapse('hide');
  });

