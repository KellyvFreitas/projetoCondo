import React, {useState} from 'react';
import {Container, IconArea, TitleGuia} from './styles';

const Accordion = ({title, content}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TitleText className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </TitleText>
  );
};

export default Accordion;
