/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

createTweetElement = (tweetData) => {
  //1461113959088 ms make it to days 
  const tweet = `
     <article>
          <header class="tweet-header">
            <img src= ${tweetData.user.avatars}>
            <div id="nameAndUsername">
              <h1 class="posterName">${tweetData.user.name}</h1>
              <h2 class="username">${tweetData.user.handle}</h2>
            </div>
          </header>
          <div class="tweet-content">
            ${tweetData.content.text} </div>
          <footer class="tweet-footer">
            <div class="daysAGo"> ${tweetData.created_at} days ago </div>
            <div id="icons">
              <i class="fas fa-camera"></i>
              <i class="far fa-arrow-alt-circle-up"></i>
            </div>
            </div>
          </footer>
        </article>
`;
  return tweet;
}

//helper function
const renderTweets = function(tweets) {
  for (tweet of tweets) {
    $('#tweets-container').append(createTweetElement(tweet));
  }
}

$(document).ready(function() {
  renderTweets(tweetData);
});


