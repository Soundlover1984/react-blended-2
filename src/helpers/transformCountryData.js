export const transformCountryData = data => {
  return data.map(
    ({
      name: { common, official },
      flags,
      capital,
      population,
      languages,
    }) => ({
      id: common,
      countryName: official,
      flag: flags.png,
      capital,
      population,
      languages: Object.values(languages),
    }),
  );
};
