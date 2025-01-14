import Image from "next/image";

export default function Carousel() {
  const slides = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
  ];

  return (
    <div className="carousel w-full h-[650px] relative">
      {slides.map((src, index) => {
        const prevSlide = index === 0 ? slides.length : index;
        const nextSlide = index === slides.length - 1 ? 1 : index + 2;

        return (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1200}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#slide${prevSlide}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${nextSlide}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

  