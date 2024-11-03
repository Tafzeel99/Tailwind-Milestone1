import Image from "next/image";
import CR1 from "../images/carouselOne.jpg";
import CRP1 from "../images/carouselOneP.jpg";
import CRP2 from "../images/carouselOneP2.jpg";
import icon1 from "../images/icons (1).svg"
import icon2 from "../images/icons2.svg"
import icon3 from "../images/icons3.svg"
import FtLogo from "../images/footer.png"
import ISO from "../images/iso.svg"
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Home() {
  return (

    <div className="bg-slate-950 min-h-screen">

      {/* navbar   */}
      <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center">
        <div className=" ">
          <Image className="w-20 h-6 md:w-28 md:h-8 " src={FtLogo} alt={"nv"}></Image>
        </div>
        <ul className="md:flex md:space-x-6 hidden font-medium ">
          <li className="cursor-pointer text-xl">Home</li>
          <li className="cursor-pointer text-xl">About</li>
          <li className="cursor-pointer text-xl">Contact</li>
        </ul>
        <div className="hidden md:block px-2 py-2 bg-indigo-800 rounded-md text-white cursor-pointer">
          Login/Signup
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
            <Menu />
            </SheetTrigger>
            <SheetContent side={"left"} color="white" className="bg-indigo-950 text-white border-r-2 bg-opacity-35 w-[300px]">
              <SheetHeader>
                <SheetDescription>
              <ul className="flex flex-col flex-wrap font-medium gap-5 underline mt-20 text-white">
                <li className="cursor-pointer text-xl">Home</li>
                <li className="cursor-pointer text-xl">About</li>
                <li className="cursor-pointer text-xl">Contact</li>
                </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="w-full h-auto">
        <Image className="w-full hidden md:block" src={CR1} alt={"CR"}></Image>
        <div>
          <Image className="w-full md:hidden" src={CRP2} alt={"P2"}></Image>
          <Image className="w-full md:hidden" src={CRP1} alt={"P1"}></Image>
        </div>
      </header>


      <div className="h-auto w-full flex flex-col flex-wrap items-center text-center p-10">

        {/* Students Section */}
        <div className="w-full h-auto flex flex-col flex-wrap items-center">
          <p className="text-indigo-800 text-2xl font-bold text-center md:text-4xl ">
            Pure Hardwork, No Shortcuts!
          </p>
          <div className="w-32 md:w-48 h-1 border-b-4 border-yellow-500 mt-2 md:mt-4 rounded-2xl mb-12"></div>
        </div>

        <div className="flex flex-wrap w-full justify-evenly border-2 border-white rounded-xl ">
          <div className="w-72 flex flex-col items-center mb-12">
            <Image className="w-44 h-44" src={icon1} alt={"icon1"}></Image>
            <p className="text-3xl font-bold text-white">6000+</p>
            <p className="text-2xl font-bold text-gray-400">Different Courses</p>
          </div>

          <div className="w-72 flex flex-col items-center mb-12">
            <Image className="w-44 h-44" src={icon2} alt={"icon2"}></Image>
            <p className="text-3xl font-bold text-white">700,000++</p>
            <p className="text-2xl font-bold text-gray-400">Students Enrolled</p>
          </div>

          <div className="w-74 flex flex-col items-center mb-12">
            <Image className="w-44 h-44" src={icon3} alt={"icon3"}></Image>
            <p className="text-3xl font-bold text-white">10,000+</p>
            <p className="text-2xl font-bold text-gray-400">Successful Transition</p>
          </div>
        </div>



        {/* Products Section */}
        <div className="w-full h-auto flex flex-col flex-wrap items-center mt-12">
          <p className="text-indigo-800 text-2xl md:text-4xl font-bold  ">Our Products</p>
          <div className="h-1 w-32 md:w-48 border-b-4 border-yellow-400 rounded-2xl mt-2 md:mt-4 mb-16"></div>
        </div>

        <div className=" h-auto flex flex-wrap w-full justify-around">
          <div className="w-60 flex flex-col items-center mb-12">
            <Image className="w-40 h-40" src={icon1} alt={"P1"}></Image>
            <p className="text-white text-2xl font-bold">PW Skills Lab</p>
            <p className="text-gray-400 font-medium text-xl ">Supercharge your project development with our robust lab.</p>
          </div>

          <div className="w-64 flex flex-col items-center mb-12">
            <Image className="w-40 h-40" src={icon2} alt={"P1"}></Image>
            <p className="text-white text-2xl font-bold">Job Portal</p>
            <p className="text-gray-400 font-medium text-xl ">Use exceptional templates for a stand-out resume minus the sign up process.</p>
          </div>

          <div className="w-64 flex flex-col items-center mb-12">
            <Image className="w-40 h-40" src={icon3} alt={"P1"}></Image>
            <p className="text-white text-2xl font-bold">Experience Portal</p>
            <p className="text-gray-400 font-medium text-xl ">PW skill self-paced experience portal priorities hands-on training with 570+ internship projects.</p>

          </div>

          <div className="w-64 flex flex-col items-center mb-12">
            <Image className="w-40 h-40" src={icon1} alt={"P1"}></Image>
            <p className="text-white text-2xl font-bold">Affiliate</p>
            <p className="text-gray-400 font-medium text-xl ">Explore affiliate marketing oppurtunities with PW Skills and attain financial freedom. </p>
          </div>

          <div className="w-64 flex flex-col items-center mb-12">
            <Image className="w-40 h-40" src={icon2} alt={"P1"}></Image>
            <p className="text-white text-2xl font-bold">Hall of fame</p>
            <p className="text-gray-400 font-medium text-xl "> Our student placements and 100k career transitions speak volumes about our courses.</p>
          </div>


        </div>

      </div>

      {/* Footer */}
      <footer className="w-full text-white bg-gray-900 flex flex-col text-center md:text-start items-center md:items-start md:flex-row flex-wrap justify-between px-4 md:px-12 pt-6  ">
        <div className="flex flex-col items-center md:items-start ">
          <Image className="w-40 h-12 my-6" src={FtLogo} alt={"Ftlogo"}></Image>
          <p className="pb-6">Email us: info@tafzeel.pk</p>
          <Image className="w-32 h-32" src={ISO} alt={"iso"}></Image>
        </div>

        <div className="flex flex-col my-6 ">
          <h2 className="font-bold text-xl">PW Skills</h2>
          <div className="h-1 w-40 border-t-4 rounded-2xl my-2 border-yellow-500"></div>
          <div className="space-y-1">
            <p>About us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div className="flex flex-col my-6 ">
          <h2 className="font-bold text-xl">Products</h2>
          <div className="h-1 w-40 border-t-4 rounded-2xl my-2 border-yellow-500"></div>
          <div className="space-y-1">
            <p>PW Skills Lab</p>
            <p>Job Portal</p>
            <p>Experience Portal</p>
            <p>Become an affiliate</p>
            <p>Hall of fame</p>
          </div>
        </div>

        <div className="flex flex-col my-6 ">
          <h2 className="font-bold text-xl">Links</h2>
          <div className="h-1 w-40 border-t-4 rounded-2xl my-2 border-yellow-500"></div>
          <div className="space-y-1">
            <p>Dicord Channel</p>
            <p>PW Youtube</p>
            <p>Careers</p>
          </div>
        </div>

      </footer>






    </div>
  )
}
