import ContractSearch from "../components/dapp/ContractSearch";
import ContractTabs from "../components/dapp/ContractTabs";
import ContractDetails from "../components/dapp/details/ContractDetails";
import SniperBot from "../components/dapp/sniper/SniperBot";
import WalletsAndProfits from "../components/dapp/wallets/WalletsAndProfits";
import DAPPHeader from "../components/global/DAPPHeader";
import { useTabs } from "../hooks/useTabs";
import "./DAPP.scss";

function DAPP() {
  const dappTabs = [
    {
      label: "Sniper Bot",
      content: <SniperBot />,
    },
    {
      label: "Contract Details & Positions",
      content: <ContractDetails />,
    },
    {
      label: "Wallets & Profits",
      content: <WalletsAndProfits />,
    },
  ];
  const { currentTabIndex, setCurrentTabIndex } = useTabs({
    itemLength: dappTabs.length,
    initialTab: 1,
  });

  return (
    <>
      <DAPPHeader />

      <main>
        <ContractSearch />
        <ContractTabs
          tabs={dappTabs}
          currentTabIndex={currentTabIndex}
          setCurrentTabIndex={setCurrentTabIndex}
        />

        <div className="tab-content">{dappTabs[currentTabIndex].content}</div>
      </main>
    </>
  );
}

export default DAPP;
