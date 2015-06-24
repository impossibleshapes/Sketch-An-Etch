$(document).ready(function () {

gridSize = prompt("How many squares would you like in one row? (<= 20 please!)");

// $("#grid").append($("<div>", {class: "grid_div"}));

function createGrid(gridSize) {
	for (var i = 1; i <= gridSize * gridSize; i++) {
		$("#grid").append($("<div>", {class: "gridDiv"}));		
	}

}
createGrid(gridSize);

cellSize = (100 / gridSize);
$(".gridDiv").width(cellSize + "%").height(cellSize + "%");

// This is to turn a block grey to black on hover !NOTWORKING

$(".gridDiv").mouseenter(function () {
	$(this).addClass("black_hover");
});


// This is to create a random color on mouse enter !WORKING

/* function rainbow(numOfSteps, step) {
    var r, g, b;
    var h = step / numOfSteps;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }
    var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    return (c);
}

randomColor = rainbow(1000, 10);

// Note the incorporation of styling into jQuery !NOTWORKING (except for background)

$(".grid_div").mouseenter(function () {
	$(this).css({
		"width": "100px", 
		"height": "100px", 
		"display": "inline-block", 
		"margin-top": "-4px", 
		"background": "randomColor"
})}); */

// this is an unfinished attempt to increment to black !WORKING

/* function moreDarker() {
	$(".grid_div").hover(function () {
		incremenetColor()
	})


var incrementColor = function(color, step) {
    var colorToInt = parseInt(color.substr(1), 16),
        nstep = parseInt(step);
    if(!isNaN(colorToInt) && !isNaN(nstep)) {
        colorToInt += nstep;
        var ncolor = colorToInt.toString(16);
        ncolor = '#' + (new Array(7-ncolor.length).join(0)) + ncolor;
        if(/^#[0-9a-f]{6}$/i.test(ncolor)){
            return ncolor;
        }
    }
    return color;
}; */

$("#clear").click(function () {			// reloads page
	location.reload();
})




}); //end of document ready















