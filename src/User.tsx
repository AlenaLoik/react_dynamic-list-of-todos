import React from 'react';
import { Users } from './api';

type Props = {
  user: Users;
};

export const User: React.FC<Props> = ({ user }) => (
  <td className="users">
    {user.name}
  </td>
);
