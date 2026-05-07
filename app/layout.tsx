import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "میهن گاردن — گل‌ فروشی آنلاین | Mayhan Garden",
  description:
    "میهن گاردن، تجربه‌ای فاخر از خرید آنلاین گل‌های تازه و دست‌چین. رز، لاله، آفتاب‌گردان، ارکیده و دسته‌گل‌های ویژه برای هر مناسبت.",
  openGraph: {
    title: "میهن گاردن — گل‌ فروشی آنلاین",
    description: "طبیعت در هر گلبرگ — خرید گل آنلاین با ارسال سریع.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
