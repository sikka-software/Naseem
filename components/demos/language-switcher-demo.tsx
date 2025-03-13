import { LanguageSwitcher } from "@/components/naseem-ui/elements/language-switcher";
import { useTranslations } from "next-intl";

const LanguageSwitcherDemo = () => {
  const t = useTranslations();
  return (
    <LanguageSwitcher
      local="en"
      locales={[
        { code: "en", label: t("en"), isRTL: false },
        { code: "ar", label: t("ar"), isRTL: true },
      ]}
      onChange={(value) => {
        console.log(value);
      }}
    />
  );
};

export default LanguageSwitcherDemo;
