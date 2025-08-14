"use client";

import { Lock, Truck, RotateCcw, MapPin, ChevronUp } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import MobileSidebar from "@/components/MobileSidebar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onToggleMobileMenu={toggleMobileMenu} />

      <MobileSidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('hero.webp')`,
        }}
      >
        <div className="text-center text-white max-w-4xl px-4 md:px-6">
          <p className="text-xs md:text-sm font-medium tracking-[0.2em] mb-4 md:mb-6 uppercase">
            Performance & Style
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl italic font-light mb-6 md:mb-8 leading-tight">
            Strength, Confidence,
            <br />& Movement!
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto font-light">
            Discover high-performance, stylish, and functional activewear
            designed for individuals who prioritize health, wellness, and an
            active lifestyle. Perfect for intense workouts and everyday wear.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 md:px-8 py-3 text-sm font-medium tracking-[0.1em] uppercase"
          >
            View Collection
          </Button>
        </div>
      </section>

      {/* Most Popular Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-center mb-12 md:mb-16 text-gray-900">
            Most Popular
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ProductCard
              image="/placeholder.svg?height=400&width=300"
              category="Performance Wear"
              title="High-Performance Leggings Set"
              price="$124.90"
              colors={["black", "white"]}
            />
            <ProductCard
              image="/placeholder.svg?height=400&width=300"
              category="Gym Essentials"
              title="Training Essentials Bundle"
              price="$145.50"
              colors={["black", "green"]}
            />
            <ProductCard
              image="/placeholder.svg?height=400&width=300"
              category="Athleisure"
              title="Athleisure Comfort Set"
              price="$175.00"
              colors={["black", "white"]}
            />
            <ProductCard
              image="/placeholder.svg?height=400&width=300"
              category="Training Gear"
              title="Pro Training Collection"
              price="$135.50 – $175.50"
              colors={["black", "green", "red"]}
            />
          </div>
        </div>
      </section>

      {/* Bag Collection Section */}
      <section
        className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('Secondary.webp')`,
        }}
      >
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="hidden md:block md:w-1/2 relative"></div>
          <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 py-12 md:py-0">
            <div className="text-center text-white max-w-lg">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic font-light mb-8 md:mb-12 leading-tight">
                Explore Our Premium Fitness
                <br />
                Accessories Now!
              </h2>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 md:px-8 py-3 text-sm font-medium tracking-[0.1em] uppercase"
              >
                Shop Accessories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Pinstripe Blazers Section */}
      <section className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center px-6 md:px-12 py-12 md:py-20">
          <div className="max-w-lg">
            <p className="text-xs md:text-sm font-medium tracking-[0.2em] mb-4 md:mb-6 uppercase text-gray-600">
              Performance & Comfort
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic font-light mb-6 md:mb-8 leading-tight text-gray-900">
              High-Performance
              <br />
              Activewear Collection
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-12 text-gray-600 font-light">
              Elevate your workout with our High-Performance Activewear
              Collection, where cutting-edge materials meet innovative design
              for ultimate comfort, durability, and flexibility.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 px-6 md:px-8 py-3 text-sm font-medium tracking-[0.1em] uppercase"
            >
              Shop Now
            </Button>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
          style={{
            backgroundImage: `url('side_image.webp')`,
          }}
        ></div>
      </section>

      {/* Fashion Reinvented Section with Fixed Background */}
      <section
        className="relative min-h-screen bg-fixed bg-cover bg-center flex flex-col md:flex-row"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-08EEmMFXRlhUZTXOjflbiqsItkcKS6.png')`,
        }}
      >
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 py-12 md:py-20">
          <div className="max-w-lg">
            <div className="mb-8 md:mb-12">
              <img
                src="Hero.webp"
                alt="Fashion Model"
                className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
              />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic font-light mb-6 md:mb-8 leading-tight text-white">
              Discover The Allure Of
              <br />
              Fitness Lifestyle!
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-12 text-white/90 font-light">
              Embrace strength, confidence, and movement with our innovative
              activewear designed for your active lifestyle!
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 md:px-8 py-3 text-sm font-medium tracking-[0.1em] uppercase"
            >
              Shop Now
            </Button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 relative"></div>
      </section>

      {/* Newest Products Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-center mb-12 md:mb-16 text-gray-900">
            Newest Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ProductCard
              image="/placeholder.svg?height=400&width=300"
              category="Performance Wear"
              title="Elite Performance Set"
              price="$109.99"
              colors={["gray", "black"]}
            />
            <ProductCard
              image="/placeholder.svg?height=400&width=300"
              category="Gym Essentials"
              title="Training Comfort Joggers"
              price="$250.00"
              colors={["white", "light-gray"]}
              hasShoppingBag={true}
            />
            <ProductCard
              image="/placeholder.svg?height=400&width=300"
              category="Athleisure"
              title="Urban Athleisure Ensemble"
              price="$224.95"
              colors={["black", "dark-gray"]}
            />
            <ProductCard
              image="/placeholder.svg?height=400&width=300"
              category="Training Gear"
              title="Complete Workout Wardrobe"
              price="$119.95"
              colors={["amber", "white", "gray"]}
            />
          </div>
        </div>
      </section>

      {/* Customer Testimonial Section */}
      <section
        className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('review.webp')`,
        }}
      >
        <div className="text-center text-white max-w-4xl px-4 md:px-6">
          <div className="flex justify-center items-center mb-6 md:mb-8">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <blockquote className="font-serif text-lg md:text-2xl lg:text-3xl xl:text-2xl italic font-light mb-6 md:mb-8 leading-relaxed">
            &quot;Savfa Is My Fitness Sanctuary! The High-Performance Collection
            Effortlessly Blends Cutting-Edge Technology With Stylish Design,
            Making Every Workout A Powerful Experience. The Quality And
            Durability Of Their Activewear Is Unmatched, And I Love Their
            Commitment To Empowering Active Lifestyles. What Truly Sets Savfa
            Apart Is Their Understanding Of What Athletes Really Need.&quot;
          </blockquote>
          <cite className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase not-italic">
            Sarah M., Devoted Savfa Athlete
          </cite>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-4 md:mb-6">
                <Lock className="w-10 h-10 md:w-12 md:h-12 text-black" />
              </div>
              <h3 className="font-serif text-lg md:text-xl italic mb-3 md:mb-4 text-gray-900">
                Secure Payments
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Shop with confidence knowing that your transactions are
                safeguarded.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4 md:mb-6">
                <Truck className="w-10 h-10 md:w-12 md:h-12 text-black" />
              </div>
              <h3 className="font-serif text-lg md:text-xl italic mb-3 md:mb-4 text-gray-900">
                Free Shipping
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Shopping with no extra charges – savor the liberty of
                complimentary shipping on every order.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4 md:mb-6">
                <RotateCcw className="w-10 h-10 md:w-12 md:h-12 text-black" />
              </div>
              <h3 className="font-serif text-lg md:text-xl italic mb-3 md:mb-4 text-gray-900">
                Easy Returns
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                With our hassle-free Easy Returns, changing your mind has never
                been more convenient.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4 md:mb-6">
                <MapPin className="w-10 h-10 md:w-12 md:h-12 text-black" />
              </div>
              <h3 className="font-serif text-lg md:text-xl italic mb-3 md:mb-4 text-gray-900">
                Order Tracking
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Stay in the loop with our Order Tracking feature – from checkout
                to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section
        className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('last_image.webp')`,
        }}
      >
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="hidden md:block md:w-1/2 relative"></div>
          <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 py-12 md:py-0">
            <div className="text-center text-white max-w-lg">
              <p className="text-xs md:text-sm font-medium tracking-[0.2em] mb-4 md:mb-6 uppercase">
                Explore
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic font-light mb-6 md:mb-8 leading-tight">
                Elevate Your Performance,
                <br />
                Embrace Your Strength!
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-12 font-light">
                Discover our high-performance activewear collections and
                experience the perfect blend of style, comfort, and
                functionality for your active lifestyle!
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 md:px-8 py-3 text-sm font-medium tracking-[0.1em] uppercase"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-50 py-12 md:py-16 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <h3 className="font-serif text-lg md:text-xl italic mb-4 md:mb-6 text-gray-900">
                Menu
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg md:text-xl italic mb-4 md:mb-6 text-gray-900">
                Categories
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    Performance Wear
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    Gym Essentials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    Athleisure
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    Training Gear
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg md:text-xl italic mb-4 md:mb-6 text-gray-900">
                Resources
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    Contact Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    Live Chat
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg md:text-xl italic mb-4 md:mb-6 text-gray-900">
                Social Media
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 md:pt-8">
            <p className="text-center text-gray-500 text-xs md:text-sm">
              Copyright © 2025 savfa.com | Powered by savfa.com
            </p>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 md:bottom-6 right-4 md:right-6 bg-black text-white p-2 md:p-3 rounded-sm hover:bg-gray-800 transition-colors shadow-lg z-50"
          aria-label="Back to top"
        >
          <ChevronUp size={18} className="md:w-5 md:h-5" />
        </button>
      </footer>
    </div>
  );
}
