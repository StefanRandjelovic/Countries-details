// GLOBAL VARIABLE
import { searchFilter } from "@store/zustandStore";

// HELPERS
import { handleTextInput } from "@helpers/helper_functions.js";

// STYLES
import "@style/NavBar.scss";

const NavBar = () => {
  // GLOBAL STATE
  const { inputValue, setInputValue } = searchFilter();

  return (
    <nav>
      <label htmlFor="input">Search by country name: </label>
      <input
        id="input"
        type="text"
        placeholder="Search by country..."
        onChange={(event) => handleTextInput(event, setInputValue)}
      />
    </nav>
  );
};

export default NavBar;
