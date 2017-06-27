
var TwitterPackage = require('twitter');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var secret = {
  consumer_key: 'CcM9BBYrrOuYqmjySrU5UWCpY',
  consumer_secret:'W6GbiuOYeCPhAjpO5WnMacYtdrCS5bYi1WoxYYttmKPSOFXTzx',
  access_token_key: '562442359-6LQr1crym0AYMChOEQoD4FcUFdBkDZ54gTcewgCQ',
  access_token_secret: 'DgT99GwZdedXCKKDg84kDTF6xCzfrG8P49GWTBEPcv69e'
}

//criando modelos

var Post = mongoose.model('post', { mensagem: String });

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@jairbolsonaro'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);

    var postAtual = new Post({mensagem: tweet.text});

    postAtual.save(function(err){
            if (err) {
          console.log(err);
        } else {
          console.log('salvo com sucesso');
        }
          
    });
    //salvar n
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

