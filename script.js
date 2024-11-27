let happyMessage = ['You are stronger than you think, and today is full of possibilities.', 'Everything you need to be happy is already within you.','You are loved more than you realize.',
    'Every day is a fresh start to create something beautiful.','Happiness often sneaks in through doors you didn\'t know you left open.','You are doing better than you give yourself credit for.',
    'Small steps every day lead to big changes over time.'];

// document.getElementById("message").innerText = message1[0];


 // JavaScript to handle the onclick event
 document.getElementById("happy").onclick = function () {
    let randomNumber = Math.floor(Math.random() * happyMessage.length) + 1;
    // Access the heading element
    const heading = document.getElementById("message");
    // Change its text content
    heading.innerText = happyMessage[randomNumber-1];
};

 // JavaScript to handle the onclick event
 document.getElementById("excited").onclick = function () {
    let randomNumber = Math.floor(Math.random() * happyMessage.length) + 1;
    // Access the heading element
    const heading = document.getElementById("message");
    // Change its text content
    heading.innerText = happyMessage[randomNumber-1];
};

 // JavaScript to handle the onclick event
 document.getElementById("joke").onclick = function () {
    let randomNumber = Math.floor(Math.random() * happyMessage.length) + 1;
    // Access the heading element
    const heading = document.getElementById("message");
    // Change its text content
    heading.innerText = happyMessage[randomNumber-1];
};

// For time purposes, I just made a single array and had all the buttons call a random message from it. You can also make three arrays, based on the theme of each button, and put in messages to that theme and call the theme based array variable from each button. 