import { AppStores } from "../naseem-ui/elements/app-stores";

const AppStoresDemo = () => {
  return (
    <div className="flex flex-col gap-4">
      <AppStores store="apple" />
      <AppStores store="google" />
    </div>
  );
};

export default AppStoresDemo;
