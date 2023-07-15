import styled from '@emotion/styled';

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  background-color: ${props => props.color};

  border: 4px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${({ theme }) => theme.spacing(4)};
  overflow: hidden;
`;
