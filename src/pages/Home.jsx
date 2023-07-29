import { Container, CountryList, Heading, Loader, Section } from 'components';
import { getCountries } from 'service/country-service';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsloading(true);
      try {
        const response = await getCountries();
        setCountries(response);
      } catch (error) {
        setError(error.message);
      } finally {
         setIsloading(false);
      }
    };
    fetchCountries();
  },[])
  return (
    <Section>
      <Container>
        {countries.length > 0 && <CountryList countries={countries} />}
        { error && <Heading>
          {error}
        </Heading>}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
