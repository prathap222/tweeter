/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Escapes unsafe characters and returns safe html. To prevent XSS
const escape = str => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function(tweet) {
  const $tweetTemplate = `
  <article class="tweet">
    <header>
    <img src="${escape(tweet.user.avatars)}">
      <div><span>${escape(tweet.user.name)}</span></div>
      <div>${escape(tweet.user.handle)}</div>
    </header>

    <p> ${escape(tweet.content.text)} </p>
    
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

const renderTweets = function(tweets) {
      
  for (const tweet of tweets) {
    const newTweet = createTweetElement(tweet);
    $('.tweets-container').prepend(newTweet);
  }
};


$(document).ready(() => {

  // shows/hides new tweet section when clicked the arrow icon on navbar
  $('nav i').on('click', () => {
    $('.new-tweet').slideToggle();
    $('.new-tweet').show();
    $('.counter').text('140');
    $('.counter').removeClass('negative-counter');
    $('.error-message').hide();
    $('#tweet-text').val('');
    $('#tweet-text').placeholder('What are you humming about?');
    $('#tweet-text').focus();
  });

  // Get tweets from server; GET
  const loadTweets = () => {
    $.ajax('/tweets', {
      method: 'GET',
      dataType: 'JSON'
    }) .then(tweets => renderTweets(tweets));
  };

  // Add new tweet; POST method for /tweet
  $('.new-tweet form').submit(function(event) {
    

    $('.error-message').slideUp('slow');
    
    event.preventDefault();

    const inputMessage = $('#tweet-text').val().trim();
    console.log(inputMessage);

    if (!inputMessage) {
      $('.error-message').show();
      $('#errorMsg').text('Tweeting empty is not valid!!!');
      $('.error-message').slideDown('slow');
    } else if (inputMessage.length > 140) {
      $('.error-message').show();
      $('#errorMsg').text('Please make sure your tweet is under 140 characters!');
      $('.error-message').slideDown('slow');
    } else {
      $('.error-message').hide();
      $('.counter').removeClass("negative-counter");
      $.ajax('/tweets', {
        data: $(this).serialize(),
        method: 'POST'
      })
        .then(() => {
          loadTweets();
          $('#tweet-text').val('');
          $('.new-tweet').hide();
          $('.counter').text('140');
        });
    }
  });

  loadTweets();
});
