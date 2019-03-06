
$(".A").click(function(){
    var gender=$(".gender").val();
    var number=parseInt($(".number").val());

    if (gender=== "boy" && number===1){ 
        $(".message").text("You are Thomas");
    } else if (gender=== "boy" && number===2){
        $(".message").text("You are James");
    } else if (gender=== "girl" && number===1){
        $(".message").text("You are Emily");
    } else if (gender=== "girl" && number===2){
        $(".message").text("You are Percy");
    }
});