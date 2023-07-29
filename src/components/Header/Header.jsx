import { useTheme } from '@emotion/react';
import { Container } from 'components/App/App.styled';

import { FaFlagUsa } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import { routes } from 'routes';
import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <FaFlagUsa size="40px" color={theme.colors.light} />

            <LinkWrapper>
              <NavLinkStyled to={routes.HOME}>Home</NavLinkStyled>
              <NavLinkStyled to={routes.COUNTRY}>Countries</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>

      <Outlet />
    </>
  );
};
