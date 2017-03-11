$('#rating_2').rating({
    fx: 'half',
    image: 'images/stars.png',

    loader: 'images/ajax-loader.gif',

    url: 'rating.php',

    callback: function(responce){

         
        this.vote_success.fadeOut(2000);
         

        alert('Общий бал: '+this._data.val);

    }

});
