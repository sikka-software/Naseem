"use client";

import { cn } from "@/lib/utils";
import {
  Briefcase,
  ChevronDown,
  Code,
  Globe,
  Server,
  Smartphone,
  Store,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState<number | null>(null);

  const getItemPosition = (
    index: number
  ): "alone" | "first" | "middle" | "last" => {
    if (open === index) return "alone";

    const isOpen = (i: number) => open === i;
    const hasPrev = index > 0 && !isOpen(index - 1);
    const hasNext = index < items.length - 1 && !isOpen(index + 1);

    if (hasPrev && hasNext) return "middle";
    if (hasPrev && !hasNext) return "last";
    if (!hasPrev && hasNext) return "first";
    return "alone";
  };

  return (
    <div className="w-full max-w-md" dir="rtl">
      <div className={cn("w-full rounded-3xl")}>
        {items.map((item, i) => {
          const position = getItemPosition(i);

          if (open === i) {
            return (
              <motion.div
                key={i}
                className="w-full rounded-3xl"
                animate={{
                  marginBottom: "1rem",
                  marginTop: i !== 0 ? "1rem" : "0rem",
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                  borderBottomLeftRadius: 24,
                  borderBottomRightRadius: 24,
                }}
                transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "hsl(var(--border))",
                }}
              >
                <motion.div
                  onClick={() => setOpen(open === i ? null : i)}
                  className="trigger flex items-center justify-between p-4"
                >
                  <span className="flex items-center gap-2 font-bold">
                    {item.icon}
                    {item.title}
                  </span>
                  <motion.div
                    className="w-fit"
                    animate={open === i ? "open" : "closed"}
                    variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
                  >
                    <ChevronDown
                      className="size-4"
                      style={{ strokeWidth: 2 }}
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="content m-0 overflow-hidden p-0"
                  animate={open === i ? "open" : "closed"}
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    closed: { height: 0, opacity: 0 },
                  }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    bounce: 0.33,
                    stiffness: 400,
                    damping: 20,
                  }}
                >
                  <div className="p-4 pt-0">{item.content}</div>
                </motion.div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={i}
              style={{
                borderStyle: "solid",
                borderColor: "hsl(var(--border))",
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderTopWidth:
                  position === "last" || position === "middle" ? 0 : 1,
                borderBottomWidth:
                  position === "first" || position === "middle" ? 0 : 1,
              }}
              animate={{
                marginBottom: 0,
                borderTopLeftRadius:
                  position === "first" || position === "alone" ? 24 : 0,
                borderTopRightRadius:
                  position === "first" || position === "alone" ? 24 : 0,
                borderBottomLeftRadius:
                  position === "last" || position === "alone" ? 24 : 0,
                borderBottomRightRadius:
                  position === "last" || position === "alone" ? 24 : 0,
              }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
            >
              <motion.div
                onClick={() => setOpen(open === i ? null : i)}
                className="trigger flex items-center justify-between p-4"
              >
                <span className="flex items-center gap-2 font-bold">
                  {item.icon}
                  {item.title}
                </span>
                <motion.div
                  className="w-fit"
                  animate={open === i ? "open" : "closed"}
                  variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
                >
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-gray-500"
                    style={{ strokeWidth: 2 }}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="content m-0 overflow-hidden p-0"
                animate={open === i ? "open" : "closed"}
                initial={{ height: 0, opacity: 0 }}
                variants={{
                  open: { height: "auto", opacity: 1 },
                  closed: { height: 0, opacity: 0 },
                }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <div className="p-4 pt-0">{item.content}</div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;

const items = [
  {
    title: "ما الخدمات التي تقدمونها؟",
    content:
      "نقدم خدمات رقمية شاملة تشمل تصميم وتطوير المواقع الإلكترونية المخصصة، وتطوير تطبيقات الهاتف المحمول (iOS وAndroid)، وإدارة الخوادم والسحابة. فريقنا يضمن حلولاً مبتكرة تلبي احتياجات عملك.",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: "ما المنتجات التي تقدمونها؟",
    content:
      "نطور منتجات SaaS مستقلة ومبتكرة تشمل أنظمة إدارة المشاريع، وأدوات تحليل البيانات، ونظم إدارة العلاقات مع العملاء (CRM). جميع منتجاتنا متاحة عبر الويب والهاتف المحمول.",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "هل تقدمون خدمات تطوير التطبيقات؟",
    content:
      "نعم، نطور تطبيقات الهاتف المحمولNative وCross-platform لكل من iOS وAndroid. نركز على تجربة المستخدم والأداء العالي لضمان تفاعل أفضل مع عملائك.",
    icon: <Smartphone className="h-4 w-4" />,
  },
  {
    title: "هل لديكم متجر إلكتروني؟",
    content:
      "نعم، متجر سكة قيد التطوير قريباً على shop.sikka.io. سنقدم حلول متجر إلكتروني متكاملة مع بوابات دفع متعددة تشمل مدى، فيزا، ماستركارد، أبل باي، باي بال، تابي والتحويل البنكي.",
    icon: <Store className="h-4 w-4" />,
  },
  {
    title: "ما خدمات إدارة الخوادم التي تقدمونها؟",
    content:
      "نقدم خدمات إدارة وتشغيل الخوادم السحابية والأخرى، مع ضمان uptime عالي وأمان متقدم. نشغل ونMaintain خوادم عملائنا لضمان استمرارية أعمالهم دون انقطاع.",
    icon: <Server className="h-4 w-4" />,
  },
  {
    title: "هل تساهمون في المصدر المفتوح؟",
    content:
      "نعم، نؤمن بقوة المجتمع ونشارك بنشاط في مشاريع مفتوحة المصدر. هدفنا دعم مجتمع التكنولوجيا وتمكين المطورين من الوصول إلى أدوات مجانية لتطوير مشاريعهم.",
    icon: <Code className="h-4 w-4" />,
  },
];
