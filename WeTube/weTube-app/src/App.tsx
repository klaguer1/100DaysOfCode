import Categories from "./components/Categories";
import { categories, videos } from "./data/home";
import { useState } from "react";
import { VideoItem } from "./components/VideoItem";
import { PageHeader } from "./components/PageHeader";
import { Sidebar } from "./components/Sidebar";
import { SidebarProvider } from "./contexts/SidebarContext";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />

        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <Categories
                categoryTypes={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              ></Categories>
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map((video) => (
                <VideoItem key={video.id} {...video}></VideoItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
