import styled from '@emotion/styled';

export const LeaderBoard = styled.div`
  width: ${props => props.theme.spacing(120)};
  border-radius: ${props => props.theme.spacing(3)};

  margin: 0 auto;
  overflow: hidden;
`;

export const BoardHeader = styled.header`
  padding: ${props => props.theme.spacing(12)};

  background-color: ${props => props.theme.colors.accent};
`;

export const BoardTitle = styled.h2`
  text-align: right;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  margin: 0;
`;

export const TitleTop = styled.span`
  display: block;
  letter-spacing: ${props => props.theme.spacing(1.6)};
`;

export const TitleBottom = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 300;
  letter-spacing: ${props => props.theme.spacing(0.4)};
`;

export const LeaderBoardProfiles = styled.ul`
  background-color: ${props => props.theme.colors.white};
  border-radius: 0 0 ${props => props.theme.spacing(3)};

  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};

  display: grid;
  row-gap: ${props => props.theme.spacing(2)};
`;
