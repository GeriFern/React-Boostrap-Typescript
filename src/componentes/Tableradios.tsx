import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Table } from 'react-bootstrap';
import styled from 'styled-components';

// Definimos un tipo para el estado de los radios por fila
type RadioState = {
  [key: string]: number;
};

// Estilo personalizado para Form.Check
const StyledFormCheck = styled(Form.Check)`
  .form-check-input:checked {
    background-color: #926642;
    border-color: #926642;
  }
`;

// Estilo personalizado para el encabezado de la tabla
const StyledTableHeader = styled.thead`
  th {
    color: #538E9C;
  }
`;

const Tableradios: React.FC = () => {
  // Estado para mantener el estado de los radios por fila
  const [selectRadios, setSelectRadios] = useState<RadioState>({
    row1: 0,
    row2: 1,
    row3: 2,
    row4: 3,
    row5: 4,
    row6: 5,
    row7: 6,
  });

  // Función para manejar el cambio de estado de los radios
  const CambioStateRadios = (row: string, col: number) => {
    setSelectRadios((prevState) => ({
      ...prevState,
      [row]: col,
    }));
  };

  // Función para renderizar los botones de radio para una fila dada
  const RadioButtons = (row: string) => {
    return Array(6)
      .fill(null)
      .map((_, index) => (
        <td key={index}>
          <StyledFormCheck
            inline
            name={row}
            type="radio"
            checked={selectRadios[row] === index}
            onChange={() => CambioStateRadios(row, index)}
            aria-label={`radio ${index + 1}`}
          />
        </td>
      ));
  };

  return (
    <Table responsive bordered>
      <StyledTableHeader>
        <tr>
          <th>Row name</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
        </tr>
      </StyledTableHeader>
      <tbody>
        <tr>
          <td>Row 1</td>
          {RadioButtons('row1')}
        </tr>
        <tr>
          <td>Row 2</td>
          {RadioButtons('row2')}
        </tr>
        <tr>
          <td>Row 3</td>
          {RadioButtons('row3')}
        </tr>
        <tr>
          <td>Row 4</td>
          {RadioButtons('row4')}
        </tr>
        <tr>
          <td>Row 5</td>
          {RadioButtons('row5')}
        </tr>
        <tr>
          <td>Row 6</td>
          {RadioButtons('row6')}
        </tr>
        <tr>
          <td>Row 7</td>
          {RadioButtons('row7')}
        </tr>
      </tbody>
    </Table>
  );
};

export default Tableradios;