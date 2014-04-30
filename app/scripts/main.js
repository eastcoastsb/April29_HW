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
		var toRemove = $(".completed").val("");
		var removeThis = toDoArr.indexOf(toRemove);

		if ($("li").hasClass("completed")) {
			toDoArr.splice(removeThis, 1);
			$(".completed").remove();
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














