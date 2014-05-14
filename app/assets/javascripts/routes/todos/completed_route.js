// For more information see: http://emberjs.com/guides/routing/

App.TodosCompletedRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },

  // Default behavior!
  renderTemplate: function(controller) {
    return this.render('todos/index', {controller: controller});
  }
});
