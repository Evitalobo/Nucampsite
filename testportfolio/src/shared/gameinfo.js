
import React from 'react';
import ReactPlayer from "react-player";

export const GAMEINFO = 
[
    {
        id: 0,
        campsiteId: 0,
        image1: <img className= " col-6" src="/img/wp/img2.jpg" alt="" />, 
        image2: <img className= " col-5" src="/img/wp/img3.jpg" alt="" />,
        image3: <img className= "imgcenter col-8" src="/img/wp/kitchen.png" alt="" />,
        image4:  <img className= "col col-lg-6" src="/img/wp/screen2.PNG" alt="prototype1" />,
        image5: <img className= "col col-lg-6" src="/img/wp/screen5.PNG" alt="prototype1" />,
        image6: <img className= "col col-lg-10 imgcenter" src="/img/wp/screen4.PNG" alt="prototype1" />,
        image7:"",
        altname:"Descent",
        movie: <ReactPlayer url='https://youtu.be/92ma43ZWkwI' width='100%' />,
        overview:"Window Pane is a VR 3D first person strategic narrative game based on Project MKUltra. The player is a student who agreed to sign up for a pharmaceutical trial in exchange for free housing. The player will solve puzzles and try to find a way to successfully escape.",
        tools:" Unity 3D , Oculus VR, Twine, Trello",
        timeline:" Fall 2018 - Summer 2019",
        team: "11 members",
        roles:" Product Owner/Designer, UX lead, Developer",
        process1: " The idea came to me when I was trying to devise a potential pop-up escape room concepts at my old escape room (EXIT, Santa Cruz). In a 2 week sprint, I used Twine to create 'Descent' to map out the multiple story branches the player could take and the different endings. I tested a few puzzles and the use of multiple rooms to see what paths the player would take initially.  It allowed me to scope down the project before moving to Unity. Once we migrated to Unity, I began drafting up a layout of what each room would look like and potential puzzles. Below is a link to the first prototype:",
        process2:" Once we got a playable prototype. I began testing to see how the effects of the in-game medication would affect the players. While testing, I had to cut at least 80% of the effects because they were too over bearing. Such as- a ceiling that kept expanding, chromatic abberation or similating effects of dizziness. It was clear that some puzzles didn't have enough information either so we left more notes with shorter thought-provoking riddles. Once we got all the rooms and most of the assets into the game. I began constructing what the dream space would look like. The sequence of the game appears as Tutorial , Day 1, Dream , Day 2 and Break out sequence. With a total of 3 levels and different puzzles with increasing difficult as you progress through the game.  ",
        process3:" Soon after we had finished day 1, we started transitioning to incorporate Oculus VR. This was the most difficult challenge I encountered during the progress of the game and it took much longer than I anticipated in the sprint. We had to resize all the assets, align the camera with the player height and allow a more fluid motion for picking up items in VR and reading them with ease. We had to implement the inventory system where you press a certain button to reveal all the items rather than having it on screen the whole game. Many of the effects we had in the non-vr prototype also had to be scraped due to player sensitivity. Overall, I learned that everyone has a very different tolerance to VR and motion with it. For more information about the game, check out windowpane.com and the twitter @WindowPaneGame . ",
        process4:" ",
        process5:" ",
        link: "https://people.ucsc.edu/~elobo/twine/Descent/Descent.html",
        caption1:"Top left: A flowchart of items needed to advance to day 2.  Top right: A flowchart of items needed to finish game.  Bottom: A top down view of the kitchen.",
        caption2:"First: A view of 1/3 rooms in the dream level.  Second: A view of the kitchen in day 1 & day 2",
        caption3: "Above: Final scene before you break the (4th) wall and enter the watching room"
    },
    {
        id: 1,
        campsiteId: 1,
        image1: <img className= "col-4" src="/img/float/1.png" alt="" />, 
        image2: <img className= " col-4" src="/img/float/2.png" alt="" />,
        image3: <img className= " col-4 mb-3" src="/img/float/3.png" alt="" />,
        image4: <img className= " col-12 mb-3" src="/img/float/wifall.png" alt="" />, 
        image5: "",
        image6:"",
        image7:"",
        altname:"",
        
        overview:"Will it Float is a hypercasual 3D mobile game produced for Beach Day Studios. You build a toy boat with household objects and ensures that it floats in order to progress to the next level.",
        tools:" Unity",
        timeline:" June 2020-July 2020",
        team: "2 members",
        roles:"UI/UX engineer, Developer",
        process1: " I designed a few wireframes for how the user would interact with the ship and the objects to attach. Out of the three options, we went with a hybrid of the first and last UI. There would be nodes attatched to the ship and the user would be able to drag and drop the item onto the nodes. ",
        process2:" I ended up getting rid of the weight button since it was not important into factoring if the ship would sink or not but rather if it was balanced. Rotation buttons were also included on the tin cans in order to to rotate and object once it was set into a node. The items in the green box are the draggable items. I used the color green to show safety but also to signal that the user can click and drag the objects in that area. I used a bright blue button for the 'Set Sail' button to make the user feel calm and also represent the color of water.  Each level has a different location that is relatively close to water. For example, the sink would be where the ship sails in the kitchen.   ",
        process3:" ",
        process4:" ",
        process5:" ",
        link: "",
        caption1:"Above: 3 Potential low-fidelity wireframe options for the UI of the ship building component",
        caption2:"Above: 3 Ship Creation levels in order from easiest to hardest",
        caption3: ""
    },
    {
        id: 2,
        campsiteId: 2,
        image3: <img className= "col-4" src="/img/gendesign.png" alt="" />, 
        image2: <img className= " col-4" src="/img/gen/2.1.png" alt="" />,
        image1: <img className= "  col-3 mb-5 " src="/img/gen/1.png" alt="" />,
        image4: <img className= " col-12 imgcenter " src="/img/gen/gen3.png" alt="" />, 
        image5: <img className= " col-8 imgcenter " src="/img/gen/3.3.png" alt="" />,
        image6: <img className= " col-6" src="/img/gen/4.3.png" alt="" />,
        image7: <img className= " col-6" src="/img/gen/4.2.png" alt="" />,
        altname: "Github Repo",
        
        overview:"A collection of mini projects coded using P5.JS. This collection includes reactive Audio Visualization with particle systems, Terrain Generation with Perlin Noise, Interactive NPC producing generative grammars art and Evolving Cars using Genetic Algorithms. ",
        tools:" P5.js(Processing)",
        timeline:" June 2019-July 2020",
        team: "Solo Project",
        roles:" Developer ",
        process1: "Music Visualization with particle systems: Circles fall to the bottom of the screen as thunder crackles and rain hits the floor. Watch the size of the “droplets” get bigger as the music gets louder. I used the FFT(Fast Fourier Transform) to visualize how audio such as a thunder sound can be used to effect particle systems implemented using P5. Once a particle gets to the bottom of the screen it “dies” and respawns at the top. " ,
        process2:" Terrain Generation with Perlin Noise: Noise produces a naturally ordered sequence of pseudo-random numbers. It can be used to generate various effects with organic like properties. It can also be used for world generation. By using the width and the height to generate noise, I was able to map it to the depth value and create a random world based on a seed input- similar to the algorithm minecraft uses. The world generator constructor takes in a seed,width,height and depth value. Based on the depth of each cube, it is mapped to a specific texture. You can use the WASD keys to move throughout the world and drag the mouse to rotate the angle of the camera. ",
        process3:" Interactive NPC creating Generative Grammars art: Generative Grammars can be used to generate a variety of structured sequences of symbols that are part of a vocabulary. The meaning of these symbols depends on the generative context (e.g. characters, words, colors, musical notes, video game levels, movement instructions, etc). I used non-deterministic grammar to create small little abstract visual art. The player(circle) will use the WASD keys to move towards the NPC. Once the player is close enough, the NPC will turn yellow and you can press spacebar to interact with it. You can press the “y” key to generate a new abstract art piece and press “n” to close the dialogue box. I used two different axioms to achieve my result. Specific rules included: changing colors, changing stroke color, placing ellipses, placing rectangles and also changing the direction they went. Below are some pictures that I used while progressing through this assignment.",
        process4:" Evolving Cars with Genetic Algorithms: Genetic Algorithms (GA) are a stochastic search method inspired by biological evolution that can be applied to generate complex content with feasibility constraints. I used a Genetic Algorithm to evolve cars to traverse a bumpy terrain- Much similar to BoxCar2D. The genetic algorithm takes the best car at the end of the race and uses it as a parent to create offsprings. The offsprings has two parents and using the rouletteWheel() function, it will pick a value from either parent. Then it will mutate one or few of values stored in the cars features. Without mutation- it would be impossible to have a different input from the parent. Hence the child of the parent will then be generated based on the fitness function. You can see in the pictures below that the current generation resembles the past generation with just minor mutations.",
        process5:" ",
        link: "https://github.com/Evitalobo/UCSC---Generative-Design",
        caption1:"First: Particle System responding to thunder sounds. Second: Side view of perlin noise terrain. Third: Top view of perlin noise terrain. ",
        caption2:"Above: 3 Generative grammar art pieces",
        caption3: "Above: 2 different generations of the cars (18th and 19th generation)"
    },
    {
        id: 3,
        campsiteId: 3,
        image1: <img className= "col-6 imgcenter mb-2" src="/img/cc/2.png" alt="" />, 
        image2: <img className= " col-6" src="/img/cc/4.png" alt="" />,
        image3: <img className= "  col-6 " src="/img/cc/3.png" alt="" />,
        image4: <img className= " col-6 " src="/img/cc/1.png" alt="" />, 
        image5: <img className= " col-6 " src="/img/cc/5.png" alt="" />,
        image6: <img className= " col-10 imgcenter" src="/img/cc/6.png" alt="" />,
        image7: "",
        altname: "Crystal Caves",
        
        overview:"Crystal Caves is a 4-Directional 2D adventure game that is about an amnesiac mad scientist who wakes up on an island with traces of a ravaged civilization. As the player explores and navigates the island by solving puzzles and collecting resources, they find an old lab that reveals secrets about the island’s mysteries, including crystals in an underground cavern that possess mysterious properties. Use all the tools and resources at your disposal and you might just uncover the greatest mystery of all that the island has to offer.",
        tools:"Phaser3(HTML5,JS,CSS)",
        timeline:"May 2018-June 2018",
        team: "3 person",
        roles:" Product Designer, Developer , Artist ",
        process1: " I grew up in Florida and I remember as a kid going out to sandbars and mangroves off the coast and imagining finding a lost civilization. This game is an ode to that childhood imagination. I mapped out the entire map of the island with the story and puzzle. Once that was finalized, I began figuring out how the main tool will be used to progress in the story. In the beginning it only has two settings but as the user interacts with the crystals, the gain 4 abilities in total. I hand-painted all of the environmental assets to give it a feel of a children's story book. I havent seen any games use handpainted assets so I figured it would be good to try it out. I painted all of the environment and object art in the game using watercolor and acrylic, then scanning it and adding it into the game. " ,
        process2:" I programmed several areas of the game- from object interactions, story dialogue, puzzle components and adding to inventory systems. Much of the code can be found on the github repo which can be found in this link:  https://github.com/Evitalobo/CrystalCove  ",
        process3:" ",
        process4:" ",
        process5:" ",
        link: "https://evitalobo.itch.io/crystalcaves",
        caption1:"First: 1st screen in game. Second: 3rd screen in game featuring dialogue and inventory. Third: 3rd screen in game featuring a new ability that was used. ",
        caption2:"First: An abandoned house where the user finds a crystal.  Second: An abandoned lab where the user finds another crystal.",
        caption3: "Above: Final level where user is about to complete the puzzle "
    },
    {
        id: 4,
        campsiteId: 4,
        image1: <img className= "col-6 " src="/img/ww/1.png" alt="" />, 
        image2: <img className= " col-6" src="/img/ww/2.png" alt="" />,
        image3: "" ,
        image4: <img className= " col-10 imgcenter" src="/img/WWWB.png" alt="" /> , 
        image5: "" ,
        image6: "" ,
        image7: "",
        altname: "Wild West Wolf",
        
        overview:"An Endless Runner tribute game made for my love for the wild west.",
        tools:"Phaser3(HTML5,JS,CSS)",
        timeline:"May 2018",
        team: "Solo",
        roles:" Product Designer, Developer , Artist ",
        process1: "  My last name Lobo translates to 'Wolf' in Spanish. The player plays as a Mexican Wolf, a species that belongs to the Gray wolf family and also one of the most endangered wolves in all of North America. I hope to inspire and educate some people of the perils the Mexican Wolf faces as a consequence of trapping and hunting. " ,
        process2:" I handpainted all game objects/assets with watercolor and programmed the entire game using Phaser 2. ",
        process3:" ",
        process4:" ",
        process5:" ",
        link: "https://evitalobo.itch.io/wild-west-lobo",
        caption1:"Above: Gameplay of Wild West Wolf ",
        caption2:" ",
        caption3: ""
    },
 
]