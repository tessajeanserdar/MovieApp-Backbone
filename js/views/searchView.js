MovieApp.Views.Search = Backbone.View.extend({

    events: {
        'click button' : 'getmovies'
    },

    template: "<input type='text' placeholder='search'> \
               <button class='btn btn-default'>Search movie</button> \
               <ul id='movie-list'></ul>",

    render: function()
    {
        this.$el.html(this.template);
        return this;
    },
    getmovies: function() {

        var title = this.$el.find('input').val();
        var movies = new MovieApp.Collections.Movies({title: title});

        movies.fetch({success: this.rendermovies.bind(this)});
    },
    rendermovies: function(movies) {

        var movieview;
        console.log("we are trying to render the list of movies," ,movies)

        for (var n in movies.models) {

            movieview = new MovieApp.Views.MovieView({model: movies.models[n]});

            this.$el.find('#movie-list').append(movieview.render().el);
        }
    }
});