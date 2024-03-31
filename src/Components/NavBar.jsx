// GLOBAL VARIABLE
import { searchFilter } from "@store/zustandStore";

// HELPERS
import { handleTextInput } from "@helpers/helper_functions";

const NavBar = () => {
    // GLOBAL STATE
  const { inputValue, setInputValue } = searchFilter();

  return (
    <nav>
      <input
        type="text"
        placeholder="Search by country..."
        onChange={(event) => handleTextInput(event, setInputValue)}
      />
      <div>
        <p>{inputValue}</p>
      </div>
    </nav>
  );
};

export default NavBar;
