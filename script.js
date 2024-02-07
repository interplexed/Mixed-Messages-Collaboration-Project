// Generate Silly Sentence Button

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button-1");

    button.addEventListener("click", function() {
        // Remove any existing sentence if present
        removeExistingSentence();

        // Generate a silly sentence
        const sillySentence = generateSillySentence(); // Assuming you have a function to generate the silly sentence
        
        // Create a paragraph element to display the sentence
        const sentenceParagraph = document.createElement("p");
        sentenceParagraph.textContent = sillySentence;

        // Append the paragraph element below the button
        button.parentNode.insertBefore(sentenceParagraph, button.nextSibling);
    });

    // Function to remove existing sentence
    function removeExistingSentence() {
        const existingSentence = document.querySelector(".generated-sentence");
        if (existingSentence) {
            existingSentence.parentNode.removeChild(existingSentence);
        }
    }

    // Function to generate a silly sentence (you can replace this with your logic)
    function generateSillySentence() {
        const nouns = ['birds', 'pencil', 'house', 'bicycle', 'cat', 'car', 'mouse', 'glass', 'helicopter', 'iPhone', 'orange', 'apple'];
        const adjectives = ['bright', 'angry', 'delighted', 'silly', 'enormous', 'boring', 'turquoise', 'grumpy', 'sunny', 'blonde', 'scary', 'intelligent'];
        const verbs = ['tickled', 'skipped', 'sang', 'giggled', 'vomited', 'sneezed', 'ran', 'drew', 'kicked', 'wrestled', 'surfed', 'cried' ];

        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

        return `The ${randomAdjective} ${randomNoun} ${randomVerb} in the park during sunset!`;
    }
});
/*
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button-1");

    button.addEventListener("click", function() {
        // Remove any existing sentence if present
        removeExistingSentence();

        // Generate a silly sentence
        const sillySentence = generateSillySentence(); // Assuming you have a function to generate the silly sentence
        
        // Create a paragraph element to display the sentence
        const sentenceParagraph = document.createElement("p");
        sentenceParagraph.textContent = sillySentence;

        // Append the paragraph element below the button
        button.parentNode.insertBefore(sentenceParagraph, button.nextSibling);
    });

    // Function to remove existing sentence
    function removeExistingSentence() {
        const existingSentence = document.querySelector(".generated-sentence");
        if (existingSentence) {
            existingSentence.parentNode.removeChild(existingSentence);
        }
    }

    // Function to generate a silly sentence (you can replace this with your logic)
    function generateSillySentence() {
        const nouns = ['birds', 'pencil', 'house', 'bicycle', 'cat', 'car', 'mouse', 'glass', 'helicopter', 'iPhone', 'orange', 'apple'];
        const adjectives = ['bright', 'angry', 'delighted', 'silly', 'enormous', 'boring', 'turquoise', 'grumpy', 'sunny', 'blonde', 'scary', 'intelligent'];
        const verbs = ['tickled', 'skipped', 'sang', 'giggled', 'vomited', 'sneezed', 'ran', 'drew', 'kicked', 'wrestled', 'surfed', 'threw' ];

        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

        return `The ${randomAdjective} ${randomNoun} ${randomVerb} in the park during sunset!`;
    }
});

// Create Your Own Silly Sentence







// Previous Code 

/*
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
};
*/