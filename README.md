
# Flock Dynamics and Societal Catastrophe 
## an essay with javascript fidgets 
<link rel="shortcut icon" href="images/favicon.ico">
<script src="./simulation/application.js"></script>
<link href="./simulation/boids.css" media="screen" rel="stylesheet">
<script src="./simulation/canvas_init.js"></script>
<script src="./simulation/vector.js"></script>
<script src="./simulation/boid.js"></script>
<script src="./simulation/simulation.js"></script>
<script src="./simulation/boids.js"></script>
<script src="./simulation/obstacle.js"></script>
<iframe src="https://giphy.com/embed/o9QZ9O8CmdZAs" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
I have a clear memory of sitting by a window at a young age watching a flock of starlings weave its way through a dimly lit sky. The ebb and the flow of that mass of birds drew me in completely and I sat and watched their collective movements until they finally came to roost. It was an awesome display, and I mean that in an old sense of the word. That is to say it filled me with awe--which I can’t say is always a pleasant feeling. There was something almost ominous in the coordination of their movements. They seemed to be so instantaneously in sync and I was intimidated by that perfect communication. Since then, this behaviour has held my interest. But I am coming to see it as a lens through which to view the behaviour of people and many of our society’s current ailments. I want to know how a group of starlings, so in sync and coordinated, can on occasion fly head first into a wall.

This behaviour in starlings is called a murmuration and is exhibited by many herd animals including bats and minnows. It can be thought of as an emergent property. In other words, it is a property of a group that arises out of the properties of individuals and the interactions there of. Colour is often used as an example of an emergent property — a single molecule does not have a colour whereas a group of molecules, a shirt for instance, most certainly does. In this case, the colour of your shirt is a function of the of arrangement of the molecules of which it is made, and in particular which frequencies of light are reflected or absorbed by this arrangement. The colour red is an emergent property of molecules that when put together, absorb all frequencies of visible light but red. This is a rather banal example of an emergent property, but the topic becomes more interesting when you think of things such as cosmic order or consciousness. It seems unlikely that a single neuron is conscious, but the group that make up mine and your brains are. Consciousness, or in this case starling murmurations, are emergent properties worth at least a few paragraphs.

<canvas id="boids1" class="unselectable"></canvas>

We are living in a convenient time for such paragraphs as we have at our disposal a relatively new tool for scientific exploration — computational simulation. There are countless philosophical arguments dedicated to the role of simulation in science and I will by no means attempt to summarize them here. I will simply posit that a new and interesting way of investigating a natural phenomenon is to attempt to simulate it yourself. If you are able to recreate an accurate simulation of the observed phenomenon then you will have learned something about what initial conditions that phenomenon may need to arise, and what rules need to be followed to maintain it. This is particularly interesting when the phenomenon is an emergent one, because we are able to simulate the individuals and see if the we can accurately recreate the global property.

This investigative tool has been used for the behaviour of ants, the growth of plants, or the development of entire ecosystems[^1] to name just a few. Here it has been used to explore the murmurations of birds[^2][^3].

[^1]:See wikipedia for an overview of each, and respectively, [here](https://en.wikipedia.org/wiki/Artificial_ants), [here](https://en.wikipedia.org/wiki/Simulated_growth_of_plants) and [here](ttps://en.wikipedia.org/wiki/Ecosystem_model)
[^2]:code forked from [Emergent Mind](http://www.emergentmind.com/boids) and updated by me.
[^3]: thanks to Martha, Thomas, Jon, Michael, Aidan, and Lyon for suggestions and edits, and Natalie for css sanity. 

Each bird above (small red triangle) is governed by three simple rules:
1. Fly towards your neighbors (cohesion)
2. Match your neighbours’ speed and direction (alignment)
3. Don’t get too close to your neighbours (separation)

That’s it. All the patterns, movement, and motion are just born from those simple rules followed by each bird.

In practice, these rules are implemented by calculating the distance between each bird and applying the attraction or repulsion inversely proportional to that distance squared. Similar equations can be used to model the movement of the moon around the earth, the earth around the sun and the sun around the rest of the cosmic expanse, which alludes to the omnipresence of this type of movement, and explains my fascination. But before you go off to scrawl equations on the wall in crayon or start a neo-pythagorean cult, I need to remind you that there is a difference between an ontological claim and a convenient explanatory tool. I won’t even claim that the equations used to create these visualizations have anything to do with the movement of birds or indeed the behaviour of people. But they are at least a useful way of thinking about it.

To be specific, the code used to create this illustration keeps track of the velocity of each bird and calculates the distance between each other bird sixty times a second. It then updates the velocity of each bird based on the three rules outlined above, each multiplied by a constant value. In the code there are three numbers that represent the relative effect of rules one, two and three, which were predefined by me and used to determine the strength of each rule. If the multiplier for rule one is too big, then the birds will all crowd together into a single point. If the multiplier for rule three is too big, then they will all flee from each other in a chaotic mess. Each would result in something thoroughly uninteresting to look at.

In the box below you can turn these knobs up or down yourself and see how it changes their behaviour. You will notice that a fine balance needs to be found between these three numbers in order for the flock behaviour to arise.

<form name = "params" id = "params" >
    <text><b> cohesion: </b></text> <input id="cohesionMultiplier_boids2" input type="range" name="cohesionMultiplier" min="0" max="10" value="1" step="0.1" class="slider"/>
    <br>
     <text><b> alignment: </b></text> <input id="alignmentMultiplier_boids2" input type="range" name="alignmentMultiplier" min="0" max="10" value="1" step="0.1" class="slider"/>
    <br>
    <text><b> separation: </b></text> <input id="separationMultiplier_boids2" input type="range" name="separationMultiplier" min="0" max="10" value="2" step="0.1" class="slider"/>
    <br>
</form>	
<canvas id="boids2" class="unselectable"></canvas>

We can make things more interesting by giving them something to avoid, by adding in a fourth rule — stay away from the predator. In the box below you can play that role. Move your mouse (or finger if on a phone) into the box and notice how the birds avoid you. I have also added another obstacle for them to avoid in the large, red circle in the middle. If the birds come in contact with that circle, they will be removed from the simulation, or to put it more tersely and metaphorically, they will be killed.

Let’s say that we have observed catastrophe and our flock has flown straight into a that obstacle. We must now play the role of detective and try to determine what happened to cause such a tragedy. Two explanations jump to mind: either a small number of saboteurs, with malice and forethought, guided the flock to destruction, or all the birds were collectively unable to avoid the obstacle because they were blindsided by other motivators. If we turn down the dial for their desire to stay seperate and turn up the dial for their desire to align themselves,the flock will be too slow at changing course and may fly straight into the obstacle. In the box below you can play with the number of saboteurs (where each saboteur wants to fly into the obstacle, and is represented in green) and the relative weighting of the rule forces. I believe you will find that it is easier to incite destruction of the flock by changing the rule weightings than by added individual saboteurs.


<form name = "params" id = "params" >
    <text><b> cohesion: </b></text> <input id="cohesionMultiplier_boids4" input type="range" name="cohesionMultiplier" min="0" max="10" value="1" step="0.1" class="slider"/>
    <br>
    <text><b> alignment: </b></text> <input id="alignmentMultiplier_boids4" input type="range" name="alignmentMultiplier" min="0" max="10" value="1" step="0.1" class="slider"/>
    <br>
    <text><b> separation: </b></text> <input id="separationMultiplier_boids4" input type="range" name="separationMultiplier" min="0" max="10" value="2" step="0.1" class="slider"/>
    <br>
    <text><b> saboteurs: </b></text> <input id="num_sabateurs_boids4" input type="range" name="num_sabateurs" min="0" max="50" value="0" step="1" class="slider"/>
    <br>
</form>	
<button id="reset_button_boids4" class="btn">Reset</button>
<canvas id="boids4" class="unselectable"></canvas>

Now by this point you are no doubt tired of birds and small red triangles, and perhaps see what I am getting to, so I will be blunt.

When you are frustrated with the way society is functioning, I want you to think of these birds. When you are concerned about the rampant inefficiencies of big government I want you to think about which individual well - meaning motivators are creating that emergent behaviour. When you are worried about the rise of the alt-right, I want you to try to understand what is enticing people to join that murmur. When you are disheartened by the slow rate of social progress, I want you to visualize a murmur of starlings a continent wide and imagine it trying to change course. And when something catastrophic happens, I want you to think about the relative probabilities of individual malicious saboteurs, or simple unaligned motivations.

But more importantly and more urgently I want you to think about everyone around you, those you agree with and those you disagree with alike, as members of the same flock. And I want you to think about yourself embedded within, and what you can do to avoid the wall.



<div class="share-page">
    Share this on &rarr;
    <a href="https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.github.url }}&via={{ site.twitter_username }}&related={{ site.twitter_username }}" rel="nofollow" target="_blank" title="Share on Twitter">Twitter</a>
    <a href="https://facebook.com/sharer.php?u={{ site.github.url }}" rel="nofollow" target="_blank" title="Share on Facebook">Facebook</a>
    <a href="https://plus.google.com/share?url={{ site.github.url }}" rel="nofollow" target="_blank" title="Share on Google+">Google+</a>
</div>
