# d3-hello-world

A quick example to test some basic functions of [D3](https://d3js.org/).

`lib/` containts the `d3.js` source, which can be downloaded here: https://registry.npmjs.org/d3/-/d3-7.6.1.tgz

`scripts/` contains the JavaScript for using D3.

To test, open `index.html` in a web browser. In Firefox this should just work. In Chrome, it is necessary to install a [web server extension](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb).

## The Basics for Setting Up D3
First, download the latest D3 release from https://d3js.org/. In there will be a file called `d3.js`, which can be placed anywhere in your project folder. Consider making a `lib/` folder to contain it. 

To include the D3 in your html, place `<script src = "lib/d3.js"></script>` in the header of `index.html`, like so:
````html
<html>
  <head>
    <script src = "lib/d3.js"></script>
  </head>

  <body>
  </body>
</html>
````

Next, create a `scripts/` directory and place a new file in there called `main.js`. This will contain your JavaScript code using D3.
Place `<script src="scripts/main.js"></script>` in the body of `index.html`:

````html
<html>
  <head>
    <script src = "lib/d3.js"></script>
  </head>

  <body>
    <script src="scripts/main.js"></script>
  </body>
</html>
````
You now have your environment set up to use D3.

## Testing D3
We can now test that D3 is running correctly by adding some code to `main.js`.

First, edit `index.html` to inculude some elements to modify using D3:

````html
<html>
  <head>
    <script src = "lib/d3.js"></script>
  </head>

  <body>
    <h1 id = "heading"></h1>
    <div id = "svg_container"></div>
    <script src="scripts/main.js"></script>
  </body>
</html>
````

Now we can add some code to `main.js` to find and modify both of these elements:

````javascript
// Use D3 to select the heading by ID and append some text.
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
````

Load `index.html` in your browser and you should see the following:
![Screen Shot 2022-10-31 at 11 05 39 AM](https://user-images.githubusercontent.com/7492320/198916680-0f88fc21-7488-4ba6-bba6-65e8009d94aa.png)

If this doesn't load, check the _console_ for any errors. Double-check that all folder and file names are correct. If using Chrome, make sure the web server is running and that you are accessing it correctly.
