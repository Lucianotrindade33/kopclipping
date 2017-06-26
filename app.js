
var TwitterPackage = require('twitter');

var secret = {
  consumer_key: 'CcM9BBYrrOuYqmjySrU5UWCpY',
  consumer_secret:'W6GbiuOYeCPhAjpO5WnMacYtdrCS5bYi1WoxYYttmKPSOFXTzx',
  access_token_key: '562442359-6LQr1crym0AYMChOEQoD4FcUFdBkDZ54gTcewgCQ',
  access_token_secret: 'DgT99GwZdedXCKKDg84kDTF6xCzfrG8P49GWTBEPcv69e'
}

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@G1'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
