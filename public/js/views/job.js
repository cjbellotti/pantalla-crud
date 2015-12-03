App.Views.Job = Backbone.View.extend({

  className : "modal fade",

  initialize : function (config) {

    this.template = swig.compile(getTemplate('templates/job-screen.html'));

  },

  events : {
    "click .job-ok" : "save"
  },

  save : function () {
  },

  render : function () {

    this.$el.html(this.template());

  }

});
