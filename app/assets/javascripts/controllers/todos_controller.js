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
      todo.save();
    },

    /* @clearCompleted
    **
    ** ARGS
    **  none
    **
    ** RETURN
    **  this
    **
    ** DOCS
    **  Ember.Enumerable.filterBy():
    **  http://emberjs.com/api/classes/Ember.Enumerable.html#method_setEach
    **
    **  Ember.Enumerable.invoke():
    **  http://emberjs.com/api/classes/Ember.Enumerable.html#method_invoke
    */
    clearCompleted: function() {
      // Get an array of completed todos
      var completed = this.filterBy('isCompleted', true);

      // Delete each record from the store
      completed.invoke('deleteRecord');

      // Persist those changes to the backend database
      completed.invoke('save');
    }
  },

  /* @allAreDone
  **
  ** ARGS
  **  key: name of dynamic property (i.e. allAreDone)
  **  value: boolean
  **
  ** RETURN
  **  boolean
  **
  ** DOCS
  **  @Ember.Enumerable.everyProperty() aliased to EmberEnumerable.isEvery()[depricated]
  **  http://emberjs.com/api/classes/Ember.Enumerable.html#method_isEvery
  **
  **  @Ember.Enumerable.setEach()
  **  http://emberjs.com/api/classes/Ember.Enumerable.html#method_setEach
  **/
  allAreDone: function(key, value) {
    if (value === undefined) {
      // return true if there are items in the array and if every item is completed
      return !!this.get('length') && this.everyProperty('isCompleted', true);

    } else {
      // If `value` is defined, the user clicked on the check box!
      this.setEach('isCompleted', value);
      this.invoke('save');
      return value;

    }
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
