import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const StyledFormCheck = styled(Form.Check)`
  .form-check-input:checked {
    background-color: #926642;
    border-color: #926642;
  }
`;

const CheckboxSelector: React.FC = () => {
  const [selectCheckbox, setSelectCheckbox] = useState({
    optCheckbox1: true,
    optCheckbox2: true,
    optCheckbox3: true,
    optCheckbox4: true,
    optCheckbox5: true,
    optCheckbox6: true,
    optCheckbox7: true,
    optCheckbox8: false,
  });

  const CambioStateCheckbox = (option: keyof typeof selectCheckbox) => {
    setSelectCheckbox((stateCheckbox) => ({
      ...stateCheckbox,
      [option]: !stateCheckbox[option],
    }));
  }

  return (
    <>
      <h2>Heading 2</h2>
      {Object.entries(selectCheckbox).map(([option, isChecked], index) => (
        <StyledFormCheck 
          key={option}
          type="checkbox"
          id={`checkbox-${option}`}
          label={`Option ${index + 1}`}
          checked={isChecked}
          onChange={() => CambioStateCheckbox(option as keyof typeof selectCheckbox)}
          style ={{fontSize: '14px',color: '#1A1A1A'}}
        />
      ))}
    </>
  );
}

export default CheckboxSelector;