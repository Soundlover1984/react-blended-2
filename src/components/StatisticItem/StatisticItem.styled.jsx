import styled from '@emotion/styled';

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  background: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.small};

  padding-top: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(10)};
`;

export const StatisticText = styled.p`
  margin-bottom: 0;

  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 300;
`;

export const StatisticCounter = styled.span`
  font-size: ${props => props.theme.spacing(8)};
  font-weight: 900;
  color: ${props => props.theme.colors.accent};
`;
