// Generate Silly Sentence Button

let nouns = ['birds', 'pencil', 'house', 'bicycle', 'cat', 'car', 'mouse', 'glass', 'helicopter', 'iPhone', 'orange', 'apple'];
let verbs = ['tickled', 'skipped', 'sang', 'giggled', 'vomited', 'sneezed', 'ran', 'drew', 'kicked', 'wrestled', 'surfed', 'threw' ];
let adjectives = ['bright', 'angry', 'delighted', 'silly', 'enormous', 'boring', 'turquoise', 'grumpy', 'sunny', 'blonde', 'scary', 'intelligent'];

let button1 = document.getElementById('button-1');
button1.addEventListener('click', createSillySentence);

function createSillySentence() {
    let nounRandomIndex = Math.floor(Math.random() * nouns.length);
    let verbRandomIndex = Math.floor(Math.random() * verbs.length);
    let adjectiveRandomIndex = Math.floor(Math.random() * adjectives.length);

    let randomNoun = nouns[nounRandomIndex];
    let randomVerb = verbs[verbRandomIndex];
    let randomAdjective = adjectives[adjectiveRandomIndex];

    let paragraph = document.createElement('p');
    paragraph.id = 'silly-sentence';
    paragraph.innerHTML = `The ${randomAdjective} ${randomNoun} ${randomVerb} in the park.`;
    document.body.appendChild(paragraph);
}

// Create Your Own Silly Sentence