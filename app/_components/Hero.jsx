import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="flex items-center flex-col gap-3 justify-center pt-14 pb-7">
      <h2 className="font-bold text-[46px] text-center">
        Find Home <span className="text-purple-800"> Services/Repair </span>{" "}
        <br /> Near You
      </h2>
      <h2 className="text-xl text-gray-400">Explore Best Home Services & Repair Near You</h2>
   <div className="mt-4 flex gap-4 items-center">
    <input type="text" placeholder="  Search..." className="rounded-xl border md:w-[350px] md:h-9 h-9" />
  <Button className="rounded-full h-[40px]">
    <Search className="h-4 w-4"/>
  </Button>
   </div>
    </div>
  );
}

export default Hero;
