import styled from '@emotion/styled';

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${({ marginBottom }) => (!marginBottom ? 0 : marginBottom)};
`;
