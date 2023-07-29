import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query)
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        onChange={handleChange}
        value={query}
        aria-label="select"
        name="region"
        required
      >
        <option disabled defaultValue="">
          Select a region and press enter
        </option>
        {regions &&
          regions.map(({ id, name, value }) => (
            <option key={id} value={value}>
              {name}
            </option>
          ))}
      </Select>
    </SearchFormStyled>
  );
};
