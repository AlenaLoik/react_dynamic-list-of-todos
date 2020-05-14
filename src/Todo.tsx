import React from 'react';
import { User } from './User';
import { ApdateTodo } from './api';

type Props = {
  todo: ApdateTodo;
};

export const Todo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <>
      <td className="title">{title}</td>
      <td className="status">{(completed) ? 'yes' : 'no'}</td>
      <User user={user} />
    </>
  );
};
