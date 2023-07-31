import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ListItem = styled.li`
  // color: #810103;
  color: #211f1f;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  // font-weight: 500;
  // color: #000000;
  color: #211f1f;
`;
