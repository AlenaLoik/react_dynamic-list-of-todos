import React from 'react';
import { Todo } from './Todo';
import { ApdateTodo } from './api';

type Props = {
  todos: ApdateTodo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map(todo => (
        <tr className="todo">
          <Todo todo={todo} />
        </tr>
      ))}
    </>
  );
};
