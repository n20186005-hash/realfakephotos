import Hero from "@/components/landing/Hero";
import ExamplesStrip from "@/components/landing/ExamplesStrip";
import Steps from "@/components/landing/Steps";
import Logos from "@/components/landing/Logos";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CookieConsent from "@/components/landing/CookieConsent";
import FloatingChat from "@/components/landing/FloatingChat";

export default function Page() {
  return (
    <div>
      <main>
        <Hero />
        <ExamplesStrip />
        <Steps />
        <Logos />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>

      <CookieConsent />
      <FloatingChat />
    </div>
  );
}
