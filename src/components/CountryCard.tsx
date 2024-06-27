import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <div
      className="country-card p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer border-2 border-transparent hover:border-green-500"
      onClick={() => handleSelectCountry(country)}
    >
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <h3 className="text-lg font-semibold mt-4">{country.name.common}</h3>
      <p className="text-gray-600">{country.capital?.[0]}</p>
    </div>
  );
};

export default CountryCard;
