var toDoUrl = "http://tiy-fee-rest.herokuapp.com/collections/ryantodos";
	console.log(toDoUrl);


$(document).ready(function(){
	myToDoList.init();
});

var myToDoList = {
	init: function(){
		this.initStyling();
    	this.initEvents();
	},
	initStyling: function() {
    	this.renderToDos();
  	},
  	initEvents: function() {
  		$(".well").on("click", "button", function(e) {
  			e.preventDefault();
  			myToDoList.addToDo();
  		});

  		$(".toDoList").on("click", ".glyphicon", function(event) {
			event.preventDefault();

			if ($(this).closest("li").hasClass("completed")) {
				$(this).closest("li").removeClass("completed");
				return;
			} else {
				$(this).closest("li").addClass("completed");
				myToDoList.removeToDo();
			};
		});

		$(".navbar").on("click", "button", function(event) {
			event.preventDefault();
			if ($("li").hasClass("completed")){
				$(".completed").closest("li").remove();
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

  	},
  	render: function($el, template, data) {
      	var tmpl = _.template(template, data);
      	$el.html(tmpl);
  	},
  	renderToDos: function() {
	    $.ajax({
	      url: toDoUrl,
	      type: "GET",
	      dataType: "json",
	      error: function(jqXHR, status, error) {
	        alert("Failed");
	      },
	      success: function(data) { 
	      	var posts = window.posts = data;
	      	myToDoList.render($(".toDoList"), Templates.toDoPost, posts);      
	        
	      }
	    });
	  },
	 addToDo: function() {
	 	var listItem = $("input:text").val();
		var toDoObj = {
  			title: listItem
  		};

  		$.ajax({
  			url: toDoUrl,
  			type: "POST",
  			data: toDoObj,
  			dataType: "json",
  			error: function(jqXHR, status, error) {
	        	alert("Failed");
	      	},
	      	success: function(data) {       
	        	myToDoList.renderToDos();
	      	}
  		});
	  },
	  removeToDo: function(e) {
	  	var toRemove = $(".completed").data("postid");
	  	//var willRemove = toRemove.data("postid");
	  	console.log(toRemove);
	  	
	  	
	  		$.ajax({
	  			url: "http://tiy-fee-rest.herokuapp.com/collections/ryantodos/" + toRemove,
	  			type: "DELETE",
	  			error: function(jqXHR, status, error) {
		        	alert("Failed");
		      	},
		      	success: function(data) { 		  
		      		alert("Item removed!");	
		      	}
	  		});
	  	
	  },












};













