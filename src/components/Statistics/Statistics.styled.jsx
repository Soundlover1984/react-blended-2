import styled from '@emotion/styled';

export const StatisticTitle = styled.h3`
  font-size: ${props => props.theme.spacing(8)};
  font-weight: 700;
  color: ${props => props.theme.colors.dark};

  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${props => props.theme.spacing(2)};
`;
