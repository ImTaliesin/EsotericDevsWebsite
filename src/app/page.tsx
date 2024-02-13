import Section from "@/components/section";
import Script from 'next/script';

export default function Home() {
  return (
    <div>
      
      <Section> Hello </Section>
       
      <Script
        /* Tidio */
        src="//code.tidio.co/hadhdxoc2djou3bkex3rd6tvltarcwvp.js"
        strategy="beforeInteractive"
      />
      
    </div>
  );
}
