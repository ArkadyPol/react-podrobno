type AccordionPropsTitle = {
  title: string
}


function Accordion(props: AccordionPropsTitle) {
  console.log('Accordion rendering')
  return (
      <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
      </div>
  );
}

type AccordionTitlePropsTitle = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsTitle) {
  console.log('AccordionTitle rendering')
  return <h3>{props.title}</h3>;
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