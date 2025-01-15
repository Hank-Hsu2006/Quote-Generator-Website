// Array of quotes
const quotes = [
    {
        text: "\"Your time is limited, don't waste it living someone else's life.\" - Steve Jobs",
        image: "Qbg1.jpg"
    },
    {
        text: "\"The only limit to our realization of tomorrow will be our doubts of today.\" -Franklin D. Roosevelt",
        image: "Qbg2.jpg"
    },
    {
        text: "\"The only way to do great work is to love what you do.\" - Steve Jobs",
        image: "Qbg3.jpg"
    },
    {
        text: "\"Success is stumbling from failure to failure with no loss of enthusiasm.\" -Winston Churchill",
        image: "Qbg4.jpg"
    },
    {
        text: "\"If you want to live a happy life, tie it to a goal, not to people or things.\" - Albert Einstein",
        image: "Qbg5.jpg"
    },
    {
        text: "\"I can accept failure, everyone fails at something. But I can't accept not trying.\" - Michael Jordan",
        image: "Qbg6.jpg"
    },
    {
        text: "\"I have a dream.\" - Martin Luther King Jr.",
        image: "Qbg7.jpg"
    },
    {
        text: "\"The way to get started is to quit talking and begin doing.\" - Walt Disney",
        image: "Qbg8.jpg"
    },
];

// Getting the necessary elements
const quoteText = document.querySelector('blockquote');
const quoteBG = document.getElementById('quoteBG');
const generateButton = document.getElementById('generateButton');

// Keep track of displayed quotes
let displayedQuotes = [];

// Function to generate a random quote
function generateQuote() 
{
    // Checking if all quotes have been displayed
    if (displayedQuotes.length === quotes.length) 
    {
        // Reset the displayed quotes array
        displayedQuotes = [];
    }
    
    let randomQuote;
    
    // Repeats the randomized quotes and ensures that all quotes are repeated before a new random cycle
    do 
    {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        randomQuote = quotes[randomIndex];
    } 
    while (displayedQuotes.includes(randomQuote));
    
    // Get the random quote and image
    const randomText = randomQuote.text;
    const randomImage = randomQuote.image;
    
    // Set the quote text and image
    quoteText.textContent = randomText;
    quoteBG.src = randomImage;
    
    // Add the displayed quote to the array
    displayedQuotes.push(randomQuote);
}

// Add event listener to the generateQuote button
generateButton.addEventListener('click', generateQuote);

// Generate a random quote when first opening the page 
generateQuote();