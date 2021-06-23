import {useState} from 'react';
import s from './Select.module.css';

type ItemType = {
  title: string
  value: any
}

export type SelectPropsType = {
  value: any
  onChange: (value: any) => void
  items: ItemType[]
}

function Select(props: SelectPropsType) {
  const [collapsed, setCollapsed] = useState(true)
  const selectedTitle = props.items.find((item => item.value === props.value))?.title
  const itemsElements = props.items.map((item, i) => {
    const onChange = () => {
      props.onChange(item.value)
      setCollapsed(true)
    }
    return <div className={s.option} key={i} onClick={onChange}>{item.title}</div>;
  })

  return (
      <div onBlur={() => setCollapsed(true)} tabIndex={0}>
        <div onClick={() => setCollapsed(!collapsed)} className={s.select}>{selectedTitle}
          <svg viewBox={'0 0 24 24'} className={s.svgIcon}>
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        {!collapsed && <div className={s.options}> {itemsElements} </div>}
      </div>
  )
}

export default Select