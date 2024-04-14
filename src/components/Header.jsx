import {useState} from 'react';
import { RiMapPinLine} from "react-icons/ri";
import { CgAdd } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import { BsFillCartFill } from 'react-icons/bs'
import { GoChevronDown } from "react-icons/go";
export default function Header(){
    const[nav, setNav] = useState(false)
    const DropdownLink =[
        {
            id:1,
            name: "English",
        },
        {
            id:2,
            name:"Việt Nam",
        },
    ];
    return(
        <>

          <div>
          <div className="max-w-full flex  h-[300px] relative">
                <img  src="https://food.grab.com/static/page-home/VN-new-1.jpg" className='object-cover w-full' />
                <div className='absolute flex flex-row flex-nowrap'>
                    <div className='p-5 ' >
                        <h1 href="" className=" hidden ml-[100px] text-3xl md:flex items-center px-3 font-bold text-black ">GarbFood</h1>
                    </div>
                    <div className='ml-[800px]  flex items-center  '>
                        <div className='hidden md:flex items-center mr-2'>
                            <button onClick={()=> setNav(!nav)} className='  border-[1px] border-white bg-white py-2.5 px-3 rounded-2xl '><BsFillCartFill size={20} /></button>
                        </div>
                        <div className='mr-1 md:flex items-center  '>
                            <button className=' border-[1px] border-white bg-white py-2 px-3 rounded-2xl'>Đăng Nhập/Đăng Ký</button>
                        </div>
                        <div className='mr-32 md:flex items-center group cursor-pointer relative '>
                            <button className=' md:flex items-center border-[1px] border-white bg-white   py-2 px-3  rounded-2xl'>VI <GoChevronDown className='transition-all duration-200 group-hover:rotate-180' /></button>
                            <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black mt-[120px]'>
                                <ul>
                                    {DropdownLink.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link}>
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute mt-[100px] ml-[125px] bg-white pt-10 pb-16 pr-14 pl-10 border-slate-300 border-[3px] rounded-2xl '>
                    <div>
                        <h1 className='text-1xl font-bold text-black'>Good Morning</h1>
                        <h5 className=' text-3xl font-bold text-black mt-2.5'> Where should we</h5>
                        <h5 className=' text-3xl font-bold text-black mt-2.5'>deliver your food</h5>
                        <h5 className=' text-3xl font-bold text-black mt-2.5'>today?</h5>
                    </div>
                    <div className='border-slate-300 border-[3px] rounded-2xl flex items-center px-2 w-[250px] mt-5'>
                        <RiMapPinLine size={25} />
                        <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Nhập địa chỉ của bạn' />
                        <CgAdd size={25} />
                    </div>
                    <div className=' rounded-2xl bg-lime-500 px-2 mt-5'>
                        <button className='bg-transparent p-2 w-full text-white font-bold'>Tìm kiếm</button>
                    </div>

                </div>
                {nav ? <div className='bg-black/20 fixed w-full h-screen z-10 top-0 right-0'></div>: ''}
            <nav className={nav ? 'fixed top-0 right-0 w-[500px] h-screen bg-white z-10 duration-300' : 'fixed top-0 right-[-100%] w-[500px] h-screen bg-white z-10 duration-300'}>
                 <IoCloseOutline size={35} onClick={()=> setNav(!nav)} className='my-5 mx-5 absolute cursor-pointer' />
                 <img className='mt-[100px] ml-10' src='https://food.grab.com/static/images/ilus-basket-empty.svg'></img>
                 <h1 className='ml-[160px] my-3 text-2xl font-bold'>Start Grabbing Food!</h1>
                 <h1 className='ml-[120px] mb-6'>Add items to your basket and place order here.</h1>
                 <button href="" className='text-cyan-500 ml-[220px]  '>Continue browsing</button>
            </nav>
            </div>
          </div>
        </>
    )
}