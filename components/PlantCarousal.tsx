import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ResponseData, PlantResult } from "@/typings/plantsType";
import { Button } from "./ui/button";

function PlantCarousal() {
  const [plants, setPlants] = useState<ResponseData>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [plant, setPlant] = useState<PlantResult>();
  useEffect(() => {
    fetch("http://localhost:3000/api/plants")
      .then((response) => response.json())
      .then((json) => setPlants(json));
  }, []);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    const plant = plants[current];
    console.log(plant);
    setPlant(plant);
  }, [api, plants,current]);

  return (
    <div>
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {plants?.map((plant, id) => (
            <CarouselItem className="basis-1/3" key={id}>
              <div className="p-1 text-white text-center">
                <div className="flex aspect-square items-center justify-center p-2 relative">
                  <Image
                    height={150}
                    width={200}
                    src={plant.path}
                    alt={plant.name}
                  />
                </div>
                {current != id && <p>{plant.name}</p>}
                <p>{plant.price}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center items-center relative top-5 text-white">
        <div className="bg-white/30 flex space-x-2 px-5 py-2 rounded-full">
          <div className="flex flex-col">
            <p>{plant?.name}</p>
            <p>{plant?.price}</p>
          </div>

          <div>
            <Button className="rounded-full bg-white/60 text-black mt-1">+Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantCarousal;
