import Image from "next/image";
import { Button } from "@/components/ui_components/Button";
import { Card } from "@/components/ui_components/Cards";
import { CardContent } from "@/components/ui_components/CardContent";

export default function CardSection() {
  return (
    <main className="bg-white min-h-screen text-black">
      <section className="relative bg-white py-16">
        {/* Left triangle background */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-10 w-[600px] h-[800px] bg-[#0C1424] z-0 overflow-hidden rounded-br-[80px]">
            <div
              className="w-full h-full"
              style={{
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
                backgroundColor: "#0C1424",
                borderBottomRightRadius: "80px",
              }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 text-white space-y-6">
              <h2 className="text-4xl font-semibold">
                Engage And Inspire <br /> With{" "}
                <span className="text-red-500">Smart Digital Signage</span>
              </h2>
              <p className="text-gray-300">
                Capture attention, connect with your targeted audience, and
                deliver impactful content with smart digital signage. Boost your
                brand&apos;s visibility and drive results with every display.
              </p>
            </div>

            <div className="mt-10 md:mt-0 md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="bg-white shadow-md">
                <CardContent className="p-4 space-y-2">
                  <Image
                    src="/images/promo.jpg"
                    alt="Promotion"
                    width={400}
                    height={300}
                    className="rounded-md"
                  />
                  <p className="text-black font-medium">
                    Pocket-Friendly Promotion
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md">
                <CardContent className="p-4 space-y-2">
                  <Image
                    src="/images/target.jpg"
                    alt="Targeting"
                    width={400}
                    height={300}
                    className="rounded-md"
                  />
                  <p className="text-black font-medium">
                    Smart Targeting & Instant Updates
                  </p>
                  <a href="#" className="text-red-500 text-sm hover:underline">
                    READ MORE →
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md">
                <CardContent className="p-4 space-y-2">
                  <Image
                    src="/images/control.jpg"
                    alt="Control"
                    width={400}
                    height={300}
                    className="rounded-md"
                  />
                  <p className="text-black font-medium">
                    Control Anytime, Anywhere
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Industries Section */}
          <div className="mt-24">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold text-white">
                Industries OTA Wall Powers
              </h3>
              <button className="border border-black text-black bg-white hover:bg-gray-100 px-6 py-3">
                All Industries
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                "Retail & E-commerce",
                "Restaurants & Cafés",
                "Hospitality & Tourism",
                "Healthcare & Clinics",
                "Corporates & Others",
                "Education & Training",
                "Construction & Real Estate",
                "Automotive & Dealerships",
                "Entertainment & Events",
                "Gas Stations & Stores",
                "Malls & Department Stores",
                "Gyms & Fitness Centers",
              ].map((industry) => (
                <div
                  key={industry}
                  className="border rounded-md py-4 px-3 text-center bg-white hover:shadow-md cursor-pointer"
                >
                  <p className="text-sm font-medium text-black">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
