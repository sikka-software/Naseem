"use client";

import { Alert } from "../naseem-ui/elements/alert";

const AlertDemo = () => {
  return (
    <div className="w-full max-w-md">
      <Alert text="This is an alert" title="Alert Title" severity="info" />
      <Alert text="This is an alert" title="Alert Title" severity="warning" />
      <Alert text="This is an alert" title="Alert Title" severity="error" />
      <Alert text="This is an alert" title="Alert Title" severity="success" />
    </div>
  );
};

export default AlertDemo;
