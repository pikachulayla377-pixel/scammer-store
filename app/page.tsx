// app/page.tsx
import HomeSection from "@/components/Home/Home";

export const metadata = {
  title: "Scammer Store – MLBB  Sellers",
  description:
    "Scammer Store helps MLBB players  stay safe while topping up Mobile Legends.",
  keywords: [
    "MLBB diamond topup",

  ],
};

export default function Page() {
  return (
    <main>
      <HomeSection />
    </main>
  );
}
