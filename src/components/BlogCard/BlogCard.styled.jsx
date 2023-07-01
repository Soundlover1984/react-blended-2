import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: ${props => props.theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.white};
`;

export const CardHeader = styled.div`
  background-color: ${props => props.theme.colors.gray};
`;

export const CardPoster = styled.img`
  object-fit: cover;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};

  padding: ${props => props.theme.spacing(4)};
`;

export const Tag = styled.span`
  align-self: flex-start;

  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};
  border-radius: ${props => props.theme.spacing(4)};
  font-size: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.colors.white};

  background: ${props => props.theme.colors.tagBackground};
`;

export const CardTitle = styled.h2`
  font-size: ${props => props.theme.spacing(6)};
  text-transform: capitalize;

  margin-bottom: 0;
`;

export const CardText = styled.p`
  font-weight: 200;
  letter-spacing: ${props => props.theme.spacing(0.2)};

  margin-bottom: 0;
`;

export const CardFooter = styled.div`
  display: flex;
  padding: ${props => props.theme.spacing(4)};
  margin-top: auto;
`;

export const UserBox = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing(2)}; ;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  position: relative;
`;

export const UserName = styled.h3`
  font-size: ${props => props.theme.fontSizes.small};

  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const Date = styled.small`
  color: ${props => props.theme.colors.gray};
`;
