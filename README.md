## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/nickfrosst/flock_dynamics/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/nickfrosst/flock_dynamics/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.


<!DOCTYPE html>
	<script src="./simulation/application.js"></script>
	<link href="./simulation/boids.css" media="screen" rel="stylesheet">
	<script src="./simulation/canvas_init.js"></script>
	<script src="./simulation/vector.js"></script>
	<script src="./simulation/boid.js"></script>
	<script src="./simulation/simulation.js"></script>
	<script src="./simulation/boids.js"></script>
	<script src="./simulation/obstacle.js"></script>
	<iframe src="https://giphy.com/embed/o9QZ9O8CmdZAs" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
	<h1>
	I have a very clear memory of sitting by a window at a young age and watching a flock of starlings weave its way through the dimly lit sky. The eb and the flow of that mass of birds drew me in completely and I sat and watched their collective movements until they finally came to rouste. It was an awesome display, and i mean that in an old sense of the word. That is to say it filled me with awe. Which i can’t say is always a pleasant feeling. There was something almost ominous in the coordination of their movements. They seemed to be so instantaneously in sync and I was intimidated by their perfect communication. This behaviour has held my interest since then, but more and more i am coming to see it as a lens through which to view the behaviour of people, and many of our societies current ailments. I want to know how a group of starlings so in sync and coordinated, dancing through the sky, can, on occasion, fly head first into a wall.
	</h1>
	<div id="container">	
		<canvas id="boids" class="unselectable"></canvas>
		</div>
	<div id="container2">
		<form name = "params" id = "params" >
		    <text><b> separationMultiplier </b></text> <input id="separationMultiplier_boids2" input type="range" name="separationMultiplier" min="0" max="10" value="2" step="0.1"/>
		    <br>
		    <text><b> cohesionMultiplier </b></text> <input id="cohesionMultiplier_boids2" input type="range" name="cohesionMultiplier" min="0" max="10" value="1" step="0.1"/>
		    <br>
		    <text><b> alignmentMultiplier </b></text> <input id="alignmentMultiplier_boids2" input type="range" name="alignmentMultiplier" min="0" max="10" value="1" step="0.1"/>
		    <br>
		    <text><b> sabateurs </b></text> <input id="num_sabateurs_boids2" input type="range" name="num_sabateurs" min="0" max="50" value="0" step="1"/>
		</form>	
		<canvas id="boids2" class="unselectable"></canvas>
		</div>
</body></html>