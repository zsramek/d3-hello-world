// Replace the heading text using vanilla JS
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello, world!";

// Use D3 to select the heading by ID and append some text to the heading.
d3.select("#heading").append("span").text(" A basic D3 example:")

// Inject a new SVG into the container div with the ID "svgcontainer"
var width = 400;
var height = 400;
var svg = d3.select("#svg_container").append("svg").attr("width", width).attr("height", height);

// Draw a rectangle in the SVG
var x = 0;
var y = 0;
var r_width = 300;
var r_height = 200;
var fill = "blue"
svg.append("rect").attr("x", x).attr("y", y).attr("width", r_width).attr("height", r_height).attr("fill", fill)

// Create another SVG, draw a rectangle and transform it
var svg2 = d3.select("#svg_transform_container").append("svg").attr("width", width).attr("height", height);
svg2.append("rect").attr("x", x).attr("y", y).attr("width", r_width).attr("height", r_height).attr("fill", fill)
svg2.attr("transform", "translate(0, 60) rotate(30)");

// Create another rectangle and add a transition to it:
var t = d3.transition().duration(10000);
var svg3 = d3.select("#svg_transform_lib_container").append("svg").attr("width", width).attr("height", height);
svg3.append("rect").attr("x", x).attr("y", y).attr("width", r_width).attr("height", r_height).attr("fill", fill)
	.transition(t).style("fill", "red");

// Now let's draw a basic bar graph:
var data = [10, 5, 12, 15];
var bar_width = 300,
	scale_factor = 20,
	bar_height = 30;

d3.select("#data_list").append("span").text(data.toString())

// Here we create the SVG element
var graph = d3.select("#bar_chart")
	.append("svg")
   	.attr("width", bar_width)
   	.attr("height", bar_height * data.length)

// Now we create a transformation group to change the bar location, in order to stack the bars
var bar = graph.selectAll("g") 
   .data(data)
   .enter()
   .append("g")
   .attr("transform", function(d, i)
   {
      return "translate(0," + i * bar_height + ")";
   });

// Here we append rectangles to draw the bars
bar.append("rect").attr("width", function(d){return d * scale_factor;})
	.attr("height", bar_height - 1)
	.attr("fill", "red");


         