// DEV DEPENDENCIES
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// HELPER FUNCTIONS
import { handleFetch } from "@helpers/helper_functions";

// COMPONENTS
import CountryCard from "@components/CountryCard";

function App() {
  const [countries, setCountries] = useState("");

  // FETCH COUNTRIES
  const { data, isError, isLoading } = useQuery({
    queryKey: ["countries-data"],
    queryFn: handleFetch,
  });

  useEffect(() => {
    data && localStorage.setItem("countries", JSON.stringify(data));
    setCountries(JSON.parse(localStorage.getItem("countries")));
  }, [data]);

  // countries &&
  //   countries.map(
  //     (country) =>
  //       country.currencies &&
  //       console.log(
  //         Object.values(country.currencies).map((currency) => currency.name)
  //       )
  //   );

  return (
    <main>
      {countries &&
        countries.map((country) => (
          <CountryCard key={crypto.randomUUID()} country={country} />
        ))}
    </main>
  );
}

export default App;
