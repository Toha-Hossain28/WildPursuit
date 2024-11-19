import React from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review:
      "WildPursuit gave me the adventure of a lifetime! The eco-friendly tours are an absolute must for nature lovers.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "I’ve never felt so connected to nature. The guides are fantastic, and the whole experience was magical.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 3,
    name: "Emily Brown",
    review:
      "An unforgettable journey! The sustainable practices made me feel proud to be part of it.",
    rating: 4,
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-gradient-to-r from-evergreen to-deepOceanBlue text-white py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">What Our Adventurers Say</h2>
        <p className="mt-3 text-lg font-light">
          Real stories, genuine experiences.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            data-aos="fade-up"
            className="max-w-sm bg-white text-black rounded-lg shadow-md p-6 relative"
          >
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full border-4 border-evergreen absolute -top-8 left-1/2 transform -translate-x-1/2"
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="mt-2 text-sm">{testimonial.review}</p>
              <div className="flex justify-center mt-4">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
