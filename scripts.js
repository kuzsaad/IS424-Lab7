document.querySelector("#colorForm").onsubmit = function(event) {
    event.preventDefault();

    let color = document.querySelector("#colorInput").value;

    document.querySelector("#hello").style.color = color;
};