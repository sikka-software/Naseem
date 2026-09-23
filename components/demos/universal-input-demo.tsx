"use client";

import { Search, Plus, MapPin, X } from "lucide-react";

import { UniversalInput } from "@/components/naseem-ui/elements/universal-input";

const UniversalInputDemo = () => {
  return (
    <div className="w-full max-w-[440px] space-y-6">
      <UniversalInput shape="straight" size="md">
        <UniversalInput.Above>
          <UniversalInput.Label>Search</UniversalInput.Label>
          <UniversalInput.Annotation>
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </UniversalInput.Annotation>
        </UniversalInput.Above>
        <UniversalInput.Field>
          <UniversalInput.Inner position="leading">
            <Search />
          </UniversalInput.Inner>
          <UniversalInput.Input placeholder="Search…" />
          <UniversalInput.Inner
            position="trailing"
            fit="inset"
            onClick={() => {}}
            label="Clear"
          >
            <X />
          </UniversalInput.Inner>
        </UniversalInput.Field>
        <UniversalInput.Below>
          <UniversalInput.Annotation>Try “invoices”</UniversalInput.Annotation>
        </UniversalInput.Below>
      </UniversalInput>

      <UniversalInput shape="pill" size="md">
        <UniversalInput.Outer onClick={() => {}} label="Locate">
          <MapPin />
        </UniversalInput.Outer>
        <UniversalInput.Field>
          <UniversalInput.Inner position="leading" fit="padded">
            <MapPin />
          </UniversalInput.Inner>
          <UniversalInput.Input placeholder="Where to?" />
        </UniversalInput.Field>
        <UniversalInput.Outer onClick={() => {}} label="Add">
          <Plus />
        </UniversalInput.Outer>
      </UniversalInput>

      <UniversalInput shape="straight" size="sm" invalid>
        <UniversalInput.Above>
          <UniversalInput.Label>Postal code</UniversalInput.Label>
        </UniversalInput.Above>
        <UniversalInput.Field>
          <UniversalInput.Inner position="leading" width="auto">
            SA
          </UniversalInput.Inner>
          <UniversalInput.Input placeholder="12213" />
        </UniversalInput.Field>
        <UniversalInput.Below>
          <UniversalInput.Annotation>
            Must be 5 digits
          </UniversalInput.Annotation>
        </UniversalInput.Below>
      </UniversalInput>
    </div>
  );
};

export default UniversalInputDemo;
