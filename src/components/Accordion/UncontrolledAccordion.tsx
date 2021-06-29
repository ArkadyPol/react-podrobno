import {useReducer} from 'react';
import {reducer} from './reducer';

export type UncontrolledAccordionPropsType = {
  title: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
  console.log('UncontrolledAccordion rendering')
  const [state, dispatch] = useReducer(reducer, {collapsed: false});
  const toggleCollapsed = () => {
    dispatch({type: 'TOGGLE-COLLAPSED'});
  }
  return (
      <div>
        <UncontrolledAccordionTitle title={props.title} toggleCollapsed={toggleCollapsed}/>
        {!state.collapsed && <UncontrolledAccordionBody/>}
      </div>
  );
}

type UncontrolledAccordionTitlePropsType = {
  title: string
  toggleCollapsed: () => void
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
  console.log('UncontrolledAccordionTitle rendering')
  return <h3 onClick={() => props.toggleCollapsed()}>{props.title}</h3>;
}

function UncontrolledAccordionBody() {
  console.log('UncontrolledAccordionBody rendering')
  return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
  );
}


export default UncontrolledAccordion;