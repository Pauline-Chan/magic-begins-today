const words = ['hangar', 'planet', 'banana', 'window', 'jacket', 'forest', 'office', 'silver', 'school', 'carrot', 'people', 'movies', 'garden', 'market', 'please', 'action', 'friend', 'island', 'future', 'things', 'recent', 'change', 'street', 'browse', 'become', 'direct', 'advise', 'active', 'bazaar', 'batman', 'before', 'behind', 'bitter', 'blurry', 'branch', 'cherry', 'choice', 'coarse', 'cousin', 'cringe', 'crisis', 'crouch', 'crappy', 'crater', 'danger', 'debate', 'debris', 'defuse', 'deluge', 'dengue', 'desert', 'devote', 'dimple', 'divert', 'divide', 'drones', 'durian', 'employ', 'enough', 'ensure', 'entire', 'escort', 'expand', 'expect', 'expose', 'exhale', 'enrage', 'favour', 'fickle', 'female', 'feisty', 'fizzle', 'flabby', 'forbid', 'freeze', 'frugal', 'gallop', 'gazing', 'giggle', 'glitch', 'grocer', 'grumpy', 'hawker', 'height', 'heroic', 'hijack', 'humour', 'humble', 'ignore', 'iguana', 'inhale', 'insert', 'insist', 'invade', 'invite', 'inform', 'jersey', 'joyful', 'juggle', 'juices', 'joking', 'kidnap', 'laptop', 'leader', 'length', 'lesson', 'listen', 'lizard', 'locker', 'lounge', 'lowest', 'maggot', 'maiden', 'malice', 'mammal', 'manage', 'marine', 'meddle', 'mature', 'menace', 'modify', 'misuse', 'middle', 'mighty', 'native', 'nearly', 'nitwit', 'nimble', 'number', 'ninety', 'nobody', 'obtain', 'orchid', 'oppose', 'oxygen', 'oyster', 'orphan', 'palace', 'parade', 'pantry', 'papaya', 'parcel', 'phobia', 'picnic', 'pillow', 'plenty', 'police', 'poison', 'prayer', 'prices', 'purple', 'pursue', 'quiver', 'quench', 'really', 'recall', 'reduce', 'refute', 'refund', 'remind', 'relief', 'remain', 'remedy', 'result', 'reward', 'rotten', 'rotate', 'runway', 'sailor', 'sample', 'saving', 'seldom', 'skinny', 'shield', 'shrunk', 'silent', 'simply', 'sketch', 'snatch', 'sneaky', 'social', 'soccer', 'sparks', 'spiral', 'square', 'squeal', 'stinky', 'sticky', 'stuffy', 'stripe', 'swivel', 'swerve', 'target', 'thirst', 'throat', 'throne', 'trophy', 'triple', 'tryout', 'turban', 'tycoon', 'typing', 'turkey', 'useful', 'uphold', 'urchin', 'vacate', 'vacuum', 'vendor', 'vigour', 'violin', 'vowels', 'virtue', 'waiter', 'wallop', 'wheeze', 'warmer', 'wallet', 'wiggle', 'wisdom', 'worthy', 'worsen', 'yippie', 'zombie', 'zigzag'
];
let chosenWord = '';
let wordState = [];
let guessesLeft = 6;
let guessedLetters = [];
let gameActive = true;

let correctWords = []; // Array to store correctly guessed words

function initGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    wordState = new Array(chosenWord.length).fill('_');
    guessesLeft = 6;
    guessedLetters = [];
    gameActive = true;

    const clueElement = document.getElementById('clue');
    clueElement.textContent = `Clue: ${getClueForWord(chosenWord)}`;

    updateDisplay();

    document.getElementById('letterInput').focus();
}


function getClueForWord(word) {
    // Provide clues for words (customize this function as needed)
    const clues = {
        "hangar": "A shelter for airplanes",
        "planet": "A celestial body orbiting a star",
        "banana": "A yellow fruit with a peel",
        "window": "A transparent opening in a wall",
        "jacket": "A garment worn on the upper body",
        "forest": "A dense collection of trees",
        "office": "A place where work is done",
        "silver": "A shiny metallic element",
        "school": "An institution for learning",
        "carrot": "An orange vegetable",
        "people": "The human race",
        "movies": "Visual storytelling captured on film",
        "garden": "A cultivated outdoor space with plants, flowers, trees",
        "market": "A place where goods or services are bought and sold",
        "please": "A polite request for something",
        "action": "Movement, activity or behaviour that leads to a result",
        "friend": "A person with whom one shares mutual affection, trust and companionship",
        "island": "A landmass surrounded by water, smaller than a continent",
        "future": "The time or events that lie ahead, beyond the present moment",
        "things": "General term referring to objects, items",
        "recent": "Happening or occurring in the near past",
        "change": "The process of becoming different or altering a state",
        "street": "A public road in a city or town",
        "browse": "To casually look through or explore items, information or content",
        "become": "The act of transitioning from one state or condition to another",
        "direct": "To guide, lead or point toward a specific location or purpose",
        "advise": "To offer recommendations, suggestions",
        "active": "Involving movement, energy, not passive",
        "bazaar": "A marketplace or fair where various goods, crafts and food are sold",
        "batman": "A fictional superhero fighting crime in Gotham City",
        "before": "Referring to a time or position earlier than the present moment",
        "behind": "The area or position at the back",
        "bitter": "Having a sharp, unpleasant taste or expressing strong negative emotions",
        "blurry": "Lacking clarity or focus",
        "branch": "A division or offshoot from the main structure of a tree",
        "cherry": "A small, round, red fruit with a single pit inside",
        "choice": "The act of selecting or making a decision among various options",
        "coarse": "Something rough, not fine in texture",
        "cousin": "A relative who shares a common ancestor with you, typically from the same generation",
        "cringe": "To react with discomfort or embarrassment due to something awkward",
        "crisis": "A critical situation or emergency, often requiring immediate attention",
        "crouch": "To bend down with knees bent, usually to prepare for a jump",
        "crappy": "Poor quality or unpleasant",
        "crater": "A large hole or depression in the ground, often formed by a volcanic eruption",
        "danger": "The state of being at risk or facing potential harm",
        "debate": "A formal discussion or argument where different viewpoints are presented",
        "debris": "Scattered fragments or remains of something, often after an explosion or natural disaster",
        "defuse": "To calm down or reduce tension in a situation",
        "deluge": "A sudden heavy downpour of rain or a flood",
        "dengue": "A viral disease transmitted by mosquitoes",
        "desert": "A dry, barren area with little vegetation or water",
        "devote": "To dedicate time or effort to a particular cause, activity or person",
        "dimple": "A small indentation or depression in the skin, often when someone smiles",
        "divert": "To redirect or change the course of something (eg. traffic, attention)",
        "divide": "To separate or split something into parts",
        "drones": "Unmanned aerial vehicles that can fly autonomously or be controlled remotely",
        "durian": "A tropical fruit known for its strong smell and distinctive taste",
        "employ": "To use or hire someone for work or a job",
        "enough": "An adequate or sufficient amount of something",
        "ensure": "To make certain or guarantee that something happens",
        "entire": "Referring to the whole or complete thing",
        "escort": "To accompany or guide someone, often for protection or assistance",
        "expand": "To increase in size or extend",
        "expect": "To anticipate or look forward to something happening",
        "expose": "To reveal or make something visible, often hidden information or truth",
        "exhale": "To breathe out or release air from the lungs",
        "enrage": "To make someone extremely angry",
        "favour": "To show kindness or support toward someone",
        "fickle": "Someone who is inconsistent or changes their mind frequently",
        "female": "Refers to the fairer sex or gender",
        "feisty": "Someone with a lively, spirited and determined attitude",
        "fizzle": "When something starts off strongly but ends weakly or disappointingly",
        "flabby": "Refers to soft, loosee and lacking firmness, often to describe the body or skin",
        "forbid": "To prohibit or disallow something",
        "freeze": "The process of turning a liquid into a solid state",
        "frugal": "Being economical, thrifty",
        "gallop": "A fast and vigorous running gait, often associated with horses",
        "gazing": "Intently looking at something or someone, often with curiosity or admiration",
        "giggle": "A light, spontaneous laugh, usually due to something amusing",
        "glitch": "A sudden malfunction or unexpected problem in a system",
        "grocer": "A person who sells food and other goods in a store",
        "grumpy": "Being irritable, moody, or easily annoyed",
        "hawker": "Someone who sells goods or food in the street or market",
        "height": "The measurement of how tall something is",
        "heroic": "Displaying courage, bravery or noble qualities",
        "hijack": "To seize control of something (eg. a vehicle or situation)",
        "humour": "The quality of being funny, amusing or entertaining",
        "humble": "Modest, unpretentious, and not boastful",
        "ignore": "To deliberately pay no attention to something or someone",
        "iguana": "A type of lizard found in tropical regions",
        "inhale": "To breathe in air or other substances",
        "insert": "To place something into a specific position or location",
        "insist": "To demand or assert something firmly, often against resistance",
        "invade": "To enter a place or territory aggressively",
        "invite": "To ask someone to come or participate in an event or activity",
        "inform": "To provide knowledge or facts about something to someone",
        "jersey": "A type of knitted fabric or a garment made from it",
        "joyful": "Feeling great happiness or delight",
        "juggle": "To manipulate objects (like balls or tasks) skillfully in the air",
        "juices": "The liquid extracted from fruits, vegetables",
        "joking": "Engaging in playful or humourous conversation",
        "kidnap": "To forcibly take someone away, often against their will",
        "laptop": "A portable computer that can be used on one's lap",
        "leader": "A person who guides, directs or influences others",
        "length": "The measurement of how long something is, such as distance",
        "lesson": "A teaching or learning experience, often imparting knowledge or skills",
        "listen": "To pay attention to sounds or spoken words",
        "lizard": "A reptile with scaly skin",
        "locker": "A storage compartment often with a lock for safekeeping personal belongings",
        "lounge": "A comfortable seating area for relaxation or waiting",
        "lowest": "The least or smallest in value, quantity or position",
        "maggot": "A soft-bodied larve of a fly",
        "maiden": "Referring to a woman who has never been married",
        "malice": "Ill-will or desire to harm someone intentionally",
        "mammal": "A warm-blooded vertebrate with hair or fur, typically giving birth to live young",
        "manage": "To handle, control or oversee something effectively",
        "marine": "Relating to the sea or ocean, also refers to military personnel",
        "meddle": "To interfere or involve oneself in someone else's affairs",
        "mature": "A ripe condition of fruit or a seasoned individual",
        "menace": "A threat or danger; someone or something that poses harm",
        "modify": "To make changes or alterations to something",
        "misuse": "The improper or incorrect use of something",
        "middle": "Refers to the central point or position",
        "mighty": "Something or someone who is powerful, strong or impressive",
        "native": "Referring to something that is originally from a particular place or region",
        "nearly": "Almost or very close to a particular state or condition",
        "nitwit": "A foolish or silly person, often used humourously",
        "nimble": "Person or animal which is quick, light and agile in movement or action",
        "number": "Refers to a quantity or numerical value",
        "ninety": "The number that comes after eighty-nine",
        "nobody": "Indicates no person or not anyone",
        "obtain": "To acquire, get or secure something through effort or action",
        "orchid": "A type of beautiful flowering plant known for its intricate and colorful blooms, sometimes planted in charcoal",
        "oppose": "To resist or be againts something or someone",
        "oxygen": "The essential gas required for breathing and sustaining life",
        "oyster": "A shellfish that produces pearls",
        "orphan": "A child who has lost both parents or is without parental care",
        "palace": "A large and impressive building, often associated with royalty or nobility",
        "parade": "A public procession or display, often involving marching bands",
        "pantry": "A storage area for food",
        "papaya": "A tropical fruit with orange flesh and black seeds known for its sweet taste",
        "parcel": "A package or bundle of items wrapped together for delivery",
        "phobia": "An intense and irrational fear of a specific situation, object",
        "picnic": "An outdoor meal or gathering, often enjoyed in a park or natural setting",
        "pillow": "A soft cushion used for resting one's head",
        "plenty": "Refers to an abundance or ample quantity of something",
        "police": "The law enforcement officers",
        "poison": "A substance that can cause harm or death when ingested or inhaled",
        "prayer": "A communication with a higher power, often expressing requests, gratitude or devotion",
        "prices": "Refers to the cost or value assigned to goods and services",
        "purple": "A color that combines blue and red, often associated with royalty",
        "pursue": "To follow or seek something actively, such as a goal or a career",
        "quiver": "A container for holding arrows used by archers",
        "quench": "To satisfy or extinguish a thirst or desire",
        "really": "To emphasize the truth or accuracy of a statement",
        "recall": "To bring back to mind or remember something",
        "reduce": "To make something smaller or decrease its size, quantity or intensity",
        "refute": "To prove a statement or argument false or incorrect",
        "refund": "Money returned to a customer",   
        "remind": "To prompt someone's memory or bring something to their attention",
        "remain": "To stay in a particular state or place or to continue to exist",
        "relief": "A feeling of comfort or alleviation from distress or pain",
        "remedy": "A solution or treatment for a problem or ailment",
        "result": "The outcome or consequence of an action or event",
        "reward": "Something given in recognition of effort or achievement",
        "rotten": "Decayed or spoiled, often referring to food",
        "rotate": "To turn or spin around an axis",
        "runway": "A long strip of ground used for aircraft takeoff and landing",
        "sailor": "A person who works on a ship or boat",
        "sample": "A small portion or representation piece taken from a larger whole",
        "saving": "The act of setting aside money or resources for future use",
        "seldom": "Rarely or infrequently occurring",
        "skinny": "Thin or having a slim body",
        "shield": "A protective barrier or cover",
        "shrunk": "Reduced in size or shrank",
        "silent": "Without sound or noise",
        "simply": "In a straightforward or uncomplicated manner",
        "sketch": "A rough or basic drawing or outline",
        "snatch": "To grab or seize something quickly",
        "sneaky": "Acting in a secretive or cunning manner",
        "social": "Relating to interactions between people or society",
        "soccer": "A popular team sport played with a ball",
        "sparks": "Small fiery particles produced by friction or combustion",
        "spiral": "A curve that winds around a central point",
        "square": "A four-sided geometric shape with equal sides and right angles",
        "squeal": "A high-pitched sound, often expressing excitement or fear",
        "stinky": "Having an unpleasant odour",
        "sticky": "Adhesive or having a tendency to adhere to surfaces",
        "strong": "Having muscles capable of exerting great physical force",
        "stuffy": "Lacking fresh air or feeling confined, often used to describle a room",
        "stripe": "A long, narrow band or line of color, often seen on clothing or animals",
        "swivel": "To rotate or turn around a central point",
        "swerve": "To suddenly change direction, typically while moving",
        "target": "The object or goal one aims to achieve or hit",
        "thirst": "A strong desire or need for liquid, especially water",
        "throat": "The passage in the neck through which food and air pass",
        "throne": "A ceremonial chair or seat of authority for a monarch or ruler",
        "trophy": "A prize or award given for achievement or victory",
        "triple": "Three times as much or threefold",
        "tryout": "A test or audition to assess someone's suitability for a role or position",
        "turban": "A type of headwear often worn for religious or cultural reasons",
        "tycoon": "A wealthy and influential businessperson",
        "typing": "The act of entering text using a keyboard",
        "turkey": "A large bird commonly associated with Thanksgiving meals",
        "useful": "Having practical value or serving a purpose",
        "uphold": "To support or maintain something, especially principles or laws",
        "urchin": "A mischievous or ragged child",
        "vacate": "To leave or empty a place",
        "vacuum": "A space devoid of matter or air",
        "vendor": "A person or business selling goods or services",
        "vigour": "Physical strength, energy or vitality",
        "violin": "A stringed musical instrument played with a bow",
        "vowels": "The letters A, E, I, O, U (and sometimes Y)",
        "virtue": "Moral excellence or goodness",
        "waiter": "A person who serves food and drinks in a restaurant",
        "wallop": "To strike with force or impact",
        "wheeze": "A high-pitched sound made during breathing, often due to respiratory issues",
        "warmer": "Feeling an increase in temperature (for eg. in an enclosed room",
        "wallet": "A small, flat case for holding money, cards and other essentials",
        "wiggle": "To move with small, twisting motions",
        "wisdom": "Knowledge, experience and good judgement",
        "worthy": "Deserving respect, honour or attention",
        "worsen": "To become more severe or unfavourable",
        "yippie": "An exclamation of excitement or joy",
        "zombie": "A fictional reanimated corpse, often associated with horror stories",
        "zigzag": "A pattern of sharp turns or angles in a line or path"
    };

    return clues[word.toLowerCase()] || "No clue available";
}

function updateDisplay() {
    const wordElement = document.getElementById('word');
    const guessesElement = document.getElementById('guesses');
    const messageElement = document.getElementById('message');
    const hangmanImage = document.getElementById('hangmanImage');
    const guessedLettersElement = document.getElementById('guessedLetters');
    const correctWordsElement = document.getElementById('correctWords'); // Element to display correct words

    const lostAudio = new Audio('videogame.mp3');
    const wonAudio = new Audio('yeah.mp3');

    wordElement.textContent = wordState.join(' ');
    guessesElement.textContent = `Guesses left: ${guessesLeft}`;
    messageElement.textContent = '';

    if (guessesLeft === 0) {
        messageElement.textContent = `You lost! The word was "${chosenWord}".`;
        gameActive = false;
        lostAudio.play(); // Play the "lost" audio
    } else if (!wordState.includes('_')) {
        messageElement.textContent = 'Congratulations! You won!';
        gameActive = false;
        wonAudio.play(); // Play the"won" audio
        correctWords.push(chosenWord); // Add the correctly guessed word to the array
        correctWordsElement.textContent = `Words Guessed Correctly: ${correctWords.join(', ')}`; // Display the words guessed correctly
    }

    hangmanImage.src = `hangman${6 - guessesLeft}.png`;

    guessedLettersElement.textContent = `Guessed Letters: ${guessedLetters.join(', ')}`;
}




function makeGuess() {
    if (gameActive) {
        const letterInput = document.getElementById('letterInput');
        const letter = letterInput.value.toLowerCase();
        
        if (letter && guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);

            if (chosenWord.includes(letter)) {
                for (let i = 0; i < chosenWord.length; i++) {
                    if (chosenWord[i] === letter) {
                        wordState[i] = letter;
                    }
                }
            } else {
                guessesLeft--;
            }
            updateDisplay();
        }

        letterInput.value = '';
        letterInput.focus();
    }
}

function guessWord() {
    if (gameActive) {
        const wordInput = prompt('Enter the complete word:');
        if (wordInput && wordInput.toLowerCase() === chosenWord) {
            wordState = chosenWord.split('');
            updateDisplay();
        } else {
            alert('Incorrect guess! Please continue guessing letters.');
        }
    }
}




function optionWord() {
    if (gameActive) {
        const options = generateGuessOptions(); // Generate guess options including the correct word
        const selectedWord = prompt(`Choose the correct word:\n1. ${options[0]}\n2. ${options[1]}\n3. ${options[2]}`);

        if (selectedWord && selectedWord.toLowerCase() === chosenWord) {
            wordState = chosenWord.split('');
            updateDisplay();
        } else {
            alert('Incorrect guess! Please continue guessing letters.');
        }
    }
}

function generateGuessOptions() {
    const options = [chosenWord]; // Include the correct word in the options
    while (options.length < 3) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        if (!options.includes(randomWord)) {
            options.push(randomWord);
        }
    }
    shuffleArray(options); // Shuffle the options
    return options;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Rest of the code remains the same...




document.getElementById("myButton1").addEventListener("click", function() {
    var audio = document.getElementById("audioEffect1");
    audio.play();
});

document.getElementById("myButton2").addEventListener("click", function() {
    var audio = document.getElementById("audioEffect2");
    audio.play();
});

document.getElementById("myButton3").addEventListener("click", function() {
    var audio = document.getElementById("audioEffect3");
    audio.play();
});

document.getElementById("myButton4").addEventListener("click", function() {
    var audio = document.getElementById("audioEffect4");
    audio.play();
});


const letterInput = document.getElementById('letterInput');
    letterInput.addEventListener('input', function() {
        myAudio.play(); // Play letter entered sound when a letter is entered
    });

// Mute a singular HTML5 element
        function muteMe(elem) {
            elem.muted = !elem.muted;
        }

        // Try to mute all video and audio elements on the page
        function mutePage() {
            document.querySelectorAll("video, audio").forEach((elem) => muteMe(elem));
        }

function restartGame() {
    initGame();
}

document.addEventListener('DOMContentLoaded', initGame);
