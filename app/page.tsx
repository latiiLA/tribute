"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import hacee1 from "../public/images/hacee1.jpg";
import hacee2 from "../public/images/hacee2.jpg";
import hacee3 from "../public/images/hacee3.png";
import hacee4 from "../public/images/hacee4.jpg";
import hacee5 from "../public/images/hacee5.jpg";
import hacee6 from "../public/images/hacee6.jpg";
import hacee7 from "../public/images/hacee7.jpg";
import hacee8 from "../public/images/hacee8.jpg";
import hacee9 from "../public/images/hacee9.jpg";
import hacee10 from "../public/images/hacee10.png";
import hacee11 from "../public/images/hacee11.jpg";
import Image from "next/image";

export default function Home() {
  const slider = [
    hacee1,
    hacee2,
    hacee3,
    hacee4,
    hacee5,
    hacee6,
    hacee7,
    hacee8,
    hacee9,
    hacee10,
    hacee11,
  ];
  return (
    <div
      id="home-section"
      className="max-w-7xl mx-auto p-6 mx-3, sm:mx-5, md:md-6 min-h-screen flex flex-col gap-2"
    >
      <div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {slider.map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="p-0">
                      <div className="relative w-full aspect-square">
                        <Image
                          src={slider[index]}
                          alt={`Slide ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div
        className="flex flex-col items-center justify-center text-center 
                bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 
                px-4 sm:px-6 md:px-8 py-10 w-full"
      >
        <p className="text-2xl font-semibold mb-2">
          In Loving Memory of Hachalu Hundessa Bonsa
        </p>
        <p className="text-xl mb-2 text-gray-700 dark:text-gray-300">
          1986 – 29 June 2020
        </p>
        <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
          You will always be remembered
        </p>

        <p className="text-base max-w-xl text-gray-700 dark:text-gray-300">
          Today, we remember not just a voice, but the hope, the courage, and
          the dreams he shared with us.
        </p>

        <p className="text-base max-w-xl text-gray-700 dark:text-gray-300">
          His songs continue to echo in our hearts, reminding us to stand for
          justice, love, and unity.
        </p>

        <p className="text-base max-w-xl italic text-gray-600 dark:text-gray-400">
          “Though he is gone, the melody of his spirit will forever guide us.”
        </p>
      </div>
    </div>
  );
}
