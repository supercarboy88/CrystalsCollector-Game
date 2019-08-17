


$(document).ready(function(){
    $("#random-button").on("click", function() {
        var random = Math.floor(Math.random() * 12) + 1;
        $("#random-number").text(random);

        console.log(random);
    });
});