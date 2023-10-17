import styled from 'styled-components';

const MainHeader = styled.header`
  border: 2px solid black;
  padding-top: 10px;
  text-align: center;
  font-size: 30px;
  position: sticky;
  top: 0px;
  background-color: #ffff;
  height: 50px;
`;

const Header = () => {
  return <MainHeader>Austin lee</MainHeader>;
};

export default Header;
