
var TwitterPackage = require('twitter');


var mongoose = require('mongoose');
mongoose.connect('mongodb://user1:123456@ds139942.mlab.com:39942/kopteste');

var secret = {
  consumer_key: 'CcM9BBYrrOuYqmjySrU5UWCpY',
  consumer_secret:'W6GbiuOYeCPhAjpO5WnMacYtdrCS5bYi1WoxYYttmKPSOFXTzx',
  access_token_key: '562442359-6LQr1crym0AYMChOEQoD4FcUFdBkDZ54gTcewgCQ',
  access_token_secret: 'DgT99GwZdedXCKKDg84kDTF6xCzfrG8P49GWTBEPcv69e'
}

//criando modelos

var Post = mongoose.model('post', {
 mensagem: String ,
 horario_post:Date,
 user:String,
 owner:String

});
var owner = "user1";

var twitter = new TwitterPackage(secret)




var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@jairbolsonaro'}, function(stream) {

  stream.on('data', function(tweet) {

    var postNegfunction = function(){
       
        if(tweet.text=="racista" || tweet.text=="ditador" || tweet.text=="homofobico"
          ){
          console.log('desfavorável');
        }else{
          console.log('favoravel');
        }
}
    console.log(tweet.text, tweet.created_at);

    var postAtual = new Post({mensagem: tweet.text,owner: owner});


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

