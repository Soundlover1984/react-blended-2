import styled from '@emotion/styled';

export const ForbesItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;

  padding: 10px 30px 10px 10px;
  overflow: hidden;
  border-radius: 10px;

  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.white};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

export const Avatar = styled.img`
  width: 60px;
  border-radius: 50%;

  box-shadow: ${props => props.theme.shadows.regular};
`;

export const Name = styled.h3`
  color: ${props => props.theme.colors.gray};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  margin-left: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
`;

export const Capital = styled.span`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(1)};

  color: ${props => props.theme.colors.accent};
  font-weight: 700;

  font-size: ${props => props.theme.spacing(6)};
`;
