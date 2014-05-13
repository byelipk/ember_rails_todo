// for more details see: http://emberjs.com/guides/controllers/

App.TodoController = Ember.ObjectController.extend({
  isCompleted: function(key, value) {
    var model = this.get('model');

    // Getter
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