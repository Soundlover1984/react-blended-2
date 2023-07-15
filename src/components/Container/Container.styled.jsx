import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.spacing(300)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;
`;
