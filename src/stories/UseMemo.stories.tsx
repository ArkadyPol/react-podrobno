import {Meta, Story} from '@storybook/react';
import {memo, useMemo, useState} from 'react';

export default {
  title: 'useMemo',
} as Meta;


export const DifficultCountingExample: Story = () => {
  const [a, setA] = useState<number>(5)
  const [b, setB] = useState<number>(5)

  let resultA = 1
  let resultB = 1

  resultA = useMemo(() => {
    let tempResultA = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 10000000) {
        fake++
        const fakeValue = Math.random()
      }
      tempResultA *= i
    }
    return tempResultA
  }, [a])


  for (let i = 1; i <= b; i++) {
    resultB *= i
  }

  return (
      <>
        <input type="number" value={a} onChange={(e) => setA(e.currentTarget.valueAsNumber)}/>
        <input type="number" value={b} onChange={(e) => setB(e.currentTarget.valueAsNumber)}/>
        <hr/>
        <div>
          Result for a: {resultA}
        </div>
        <div>
          Result for b: {resultB}
        </div>

      </>
  )
}

const UsersSecret = (props: { users: Array<string> }) => {
  console.log('USERS SECRET')
  return <div>
    {props.users.map((u, i) => <div key={i}>{u}</div>)}
  </div>
}

const Users = memo(UsersSecret)

export const HelpsToReactMemo: Story = () => {
  console.log('HelpsToReactMemo')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Andrey', 'Viktor', 'Sacha', 'Dimych'])
  const addUser = () => {
    return setUsers([...users, 'Artem']);
  }
  const newArray = useMemo(() => users.filter(u => u.toLowerCase().indexOf('a') > -1), [users])

  return (
      <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
      </>
  )
}



