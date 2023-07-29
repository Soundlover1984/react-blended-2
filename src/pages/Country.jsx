import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from '../service/country-service';
import { GoBackBtn } from 'components';

export const Country = () => {
  const { id: query } = useParams();
  const [country, setCountry] = useState();
  const location = useLocation();

  console.log(query);
  useEffect(() => {
    if (!query) {
      return;
    }
    const getCountryData = async () => {
      try {
        const countryData = await fetchCountry(query);
        setCountry(countryData);
      } catch (error) {
        console.log(error);
      }
    };
    getCountryData();
  }, [query]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={location.state.from}>Go Back</GoBackBtn>
        <CountryInfo {...country} />
      </Container>
    </Section>
  );
};
