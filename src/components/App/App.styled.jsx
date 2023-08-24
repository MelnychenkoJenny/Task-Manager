import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: ${({ theme: { colors } }) => colors.lightGreyCard};
`;
