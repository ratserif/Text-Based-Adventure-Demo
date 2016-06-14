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
        id: 1,
        description: "Welcome to Trevor’s Game. It really doesn’t look like much, mainly because it was hastily done in a week, but it has a lot of heart and soul.  Let’s begin. Read this in a cockney man’s accent, makes it better. Imagine a world with fantasy and magic. A realm that anything is possible such as dragons, unicorns, and free college education. Got that? Good. Because that’s not where you are, you were just fantasizing about somewhere else you could be. You’re a cubicle worker for something astonishingly boring. Today was like every other day, but something was different. You don’t know what it is, neither do I. But are you ready for an adventure, uhh… What’s your name?",
        choices: [
            {id: 1, text: "My name's not important, let's go!", transition: 2}, 
            {id: 2, text: "My name is ... I've got work to do.", transition: 3},
            {id: 3, text: "Who are you? And how can I hear you?", transition: 4}
            ]
    },

    {
        id: 2,
        description: "Okay. Hold your horses, we still don’t know where this is going. All we know is something is different, let’s look around. In your haste to search for adventure, you look around your cubicle, but there’s a disturbing lack of people. All of your co-workers have gone missing, it doesn’t look like they showed up for work at all.",
        choices: [
            {id: 5, text: "It’s a sign. I know it. It always happens this way."},
            {id: 6, text: "Huh. That’s weird. I continue looking through the building."},
            {id: 7, text: "That’s enough adventure for me."}
            ]
    },

    {
        id: 3,
        description: "Excuse me, …? There’s something ominous going on and you’re more concerned on working? That’s a little unconventional. But let’s go, there could be something around us right now. Something lurking for us. Are you going to let it happen?",
        choices: [
            {id: 8, text: "There’s something lurking? What am I doing here then?! Let’s go!"},
            {id: 9, text: "Something lurking? Don’t be silly."},
            {id: 10, text: "It’s probably nothing. You’re a figment of my imagination, remember?"}
            ]
    },

    {
        id: 4,
        description: "I’m the narrator. That strange, all knowing, endurable and handsome narrator. You can hear me just like anyone else can hear you. If there was anyone else here, I would talk to them instead of you. Welp, I spoiled the next scene, but surprise, no one else is here, you’re all alone in this cubicle at the far end of the row. How will you proceed?",
        choices: [
            {id: 11, text: "No one’s here? Great. I finally do whatever I want! Let’s burn everything."},
            {id: 12, text: "If you’re all knowing, where did everyone go?"},
            {id: 13, text: "Why should I trust you?"}
            ]
    }
];
    response.send(Scene);
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port);
});
