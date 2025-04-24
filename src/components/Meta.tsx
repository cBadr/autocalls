import React from "react";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const defaultTitle = "اوتو كول | منصة اتصالات متطورة لزيادة المبيعات";
const defaultDescription = "اوتو كول تساعدك على التواصل التلقائي مع العملاء وتحويل المهتمين مباشرة لفريق المبيعات. عزز تجربة عملائك وحقق نمو أسرع لأعمالك بأدوات ذكية وسهلة الاستخدام.";
const defaultKeywords = "اوتو كول, اتصالات, مبيعات, أتمتة, منصة, عملاء, نمو, ذكاء اصطناعي, تسويق, CRM, خدمة العملاء";
const defaultImage = "https://your-domain.com/og-image.png";
const defaultUrl = "https://your-domain.com/";

const Meta: React.FC<MetaProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  image = defaultImage,
  url = defaultUrl,
}) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
  </>
);

export default Meta;
