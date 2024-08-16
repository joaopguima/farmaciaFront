import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



import Dipirona from "../../assets/dipirona.jpg";
import Carros from "../../assets/carros.jpg";
import Allegra from "../../assets/allegra.jpg";
import Dorflex from "../../assets/dorflex.jpg";
import Colgate from "../../assets/colgate.jpg";

export default () => {
  return (
    <div className="flex items-center justify-center text-center h-[80vh]">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 4000 }} // 3000 ms = 3 segundos
        loop={true} // Ativa o loop dos slides
      >
        
          <SwiperSlide>
            <div className="flex bg-white mt-4 p-10 py-4 px-4 rounded-lg shadow-md gap-4 items-center flex-col container mx-auto md:w-60">
              <img src={Dipirona} alt="" className="w-20 h-20 rounded" />
              <p className="font-bold">Dipirona Monohidratada</p>
              <p className="flex gap-2">
                <p className="text-black">R$ 19,90</p>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex bg-white mt-4 p-10 py-4 px-4 rounded-lg shadow-md gap-4 items-center flex-col container mx-auto md:w-60">
              <img src={Carros} alt="" className="w-20 h-20 rounded" />
              <p className="font-bold">Escova de Dente - Carros</p>
              <p className="flex gap-2">
                <p className="text-black">R$ 9,90</p>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex bg-white mt-4 p-10 py-4 px-4 rounded-lg shadow-md gap-4 items-center flex-col container mx-auto md:w-60">
              <img src={Allegra} alt="" className="w-20 h-20 rounded" />
              <p className="font-bold">Antialérgico - Allegra</p>
              <p className="flex gap-2">
                <p className="text-black">R$ 69,90</p>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex bg-white mt-4 p-10 py-4 px-4 rounded-lg shadow-md gap-4 items-center flex-col container mx-auto md:w-60">
              <img src={Colgate} alt="" className="w-20 h-20 rounded" />
              <p className="font-bold">Pasta de Dente - Colgate</p>
              <p className="flex gap-2">
                <p className="text-black">R$ 12,25</p>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex bg-white mt-4 p-10 py-4 px-4 rounded-lg shadow-md gap-4 items-center flex-col container mx-auto md:w-60">
              <img src={Dorflex} alt="" className="w-20 h-20 rounded" />
              <p className="font-bold">Dorflex</p>
              <p className="flex gap-2">
                <p className="text-black">R$ 8,50</p>
              </p>
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
    
  );
};
