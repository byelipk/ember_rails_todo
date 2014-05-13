// for more details see: http://emberjs.com/guides/views/

App.TodoEditView = Ember.TextField.extend({
  // For info on the didInsertElement event see:
  // http://emberjs.com/api/classes/Ember.View.html#event_didInsertElement
  
  didInsertElement: function() {
    // When the text field has been inserted into the DOM, this event will
    // be called and focus will be on the inserted text field
    this.$().focus();
  }
});

// Turn this view into a Handlebars helper
Ember.Handlebars.helper('edit-todo', App.TodoEditView);
