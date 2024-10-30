import { MdDashboard } from "react-icons/md";
import { FaPager } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
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
import Login from "@/pages/Login";
// import { Link } from "lucide-react";
import { Link } from 'react-router-dom';
const Aside = () => {

    return (
        <>
            <div className="flex">
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
                            <a  href="" className="flex  items-center px-4 "> Create</a>

                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>



                </ul>


                </div>

                {/* <div className="w-full  bg-slate-500  ">
                   <div className="h-20 bg-gray-700 border  border-zinc-700 flex justify-between items-center">
                        <div className="text-white text-xl ml-10 h-16  flex items-center ">
                            Movie
                        </div>

                        <div className="w-96 mr-10 flex  items-center justify-between ">
                            <div className="w-full">
                                <form className="max-w-md mx-auto">   
                                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                </div>
                                </form>
                            </div>
                            <button className="text-white ml-4 h-12 flex justify-center items-center  rounded-lg bg-red-700 p-3  rounded">
                                <FaPlus />
                                Create
                            </button>
                        </div>
                   </div>
                </div> */}


                <div className="w-full bg-slate-500"> 
                    <div>
                        <h2 className="h-20 bg-gray-700 flex items-center">Thống kê phim</h2>

                        <div className="text-white  h-60 bg-red-950 flex items-center justify-around">
                            <div className=" bg-green-600 px-16 py-10 rounded-lg">
                                <p className="text-xl mb-3">Danh mục phim</p>
                                <span className="text-6xl">19</span>
                            </div>
                            <div className="bg-green-600 px-16 py-10 rounded-lg">
                                <p className="text-xl mb-3">Danh mục phim</p>
                                <span className="text-6xl">19</span>
                            </div>
                            <div className="bg-green-600 px-16 py-10 rounded-lg">
                                <p className="text-xl mb-3">Danh mục phim</p>
                                <span className="text-6xl">19</span>
                            </div>
                            <div className="bg-green-600 px-16 py-10 rounded-lg">
                                <p className="text-xl mb-3">Tổng phim</p>
                                <span className="text-6xl">50</span>
                            </div>
                        </div>
                        <div className=" bg-yellow-500">
                            CHart
                        </div>
                    </div>

                </div>
                
            </div>
        </>




    )
}



export default Aside