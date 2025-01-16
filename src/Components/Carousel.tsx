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
    <div className="carousel w-full lg:h-[650px] xl:[650px] relative">
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


// import Image from "next/image";

// export default function carousel() {
//   return (
//     <>
//       <div className="carousel w-full h-[650px] relative">
//         <div id="slide1" 
//         className="carousel-item relative w-full">
//           <Image
//             src="/images/img1.jpg"
//             alt="image1"
//             width={1200}
//             height={200}
//             className="w-full h-full object-cover" />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide8" className="btn btn-circle">❮</a>
//             <a href="#slide2" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide2" className="carousel-item relative w-full">
//           <Image
//             src="/images/img2.jpg"
//             alt="image2"
//             width={1200}
//             height={200}
//             className="w-full  h-full object-cover" />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide1" className="btn btn-circle">❮</a>
//             <a href="#slide3" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide3" className="carousel-item relative w-full">
//           <Image
//             src="/images/img3.jpg"
//             alt="image3"
//             width={1200}
//             height={200}
//             className="w-full  h-full object-cover" />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide2" className="btn btn-circle">❮</a>
//             <a href="#slide4" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide4" className="carousel-item relative w-full">
//           <Image
//             src="/images/img4.jpg"
//             alt="image4"
//             width={1200}
//             height={200}
//             className="w-full  h-full object-cover" />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide3" className="btn btn-circle">❮</a>
//             <a href="#slide5" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide5" className="carousel-item relative w-full">
//           <Image
//             src="/images/img5.jpg"
//             alt="image5"
//             width={1200}
//             height={200}
//             className="w-full  h-full object-cover" />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide4" className="btn btn-circle">❮</a>
//             <a href="#slide6" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide6" className="carousel-item relative w-full">
//           <Image
//             src="/images/img6.jpg"
//             alt="image6"
//             width={1200}
//             height={200}
//             className="w-full  h-full object-cover" />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide5" className="btn btn-circle">❮</a>
//             <a href="#slide7" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide7" className="carousel-item relative w-full">
//           <Image
//             src="/images/img7.jpg"
//             alt="image7"
//             width={1200}
//             height={200}
//             className="w-full  h-full object-cover" />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide6" className="btn btn-circle">❮</a>
//             <a href="#slide8" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide8" className="carousel-item relative w-full">
//           <Image
//             src="/images/img8.jpg"
//             alt="image8"
//             width={1200}
//             height={200}
//             className="w-full  h-full object-cover" />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide7" className="btn btn-circle">❮</a>
//             <a href="#slide1" className="btn btn-circle">❯</a>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// }



  