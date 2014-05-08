Templates = {};

Templates.toDoPost = [
	"<% _.each(posts, function(post, index, list){ %>",
    "<li data-postId=\"<%=post._id%>\"><span class=\"glyphicon glyphicon-ok\"></span><%= post.title %></li>",
        "<% }); %>"
].join("\n");