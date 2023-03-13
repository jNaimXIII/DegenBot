import "./ContractTabs.scss";

type Props = {
  currentTabIndex: number;
  setCurrentTabIndex: (n: number) => void;
  tabs: { label: string; content: JSX.Element }[];
};

function ContractTabs(props: Props) {
  return (
    <nav className="contract-tab-navigation">
      <ul className="navigation-list">
        {props.tabs.map((tab, index) => (
          <li
            key={index}
            className="navigation-item"
            onClick={() => props.setCurrentTabIndex(index)}
          >
            <span className={index === props.currentTabIndex ? "active" : ""}>{tab.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ContractTabs;
