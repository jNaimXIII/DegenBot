import "./ContractSearch.scss";
import { FormEvent } from "react";
import DAPPSearch from "../../assets/images/DAPPSearch.png";

function ContractSearch() {
  function handleSearchSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className="contract-search">
      <form className="search-container" onSubmit={handleSearchSubmit}>
        <input className="search-box" type="text" />
        <button type="submit" className="search-icon">
          <img src={DAPPSearch} alt="DAPPSearch Icon" />
        </button>
      </form>
    </div>
  );
}

export default ContractSearch;
