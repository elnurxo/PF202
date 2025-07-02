import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import controller from "../../services/requests/commonRequest";
import { endpoints } from "../../services/api";
import type { SliderData } from "../../interfaces/sliderData";
import type { ApiResponse } from "../../interfaces/apiResponse";

const Home = () => {
  const [sliders, setSliders] = useState<SliderData[]>([]);
  useEffect(() => {
    controller.getAll<SliderData[]>(endpoints.sliders).then((resp) => {
      if (resp && typeof resp === "object" && "data" in resp) {
        const response = resp as ApiResponse<SliderData[]>;
        setSliders(response.data);
      } else {
        console.error("Unexpected response format:", resp);
      }
    });
  }, []);
  return (
    <div className="space-y-20">
      {/* Hero Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-[680px]"
      >
        {sliders &&
          sliders.map((slider) => {
            return (
              <SwiperSlide key={slider._id}>
                <div
                  className="h-full w-full bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
                  style={{
                    backgroundImage: `url('${slider.url}')`,
                  }}
                >
                  {slider.title}
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>

      {/* Services Section */}
      <section className="text-center px-6">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Fast Shipping", "24/7 Support", "Secure Payments"].map(
            (service) => (
              <div
                key={service}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-medium mb-2">{service}</h3>
                <p className="text-gray-500">
                  Experience next-level {service.toLowerCase()} for all your
                  orders.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-600 mb-4">
                "Amazing quality, fast shipping, and the customer support is
                top-notch!"
              </p>
              <div className="font-semibold">John Doe</div>
              <div className="text-sm text-gray-400">Verified Buyer</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
