// for more details see: http://emberjs.com/guides/views/

App.TodoEditView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

// Turn this view into a Handlebars helper
Ember.Handlebars.helper('edit-todo', App.TodoEditView);
