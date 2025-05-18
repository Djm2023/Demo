"use client";
import Image from "next/image";

export default function Hero() {
  return (
    // <section className="relative bg-white overflow-hidden min-h-[600px]">
    //   {/* Combined background for both navbar and hero */}
    //   <div className="absolute inset-0 overflow-hidden">
    //     <div className="absolute right-0 top-0 w-[60%] h-[120%] -mr-32 -mt-48 ml-48 ">
    //       <Image
    //         src="https://otawall.com/banner1.jpg"
    //         alt="Background"
    //         width={900}
    //         height={1100}
    //         className="object-cover rounded-[5rem] -rotate-13 bg-gradient-to-b from-black/60 to-transparent"
    //       />
    //       <div className="absolute inset-0"></div>
    //     </div>
    //   </div>

    //   {/* Hero content */}
    //   <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 z-30">
    //     <div className="flex flex-col lg:flex-row items-center">
    //       {/* Left Content */}
    //       <div className="w-full lg:w-1/2 space-y-6 mb-12 lg:mb-0">
    //         <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
    //           Smarter Displays, <br />
    //           <span className="text-red-600">Connect & Convert</span>
    //         </h1>
    //         <p className="text-gray-600 text-lg">
    //           OTA Wall is a powerful, user-friendly platform designed to
    //           effortlessly promote your business.
    //         </p>
    //         <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-md hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 transition-all duration-500 shadow-lg">
    //           Schedule Your Free Demo
    //         </button>
    //       </div>

    //       {/* Right Image - now using the same image as background */}
    //       <div className="w-full lg:w-1/2"></div>
    //     </div>
    //   </div>
    // </section>

    <section className="relative bg-white overflow-hidden min-h-[600px]">
      {/* Desktop-only background image */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-[60%] h-[120%] -mr-32 -mt-48 ml-48">
          <Image
            src="https://otawall.com/banner1.jpg"
            alt="Background"
            width={900}
            height={1100}
            className="object-cover rounded-[5rem] -rotate-13 bg-gradient-to-b from-black/60 to-transparent"
          />
          <div className="absolute inset-0"></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 z-30">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Smarter Displays, <br />
              <span className="text-red-600">Connect & Convert</span>
            </h1>
            <p className="text-gray-600 text-lg">
              OTA Wall is a powerful, user-friendly platform designed to
              effortlessly promote your business.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-md hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 transition-all duration-500 shadow-lg">
              Schedule Your Free Demo
            </button>
          </div>

          {/* Right Image - for small screens only */}
          <div className="lg:hidden absolute -top-32 right-0 -z-10 mr-28 w-3/4 bg-transparent">
            <Image
              src="https://otawall.com/banner1.jpg"
              alt="Background"
              width={400}
              height={1500}
              className="object-cover rounded-3xl -rotate-35"
            />
          </div>

          {/* Spacer for right image on large screens */}
          <div className="hidden lg:block w-full lg:w-1/2"></div>
        </div>
      </div>
    </section>
  );
}
