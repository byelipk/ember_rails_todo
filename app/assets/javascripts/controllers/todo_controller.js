// for more details see: http://emberjs.com/guides/controllers/

App.TodoController = Ember.ObjectController.extend({
  actions: {
    editTodo: function() {
      // Switch into edit mode
      this.set('isEditing', true);
    },

    // For Ember event types like insertNewline and focusIn/focusOut see:
    // http://emberjs.com/api/classes/Ember.TextSupport.html
    acceptChanges: function() {
      // Switch out of edit mode
      this.set('isEditing', false);

      // Check if title is empty and handle accordingly
      if (Ember.isEmpty(this.get('model.title'))) {
        this.send('removeTodo');
      } else {
        this.get('model').save();
      }
    },

    removeTodo: function() {
      // Get handle on the todo record
      var todo = this.get('model');

      // Remove record from store, making it no longer queryable
      todo.deleteRecord();

      // Persist the changes
      todo.save();
    }
  },

  isEditing: false,

  isCompleted: function(key, value) {
    var model = this.get('model');

    // Get value when page is loaded
    if (value === undefined) {
      return model.get('isCompleted');
    } else {
      // Setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});
