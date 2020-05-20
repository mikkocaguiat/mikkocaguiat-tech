$(".dropdown dt").click(function () {
    $(".dropdown").find("ul").hide();
    const container = $(this).closest("dl");
    $(container).find("ul").toggle();
});

var firstband4b, secondband4b, multiplier4b, tolerance4b, toleranceSearch4b;
var firstband5b, secondband5b, thirdband5b, multiplier5b, tolerance5b, toleranceSearch5b;
var firstband6b, secondband6b, thirdband6b, multiplier6b, tolerance6b, toleranceSearch6b, ppm;
$(".dropdown dd ul li").click(function () {
    whichDrop = $(this).closest("dl").prop("id");
    var calctype_active = $('ul.calc-type > li.active > a').attr('data-target');
    var color = $(this).attr("data-color");
    var value = $(this).find('span.pull-right').text();

    var container = $('#resistor-color-diagram-4b');
    if (whichDrop == "4b-firstband") {
        firstband4b = $(this).attr("data-firstband-value");
        container.find('.first-band').removeClass().addClass('first-band ' + color).find('.value').text(value);
    } else if (whichDrop == "4b-secondband") {
        secondband4b = $(this).attr("data-secondband-value");
        container.find('.second-band').removeClass().addClass('second-band ' + color).find('.value').text(value);
    } else if (whichDrop == "4b-multiplier") {
        multiplier4b = $(this).attr("data-multiplier-value");
        container.find('.multiplier').removeClass().addClass('multiplier ' + color).find('.value').text(value);
    } else if (whichDrop == "4b-tolerance") {
        tolerance4b = $(this).attr("data-tolerance-value");
        toleranceSearch4b = $(this).attr("data-tolerance-search");
        container.find('.tolerance').removeClass().addClass('tolerance ' + color).find('.value').text(value);
    }

    const selector = $(this).closest("dl").find("dt .select-color");
    if (!$(selector).hasClass("selected")) {
        $(selector).addClass("selected");
    }

    $(selector).html($(this).html());
    $(this).parent().hide();

    if (firstband4b !== undefined && secondband4b !== undefined && multiplier4b !== undefined && tolerance4b !== undefined) {
        calculate();
    }
});

function calculate() {
    var mult, resDisplay, resSearch, res;
    var calctype = $('ul.calc-type > li.active > a').attr('data-target');
        
    res = ((100 * firstband4b) + (10 * secondband4b)) * multiplier4b / 1000;

    if (res >= 1e9) {
        res /= 1e9;
        mult = "G";
    } else if (res >= 1e6) {
        res /= 1e6;
        mult = "M";
    } else if (res >= 1e3) {
        res /= 1e3;
        mult = "k";
    } else {
        mult = " ";
    }

    resDisplay = res + mult + " Ohms";
    resSearch = res + "+" + mult + "Ohms";

    resDisplay += " " + tolerance4b;
    $('#result4b').text(resDisplay);

    }

$(document).click(function(e) {
    if ($(e.target).closest("dt").length == 0 && e.target.className.indexOf('color-item') == -1 && e.target.tagName !== 'DT'){ 
        $(".dropdown ul").hide();
    }
});

$(".dropdown img.color").addClass("colorvisibility");
$(".dropdown img.color").toggleClass("colorvisibility");

// Add smooth scrolling to all links
$("#btn-instructions").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      var windowWidth = $(window).width();

      if (windowWidth <= 767){
        $('html, body').animate({
            scrollTop: $(hash).offset().top + 270
        }, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
      }else{
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
      }

    } // End if
});

$(function () {
    // Custom modal
    $('.modal-image').on('click', function () {
        location.hash = '#modal';
        $('body').addClass('overflow-hidden');
        $('#imageModal').addClass('open-modal');
        $('#the-img-modal').attr('src', $(this).attr('src'));
        $('#caption').text(this.alt);
    });

    // Close the modal
    $('.close-modal, #the-img-modal, #imageModal').on('click', function () {
        history.replaceState({}, document.title, window.location.href.split('#')[0]);
        $('body').removeClass('overflow-hidden');
        $('#imageModal').removeClass('open-modal');

        document.body.style.zoom = "100%";
    });

    $.getScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js");
});
