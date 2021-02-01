console.log("hello!");

$(".joke").text("What does a dog say when he sits on sand paper?")

var $one = $("#l1");
var $two = $("#l2");
var $three = $("#l3");

$one.on("click", function() {
	$(this).hide();
	$two.show();
	$("body").css("background-color", "pink")
})
$two.on("click", function() {
	$(this).hide();
	$three.show();
})
$three.on("click", function() {
	$(this).hide();
	$one.show();
})