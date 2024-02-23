//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseenter', function() {
            squares.forEach(otherSquare => {
                if (otherSquare !== square) {
                    otherSquare.classList.add('coffee');
                }
            });
        });

        square.addEventListener('mouseleave', function() {
            squares.forEach(otherSquare => {
                if (otherSquare !== square) {
                    otherSquare.classList.remove('coffee');
                }
            });
        });
    });
});
