import {Meta, Story} from '@storybook/react';
import {memo, useState} from 'react';

export default {
  title: 'React.memo demo',
} as Meta;


const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
  console.log('USERS')
  return <div>
    {props.users.map((u, i) => <div key={i}>{u}</div>)}
  </div>
}

const Users = memo(UsersSecret)

export const Example1: Story = () => {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Andrey', 'Viktor', 'Sacha'])
  const addUser = () => {
    return setUsers([...users, 'Artem']);
  }
  return (
      <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
      </>
  )
}




