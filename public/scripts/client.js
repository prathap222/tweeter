/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function (tweet) {
  const $tweetTemplate = `
  <article class="tweet">
    <header>
    <img src="${tweet.user.avatars}">
      <div><span>${tweet.user.name}</span></div>
      <div>${tweet.user.handle}</div>
    </header>

    <p> ${tweet.content.text} </p>
    
    <footer>
      <span>${timeago.format(tweet.created_at)} </span>
      <div>
        <a href="#"><i class="fa-solid fa-flag"></i></a> 
        <a href="#"><i class="fa-solid fa-retweet"></i></a> 
        <a href="#"><i class="fa-solid fa-heart"></i></a>  
      </div>
    </footer>
  </article>
  `;
  return $tweetTemplate;
};

const renderTweets = function (tweets) {
      
  for (const tweet of tweets) {
      const newTweet = createTweetElement(tweet);
      $('.tweets-container').prepend(newTweet);
    }
  };


$(document).ready (() => {

  // Get tweets from server; GET 
  const loadTweets = () => {
    $.ajax('/tweets', {
      method: 'GET',
      dataType: 'JSON'
    }) .then(tweets => renderTweets(tweets));
  };

  // Add new tweet; POST method for /tweet
  $('.new-tweet form').submit(function(event) {
    event.preventDefault();

    const inputMessage = $('#tweet-text').val().trim();
    console.log(inputMessage);

    if(!inputMessage) {
      alert('Cannt be empty!');

    } else if (inputMessage.length > 140){
      alert('Please make sure your tweet is under 140 characters!');

    } else {
      $.ajax('/tweets', {
        data: $(this).serialize(),
        method: 'POST'
      
      
    })
      .then(() => {
        loadTweets();
        $('#tweet-text').val('');
        $('.counter').text('140');
      });
    }
  });


  
  loadTweets();
  

});
