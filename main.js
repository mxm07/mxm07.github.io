var nav = document.getElementById("header");
var main = document.getElementById("main");

var scrolled = false;

window.addEventListener("scroll", function() {
	var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);

	if (top > 150) {
		if (!scrolled) {
			nav.className = "header-scrolled";
			main.className = "main-scrolled";
			scrolled = true;
		}

		//Make sure the navbar background scrolls with the rest of the page
		var val = "0px " + (-top) + "px";
		nav.style.backgroundPosition = val;
	} else {
		if (scrolled) {
			nav.className = "";
			main.className = "";
			scrolled = false;
		}
	}
});

var cumulativeOffset = function(element) {
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);

    return {
        top: top,
        left: left
    };
};

window.onload = function() {
	var about_link = document.getElementById("about_link");
	var about_header = document.getElementById("about_header");
	var projects_link = document.getElementById("projects_link")
	var projects_header = document.getElementById("projects_header");

	about_link.onclick = function(e) {
		var top = cumulativeOffset( about_header ).top;

		console.log( top + 50 );
		window.scrollTo({
			"top": top - 75, 
			"left": 0, 
			"behavior": 'smooth' 
		});

		e.preventDefault();
		return false;
	}
	projects_link.onclick = function(e) {
		var top = cumulativeOffset( projects_header ).top;

		window.scrollTo({
			"top": top - 75, 
			"left": 0, 
			"behavior": 'smooth' 
		});
		e.preventDefault();

		return false;
	}
}
