/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
      {
         user: {
          name: "Newton",
          avatars: "https://i.imgur.com/73hZDYK.png",
          handle: "@SirIsaac",
        },
        content: {
          text: "If I have seen further it is by standing on the shoulders of giants",
        },
        created_at: 1461116232227,
      },
      {
        user: {
          name: "Descartes",
          avatars: "https://i.imgur.com/nlhLi3I.png",
          handle: "@rd",
        },
        content: {
          text: "Je pense , donc je suis",
        },
        created_at: 1461113959088,
      },
    ];

const createTweetElement = function (tweets) {
  const $tweetTemplate = `
  <article class="tweet">
    <header>
    <img src="${tweets.user.avatars}">
      <div><span>${tweets.user.name}</span></div>
      <div>${tweets.user.handle}</div>
    </header>

    <p> ${tweets.content.text} </p>
    
    <footer>
      <span>${tweets.created_at} </span>
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
    tweets.forEach((tweet) => {
      const newTweet = createTweetElement(tweet);
      $('#tweets-container').append(newTweet);
    });
  };

  renderTweets(data);