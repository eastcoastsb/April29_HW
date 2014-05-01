var itemsLeft = function() {
	var markup = "";
	var i;

	for (i = 0; i < toDoArr.length; i++) {
		markup += "Items Left" + "(" + toDoArr.length + ")";
		return markup;
		};
};




$(document).ready(function() {
	$(".well").on("click", "button", function(e) {
		e.preventDefault();

		var listItem = $("input:text").val();
			console.log(listItem);

		var toDoObj = {
  			title: listItem
  		};

  		toDoArr.push(toDoObj);

		var addTmpl = _.template($("#doList").html(), toDoArr);

		$(".toDoList").html(addTmpl);
			console.log(addTmpl);

		$("p").html("Items Left" + "(" + toDoArr.length + ")");

	});

	$(".toDoList").on("click", ".glyphicon", function(event) {
		event.preventDefault();

		if ($(this).closest("li").hasClass("completed")) {
			$(this).closest("li").removeClass("completed");
			return;
		} else {
			$(this).closest("li").addClass("completed");
			return;
		};

	});

	$(".navbar").on("click", "button", function(event) {
		event.preventDefault();
		//var toRemove = $(".completed").val();
		var removeThis = $(".completed").data("index");

		if ($("li").hasClass("completed")) {
			toDoArr.splice(removeThis, 1);
			$(".completed").remove();
			$("p").html("Items Left" + "(" + toDoArr.length + ")");
			return;
			
		};

		

		
	});

	$(".toDoTabs").on("click", ".navbar-text", function(event) {
		event.preventDefault();

		if ($(this).hasClass("nowActive")) {
			return;
		} else {
			$(this).siblings().removeClass("nowActive");
			$(this).addClass("nowActive");
		};


	});



});














