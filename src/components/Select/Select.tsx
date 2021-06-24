import {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css';

type ItemType = {
  title: string
  value: any
}

export type SelectPropsType = {
  value?: any
  onChange: (value: any) => void
  items: ItemType[]
}

function Select(props: SelectPropsType) {
  const [active, setActive] = useState(false)
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
  const selectedItem = props.items.find((item => item.value === props.value))
  const hoveredItem = props.items.find((item => item.value === hoveredElementValue))

  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [props.value])

  const toggleItems = () => setActive(!active)
  const onItemClick = (value: any) => {
    props.onChange(value)
    toggleItems()
  }

  const itemsElements = props.items.map(item => {
    return <div onMouseEnter={() => setHoveredElementValue(item.value)}
                className={`${s.item} ${hoveredItem === item ? s.selected : ''}`}
                key={item.value}
                onClick={() => onItemClick(item.value)}>{item.title}</div>;
  })

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretenderElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
          if (pretenderElement) {
            props.onChange(pretenderElement.value)
            return
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value)
      }
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false)
    }
  }

  return (
      <div tabIndex={0} className={s.select} onKeyUp={onKeyUp}>
        <span onClick={toggleItems} className={s.main}>{selectedItem && selectedItem.title}</span>
        {active && <div className={s.items}> {itemsElements} </div>}
      </div>
  )
}

export default Select