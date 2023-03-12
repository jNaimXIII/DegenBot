import ContractSearch from "../components/dapp/ContractSearch";
import DAPPHeader from "../components/global/DAPPHeader";
import "./DAPP.scss";

function DAPP() {
  return (
    <>
      <DAPPHeader />

      <main>
        <ContractSearch />
      </main>
    </>
  );
}

export default DAPP;
