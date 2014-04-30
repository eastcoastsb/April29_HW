/*function ToDoTemplate(item) {
	this.item = item;
	var toDoArr = [];
	var toDoObj = {
  			title: listItem
  		};

	toDoArr.push(toDoObj);
	return toDoArr;

}*/




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

		$("input:text").focus(function(){
		if(this.value === this.defaultValue){
			this.value = '';
		}
	});
	$("input:text").blur(function(){
		if (!this.value.length) {
			this.value = this.defaultValue;
		}
	});
	});



});



