import { fetchByRegion } from 'service/country-service';
import { useState, useEffect } from 'react';
import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = value => {
    setQuery(value);
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    const getCountries = async () => {
      const countries = await fetchByRegion(query);
      setCountries(countries);
    };
    try {
      getCountries();
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {error && <Heading>{error.message}</Heading>}
        {isLoading && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
