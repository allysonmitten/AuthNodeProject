//config/auth.js

//exposeour config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID'      : '1706140112963848', // your App ID
        'clientSecret'  : 'fbb79b68402507e8c92cb90f5b07f448', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};