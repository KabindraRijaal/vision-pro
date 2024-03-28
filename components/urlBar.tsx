"use client";

import { FormEvent } from "react";
import { LockKeyhole } from "lucide-react";

function URLBar() {
  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center mt-10 rounded-full "
      >
        <button>
          <LockKeyhole className="relative left-10" type="Submit"></LockKeyhole>
        </button>
        <input
          disabled
          type="text"
          name="url"
          id="url"
          placeholder="https:\\www.myplant.com\\"
          className=" w-2/5 h-14 px-12 rounded-full outline-none placeholder:text-sm placeholder-black bg-white/30  text-gray-600"
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default URLBar;
