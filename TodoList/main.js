"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = (todoid) => `Todo with id ${todoid} not found`;

const getNewTodoId = (todos) => {
  return (
    todos.reduce((maxID, todo) => {
      return Math.max(maxID, todo[todoKeys.id]);
    }, 0) + 1
  );
};

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoid) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoid);
  if (todo === undefined) {
    console.error(errTodoNotFound(todoid));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoByid = (todos, todoid) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoid);
  if (todoIndex == -1) {
    console.error(errTodoNotFound(todoid));
    return todos;
  }

  todos.splice(todoIndex, 1);
  return todos;
};
