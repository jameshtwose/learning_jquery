$(function() {

    $("#btn1").on("mouseover", function() {
        $("#panel1").slideToggle(200);
    });

    $("#btn1").on("click", function() {
        $("#panel1 .panel-body").html("my new content");
    });

    $("#btn2").on("mouseover", function() {
        $("#panel2").slideToggle(200);
    });

    $("#btn3").on("mouseover", function() {
        $("#panel3").slideToggle(200);
    });

    $("#btn4").on("mouseover", function() {
        $("#panel4").slideToggle(200);
    });

});