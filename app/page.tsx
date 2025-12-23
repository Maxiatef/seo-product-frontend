import Image from "next/image";
import Navbar from "../components/navbar";
import ProductCard from "@/components/productcard";
import ContactForm from "@/components/contactform";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="bg-zinc-50 font-sans dark:bg-black min-h-screen">
        <Navbar />
        <main className="w-full">
          <section className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-8 lg:px-12 py-8 md:py-12 max-w-7xl mx-auto">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center md:text-left">
                Your One-Stop Shop For
                <span style={{
                  color: "#2A16DE",
                  backgroundImage: "linear-gradient(45deg, #2A16DE 25%, #B526D1 62%, #DECCDB 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}>&nbsp;High-Performance&nbsp;</span>
                Gaming Gear Built To Level Up Your Play.
              </h1>
            </div>

            <figure className="flex-shrink-0 w-40 sm:w-56 md:w-72 lg:w-96">
              <Image src="/pic2.png" alt="Gaming gear" width={600} height={400} className="w-full h-auto object-contain" priority />
            </figure>
          </section>

          <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto" id="about"
            style={{
              WebkitBoxShadow: "0px 0px 97px 2px rgba(180,38,209,0.9)",
              MozBoxShadow: "0px 0px 97px 2px rgba(180,38,209,0.9)",
              boxShadow: "0px 0px 97px 2px rgba(180,38,209,0.9)",
              borderRadius: "12px",
            }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">About Us</h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              At ATTRACT Gaming Gear, we are passionate about providing gamers with top-tier equipment that enhances their gaming experience. Our mission is to deliver high-quality, durable, and stylish gaming gear that meets the needs of both casual and professional gamers alike.
            </p>
          </section>

          <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto" id="products">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">Our Products</h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Explore our wide range of gaming gear, including high-performance keyboards, precision mice, immersive headsets, and ergonomic chairs. Each product is designed with gamers in mind, ensuring optimal performance and comfort during long gaming sessions.
            </p>
            {/* ProductCard component would be inserted here */}
            <ProductCard></ProductCard>
          </section>

          <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto" id="contact">
            <ContactForm />
          </section>
        </main>
      </div>
    </div >
  );
}
