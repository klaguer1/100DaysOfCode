import noProjectImage from "../assets/no-projects.png";

export default function HomePage() {
  return (
    <div className="mt-48 text-center w-2/3 ">
      <img
        className="w-16 h-16 object-contain  mx-auto"
        src={noProjectImage}
      ></img>
      <h1> No Projects </h1>
    </div>
  );
}
