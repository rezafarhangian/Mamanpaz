import NavbarDesktop from "../Components/NavbarDesktop";
import NavbarMobile from "../Components/NavbarMobile";
import Border from "../Components/Border";
import { IoMdArrowDropdown } from "react-icons/io";
import ChefRegistrationForm from "./ChefRegistrationForm";

export default function HeaderChefRegistration() {
  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />

      <div className="container">
        <div className="flex flex-col justify-center items-center gap-8 mt-16  lg:flex-row">
          <img
            className="lg:w-[600px]  xl:w-[900px] lg:order-1 xl:mt-16 xl:h-[658px] rounded-lg"
            src="./img/HeaderChefRegistration/main-chef-bg.jpeg"
            alt=""
          />
          <ChefRegistrationForm />
        </div>

        <div className="p-2">
          <Border icon="true">
            <IoMdArrowDropdown className="text-4xl" />
          </Border>
        </div>
      </div>
    </div>
  );
}
