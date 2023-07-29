import styled from '@emotion/styled';

export const CountryWrapper = styled.div`
  background: #fff;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  position: relative;

  margin-left: auto;
  margin-right: auto;
`;

export const CountryDescription = styled.div`
  padding: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Flag = styled.div`
  height: 90px;
  width: 140px;

  border-radius: 8px;

  z-index: 10;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  border: 4px solid #fff;

  position: absolute;
  left: -10%;
  top: -13%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  /* width: 150px; */

  position: relative;
  border-radius: 8px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const CountryCapital = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #999;
  font-size: 1.25rem;
  margin: 0;
`;

export const CountryTitle = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  letter-spacing: 0.5px;
  color: #333;
  margin: 0;
`;

export const CountryDetail = styled.p`
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  color: #999;
  margin: 0;
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;
