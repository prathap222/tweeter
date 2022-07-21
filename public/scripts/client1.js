// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  * 
//  * 
//  */
 $(document).ready(function () {
//   const data = [
//     {
//        user: {
//         name: "Newton",
//         avatars: "https://i.imgur.com/73hZDYK.png",
//         handle: "@SirIsaac",
//       },
//       content: {
//         text: "If I have seen further it is by standing on the shoulders of giants",
//       },
//       created_at: 1461116232227,
//     },
//     {
//       user: {
//         name: "Descartes",
//         avatars: "https://i.imgur.com/nlhLi3I.png",
//         handle: "@rd",
//       },
//       content: {
//         text: "Je pense , donc je suis",
//       },
//       created_at: 1461113959088,
//     },
 

  const createTweetElement = function (newTweet) {
    const $tweet = $(`<article class="tweet">Hello world</article>`);
   return $tweet;
  };


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
console.log($('.tweets.container'));
$('.tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});