"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";

const Skill = () => {
  const t = useTranslations("Skills");
  return (
    <section  style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="text-3xl py-1 dark:text-white " >
      <div className="flex flex-col gap-70  text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-[20px]">
          {t("p1")}
          </p>
        </div>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[100%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[100%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </section>
  );
};

export default Skill;