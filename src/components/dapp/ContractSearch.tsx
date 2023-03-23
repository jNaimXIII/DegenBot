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
        <input className="search-box" type="text" placeholder="CONTRACT ADDRESS" />
        <button type="submit" className="search-icon">
          <span className="hover-text">Let's Snipe</span>
          <img src={DAPPSearch} alt="DAPPSearch Icon" />
        </button>
      </form>
    </div>
  );
}

export default ContractSearch;
