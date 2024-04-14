import { IoLogoApple} from "react-icons/io5";
export default function Navbar(){
    return(
        <>
        <div className='bg-slate-600 mt-10 h-[500px] flex '>
                <div className='ml-[300px] pt-[100px]'>
                    <img src='https://food.grab.com/static/page-home/bottom-food-options.svg'></img>
                    <h1 className='font-bold text-xl mt-[20px] ml-[-18px]'>Curated restaurants</h1>
                    <h1 className='mt-[10px] ml-[-150px]'>From small bites to big meals, we won't limit your appetite. Go ahead</h1>
                    <h1 className=' ml-[10px]'>and order all you want.</h1>
                </div>
                <div className='ml-[300px] pt-[115px]'>
                    <img className='w-[160px]' src='https://food.grab.com/static/images/ilus-cool-features-app.svg'></img>
                    <h1 className='font-bold text-xl mt-[20px] ml-[-100px]'>More cool features available on the app</h1>
                    <h1 className='mt-[10px] ml-[-140px]'>Download Grab app to use other payment methods and enjoy</h1>
                    <h1 className=' ml-[-60px]'>seamless communication with your driver.</h1>
                    <div className='flex mt-[25px] '>
                        <button className=' bg-black ml-[-80px] rounded py-1 pr-[20px] flex'>
                            <IoLogoApple size={35} className='text-white ml-2 mt-1' />
                            <div className='text-white ml-2'>
                                <h5 className=' text-xs'>Download on the</h5>
                                <h5 className='font-bold text-xl '>App Store</h5>
                            </div>
                        </button>
                        <button className=' bg-black ml-[30px] rounded py-1 pr-[20px] flex'>
                            <svg className='mt-1 ml-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                                <linearGradient id="jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1" x1="1688.489" x2="1685.469" y1="-883.003" y2="-881.443" gradientTransform="matrix(11.64 0 0 22.55 -19615.32 19904.924)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#047ed6"></stop><stop offset="1" stop-color="#50e6ff"></stop></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1)" fill-rule="evenodd" d="M7.809,4.608c-0.45,0.483-0.708,1.227-0.708,2.194	v34.384c0,0.967,0.258,1.711,0.725,2.177l0.122,0.103L27.214,24.2v-0.433L7.931,4.505L7.809,4.608z" clip-rule="evenodd"></path><linearGradient id="jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2" x1="1645.286" x2="1642.929" y1="-897.055" y2="-897.055" gradientTransform="matrix(9.145 0 0 7.7 -15001.938 6931.316)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffda1c"></stop><stop offset="1" stop-color="#feb705"></stop></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2)" fill-rule="evenodd" d="M33.623,30.647l-6.426-6.428v-0.45l6.428-6.428	l0.139,0.086l7.603,4.321c2.177,1.227,2.177,3.249,0,4.493l-7.603,4.321C33.762,30.561,33.623,30.647,33.623,30.647z" clip-rule="evenodd"></path><linearGradient id="jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3" x1="1722.978" x2="1720.622" y1="-889.412" y2="-886.355" gradientTransform="matrix(15.02 0 0 11.5775 -25848.943 10324.73)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d9414f"></stop><stop offset="1" stop-color="#8c193f"></stop></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3)" fill-rule="evenodd" d="M33.762,30.561l-6.565-6.567L7.809,43.382	c0.708,0.761,1.9,0.847,3.232,0.103L33.762,30.561" clip-rule="evenodd"></path><linearGradient id="jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4" x1="1721.163" x2="1722.215" y1="-891.39" y2="-890.024" gradientTransform="matrix(15.02 0 0 11.5715 -25848.943 10307.886)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33c481"></stop><stop offset="1" stop-color="#61e3a7"></stop></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4)" fill-rule="evenodd" d="M33.762,17.429L11.041,4.522	c-1.33-0.761-2.524-0.658-3.232,0.103l19.386,19.369L33.762,17.429z" clip-rule="evenodd"></path></svg>
                            <div className='text-white '>
                                <h5 className='ml-[-55px] text-xs'>Get in on</h5>
                                <h5 className='font-bold text-xl ml-1 '>Google Play</h5>
                            </div>
                        </button>
                    </div>
                </div>
            </div></>
    )
}