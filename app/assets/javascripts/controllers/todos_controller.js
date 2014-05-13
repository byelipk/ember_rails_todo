// for more details see: http://emberjs.com/guides/controllers/

App.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get todo
      var title = this.get('newTitle');
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
    }
  },

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflections: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'todo' : 'todos';
  }.property('remaining')
});
