$(document).ready(function() {
    $('a[href^="#"]').on("click", function(e) { // a[href^="#"] is a special selector that selects every anchor tag that its link start with #
        e.preventDefault(); // Prevent the default behaviour of the browser

        var target = this.hash;
        var $target = $(target);

        $("html, body").animate({
            "scrollTop": $target.offset().top

        }, 1000, "swing");
    });
});
