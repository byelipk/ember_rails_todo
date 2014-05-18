module("Integration: TodosTemplate", {
  setup: function() {
    Ember.run(App, App.advanceReadiness);
  },
  teardown: function() {
    App.reset();
  }
});

test("Check the h1 element is rendered", function() {
  expect(1); // Because visit() is an async helper, we give an expectation
             // for how many assertions to wait for

  visit("/").then(function() {
    ok(exists("#header"), "The header was rendered.");
  });
});

test("Check the footer is rendered", function() {
  expect(1);

  visit("/").then(function() {
    ok(exists("#info"), "The footer was rendered.");
  });
});

test("Check the unordered list is rendered", function() {
  expect(1);

  visit("/").then(function() {
    ok(exists("#todo-list"), "The unordered list was rendered.");
  });
});

test("Check the new-todo input is rendered", function() {
  expect(1);

  visit("/").then(function() {
    ok(exists("#new-todo"), "The new todo input was rendered.");
  });
});

test("Check the number of list items rendered", function() {
  expect(1);

  visit("/").then(function() {
    equal(find("ul#todo-list li").length, 3);
  });
});
