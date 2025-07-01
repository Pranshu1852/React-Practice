import {
  Children,
  cloneElement,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

interface TabsProps {
  children: ReactElement<TabsListProps>[] | ReactElement<TabsListProps>;
  defaultValue: string;
  onChange?: (value: string) => void;
}

interface TabsListProps {
  children: ReactElement<TabTriggerProps>[] | ReactElement<TabTriggerProps>;
  value?: string;
  activeTab?: string;
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
}

interface TabTriggerProps {
  children: ReactNode;
  value: string;
  activeTab?: string;
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
}

interface TabContentProps {
  children: ReactNode;
  value: string;
  activeTab?: string;
}

function Tabs({ children, defaultValue, onChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  useEffect(() => {
    if (onChange) {
      onChange(activeTab);
    }
  }, [activeTab]);

  return (
    <div>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          activeTab: activeTab,
          setActiveTab: setActiveTab,
        });
      })}
    </div>
  );
}

function TabsList({ children, activeTab, setActiveTab }: TabsListProps) {
  return (
    <div>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          activeTab: activeTab,
          setActiveTab: setActiveTab,
        });
      })}
    </div>
  );
}

function TabTrigger({
  children,
  value,
  activeTab,
  setActiveTab,
}: TabTriggerProps) {
  return (
    <button
      style={{
        backgroundColor: activeTab === value ? "blue" : "black",
      }}
      onClick={() => setActiveTab && setActiveTab(value)}
      value={value}
    >
      {children}
    </button>
  );
}

function TabContent({ children, value, activeTab }: TabContentProps) {
  return <>{activeTab === value && <div>{children}</div>}</>;
}

export { Tabs, TabsList, TabTrigger, TabContent };
