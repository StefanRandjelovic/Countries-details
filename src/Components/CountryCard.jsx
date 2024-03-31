// STYLES
import "@style/CountryCard.scss";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <h1>Country: {country.name.common}</h1>
      <div className="innerInfo">
        <div className="innerText">
          <p className="capital">
            {country.capital && Object.values(country.capital).length > 1
              ? "Capital cities: "
              : "Capital city: "}{" "}
            {country.capital
              ? Object.values(country.capital).join(", ")
              : "N/A"}
          </p>
          <p className="language">
            {country.languages && Object.values(country.languages).length > 1
              ? "Languages: "
              : "Language: "}
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </p>
          <p className="population">
            Population: {country.population.toLocaleString()}
          </p>
          <p className="area">
            Area: {country.area.toLocaleString()} km<sup>2</sup>
          </p>
          <p className="currency">
            {country.currencies &&
            Object.values(country.currencies).map((currency) => currency.name)
              .length > 1
              ? "Curencies: "
              : "Curency: "}
            {country.currencies
              ? Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(", ")
              : "N/A"}
          </p>
        </div>
        <img
          className="flag"
          src={country.flags && country.flags.svg}
          alt={country.flags && country.flags.alt}
        />
      </div>
    </div>
  );
};

export default CountryCard;
