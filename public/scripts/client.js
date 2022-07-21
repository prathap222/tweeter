/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready (() => {

const database = [
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
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
    ]

    const renderTweets = function (tweets) {
      tweets.forEach((tweet) => {
        const newTweet = createTweetElement(tweet);
        $('.tweets-container').append(newTweet);
      });
    };

// const tweetData = {
//   user: {
//    name: "Newton",
//    avatars: "https://i.imgur.com/73hZDYK.png",
//    handle: "@SirIsaac",
//  },
//  content: {
//    text: "If I have seen further it is by standing on the shoulders of giants",
//  },
//  created_at: 1461116232227,
// };

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
      <span>${tweet.created_at} </span>
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

// const $tweet = createTweetElement(tweets);

// Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
// $(document).ready (() => {
//   console.log($tweet);
// $('.tweets-container').append($tweet)})

   renderTweets(database);
});
