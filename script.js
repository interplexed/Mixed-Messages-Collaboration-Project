document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById("button-1");
    const button2 = document.getElementById("button-2");
    const generatedSentenceParagraph = document.createElement("p");
    const createdSentenceParagraph = document.createElement("p");

    generatedSentenceParagraph.className = "generated-sentence";
    createdSentenceParagraph.className = "created-sentence";

    button1.parentNode.insertBefore(generatedSentenceParagraph, button1.nextSibling);
    button2.parentNode.insertBefore(createdSentenceParagraph, button2.nextSibling);

    button1.addEventListener("click", function() {
        // Generate a silly sentence
        const sillySentence = generateSillySentence(); 
        
        // Update the content of the paragraph element to display the new sentence
        generatedSentenceParagraph.textContent = sillySentence;
    });

    button2.addEventListener("click", function() {
        // Call the function to create the silly sentence
        const createdSillySentence = createSillySentence();

        // Update the content of the paragraph element with the generated silly sentence
        createdSentenceParagraph.textContent = createdSillySentence;
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

    // Function to generate your own silly sentence
    function createSillySentence() {
        // Get values from the submitted form in the URL
        const words = new URLSearchParams(window.location.search);

        const inputNoun = document.getElementById('noun').value.toLowerCase();
        const inputAdjective = document.getElementById('adjective').value.toLowerCase();
        const inputVerb = document.getElementById('verb').value.toLowerCase();
        
        return `The ${inputAdjective} ${inputNoun} ${inputVerb} in the park during sunset!`;
    }

    const startAgainButton = document.getElementById('start-over');
    startAgainButton.addEventListener("click", function() {
        // When clicked, reload the page to start again
        location.reload();
    })
});





