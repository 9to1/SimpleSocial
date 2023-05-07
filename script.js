const tweetForm = document.querySelector('form');
const tweetInput = document.querySelector('textarea');
const tweetList = document.querySelector('#tweets');
let tweets = JSON.parse(localStorage.getItem('tweets')) || [];

// Füge vorhandene Tweets zum Anzeigen hinzu
tweets.forEach((tweet) => {
  addTweetToPage(tweet);
});

tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if(tweetInput.value.trim() === '') {
        return;
    }

    // Erstelle ein neues Tweet-Objekt
    const tweet = {
      content: tweetInput.value,
      date: new Date().toLocaleString()
    };

    // Füge das Tweet-Objekt zur Liste der Tweets hinzu
    tweets.push(tweet);

    // Speichere die aktualisierte Liste der Tweets im localStorage
    localStorage.setItem('tweets', JSON.stringify(tweets));

    // Füge den neuen Tweet zum Anzeigen hinzu
    addTweetToPage(tweet);

    tweetInput.value = '';
});

function addTweetToPage(tweet) {
  const tweetDiv = document.createElement('div');
  tweetDiv.classList.add('tweet');

  const tweetContent = document.createElement('p');
  tweetContent.textContent = tweet.content;

  const tweetDate = document.createElement('p');
  tweetDate.classList.add('date');
  tweetDate.textContent = tweet.date;

  tweetDiv.appendChild(tweetContent);
  tweetDiv.appendChild(tweetDate);

  tweetList.appendChild(tweetDiv);
}




const fileInput = document.querySelector('#file-input');
const uploadButton = document.querySelector('#upload-button');

uploadButton.addEventListener('click', function(e) {
    e.preventDefault();

    const file = fileInput.files[0];

    if(file
