export type AccordionPropsType = {
  title: string
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}


function Accordion(props: AccordionPropsType) {
  const toggleCollapsed = () => {
    props.setCollapsed(!props.collapsed);
  }
  console.log('Accordion rendering')
  return (
      <div>
        <AccordionTitle title={props.title} toggleCollapsed={toggleCollapsed}/>
        {!props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
  console.log('AccordionBody rendering')
  return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
  );
}


export default Accordion;