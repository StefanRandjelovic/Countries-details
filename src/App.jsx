// DEV DEPENDENCIES
import { useQuery } from "@tanstack/react-query";

// HELPER FUNCTIONS
import { handleFetch } from "@helpers/helper_functions";

// COMPONENTS
import CountryCard from "@components/CountryCard";
import NavBar from "@components/NavBar";

// GLOBAL VARIABLE
import { searchFilter } from "@store/zustandStore";

function App() {
  // GLOBAL STATE
  const { inputValue, setInputValue } = searchFilter();

  // FETCH COUNTRIES
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["countries-data"],
    queryFn: handleFetch,
  });

  console.log(data);
  const dataToRender =
    data &&
    data.filter((country) => {
      if (inputValue === "") {
        return country;
      } else {
        return country.name.common
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      }
    });

  return (
    <>
      <NavBar />
      <main>
        {isLoading && <p>Loading...</p>}
        {isError && <p>{error}</p>}
        {dataToRender && (
          <>
            {dataToRender
              .filter((country) => country.continents.includes("Europe"))
              .map((country) => (
                <section>
                  <h1>Europe</h1>
                  <CountryCard key={crypto.randomUUID()} country={country} />
                </section>
              ))}
            {dataToRender
              .filter((country) => country.continents.includes("Asia"))
              .map((country) => (
                <section>
                  <h1>Asia</h1>
                  <CountryCard key={crypto.randomUUID()} country={country} />
                </section>
              ))}
            {dataToRender
              .filter((country) => country.continents.includes("Africa"))
              .map((country) => (
                <section>
                  <h1>Africa</h1>
                  <CountryCard key={crypto.randomUUID()} country={country} />
                </section>
              ))}
            {dataToRender
              .filter((country) => country.continents.includes("Oceania"))
              .map((country) => (
                <section>
                  <h1>Oceania</h1>
                  <CountryCard key={crypto.randomUUID()} country={country} />
                </section>
              ))}
            {dataToRender
              .filter((country) => country.continents.includes("South America"))
              .map((country) => (
                <section>
                  <h1>South America</h1>
                  <CountryCard key={crypto.randomUUID()} country={country} />
                </section>
              ))}
            {dataToRender
              .filter((country) => country.continents.includes("North America"))
              .map((country) => (
                <section>
                  <h1>North America</h1>
                  <CountryCard key={crypto.randomUUID()} country={country} />
                </section>
              ))}
            {dataToRender
              .filter((country) => country.continents.includes("Antarctica"))
              .map((country) => (
                <section>
                  <h1>Antarcica</h1>
                  <CountryCard key={crypto.randomUUID()} country={country} />
                </section>
              ))}
          </>
        )}
        {/* <section id="Asia">
        <h1>Rest</h1>
        {countries &&
          countries
            // .filter((country) => country.continents.includes("Asia"))
            .map((country) => (
              <CountryCard key={crypto.randomUUID()} country={country} />
            ))}
      </section> */}
      </main>
    </>
  );
}

export default App;
