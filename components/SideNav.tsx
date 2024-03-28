import React from "react";
import { SlidersVertical, Home, Flower2, ShoppingCart } from "lucide-react";

function SideNav() {
  return (
    <div className="grid content-center space-y-4 bg-white/30 h-44 w-14 justify-items-center rounded-full">
      <Home color="#2d3832"  className="hover:pointer"/>
      <Flower2 color="#2d3832" />
      <ShoppingCart color="#2d3832" />
      <SlidersVertical color="#2d3832" />
    </div>
  );
}

export default SideNav;
