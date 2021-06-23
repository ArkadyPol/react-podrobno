type ItemType = {
  title: string
  value: any
}


export type AccordionPropsType = {
  title: string
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
  items: ItemType[]
  onClick: (value: any) => void
}


function Accordion(props: AccordionPropsType) {
  const toggleCollapsed = () => {
    props.setCollapsed(!props.collapsed);
  }
  console.log('Accordion rendering')
  return (
      <div>
        <AccordionTitle title={props.title} toggleCollapsed={toggleCollapsed}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
      </div>
  );
}

type AccordionTitlePropsType = {
  title: string
  toggleCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendering')
  return <h3 onClick={props.toggleCollapsed}>{props.title}</h3>;
}

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  console.log('AccordionBody rendering')
  return (
      <ul>
        {props.items.map((item, i) =>
            <li onClick={() => props.onClick(item.value)} key={i}>{item.title}</li>)}
      </ul>
  );
}


export default Accordion;