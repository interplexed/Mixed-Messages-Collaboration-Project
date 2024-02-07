// Generate Silly Sentence Button

document.addEventListener("DOMContentLoaded", function() {
    // Define button variable, create paragraph element and where it must render
    const button = document.getElementById("button-1");
    const sentenceParagraph = document.createElement("p");
    sentenceParagraph.className = "generated-sentence";
    button.parentNode.insertBefore(sentenceParagraph, button.nextSibling);

    button.addEventListener("click", function() {
        // Generate a silly sentence
        const sillySentence = generateSillySentence(); 
        
        // Update the content of the paragraph element to display the new sentence
        sentenceParagraph.textContent = sillySentence;
    });

    // Function to generate a silly sentence
    function generateSillySentence() {
        const nouns = ['birds', 'pencil', 'house', 'bicycle', 'cat', 'car', 'mouse', 'glass', 'helicopter', 'iPhone', 'orange', 'apple'];
        const adjectives = ['bright', 'angry', 'delighted', 'silly', 'enormous', 'boring', 'turquoise', 'grumpy', 'sunny', 'blonde', 'scary', 'intelligent'];
        const verbs = ['read', 'skipped', 'sang', 'giggled', 'vomited', 'sneezed', 'ran', 'drew', 'swam', 'wrestled', 'surfed', 'cried' ];

        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

        return `The ${randomAdjective} ${randomNoun} ${randomVerb} in the park during sunset!`;
    }
});

// Create Your Own Silly Sentence




