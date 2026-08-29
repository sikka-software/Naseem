"use client";

import { UsageCard } from "@/components/naseem-ui/elements/usage-card";
import { Mail, Database, Users, Zap } from "lucide-react";

const UsageCardDemo = () => {
  return (
    <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
      <UsageCard
        icon={Mail}
        title="Emails"
        used={850}
        limit={1000}
        percentage={85}
      />
      <UsageCard
        icon={Database}
        title="Storage"
        used={95}
        limit={100}
        percentage={95}
      />
      <UsageCard
        icon={Users}
        title="Team members"
        used={10}
        limit={10}
        percentage={100}
        limitReached
      />
      <UsageCard
        icon={Zap}
        title="API calls"
        used={12400}
        limit="Unlimited"
        percentage={0}
      />
    </div>
  );
};

export default UsageCardDemo;
