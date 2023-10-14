import styled from 'styled-components';

const Header = styled.header`
  border: 2px solid black;
  padding-top: 10px;
  text-align: center;
  font-size: 30px;
  position: sticky;
  top: 0px;
  width: 100%;
  background-color: #ffff;
  height: 50px;
`;

const Logo = styled.div``;

export default function () {
  return <Header>Austin Lee</Header>;
}
