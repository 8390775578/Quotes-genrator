const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//show loading 
function loading(){
    loader.hidden = false;
    quoteContainer.hidden= true;
}
//hide loading
function complete(){
   if(!loader.hidden) quoteContainer.hidden= false;
    loader.hidden= true;
}



function newQuotes(){
    loading();
    //pick random code from apiQuotes array
    const quotes=localQuotes[Math.floor(Math.random()*localQuotes.length)];
    console.log(quotes);
    //Check if author field is blank and replace it with 'unknown' 
    if(!quotes.author){
        authorText.textContent='unknown';
    }else{
        authorText.textContent=quotes.author;
    }
    //check Quote length to determine styling of quotes
    if(quotes.text.length >120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    //set quotes ,hide loader
    quoteText.textContent=quotes.text;
    complete();

}
//tweet quotes and
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click',newQuotes);
twitterBtn.addEventListener('click', tweetQuote);




newQuotes();


