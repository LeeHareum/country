import React from "react";
import { Country } from "../types/country";
import { getCountries } from "../api/countries";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = React.useState<Country[]>(
    []
  );

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry: Country) =>
            selectedCountry.name.common !== country.name.common
        )
      );
    }
  };

  const filteredCountries = countries.filter(
    (country) =>
      !selectedCountries.find(
        (selectedCountry) => selectedCountry.name.common === country.name.common
      )
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mt-12">선택 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {selectedCountries.map((country: Country) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          );
        })}
      </div>
      <h1 className="text-2xl font-bold text-center mt-12">나라 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCountries.map((country: Country) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CountryList;
