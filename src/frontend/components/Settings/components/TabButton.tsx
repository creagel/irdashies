import { SettingsTabType } from '@irdashies/types';

interface TabButtonProps {
  id: SettingsTabType;
  activeTab: SettingsTabType;
  setActiveTab: (tab: SettingsTabType) => void;
  children: React.ReactNode;
  /** Shown before the label, e.g. a platform logo. */
  icon?: React.ReactNode;
}

export const TabButton = ({
  id,
  activeTab,
  setActiveTab,
  children,
  icon,
}: TabButtonProps) => (
  <button
    onClick={() => setActiveTab(id)}
    className={`flex items-center gap-2 px-4 py-2 text-md border-b-2 transition-colors ${
      activeTab === id
        ? 'text-white border-blue-500'
        : 'text-slate-400 border-transparent hover:text-slate-200'
    }`}
  >
    {icon}
    {children}
  </button>
);
