import React, { useState } from 'react';
import { TodoList } from './TodoList';
import './App.css';
import {
  getUsers, getTodos, ApdateTodo, Users, Todos,
} from './api';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ApdateTodo[]>([]);
  const [isLoaded, setLoaded] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const loadAllTodos = () => {
    let updateTotos: ApdateTodo[] = [];

    Promise.all([getTodos(), getUsers()])
      .then(data => {
        updateTotos = data[0].map((todo: Todos) => ({
          ...todo, user: data[1].find((user: Users) => user.id === todo.userId),
        }));
      }).then(() => {
        setTodos(updateTotos);
      });
  };

  const handleLoading = () => {
    setLoading(true);
    loadAllTodos();
    setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 1500);
  };

  const sortByTodosName = () => {
    const sortedTodos = [...todos].sort((todoPrew, todoCurr) => (
      (todoPrew.title).localeCompare(todoCurr.title)
    ));

    setTodos(sortedTodos);
  };

  const sortByCompleted = () => {
    const sortedTodos = [...todos].sort((todo) => (
      +(!todo.completed)
    ));

    setTodos(sortedTodos);
  };

  const sortByUserName = () => {
    const sortedTodos = [...todos].sort((todoPrew, todoCurr) => (
      (todoPrew.user.name).localeCompare(todoCurr.user.name)
    ));

    setTodos(sortedTodos);
  };

  return (
    <>
      <h1>Dynamic list of TODOs</h1>
      {!isLoaded ? (
        <button type="button" onClick={handleLoading}>
          {isLoading ? 'Loading...' : 'Load'}
        </button>
      ) : (
        <table className="App">
          <tr>
            <th><a href="#/Todos" onClick={sortByTodosName}>Todos</a></th>
            <th><a href="#/completed" onClick={sortByCompleted}>Is completed</a></th>
            <th><a href="#/Users" onClick={sortByUserName}>Users</a></th>
          </tr>
          <TodoList todos={todos} />
        </table>
      )}
    </>
  );
};

export default App;
