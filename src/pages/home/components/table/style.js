import styled from 'styled-components';

export const TableWrapper = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%
table {
  border-collapse: collapse;
 
  width: 100%;

}

th {
  text-transform: uppercase;
}

th, td {
  text-align: left;
  padding: 8px;
}

td {
  text-transform: capitalize;
}

tr:nth-child(even) {background-color: #f2f2f2;}

`;