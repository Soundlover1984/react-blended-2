import styled from '@emotion/styled';

export const SearchFormStyled = styled.form`
  width: ${({ theme }) => theme.spacing(100)};
  margin-left: auto;
  margin-right: auto;

  position: relative;

  margin-bottom: ${({ theme }) => theme.spacing(20)};
`;

export const InputSearch = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.spacing(14)};

  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  background-color: transparent;

  padding: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(10)};
  outline: none;

  transition: ${({ theme }) => theme.animation.cubicBezier};

  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 300;
  letter-spacing: 0.03em;

  &::placeholder {
    font-weight: 200;
  }
`;

export const FormBtn = styled.button`
  width: 50px;
  height: 50px;

  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};

  position: absolute;
  top: 0;
  right: 0;
`;
