const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
    container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
    container.classList.remove("change");
});

const colors = ["#E77471", "#ffa07a", "#008080", "#43C6DB", "#EDDA74", "#afeeee"];

// $('.navbar-collapse a').click(function(){
//     $(".navbar-collapse").collapse('hide');
//   });

jQuery(document).ready(function() {
    jQuery('.navbar-collapse a').click(function() {
        jQuery('.navbar-collapse').css('height', '0');
        jQuery('.navbar-collapse').removeClass('in');
    });
});


let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
    item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});

$(document).on('click', '.navbar-collapse.in', function(e) {
