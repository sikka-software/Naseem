export type ComponentPreviewProps = {
  name: string;
  code: string;
  highlightedCode: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
  componentName?: string;
  showCommand?: boolean;
};

export type ComponentDisplayProps = {
  component: React.ReactElement;
  hasReTrigger: boolean;
  className?: string;
  reTriggerKey: number;
  reTrigger: () => void;
};

export type CodePreviewProps = {
  code: string;
  highlightedCode: string;
};
