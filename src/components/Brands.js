// components/Brands.js
import Image from "next/image";

export default function Brands() {
  const brands = [
    { name: "Amazon", src: "https://pngimg.com/uploads/amazon/amazon_PNG13.png" },
    { name: "AMD", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJhvsub_gaskGPgA3Vtha9yhLR95BF7826g&s" },
    { name: "Google", src: "https://storage.googleapis.com/gd-prod/images/a910d418-7123-4bc4-aa3b-ef7e25e74ae6.faa49ab5e1fff880.webp" },
  ];

  return (
    <section className="bg-white py-8 ml-[47rem]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center flex-wrap gap-8">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand.src}
              alt={brand.name}
              width={100}
              height={50}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
