import React from "react";
import { useParams, NavLink } from "react-router-dom";
import useService from "../../Data/useService";
import PageHeader from "../../Component/Shared/PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SingleService = () => {
  const { id } = useParams();
  const { services } = useService();

  if (!Array.isArray(services)) return <p>Loading services...</p>;

  const service = services.find((s) => s.id.toString() === id);

  if (!service) return <p>Service not found</p>;

  return (
    <div className="bg-gray-50 py-12 px-4">
      <PageHeader name={`${service.name}`} image={`${service.images[0]}`} />
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="col-span-1 bg-base-300 p-6 rounded-xl h-fit sticky top-6">
          <h2 className="text-xl font-bold mb-4 text-[#1B4B36]">All Services</h2>
          <div className="flex flex-col gap-3">
            {services.map((s) => (
              <NavLink
                key={s.id}
                to={`/service/${s.id}`}
                className={`${
                  id === s.id.toString()
                    ? "flex justify-between items-center p-3 rounded-xl bg-[#1B4B36] text-white hover:bg-[#FBDE70] hover:text-black transition"
                    : "flex justify-between items-center p-3 rounded-xl bg-white text-gray-500 hover:bg-[#FBDE70] hover:text-black transition"
                }`}
              >
                <span>{s.name}</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.4401 11.0001C17.0996 11.0001 14.9665 8.77909 14.9665 6.34009V5.34009H13.0465V6.34009C13.0465 8.11409 13.7934 9.77809 14.9656 11.0001H3.12012V13.0001H14.9656C13.7934 14.2221 13.0465 15.8861 13.0465 17.6601V18.6601H14.9665V17.6601C14.9665 15.2211 17.0996 13.0001 19.4401 13.0001H20.4001V11.0001H19.4401Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="col-span-3 bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-[#1B4B36] mb-4">
            {service.name}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{service.short_description}</p>

          {/* Swiper Image Slider */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="rounded-xl mb-6"
          >
            {service.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`service-${idx}`}
                  className="rounded-xl shadow-md h-120 w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <h2 className="text-xl font-semibold mb-2 text-[#1B4B36]">Details</h2>
          <p className="text-gray-700 mb-6 whitespace-pre-line">{service.long_description}</p>

          <h2 className="text-xl font-semibold mb-2 text-[#1B4B36]">Working Process</h2>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            {service.working_process.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2 text-[#1B4B36]">Benefits</h2>
          <p className="text-gray-700 mb-6">{service.benefits}</p>

          <h2 className="text-xl font-semibold mb-2 text-[#1B4B36]">Our Commitment</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.our_commitment.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-[#F0F9F5] p-4 rounded-xl"
              >
                <img
                  src={`/images/${item.image}`}
                  alt={`commitment-${idx}`}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
