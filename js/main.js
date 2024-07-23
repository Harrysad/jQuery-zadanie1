$(document).ready(function() {
    $('#animateButton').click(function() {
        $('#square').animate({
            width: '100px',
            height: '100px',
            left: '+=100px'
        }, 3000, function() {
            $(this).css('background-color', 'blue');
            $(this).css('transition', '5s');
            /* $(this).animate({
                
            }, 5000, function() {
                $(this).html('<h2>Animacja zakończona</h2>');
            }); */
            setTimeout(
                function() {
                    $('#square').html('<h2>Animacja zakończona</h2>');
                }, 5000);
        });
    });
});