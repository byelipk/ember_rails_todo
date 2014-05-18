// For more information see: http://emberjs.com/guides/routing/

App.TodosActiveRoute = Ember.Route.extend({
  model: function() {
    // For info on DS.Store.filter see:
    // http://emberjs.com/api/data/classes/DS.Store.html#method_filter
    return this.store.filter('todo', function(todo) {
      //  the callback should return a falsy value
      return !todo.get('isCompleted');
    });
  },

  renderTemplate: function(controller) {
    // Render todos.index and supply it the current ArrayController so it
    // uses the collection of uncompleted todos.
    return this.render('todos/index', { controller: controller });
  }
});
