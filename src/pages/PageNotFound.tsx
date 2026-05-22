import { useNavigate } from "react-router";
import Button from "../ui/Button";

function PageNotFound() {
  const navigate = useNavigate();
  const headerStyling =
    "text-left text-2xl md:text-5xl text-white font-montserrat font-semibold mb-4";
  return (
    <div className="bg-[#0A192F] h-dvh w-full">
      <div className="w-full h-full flex flex-col items-center justify-center gap-6">
        <h1 className={headerStyling}>Error 404 :) || Page not found</h1>
        <br />
        <Button onClick={() => navigate("/")}>Go to Homepage</Button>
      </div>
    </div>
  );
}

export default PageNotFound;
