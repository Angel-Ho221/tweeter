/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

createTweetElement = (tweetData) => {
  //1461113959088 ms make it to days 
  let createdDate = new Date(tweetData.created_at);
  let today = Date.now();
  let difference = Math.round((today - createdDate) / 1000 / 60 / 60 / 24);

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
           ${escape(tweetData.content.text)} </div> 
          <footer class="tweet-footer">
            <div class="daysAGo"> ${difference} days ago </div>
            <div id="icons">
              <i class="fa fa-heart" aria-hidden="true"></i>
             <i class="fa fa-retweet" aria-hidden="true"></i>
            <i class="fa fa-flag" aria-hidden="true"></i>
            </div>
            </div>
          </footer>
        </article>
`;
  return tweet;
}

//helper function
const renderTweets = function(tweets) {
  for (tweet of tweets.reverse()) {
    $('.tweets-container').append(createTweetElement(tweet));
  }
}

$(document).ready(function() {
  loadtweets();
  const $form = $("form");
  $form.on("submit", function(event) {
    event.preventDefault();
    if ($("#tweet-text").val().length > 140) {
      $("#err-msg").addClass("show");
      return;
    } else if ($("#tweet-text").val() === "" || $("#tweet-text").val() === null) {
      console.log('test');
      $("#err-msg").addClass("show");
      return;
    } else {
      $("#err-msg").removeClass("show")
    }
    const $form = $("form");
    $.ajax({
      url: $form.attr("action"),
      method: "POST",
      data: $form.serialize()
    }).then((response) => {
      $("#tweet-text").val("");
      loadtweets();
    })
  })
});

const loadtweets = function() {
  const $form = $("form");
  $('.tweets-container').empty();
  $.get($form.attr('action'), function(data) {
    // console.log(data)
    renderTweets(data);
  })
};


// const loadTweets = function() {
//   let dataJ = '/data-files/initial-tweets.json';
//   console.log(dataJ);
//   $.ajax({ url: '/tweets', method: `GET` })
//     .then((data) => {
//       return renderTweets(data)
//     })
// }

// loadTweets();


