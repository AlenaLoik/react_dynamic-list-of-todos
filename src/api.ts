export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
};

export const getTodos = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json());
};

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ApdateTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: Users;
}

export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: object;
  phone: string;
  website: string;
  company: object;
}
