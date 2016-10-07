var helpflag = 0;
var db = [{
    "question": "He says: I saw ye climbin on board my airship in the dead of the night. <br> What's yer business?",
    "answers": [{
      "title": "Kick the elderly guy and run like the wind",
      "response": 1
    }, {
      "title": "Wimper whilst you beg for your life in a pathetic manner",
      "response": 2
    }, {
      "title": "Figure out a witty response...",
      "response": 3
    }, {
      "title": "Sit down and eat a banana. <br> You think to yourself: Well, this is better than nothing.",
      "response": 4
    }]
  },

  { //result 1 kicking the pirate
    "question": "He yells:  OI WHATCHA DO THAT FOR? <br> I'LL GET YA FOR THAT YOU LIL HORNSWOGGLER!",
    "answers": [{
      "title": "Stick your tongue out and run into the cockpit of the airship. <br> You lock the door behind you.",
      "response": 7
    }, {
      "title": "Say sorry and pet the pirate on the head a lot, as if he were a cat.",
      "response": 10
    }, {
      "title": "Apologize and explain it was an accident. <br> You panicked.",
      "response": 2
    }]

  },

  { //result 2 whimperin n beggin
    "question": "The pirate is unimpressed. <br> He sighs and tells you- I actually expected something to happen... <br> He reminisces once more about his exciting youth.",
    "answers": [{
      "title": "sigh and agree, sipping a warm cuppa tea with him",
      "response": 9
    }, {
      "title": "Kick him and scamper away like a mouse from a giant foot to the cockpit of the airship",
      "response": 1
    }, {
      "title": "Ya want something to happen? (You pull out a ton of bananas. You smile creepily at the frightened pirate.)",
      "response": 1
    }, {
      "title": "You cry like a baby. AM I REALLY THAT BAD? THAT TEAR-ABLE?",
      "response": 1
    }]
  },

  { //result 3 witty
    "question": "...The pirate stares at you in confusion. Do you- ",
    "answers": [{
      "title": "Say: Look man I don't want to arrr-gue <br> HAH GEDDIT",
      "response": 11
    }, {
      "title": "hello i like cats <br> IS THIS A CAT-ASTROPHE",
      "response": 10
    }, {
      "title": "Stare back at him in a confused state. It's fun to have staring contests.",
      "response": 1
    }]
  },

  { //result 4 harambe
    "question": "...The pirate stares at you in confusion. Do you-",
    "answers": [{
      "title": "WHAT R U STARING @ ME 4 M8",
      "response": 1
    }, {
      "title": "slowly peel open another banana while maintaining eye contact with the pirate",
      "response": 5
    }, {
      "title": "burst into a jazzy song about bananas while acting bananas",
      "response": 5
    }, {
      "title": "You wake out of a banana riddled daze. <br> You realize that the banana was very much squished. <br> You apologize the the pirate, as it must have looked awfully gross.",
      "response": 2
    }]
  },

  { //result 5 ...you're bananas
    "question": "He slowly backs away. <br> He whispers to himself- Yo-you're bananas...you're nuts...",
    "answers": [{
      "title": "haha what do you mean I'm part fruit salad?",
      "response": 14
    }, {
      "title": "dance around like a monkey and feed the pirate bananas",
      "response": 16
    }, {
      "title": "SIR, it’s one or the other. I’m either bananas or nuts, not both, sir.",
      "response": 2
    }]
  },

  { //result 6 
    "question": "You press ALL OF THE BUTTONS. Even that big red one in the middle that says (self destruct). . . oH OOPS",
    "answers": [{
      "title": "Scramble and find a really old escape pod. <br> You slip in and drop down to land as the airship explodes.",
      "response": 15
    }, {
      "title": "Eat another banana n chill. <br> Harambe will save you.",
      "response": 13
    }, {
      "title": "OH YOU FORGOT A FEW MORE BUTTONS- <br> you button up your shirt and smile proudly.",
      "response": 14
    }]
  },

  { //result 7 butt
    "question": "You are in the cockpit. There are many gears turning. There is also a ton of buttons and a lot of levers. There is an old radio playing a nice song.",
    "answers": [{
      "title": "find a place to hide while listening to the song playing. ",
      "response": 8
    }, {
      "title": "BUTTONS BUTTONS I LOVE BUTTONSSSSS ( press as many buttons as you can )",
      "response": 6
    }, {
      "title": "press all da bootuns n sit in the captain's seat and eat a banana.",
      "response": 6
    }]
  },

  { //result 8 hide
    "question": "You hide in one of the cabinets next to the control board. The pirate walks in and closes ther door.",
    "answers": [{
      "title": "Burst out of the cabinet and hug the pirate. You whisper in his ear- HELLO CHILD",
      "response": 16
    }, {
      "title": "You act quickly and knock the pirate out with a swift blow to the head.",
      "response": 12
    }, {
      "title": "You tie the pirate the the captain's chair with leather straps you found and spend an hour whispering tear-able puns to him.",
      "response": 14
    }]
  },

  { //result 9 convo
    "question": "You engage in a suprisingly pleasant and slightly awkward conversation with the pirate.",
    "answers": [{
      "title": "Try to convince the pirate to safely drop you off the next time the airship lands.",
      "response": 15
    }, {
      "title": "Persuade the pirate to talk about reali-TEA",
      "response": 14
    }]
  },

  { //result 10
    "question": "The pirate is freaked out. He says he is a dog person.",
    "answers": [{
      "title": "You gotta be KITTEN me HAHAHAHAHAHahaha ha ha h a",
      "response": 14
    }, {
      "title": "You stay PAWsitive and start a conversation with the pirate.",
      "response": 9
    }, {
      "title": "You triumphantly pull out a cat butt trophy because he is a catastrophe.",
      "response": 14
    }, {
      "title": "you yell - HAHA NOPE. You jump off the airship into a large inflatable cat themed bouncy castle .",
      "response": 15
    }]
  },

  { //result 11 arrrr
    "question": "ARRRR the pirate says. ARRRRRRR you reply. This goes on for quite a bit.",
    "answers": [{
      "title": "ARR YOU OK?",
      "response": 15
    }, {
      "title": "Get it? Because you are a pirate?",
      "response": 9
    }]
  },

  { //result 12 / ending 1 / aggressive
    "question": "You take control of the airship and make the pirate abandon ship. <br> Congrats?",
    "answers": [{
      "title": "start again?",
      "response": 0
    }]
  },

  { //result 13 / ending 2 / meme
    "question": "You ate so many bananas that you made the pirate bananas. <br> You have visions of harambe sometimes. <br> You also become best friends with the pirate over time. He makes a good desk decoration.",
    "answers": [{
      "title": "start again?",
      "response": 0
    }]
  },

  { //result 14 / ending 3 / punny
    "question": "The pirate thinks that your puns ARR not entertaining. <br> He asks you to walk the plank. <br>You lay down and plank instead. <br> (the pirate facepalms)",
    "answers": [{
      "title": "start again?",
      "response": 0
    }]
  },

  { //result 15 / ending 4 / sensible
    "question": "Congratulations! You made it out alive... <br> but you didn't take any chances...",
    "answers": [{
      "title": "start again?",
      "response": 0
    }]
  },

  { //result 16 / ending 5 / crazy
    "question": "You freaked out the pirate. GREAT. <br> Now the pirate is chasing you around the airship with an old rattling, rusty chainsaw and a machete. <br>OH WELL.<br> You better munch on a bag of doritos and drink some mountain dew before he comes for you. <br> #MLG360NOSCOPE420BLAZEIT",
    "answers": [{
      "title": "start again?",
      "response": 0
    }]
  }
];

var currentLocation = 0;

window.printCurrentLocation = function() {
  document.getElementById("question").innerHTML = db[currentLocation].question;
  var answers = "";
  for (var i = 0, l = db[currentLocation].answers.length; i < l; i++) {
    answers += "<p><button onclick='setLocation(" + db[currentLocation].answers[i].response + ")'>" + db[currentLocation].answers[i].title + "</button></p>";
  }
  document.getElementById("answers").innerHTML = answers;
}

window.setLocation = function(num) {
  currentLocation = num;
  window.printCurrentLocation();
}

window.printCurrentLocation();

function check_domain_input() {
  if (helpflag == 0) {
    document.getElementById("dialog").style.display = "block";
    helpflag = 1;
  } else {
    document.getElementById("dialog").style.display = "none";
    helpflag = 0;
  }
}