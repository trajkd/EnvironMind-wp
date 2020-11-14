$("#hamburger-btn").on('click', function() {
    $("#menu").addClass("open");
    $("#menu-content").removeClass("el-hide-complete");
    $("#menu-content").addClass("el-show-complete");
    $("#menu-content").css({"visibility":"inherit","opacity":"0.9","transform":"matrix(1, 0, 0, 1, 0, 0)"});
});

$(".close-menu-btn").on('click', function() {
    $("#menu").removeClass("open");
    $("#menu-content").addClass("el-hide-complete");
    $("#menu-content").removeClass("el-show-complete");
    $("#menu-content").css({"visibility":"hidden","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 0)"});
});

$(".close-menu-btn").on('click', function() {
    $(".el-init").removeClass("open");
});

$("#hamburger-btn").on('click', function() {
    $(".el-init").addClass("open");
});