import { useState } from "react";

type Props = {
  itemLength: number;
  initialTab?: number;
};

export function useTabs(props: Props) {
  const [currentTabIndex, setCurrentTabIndex] = useState(props.initialTab || 0);

  function selectNextTab() {
    setCurrentTabIndex((previous) => {
      if (previous === props.itemLength - 1) {
        return 0;
      } else {
        return previous + 1;
      }
    });
  }

  function selectPreviousTab() {
    setCurrentTabIndex((previous) => {
      if (previous === 0) {
        return props.itemLength - 1;
      } else {
        return previous - 1;
      }
    });
  }

  return { currentTabIndex, setCurrentTabIndex, selectNextTab, selectPreviousTab };
}
