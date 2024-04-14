import { LuDot } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import {  RiStarFill } from "react-icons/ri";
import { MdOutlineDiscount } from "react-icons/md";
import { FaRegSun } from "react-icons/fa6";
import { GiChopsticks } from "react-icons/gi";
import { FaFireAlt} from "react-icons/fa";
import Slider from "react-slick";
export default function ListPromo(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,
      };
    return(
        <>
         <div className='pt-[220px] pl-[130px]' >
                 <h1 className='text-3xl font-bold text-black'>Ưu đãi GrabFood tại <span className='text-emerald-500 '>Hà Nội</span></h1>
             </div>   
          <Slider className="pt-[30px]  pl-[130px]" {...settings}>
             <div   className=' rounded-xl relative pr-5 my-5 '>
                     <div className='absolute h-full '>
                        <div className='text-white mt-3 px-2  bg-green-800'>Promo</div>
                     </div>
                     <img className=' rounded-2xl ' src='https://food-cms.grab.com/compressed_webp/merchants/5-C4LTLNMZGU3WNJ/hero/6a35f7cc-bdd2-4b2a-b0df-a7eddac7b70d__store_cover__2023__12__12__16__35__21.webp'></img>
                     <h1 className=' text-xl font-bold'>Ba Son 1975 - Cơm Tấm  Sườn </h1>
                     <h1 className=' text-xl font-bold'>Sài Gòn</h1>
                     <h1 className='mt-3'>Cơm</h1>
                     <div className='flex items-center mt-2'>
                         <RiStarFill size={25} className='text-yellow-300 mr-2 '/> 4.8
                         <CiClock2 size={25} className='ml-5 mr-2' /> 20 phút
                         <LuDot size={25} className='mx-2' />2 km
                     </div>
                     <div className='flex items-center mt-3 '>
                         <MdOutlineDiscount size={25} className='ml-[75px] text-3xl text-emerald-300' />  Ưu đãi đến 46k
                     </div>
                 </div>
                 <div  className=' rounded-xl relative pr-5 my-5'>
                        <div className='absolute h-full '>
                            <div className='text-white mt-3 px-2  bg-green-800'>Promo</div>
                        </div>
                        <img className=' rounded-2xl ' src='https://food-cms.grab.com/compressed_webp/merchants/5-C4CEPAAEL4CJJA/hero/782d2085-530e-48fa-9fa2-f392d8f54a4f__store_cover__2023__08__01__06__31__39.webp'></img>
                        <h1 className=' text-xl font-bold'>Quán Cơm Rang 1989 - Cơm </h1>
                        <h1 className=' text-xl font-bold'>Rang Văn Phòng</h1>
                        <h1 className='mt-3'>Cơm</h1>
                        <div className='flex items-center mt-2'>
                            <RiStarFill size={25} className='text-yellow-300 mr-2 ' />3.2
                            <CiClock2 size={25} className='ml-5 mr-2' /> 25 phút
                            <LuDot size={25} className='mx-2' />2,2 km
                        </div>
                        <div className='flex items-center mt-3 '>
                            <MdOutlineDiscount size={25} className='ml-[75px] text-3xl text-emerald-300' />  Ưu đãi đến 52k
                        </div>
                    </div>
                    <div className=' rounded-xl relative pr-5 my-5'>
                        <div className='absolute h-full '>
                            <div className='text-white mt-3 px-2  bg-green-800'>Promo</div>
                        </div>
                        <img className=' rounded-2xl ' src='https://food-cms.grab.com/compressed_webp/merchants/5-C4EKLZN2CBEUUE/hero/faff5dbaf7024a2c98f33303920f8ef1_1688956019240286277.webp'></img>
                        <h1 className=' text-xl font-bold'>Xôi Chú Ngọng - Đê La Thành </h1>
                        <h1 className='mt-3'>Bánh Mì - Xôi</h1>
                        <div className='flex items-center mt-2'>
                            <RiStarFill size={25} className='text-yellow-300 mr-2 ' />4.2
                            <CiClock2 size={25} className='ml-5 mr-2' /> 25 phút
                            <LuDot size={25} className='mx-2' />2,2 km
                        </div>
                        <div className='flex items-center mt-3 '>
                            <MdOutlineDiscount size={25} className=' text-3xl text-emerald-300 mr-2' />
                            <FaRegSun size={20} className='text-red-800' /> Deal sáng 0Đ
                            <FaRegSun size={20} className='text-red-800 ml-2' />
                            <GiChopsticks size={25} className='text-red-800 ml' />Bữa tối nửa g...
                        </div>
                    </div>
                    <div className=' rounded-xl relative pr-5 my-5'>
                        <div className='absolute h-full '>
                            <div className='text-white mt-3 px-2  bg-green-800'>Promo</div>
                        </div>
                        <img className=' rounded-2xl ' src='https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000006ic/hero/115d965cadb74534a211052dfbb8dbff_1710867599881484509.webp'></img>
                        <h1 className=' text-xl font-bold'>McDonald's - Hồ Gươm </h1>
                        <h1 className='mt-3'>Gà Rán - Burger, Cơm, Món Quốc Tế</h1>
                        <div className='flex items-center mt-2'>
                            <RiStarFill size={25} className='text-yellow-300 mr-2 ' />4.3
                            <CiClock2 size={25} className='ml-5 mr-2' /> 25 phút
                            <LuDot size={25} className='mx-2' />2,3 km
                        </div>
                        <div className='flex items-center mt-3 '>
                            <MdOutlineDiscount size={25} className=' text-3xl text-emerald-300 ml-8 mr-2' />
                            <FaFireAlt size={20} className='text-red-800' />50k off, Combo Trưa Chỉ 40K
                        </div>
                    </div>     
           
          </Slider>
          <div className='pt-[50px] pl-[130px]' >
          <h1 className='mt-2'>Sắp đóng cửa - Đặt món trước 1:30 PM</h1>
                <div className=' border-[1px] border-black rounded-2xl bg-white px-2  mt-5 w-[1300px]'>
                    <button className='bg-transparent p-2 w-full text-black font-bold'>See all promotions</button>
                </div>
          </div>
        </>
    );
}