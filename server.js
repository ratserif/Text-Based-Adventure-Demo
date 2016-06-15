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
    var Scene = [
    {
        id: 0,
        description: "Welcome to Trevor’s Game. It really doesn’t look like much, mainly because it was hastily done in a week, but it has a lot of heart and soul.  Let’s begin. Read this in a cockney man’s accent, makes it better. Imagine a world with fantasy and magic. A realm that anything is possible such as dragons, unicorns, and free college education. Got that? Good. Because that’s not where you are, you were just fantasizing about somewhere else you could be. You’re a cubicle worker for something astonishingly boring. Today was like every other day, but something was different. You don’t know what it is, neither do I. But are you ready for an adventure, uhh… What’s your name?",
        choices: [
            {id: 0, text: "My name's not important, let's go!", transition: 1}, 
            {id: 1, text: "My name is ... I've got work to do.", transition: 2},
            {id: 2, text: "Who are you? And how can I hear you?", transition: 3}
            ]
    },

    {
        id: 1,
        description: "Okay. Hold your horses, we still don’t know where this is going. All we know is something is different, let’s look around. In your haste to search for adventure, you look around your cubicle, but there’s a disturbing lack of people. All of your co-workers have gone missing, it doesn’t look like they showed up for work at all.",
        choices: [
            {id: 0, text: "It’s a sign. I know it. It always happens this way.", transition: 4},
            {id: 1, text: "Huh. That’s weird. I continue looking through the building.", transition: 5},
            {id: 2, text: "That’s enough adventure for me.", transition: 6}
            ]
    },

    {
        id: 2,
        description: "Excuse me, …? There’s something ominous going on and you’re more concerned on working? That’s a little unconventional. But let’s go, there could be something around us right now. Something lurking for us. Are you going to let it happen?",
        choices: [
            {id: 0, text: "There’s something lurking? What am I doing here then?! Let’s go!", transition: 7},
            {id: 1, text: "Something lurking? Don’t be silly.", transition: 8},
            {id: 2, text: "It’s probably nothing. You’re a figment of my imagination, remember?", transition: 6}
            ]
    },

    {
        id: 3,
        description: "I’m the narrator. That strange, all knowing, endurable and handsome narrator. You can hear me just like anyone else can hear you. If there was anyone else here, I would talk to them instead of you. Welp, I spoiled the next scene, but surprise, no one else is here, you’re all alone in this cubicle at the far end of the row. How will you proceed?",
        choices: [
            {id: 0, text: "No one’s here? Great. I finally do whatever I want! Let’s burn everything.", transition: 12},
            {id: 1, text: "If you’re all knowing, where did everyone go?", transition: 6},
            {id: 2, text: "Why should I trust you?", transition: 6}
            ]
    },
    
    {
        id: 4,
        description: "What? Look, there’s probably a reason for everything that is happening. You’re way too active and energetic for this. Calm down, and take deep breathes. Please, if you calm down, this would go a lot more smoothly. They’ve probably gone to the break room, just calm down first.",
        choices: [
            {id: 0, text: "I AM CALM!", transition: 10},
            {id: 1, text: "Sorry. I go to the break room.", transition: 14},
            {id: 2, text: "Okay. That is enough for me.", transition: 6}
            ]
    },
    
    {
        id: 5,
        description: "You come up across a yellow line that chaotically leads to the breakroom. I would tell you to follow that line, but it runs in swurves on the floor, the wall, the ceiling through twists and turns. It’s kinda interesting, but the line goes over a gaping gap, at least two meters.",
        choices: [
            {id: 0, text: "I jump the gap to continue following the line.", transition: 16},
            {id: 1, text: "I climb down, maybe there’s another way around it down there.", transition: 17},
            {id: 2, text: "It’s game over, man. I can’t make it without jumping. It’s a lost cause.", transition: 6},
            ]
    },
    
    {
        id: 6,
        description: "Really? Come on. You've got to be the least bit concerned on where all of your friends are. Your fellow coworkers that you've been working with for years. I don't know, maybe something will happened to you, your family, or worst of all, your dog. You do have a dog, right? Well, you get the idea. Something bad can happen to you for doing nothing.",
        choices: [
            {id: 0, text: "You're right. I go investigate the mysterious mystery that's happening.", transition: 5},
            {id: 1, text: "I guess, but this is all a game right? Nothing bad is going to happen to me.", transition: 9},
            {id: 2, text: "No, that's it. I'm done for the day. Maybe I'll go back home.", transition: 9},
            ]
    },
    
    {
        id: 7,
        description: "Well, I don't know if there is anything lurking about here. But you notice that you're the only person in the building, probably. There's no one else to be seen around, but if there were anyone, they would be at the breakroom. Let's go.",
        choices: [
            {id: 0, text: "Forget them, I've got to get out of here.", transition: 6},
            {id: 1, text: "People, right. Got to find them. The breakroom is around here somewhere.", transition: 5},
            {id: 2, text: "Mother always said, if you're in trouble, stay in your bubble.", transition: 6}
            ]
    },
    
    {
        id: 8,
        description: "Yes, there could be something lurking out there. Take this seriously. I know this is a game in all, but it's not fun unless you follow my directions blindly. This is a trust between you and me. Do you not trust me?",
        choices: [
            {id: 0, text: "Yeah, I trust you, just lead the way. This is your game.", transition: 3},
            {id: 1, text: "No, not really. You've been extremely weird.", transition: 6},
            {id: 2, text: "Why should I trust you?", transition: 6}
            ]
    },
    
    {
        id: 9,
        description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH! You're scaring me! Please, calm down, or else my boss will fire me from this job!",
        choices: [
            {id: 0, text: "What makes you think I will stop?!", transition: 10},
            {id: 1, text: "NEVER! FREEDOM OF SPEECH!", transition: 10},
            ]
    },
    
    {
        id: 10,
        description: "Please. Just give me a second chance. I can give them a story that they'll remember. Please, don't fire me.",
        choices: [
            {id: 0, text: "...", transition: 11}
            ]
    },
    
    {
        id: 11,
        description: "*Howdy!* *My name is DOG.* *It has come to our attention that your narrator is no longer suitable for storytelling.* *Many factors include old age, illness, or, most likely... terrible people.* *You've chosen this path, and we've had to get rid of one of our narrators.* *No more choices.* *No more story.* *Only one consequence.*",
        choices: [
            {id: 0, text: "", transition: 0}
            ]
    },
    
    {
        id: 12,
        description: "So I unleashed a little bit of some bottled up tensions. Let's not stray far from the story I wrote up for you. Come on, let's try to find your friends.",
        choices: [
            {id: 0, text: "Forget that! The world needs to burn and start again.", transition: 13},
            {id: 1, text: "Okay, let's find my friends, then set them on fire.", transition: 14}
            ]
    },
    
    {
        id: 13,
        description: "Okay, do you even want to go through my story? It's okay if you don't, I'll just find something to try to sate you.",
        choices: [
            {id: 0, text: "No. I just want something else than usual. It's mainly because you're a bad narrator.", transition: 14},
            {id: 1, text: "Yeah, maybe just to annoy you by ignoring all of your advice.", transition: 14},
            ]
    },
    
    {
        id: 14,
        description: "Okay. Sounds like we need a new story. Alright. I will tell you, I am what people believe to be God. I can control your reality. Allow me to strip you of the world that you knew and replace it with something else... There. Let's try this. Here's a contraption that moves this cardboard baby into a fire. There's a button in front of you that will move back the baby. Got it?",
        choices: [
            {id: 0, text: "Fine. *Save the baby to satisfy the narrator.*", transition: 15},
            {id: 1, text: "*Let the baby burn immediately.*", transition: 16}
            ]
    },
    
    {
        id: 15,
        description: "This game is good, huh?",
        choices: [
            {id: 0, text: "*Save baby.*", transition: 15},
            {id: 1, text: "*Burn baby.*", transition: 16}
            ]
    },
    
   
];
    response.send(Scene);
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port);
});
