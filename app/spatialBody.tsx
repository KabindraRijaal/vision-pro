"use client"
import PlantCarousal from "@/components/PlantCarousal";
import SearchBar from "@/components/SearchBar";
import SideNav from "@/components/SideNav";
import React from "react";

function SpatialBody() {
  return (
    <div className="flex flex-row  items-center justify-around mt-10 w-full">
      <div className="flex h-full  space-x-2">
        <div className="grid grid-cols-1 justify-items-center content-center">
          <SideNav />
        </div>
        <div className=" bg-white/30 w-11/12 rounded-2xl">

          <SearchBar />
          <PlantCarousal/>
        </div>
      </div>
    </div>
  );
}

export default SpatialBody;
