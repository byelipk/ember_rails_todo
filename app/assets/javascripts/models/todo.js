// for more details see: http://emberjs.com/guides/models/defining-models/

TodoMVC.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});
