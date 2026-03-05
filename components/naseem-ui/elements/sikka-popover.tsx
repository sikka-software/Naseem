import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import SikkaLogo from "../icons/sikka";

const links = [
  {
    label: "contact@sikka.io",
    href: "mailto:contact@sikka.io",
    icon: (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="1" y="3" width="14" height="10" rx="2" />
        <path d="M1 5l7 5 7-5" />
      </svg>
    ),
  },
  {
    label: "github.com/sikka-software",
    href: "https://github.com/sikka-software",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    label: "@sikka_sa",
    href: "https://x.com/sikka_sa",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
      </svg>
    ),
  },
  {
    label: "sikka.io",
    href: "https://sikka.io",
    icon: (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="8" cy="8" r="7" />
        <path d="M8 1c0 0-3 3-3 7s3 7 3 7M8 1c0 0 3 3 3 7s-3 7-3 7M1 8h14" />
      </svg>
    ),
  },
];

export default function CompanyCard() {
  const t = useTranslations("Sikka");
  const locale = useLocale();

  return (
    <motion.div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="font-sans text-[#111]"
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0, y: 8 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.21, 0.47, 0.32, 0.98],
            staggerChildren: 0.05,
          },
        },
      }}
    >
      <motion.div
        className="mb-4.5 flex items-center gap-3.5 border-b border-gray-100 pb-4.5"
        variants={{
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#111]">
          <SikkaLogo className="size-4.5 text-white" />
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 394.82 329.55"
            className="size-4.5 text-white"
          >
            <path
              fill="currentColor"
              d="M183.67,0c-6.29,0-11.42,5.1-11.42,11.32v134.95L58.84,7.36c-4.58-5.66-6.86-7.36-13.15-7.36H4.18C.19,0,0,3.41,0,7.36c0,1.7.58,3.96,1.73,5.1l124.37,152.31L1.73,317.08c-1.15,1.15-1.73,3.41-1.73,5.1,0,3.96.19,7.36,4.18,7.36h41.51c6.29,0,8.57-1.7,13.15-7.36l113.41-138.91v134.95c0,6.21,5.13,11.32,11.42,11.32h27.48c6.29,0,11.42-5.1,11.42-11.32v-134.95l113.41,138.91c4.58,5.66,6.86,7.36,13.15,7.36h41.51c3.98,0,4.18-3.41,4.18-7.36,0-1.7-.58-3.96-1.73-5.1l-124.37-152.31L393.1,12.46c1.15-1.15,1.73-3.41,1.73-5.1,0-3.96-.19-7.36-4.18-7.36h-41.51c-6.29,0-8.57,1.7-13.15,7.36l-113.41,138.91V11.32c0-6.21-5.13-11.32-11.42-11.32h-27.48Z"
            />
          </svg>
        </div>
        <div>
          <div className="text-primary text-[15px] leading-tight font-semibold tracking-tight">
            {t("name")}
          </div>
          <div className="text-primary mt-0.5 text-[11px] font-normal tracking-widest uppercase">
            {t("est")}
          </div>
        </div>
      </motion.div>

      <motion.p
        className="text-primary mb-5 text-[13.5px] leading-relaxed font-light italic"
        variants={{
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
        }}
      >
        {t("description")}
      </motion.p>

      <motion.div
        className="my-3.5 h-px bg-gray-100"
        variants={{
          initial: { opacity: 0, scaleX: 0 },
          animate: { opacity: 1, scaleX: 1 },
        }}
      />

      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="group text-primary flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] font-normal no-underline transition-colors duration-150 hover:bg-gray-100 hover:text-[#111]"
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            variants={{
              initial: { opacity: 0, x: -4 },
              animate: { opacity: 1, x: 0 },
            }}
          >
            <span className="h-4 w-4 shrink-0 opacity-50">{link.icon}</span>
            <span className="flex-1">{link.label}</span>
            <span className="-translate-x-1 text-[11px] text-[#999] opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100 rtl:-scale-x-100">
              ↗
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
