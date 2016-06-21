/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
        offset: 51 ;

	// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    

    // Initialize WOW.js Scrolling Animations
    new WOW()init();

})(jQuery); // End of use strict

// minhas alterações //

// Get the modal
var modal = document.getElementById('myModal-1');

// Get the button that opens the modal
var btn = document.getElementById("myBtn-1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-1")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block"; }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}