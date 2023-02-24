import styled from 'styled-components';

export const MenuBarContainer = styled.nav`
  border: solid 1px black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f8f8f8;
  padding: 10px 20px;
`;

export const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 50px;
  padding: 10px;
  list-style: none;

`;

export const MenuItem = styled.li`
margin: 0 10px;
`;