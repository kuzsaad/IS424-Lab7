document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#colorForm').onsubmit = function(event) {
        event.preventDefault();

        let color = document.querySelector('#colorInput').value;

        document.querySelector('h1').style.color = color;
    };

});
