$(document).ready(function() {

    //work around for Instagram api that allows you to see previous posts
    var userFeed = new Instafeed({
        get: 'user',
        userId: 'YOURUSERID',
        limit: 10,
        resolution: 'standard_resolution',
        accessToken: 'IGQVJWOTVvdzhISkRPWjVlUWttNWpZAOXFPSi1oZAGNNbmNhQXo4MW9rdUszOUlYZAXJBamlTbGRUY24zODhEZADlDYW1VbEEzOE82dmM3c1NSN1ZADYjhnc2VWQ3QwQTJaWjhRRXI2SUhJNGJqNUptNTJCTgZDZD',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});