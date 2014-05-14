// for more details see: http://emberjs.com/guides/controllers/

App.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get todo
      var title = this.get('newTitle');

      // Exit if title is empty
      if (!title.trim()) { return; }

      // Create new todo object
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Reset newTitle property
      this.set('newTitle', '');

      // Save todo
      todo.save(); // TODO: Handle promise that gets returned on success/failure
    },

    clearCompleted: function() {
      // For info on the Ember.Enumerable.filterBy() see:
      // http://emberjs.com/api/classes/Ember.Enumerable.html#method_filterBy
      var completed = this.filterBy('isCompleted', true);

      // For info on Ember.Enumerable.invoke() see:
      // http://emberjs.com/api/classes/Ember.Enumerable.html#method_invoke

      // Delete each record from the store
      completed.invoke('deleteRecord');

      // Persist those changes to the backend database
      completed.invoke('save');
    }

  },

  allAreDone: function(key, value) {
    // Ember.Enumerable.everyProperty() is aliased to EmberEnumerable.isEvery()
    // which is depricated. For more info see:
    // http://emberjs.com/api/classes/Ember.Enumerable.html#method_isEvery
    
    // return true if there are items in the array and if every item is completed
    return !!this.get('length') && this.everyProperty('isCompleted', true);
  }.property('@each.isCompleted'),

  hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),

  completed: function() {
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflections: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'todo' : 'todos';
  }.property('remaining')
});
