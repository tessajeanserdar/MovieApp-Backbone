MovieApp.Views.MoviesView = Backbone.View.extend({

    initialize: function(options) {
        this.list = options.list;
    },

    render: function() {

        for(var n in this.list.models) {
            this.$el.append("<div class='name'>"+ this.list.models[n].attributes.name +"</div><div class='year'>"+ this.list.models[n].attributes.year +"</div>");
         }  

    return this;
    }
});