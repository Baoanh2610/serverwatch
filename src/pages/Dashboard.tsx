import { MdDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import { HiLightningBolt } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { FaPager } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { SiNationalrail } from "react-icons/si";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";
import { FaThList } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Link } from "react-router-dom";
const Dashboard = () => {

    return (
        <div className="h-full bg-gray-700 w-60">
        <ul className="w-full h-screen p-2 font-normal text-white font-semibold">


            <li className="w-full mb-2">
                <a href="/" className="flex  items-center py-2 px-4 rounded-md border  border-red-600">
                    <img className="w-20"
                        src="https://banner2.cleanpng.com/20180920/vo/kisspng-product-design-brand-logo-font-flix-streaming-for-netflix-watch-movies-videos-5ba3d6700cdef9.7081128615374639200527.jpg" alt="" />
                    DASHBOARD


                </a>
            </li>
            



            <li className=" w-full ">
                <a href="/" className="flex  items-center  py-2 px-4 ">
                <FaThList />
                    <p className="ml-4">Danh mục phim</p>
                </a>
            </li>


            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>                
                        <li className=" w-full ">
                            <a href="/" className="flex  items-center  py-2 px-4 ">
                                <MdDashboard />
                                <p className="ml-4">Movie</p>
                            </a>
                        </li>
                    </AccordionTrigger>
                    <AccordionContent>
                    <a  href="" className="flex  items-center px-4 "> Create</a>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>


            <li className=" w-full ">
                
                <a href="/" className="flex items-center   py-2 px-4 ">
                    <FaUserLarge />
                    
                    <p className="ml-4">User</p>
                </a>
            </li>

            <li className=" w-full ">
                <a href="/" className="flex items-center   py-2 px-4 ">
                <SiNationalrail />
                    
                <p className="ml-4">Quốc Gia</p>

                </a>
            </li>

            <li className=" w-full ">
                <a href="/" className="flex items-center   py-2 px-4 ">
                <BiSolidCategoryAlt />
                <p className="ml-4">Thể Loại</p>

                </a>
            </li>
            <li className=" w-full ">
                <a href="/" className="flex items-center  py-2 px-4 ">
                <RiMovie2Fill />
                <p className="ml-4">Film</p>
                
                </a>
            </li>


            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>                
                        <li className=" w-full ">
            
                            <div  className="flex items-center   py-2 px-4 ">
                                <FaPager />
                                
                            <p className="ml-4">Pages</p>

                            </div>
                        </li>
                    </AccordionTrigger>
                    <AccordionContent>
                    <Link  to="/admin" className="flex  items-center px-4 ">
                        Login
                    </Link>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>


            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>                
                        <li className=" w-full ">
                            <a href="/" className="flex items-center   py-2 px-4 ">
                        <IoMdSettings />
                                
                            <p className="ml-4">Setting</p>

                            </a>
                        </li>
                    </AccordionTrigger>
                    <AccordionContent>
                    <a  href="/" className="flex  items-center px-4 "> Create</a>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>



        </ul>


        </div>
    )
}

export default Dashboard


