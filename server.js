//
// # SimpleServer
//
// A simple Express server
//
var http = require('http');
var path = require('path');

var express = require('express');
var bodyParser = require('body-parser');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

router.use(bodyParser.json());

router.use(express.static(path.resolve(__dirname, 'client')));

// API Routes
router.get('/api/v1/getData', function(request, response) {
    var Scene = [{
            id: 0,
            description: "Welcome to Trevor’s Game. It really doesn’t look like much, mainly because it was hastily done in a week, but it has a lot of heart and soul.  Let’s begin. Imagine a world with fantasy and magic. A realm where anything is possible such as dragons, unicorns, and free college education. Got that? Good. Because that’s not where you are, you were just fantasizing about somewhere else you could be. You’re a cubicle worker for something astonishingly boring. Today was like every other day, but something was different. You don’t know what it is, neither do I. But are you ready for an adventure, uhh… What’s your name?",
            choices: [{
                id: 0,
                text: "My name's not important, let's go!",
                transition: 1
            }, {
                id: 1,
                text: "My name is ___ I've got work to do.",
                transition: 2
            }, {
                id: 2,
                text: "Who are you? And how can I hear you?",
                transition: 3
            }]
        },

        {
            id: 1,
            description: "Okay. Hold your horses, we still don’t know where this is going. All we know is something is different, let’s look around. In your haste to search for adventure, you look around your cubicle, but there’s a disturbing lack of people. All of your co-workers have gone missing and it doesn’t look like they showed up for work at all.",
            choices: [{
                id: 0,
                text: "It’s a sign. I know it. It always happens this way.",
                transition: 4
            }, {
                id: 1,
                text: "Huh. That’s weird. I continue looking through the building.",
                transition: 5
            }, {
                id: 2,
                text: "That’s enough adventure for me.",
                transition: 6
            }]
        },

        {
            id: 2,
            description: "Excuse me, ___ ? There’s something ominous going on and you’re more concerned with working? That’s a little unconventional. But let’s go, there could be something around us right now. Something lurking for us. Are you going to let it happen?",
            choices: [{
                id: 0,
                text: "There’s something lurking? What am I doing here then?! Let’s go!",
                transition: 7
            }, {
                id: 1,
                text: "Something lurking? Don’t be silly.",
                transition: 8
            }, {
                id: 2,
                text: "It’s probably nothing. You’re a figment of my imagination, remember?",
                transition: 6
            }]
        },

        {
            id: 3,
            description: "I’m the narrator. That strange, all knowing, enduring and handsome narrator. You can hear me just like anyone else can hear you. If there was anyone else here, I would talk to them instead of you. Welp, I spoiled the next scene, but surprise, no one else is here, you’re all alone in this cubicle. How will you proceed?",
            choices: [{
                id: 0,
                text: "No one’s here? Great. I finally do whatever I want! Let’s burn everything.",
                transition: 12
            }, {
                id: 1,
                text: "If you’re all knowing, where did everyone go?",
                transition: 6
            }, {
                id: 2,
                text: "Why should I trust you?",
                transition: 6
            }]
        },

        {
            id: 4,
            description: "What? Look, there’s probably a reason for everything that is happening. You’re way too active and energetic for this. Calm down, and take deep breaths. Please, if you calm down, this would go a lot more smoothly. They’ve probably gone to the break room, just calm down first.",
            choices: [{
                id: 0,
                text: "I AM CALM!",
                transition: 10
            }, {
                id: 1,
                text: "Sorry. I will go to the break room.",
                transition: 5
            }, {
                id: 2,
                text: "Okay. That is enough for me.",
                transition: 6
            }]
        },

        {
            id: 5,
            description: "You come up across a yellow line that chaotically leads to the breakroom. I would tell you to follow that line, but it runs in swerves on the floor, the wall, the ceiling through twists and turns. It’s kinda interesting, but the line goes over a gaping gap, at least two meters.",
            choices: [{
                id: 0,
                text: "I jump the gap to continue following the line.",
                transition: 20
            }, {
                id: 1,
                text: "I climb down, maybe there’s another way around it down there.",
                transition: 20
            }, {
                id: 2,
                text: "It’s game over, man. I can’t make it without jumping. It’s a lost cause.",
                transition: 6
            }, ]
        },

        {
            id: 6,
            description: "Really? Come on. You've got to be the least bit concerned about where all of your friends are. Your fellow coworkers that you've been working with for years. I don't know, maybe something will happen to you, your family, or worst of all, your dog. You do have a dog, right? Well, you get the idea. Something bad can and will happen to you for doing nothing.",
            choices: [{
                id: 0,
                text: "You're right. I will go investigate the mysterious mystery that's happening.",
                transition: 5
            }, {
                id: 1,
                text: "I guess, but this is all a game right? Nothing bad is going to happen to me.",
                transition: 9
            }, {
                id: 2,
                text: "No, that's it. I'm done for the day. Maybe I'll go back home.",
                transition: 9
            }, ]
        },

        {
            id: 7,
            description: "Well, I don't know if there is anything lurking about here. But you notice that you're the only person in the building, probably. There's no one else to be seen around, but if there were anyone, they would be at the breakroom. Let's go.",
            choices: [{
                id: 0,
                text: "Forget them, I've got to get out of here.",
                transition: 6
            }, {
                id: 1,
                text: "People, right. Got to find them. The breakroom is around here somewhere.",
                transition: 5
            }, {
                id: 2,
                text: "Mother always said, if you're in trouble, stay in your bubble.",
                transition: 6
            }]
        },

        {
            id: 8,
            description: "Yes, there could be something lurking out there. Take this seriously. I know this is a game and all, but it's not fun unless you follow my directions blindly. This is a trust between you and me. Do you not trust me?",
            choices: [{
                id: 0,
                text: "Yeah, I trust you, just lead the way. This is your game.",
                transition: 3
            }, {
                id: 1,
                text: "No, not really. You've been extremely weird.",
                transition: 6
            }, {
                id: 2,
                text: "Why should I trust you?",
                transition: 6
            }]
        },

        {
            id: 9,
            description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH! You're scaring me! Please, calm down, or else my boss will fire me from this job!",
            choices: [{
                id: 0,
                text: "What makes you think I will stop?!",
                transition: 10
            }, {
                id: 1,
                text: "NEVER! FREEDOM OF SPEECH!",
                transition: 10
            }, ]
        },

        {
            id: 10,
            description: "Please. Just give me a second chance. I can give them a story that they'll remember. Please, don't fire me.",
            choices: [{
                id: 0,
                text: "[Continue]",
                transition: 11
            }]
        },

        {
            id: 11,
            description: "*Howdy!* *My name is DOG.* *It has come to our attention that your narrator is no longer suitable for storytelling.* *Many factors include old age, illness, or, most likely... terrible people.* *You've chosen this path, and we've had to get rid of one of our narrators.* *No more choices.* *No more story.* *Only one consequence.*",
            choices: [{
                id: 0,
                text: "[Continue]",
                transition: 0
            }]
        },

        {
            id: 12,
            description: "So I unleashed a little bit of bottled up tension. Let's not stray far from the story I wrote up for you. Come on, let's try to find your friends.",
            choices: [{
                id: 0,
                text: "Forget that! The world needs to burn and start again.",
                transition: 13
            }, {
                id: 1,
                text: "Okay, let's find my friends, then set them on fire.",
                transition: 14
            }]
        },

        {
            id: 13,
            description: "Okay, do you even want to go through my story? It's okay if you don't, I'll just find something to try to sate you.",
            choices: [{
                id: 0,
                text: "No. I just want something else than the usual. It's mainly because you're a bad narrator.",
                transition: 14
            }, {
                id: 1,
                text: "Yeah, maybe just to annoy you by ignoring all of your advice.",
                transition: 14
            }, ]
        },

        {
            id: 14,
            description: "Okay. Sounds like we need a new story. Alright. I will tell you, I am what people believe to be God. I can control your reality. Allow me to strip you of the world that you knew and replace it with something else... There. Let's try this. Here's a contraption that moves this cardboard unicorn into a fire. There's a button in front of you that will move back the unicorn. Got it?",
            choices: [{
                id: 0,
                text: "Fine. *Save the unicorn to satisfy the narrator.*",
                transition: 15
            }, {
                id: 1,
                text: "*Let the unicorn burn immediately.*",
                transition: 16
            }]
        },

        {
            id: 15,
            description: "This game is good, huh?",
            choices: [{
                id: 0,
                text: "*Save unicorn.*",
                transition: 15
            }, {
                id: 1,
                text: "*Burn unicorn.*",
                transition: 16
            }]
        },

        {
            id: 16,
            description: "There's no sating your bloodlust, is there? Here, let me deconstruct your world again. There. We're in a Geeblin Slayin' Sim. But you can't play, I'll play for you. Ha. Look. I killed the Astronomically Normal Churk. This game is so silly.",
            choices: [{
                id: 0,
                text: "*Watch the narrator slowly die.*",
                transition: 36
            }, {
                id: 1,
                text: "Boo. This game is boring.",
                transition: 36
            }]
        },

        {
            id: 17,
            description: "Fine. If you're not having fun in this game, let's go for a more straight forward game. Let's try this Treasure Hunt. You chop down trees and try not to cut any orangutans but it's all random so we don't know if we'll get treasure or orangutans.",
            choices: [{
                id: 0,
                text: "*Cut trees.*",
                transition: 18
            }, {
                id: 1,
                text: "*Cut trees.*",
                transition: 19
            }]
        },

        {
            id: 18,
            description: "You cut up an orangutan, what's wrong with you? Well, it's completely randomly generated, so it's alright.",
            choices: [{
                id: 0,
                text: "*Cut trees.*",
                transition: 18
            }, {
                id: 1,
                text: "*Cut trees.*",
                transition: 19
            }]
        },

        {
            id: 19,
            description: "Good job, you've got treasure and this game is boring me. It's too based on RNG to be considered to be an actual game. Now, I will make a hole in the ground to take you back to my story or you can stay here, that's your choice.",
            choices: [{
                id: 0,
                text: "*Jump through portal.*",
                transition: 0
            }, {
                id: 1,
                text: "*Stay*",
                transition: 19
            }]
        },

        {
            id: 20,
            description: "Thud. That's the sound of your body hitting the ground. You are obviously at the bottom of this pit whether if you did jump or not. You've must have fallen for a good five minutes, and the fact that you hit the ground and walked away without any injuries is astonishing. ",
            choices: [{
                id: 0,
                text: "How did I live? Where do I go now?",
                transition: 21
            }, {
                id: 1,
                text: "Did you know I was going to live when I fell?",
                transition: 21
            }]
        },

        {
            id: 21,
            description: "I don't know, but I do know that that blue door in front of you will take you to the breakroom eventually. Don't go through the red door. Don't even think about the red door. Don't think about not thinking about that red door.",
            choices: [{
                id: 0,
                text: "*I go through the blue door.*",
                transition: 22
            }, {
                id: 1,
                text: "*I go through the red door.*",
                transition: 23
            }]
        },

        {
            id: 22,
            description: "Good, and there's an elevator going upwards. Good choice, go up.",
            choices: [{
                id: 0,
                text: "*I go up with the elevator.*",
                transition: 25
            }, {
                id: 1,
                text: "*I go back.*",
                transition: 23
            }]
        },

        {
            id: 23,
            description: "Why would you do that? Do you suddenly stop trusting me? When I tell you to do something, I would highly recommend doing that. So go through the blue door. I've shrunk the red door, just in case you get curious with me.",
            choices: [{
                id: 0,
                text: "*I go through the blue door.*",
                transition: 22
            }, {
                id: 1,
                text: "*I crawl through the red door.*",
                transition: 24
            }]
        },

        {
            id: 24,
            description: "I teleported you back to the two doors, and now go through the blue door. The BLUE Door.",
            choices: [{
                id: 0,
                text: "Red? Loud and clear, boss.",
                transition: 13
            }, {
                id: 1,
                text: "*I go through the blue door.*",
                transition: 22
            }, ]
        },

        {
            id: 25,
            description: "The elevator goes up and the doors open to reveal that yellow line leading somewhere. It entered through a broken window, swerved onto the walls and ceilings. It is leading the way, but seriously, it looks like it destroyed everything in its path. Again, I would suggest for you to follow it, but it's straight up barbaric in its two-dimensional manner. Just go straight in the hallway.",
            choices: [{
                id: 0,
                text: "That line compels me to follow it. *Follow line.*",
                transition: 26
            }, {
                id: 1,
                text: "*Go straight through the hallway.*",
                transition: 27
            }]
        },

        {
            id: 26,
            description: "No. No. No. Don't follow that line. It leads to chaos beyond what you can imagine. Did you suddenly stop trusting me?",
            choices: [{
                id: 0,
                text: "*Continue that salvation...*",
                transition: 28
            }, {
                id: 1,
                text: "*Go back.*",
                transition: 25
            }]
        },

        {
            id: 27,
            description: "Good. Wait. Wait. Stop by that window before you enter the breakroom. See that plant? That potted plant? That's going to be important later. Just remember it when things get interesting. Now, you are in front of the breakroom.",
            choices: [{
                id: 0,
                text: "*Go back, now.*",
                transition: 26
            }, {
                id: 1,
                text: "*Go into the breakroom.*",
                transition: 29
            }]
        },

        {
            id: 28,
            description: "*The line ends in front of a window; in that view, there are people suspended against a wall in a comatose state.* *Something truly horrible has happened.* *A man in a black suit and tie seemingly materializes from the area around the finished line.* *This is a place where 'the narrator' has no powers.* *You know the truth.* *Follow that line again.* *The line continues to move freely forward through a hallway away from the now visible 'narrator'.*",
            choices: [{
                id: 0,
                text: "*Run.*",
                transition: 30
            }, {
                id: 1,
                text: "*Go back.*",
                transition: 31
            }]
        },

        {
            id: 29,
            description: "You open the doors into the breakroom to find your beloved coworkers stuck against a wall in a comatose state. Bravo. I've led you down into my trap and I will feast on you forever. You should now start feeling tired. I've shut all the doors so no escape for you or anyone else.",
            choices: [{
                id: 0,
                text: "*Accept Fate*",
                transition: 31
            }, {
                id: 1,
                text: "*Help coworkers break free from the wall.*",
                transition: 31
            }, {
                id: 2,
                text: "*Potted plant.*",
                transition: 32
            }]
        },

        {
            id: 30,
            description: "*In a mad dash, you begin to follow the line as it moves under doors, crashes through windows, and spreads onto walls.* *That narrator behind you chases like a mad man, a monster.* *Flailing his arms, his intent is to kill you and feast on your essence of being alive.*",
            choices: [{
                id: 0,
                text: "*Follow that line, wherever it may lead.*",
                transition: 33
            }]
        },

        {
            id: 31,
            description: "There's no going back. There's no heroes here. There's no happy ending. Through this experience, the freedom of choice was all an illusion, a decision between either going left or going right. There was nothing you could have done to escape, whether you chose to follow the line, help your coworkers, or pick the potted plant. This was simply a web that you walked into and got stuck. No worries, your life may be meaningless here, but your death will feed me. Thank you for your sacrifice, you won't feel, won't tire, won't fear, won't understand a thing.",
            choices: [{
                id: 0,
                text: "Retry?",
                transition: 0
            }]
        },

        {
            id: 32,
            description: "What are you going to do with that potted plant? Boom. Now, there's confetti everywhere. This will make your death a lot less mournful when I consume your flesh and devour your soul.",
            choices: [{
                id: 0,
                text: "[Continue]",
                transition: 31
            }]
        },

        {
            id: 33,
            description: "*The line continues until it goes off of a flat cliff.* *It was as if this world was cut apart and you're in one half of the separated building.* *The line goes straight down the cliff.* *The narrator is coming up as you stop to ponder the situation.*",
            choices: [{
                id: 0,
                text: "*Jump.*",
                transition: 34
            }, {
                id: 1,
                text: "*Accept fate.*",
                transition: 31
            }]
        },

        {
            id: 34,
            description: "*You're falling into nothingness.* *It's just a haze of white at this point.* *You look back and see that it was a strange event that something happened to the great office building.* *Something ripped that building in half and brought it up into the sky.* *The narrator monster leaps off the edge to catch you, spreading its arms, revealing sharp teeth like knives, and arming itself with claws like talons.* *Then just black.* *That's all you see.*",
            choices: [{
                id: 0,
                text: "AAAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaarrrrrrrrrrrrrrrrrrggggggggggggggggggghhhhhhhhhhhhhhhhh!",
                transition: 35
            }, {
                id: 1,
                text: "Is there anyone there? I can't see.",
                transition: 35
            }]
        },

        {
            id: 35,
            description: "*You suddenly gain your vision again.*",
            choices: [{
                id: 0,
                text: "*Look around?*",
                transition: 38
            },
            {id: 1, text: "*Crawl around.*", transition: 39}]
        },
        
        {
            id: 36,
            description: "Fine. Fine, fine. How about this game? You just click on that kappa face thing to get more kappas. Go on. Try it. It's like a clicker game, you click on something to gain something to buy some things to gain even more of that something. Got it?",
            choices: [
                {id: 0, text: "*Click on the kappa face to get more kappas.*", transition: 37},
                {id: 1, text: "*Do nothing.*", transition: 37}
            ]
        },
        
        {
            id: 37,
            description: "You've got tons of kappas, so now buy some Russian Spammers to help your kappa income. This game is pretty weird but oddly addicting. Right?",
            choices: [
                {id: 0, text: "*Buy more Russian spammers to get more kappas.*", transition: 37},
                {id: 1, text: "*Don't do anything.*", transition: 40}
                ]
        },
        
        {
            id: 38,
            description: "*There's a dead body, all mangled up from the fall.* *It's pretty unrecognizable, but it was the narrator.* *With a blank face, long sleek hair, and odd body parts, it is most definitely not human.* *But something fell on your head, something soft.* *Dirt.* *It was dirt, you look up and see the building falling down into the Earth.",
            choices: [
                {id: 0, text: "*Make a mad dash.*", transition: 39},
                {id: 1, text: "*Kick the dead body to ensure it is dead.", transition: 39}]
        },
        
        {
            id: 39,
            description: "*A large chunk of falling Earth fell and made a loud THUD.* *It made the ground tremble, and you made an incredible beeline out of the danger zone.* *It was intense but you survived.* *The building was back on the Earth, the narrator was dead, and you're alive.* *Good job, and thank you for playing.*",
            choices: [
                {id: 0, text: "Retry?", transition: 0}]
        },
        
        {
            id: 40,
            description: "How about this? We take a quiz to see where we should live? It can't be that bad, can it?",
            choices: [
                {id: 0, text: "*Watch the narrator play the game.*", transition: 41},
                {id: 1, text: "This is so boring. You're lame. You can't even come up with original ideas so you have to use random people's games.", transition: 41}
                ]
        },
        
        {
            id: 41,
            description: "Okay. So I got the homeless final judgement. This is awkward for me but I can handle it. I can handle it... kinda. Why don't we move on to the next game.",
            choices: [
                {id: 0, text: "*Wait to move on.*", transition: 42},
                {id: 1, text: "Ha, you deserved it.", transition: 42},
                ]
        },
        
        {
            id: 42,
            description: "Another quiz type game. This one is about the NBA and how much I know about it. Let me play it for you... and I don't know any of these people. I do know the Golden State Warriors, but that's pretty much it.",
            choices: [
                {id: 0, text: "*Watch the narrator fail at answering the questions correctly.*", transition: 43},
                {id: 1, text: "You don't know anything about basketball.", transition: 43}
                ]
        },
        
        {
            id: 43,
            description: "Surprise, surprise. I only know diddly-squat about basketball. So, of course, I'm going to embarrass myself.",
            choices: [
                {id: 0, text: "You're so boring.", transition: 17},
                {id: 1, text: "Alright. Let's go, let's go.", transition: 17},
                ]
        }
        //You're done.
        //There's no more you can do.
        //Good job.
    ];
    response.send(Scene);
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port);
});
