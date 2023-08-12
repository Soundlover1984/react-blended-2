import { IoLogoReact } from 'react-icons/io5';
import { NavBar, HeaderWrapper, NavText } from './Header.styled';
import { Container } from 'components';
import { useTheme } from '@emotion/react';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <IoLogoReact size="40px" color={theme.colors.accent} />

            <NavText>Lesson 4</NavText>
          </HeaderWrapper>
        </Container>
      </NavBar>
    </>
  );
};
