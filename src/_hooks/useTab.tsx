import { TabsProps } from "@/types/components";
import { useState } from "react";

export const useTabs = ({ totalTabs, defaultActive = 0 }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState<number>(defaultActive);

  const handleChange = (value?: number) => {
    if (value === undefined) {
      if (currentTab < totalTabs - 1) {
        setCurrentTab(currentTab + 1);
      }
    } else {
      if (value >= 0 && value < totalTabs) {
        setCurrentTab(value);
      }
    }
  };

  return { currentTab, handleChange };
};
