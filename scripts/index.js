console.log('im here')
//  Classes are for styling 
// '"Data attributes" are for JS"

//  #1 Make some code run  when i click the button 
// addEventListerner accepts 2 arguments:
//  - a string that identifies the kind of event to listen for 
// - a function that says what to do when the event happens 


const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]');

triggerElement.addEventListener('click', function hello() {
    console.log('Hello addEvent Listener!');
    outputElement.textContent = " lalalalla"
});


// #2 Write some text to the page on the button click
 









// #3 Pull  text from an array of text ti write to the page 


