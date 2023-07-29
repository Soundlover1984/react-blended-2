import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';

export const CountryInfo = ({
  flag,
  capital,
  country,
  id,
  languages = [],
  population,
}) => {
  return (
    <h2>CountryInfo</h2>
    // <CountryWrapper >
    //   <Flag>
    //     <Image />
    //   </Flag>
    //   <CountryDescription>
    //     <CountryCapital>
    //       Capital: <Accent></Accent>
    //     </CountryCapital>

    //     <CountryTitle></CountryTitle>

    //     <CountryDetail>
    //       Population: <Accent></Accent>
    //     </CountryDetail>

    //     <CountryDetail>
    //       Languages: <Accent></Accent>
    //     </CountryDetail>
    //   </CountryDescription>
    // </CountryWrapper>
  );
};
