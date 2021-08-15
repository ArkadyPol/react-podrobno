import {Meta, Story} from '@storybook/react';
import {memo, useCallback, useMemo, useState} from 'react';
import Select from '../components/Select/Select';

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

const MemoizedSelect = memo(Select)

export const HelpsExample: Story = () => {
  console.log('HelpsExample')
  const [counter, setCounter] = useState(0)
  const [cities, setCities] = useState(
      [
        {value: '1', title: 'Minsk', country: 'Belarus', population: 2_000_000},
        {value: '2', title: 'Moscow', country: 'Russia', population: 12_600_000},
        {value: '3', title: 'Kiev', country: 'Ukraine', population: 3_000_000}
      ]
  )
  const onChange = useCallback((value: any) => {
    console.log('onChange', value)
  }, [])

  const citiesWithM = useMemo(() => cities.filter(c => c.title.toLowerCase().indexOf('m') > -1), [cities])
  const citiesFromBelarus = useMemo(() => cities.filter(c => c.country === 'Belarus'), [cities])
  const citiesWithPopMoreThan10M = useMemo(() => cities.filter(c => c.population > 10_000_000), [cities])

  return <>
    <MemoizedSelect onChange={onChange} items={citiesWithM}/>
    <MemoizedSelect onChange={onChange} items={citiesFromBelarus}/>
    <MemoizedSelect onChange={onChange} items={citiesWithPopMoreThan10M}/>
    {counter}
    <button onClick={() => setCounter(counter + 1)}>+</button>
  </>
}



