
$("button").click(function() {
    var favFood = $(".input1").val();
    console.log("Your favorite food is " + favFood);
    $(".vote-result").text("Your favorite food is " + favFood);
    $("img").show();
    var favDrink = $(".input2").val();
    console.log("Your favorite drink is " + favDrink);
    $(".vote-result2").text("Your favorite drink is " + favDrink);
    var favSnack = $(".input3").val();
    console.log("Your favorite snack is " + favSnack);
    $(".vote-result3").text("Your favorite snack is " + favSnack);
    alert("Thanks for voting.");
});




