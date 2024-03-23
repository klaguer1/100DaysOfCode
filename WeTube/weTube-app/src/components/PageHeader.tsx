import { useState } from "react";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/Logo.png";
import { Button } from "./Button";

export default function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/"></a>
        <img src={logo} className="h-6" />
      </div>
      <form
        id="unique"
        className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hiddden md:flex "}`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="search"
            className="rounded-l-full
             border-secondary-border shadow-inner
             shadow-secondary py-1 px-4 text-lg w-full
             focus:border-blue-500 outline-none"
          ></input>
          <Button
            className="py-2 px-4 
                        rounded-r-full 
                        border-secondary-border border 
                        border-l-0 flex-shrink-0"
          >
            <Search />
          </Button>
        </div>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}
