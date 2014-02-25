require.config({
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        webaudio: "jquery.webaudio",
        xhr: "xhr/main"
    },
    shim: {
    	'jquery': {
    		exports: '$'
    	},
    	'webaudio': {
    		deps:['jquery']
    	},
    	'xhr':{
    		deps:['jquery','webaudio']
    	}
    }
});

require(['jquery','webaudio','xhr'],function(){
    arguments[2].init();
});