import styled from '@emotion/styled';
// import { theme } from 'styles';

export const BaseTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;

  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const THead = styled.thead`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.dark};
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;
