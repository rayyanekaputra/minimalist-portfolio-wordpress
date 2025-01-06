$(document).ready(function () {

    $("#home h1").on('mouseover mouseout', function () {
        console.log($(this).text().split(""))
    });
});