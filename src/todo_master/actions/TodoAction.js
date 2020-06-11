
let nextTodo = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodo++,
  text,
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  id: id,
});
export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id: id,
});
