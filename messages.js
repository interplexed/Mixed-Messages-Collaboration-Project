
/* messages.js */

function generate() {

    let noun = '';
    let verb = '';
    let adjective = '';

    // check on user input - INCOMPLETE
    //console.log([document.getElementById('noun'),document.getElementById('verb'),document.getElementById('adj')].length);
    for (let x in document.getElementsByName('input')){console.log(x);if (x=="") {alert("Please fill out all three text fields &#x1F60F");}}
    //console.log(document.getElementsByName('input'));



    // rule out user input
    //console.log('check, ', document.getElementById('noun').value)
    if (!document.getElementById('noun').value && !document.getElementById('verb').value && !document.getElementById('adj').value){

        // three arrays
        const nouns = ['hat','cup','book','key','coin'];
        const verbs = ['floating','swiping','daydreaming','singing','commanding'];
        const adjectives = ['brave','elated','fierce','magnificent','thankful'];

        // randomized output from each array
        noun = nouns[Math.floor(Math.random()*5)];
        verb = verbs[Math.floor(Math.random()*5)];
        adjective = adjectives[Math.floor(Math.random()*5)];

        // create a nonsensical sentence
        //console.log('check ', document.getElementById('nonsense').innerHTML);
        document.getElementById('nonsense').innerHTML = `The ${noun}, ${verb}, was truly the most ${adjective}`;
        //console.log(`The ${noun}, ${verb}, was truly the most ${adjective}`);
        }

    else {
        // parse user input
        //console.log('customize');
        noun = document.getElementById('noun').value
        verb = document.getElementById('verb').value 
        adjective = document.getElementById('adj').value    
        //console.log(`The ${noun}, ${verb}, was truly the most ${adjective}`);
        document.getElementById('nonsense').innerHTML = `The ${noun}, ${verb}, was truly the most ${adjective}`;
    }
}





















