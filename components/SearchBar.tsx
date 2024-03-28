"use client";
import { FormEvent } from "react";
import { Filter, Search, SquareArrowOutUpRight, BoxSelect } from "lucide-react";

function SearchBar() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-between h-20 w-full">
      <div className="flex w-1/4 items-center space-x-4 ml-5">
        <Filter size={30} className=" bg-white/60 p-1 rounded-full" />
        <BoxSelect size={30} className=" bg-white/60 p-1 rounded-full" />
        <SquareArrowOutUpRight
          size={30}
          className=" bg-white/60 p-1 rounded-full"
        />
      </div>
      <div className="flex  justify-end mr-5">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center h-8  rounded-full  bg-white/60"
        >
          <input
            type="text"
            className="h-8 w-20 ml-5 bg-transparent rounded-full outline-none placeholder-placeholder:text-sm placeholder-slate-600"
            placeholder="Search"
          />
          <button className="mr-2">
            <Search type="Submit" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
