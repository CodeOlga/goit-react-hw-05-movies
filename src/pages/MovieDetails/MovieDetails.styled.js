import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StyledLinkBtn = styled(Link)`
  margin-left: 15px;
  padding: 4px 8px;
  border: 1px solid #808080;
  border-radius: 5px;
  color: #000000;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

export const AddInfo = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100vw;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500px;
`;
