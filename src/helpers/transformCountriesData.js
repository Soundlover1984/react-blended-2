export const transformCountriesData = data => {
  return data.map(
    ({ name: { common }, capital, flags, population, languages }) => ({
      id: common,
      country: common,
      flag: flags.png,
      capital,
      population,
      languages,
    }),
  );
};
