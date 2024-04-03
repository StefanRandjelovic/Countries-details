// DEV DEPENDENCIES
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

// HELPER FUNCTIONS
import { handleFetch, handleScroll } from "@helpers/helper_functions.js";

// COMPONENTS
import CountryCard from "@components/CountryCard";
import NavBar from "@components/NavBar";

// GLOBAL VARIABLE
import { searchFilter } from "@store/zustandStore";

// SVG
import Arrow from "@svg/arrow.svg";

function App() {
  // GLOBAL STATE
  const { inputValue } = searchFilter();

  // FETCH COUNTRIES
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["countries-data"],
    queryFn: handleFetch,
  });

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

  // SCROLLING
  const [displayCount, setDisplayCount] = useState(12);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(setDisplayCount));
    return () =>
      window.removeEventListener("scroll", () => handleScroll(setDisplayCount));
  }, []);

  return (
    <>
      <NavBar />
      <main>
        {isLoading && <p id="loading">Loading...</p>}
        {isError && <p id="error">{error}</p>}
        {dataToRender && (
          <>
            {dataToRender
              .sort((a, b) => {
                if (a.name.common < b.name.common) {
                  return -1;
                } else {
                  return 1;
                }
              })
              .slice(0, displayCount)
              .filter((country) => country.name.common !== "Kosovo")
              .map((country) => (
                <CountryCard key={crypto.randomUUID()} country={country} />
              ))}
          </>
        )}
        {dataToRender &&
          dataToRender.filter((country) => country.name.common !== "Kosovo")
            .length == 0 && (
            <p id="noCountry">"There are no countries to display"</p>
          )}
        <div id="top-container" title="Back to the top">
          <a href="#" id="top">
            <img src={Arrow} />
          </a>
        </div>
        <div id="info">
          <p>!</p>
          <p id="hidden-info">
            You can scroll inside a country card if its contents are hidden.
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
