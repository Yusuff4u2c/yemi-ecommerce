import Maccessentials from '../assets/images/Maccessentials.jpg'
const Footer = () => {
    return ( 
        <div className="footer my-5">
            <div className='flex justify-around gap-20 my-14 px-10'>
                <div><img src={Maccessentials} alt="" /></div>
                <div>
                    <ul className='flex flex-col gap-3'>
                        <a href="">Home</a>
                        <a href="">Collection</a>
                        <a href="">Products</a>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-3'>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">FAQ</a>
                    </ul>
                </div>
                <div>
                    <p>
                    Be the first to know about our biggest and best <br /> sales. We'll never send more than one email a <br /> month.
                    </p>
                    <div className='flex border-b border-black py-1'>
                        <input className='flex-grow border-none' type="text" value={"ENTER YOUR EMAIL"}/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bold">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <div className='flex gap-5 mt-3'>
                        <div className='w-6 h-6 text-white bg-blue-500 rounded-full flex justify-center justify-items-center pt-1'>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>

                        <div className='w-6 h-6 text-white bg-blue-500 rounded-full flex justify-center justify-items-center pt-1'>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </div>

                        <div className='w-6 h-6 text-white bg-blue-500 rounded-full flex justify-center justify-items-center pt-1'>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        </div>

                        <div className='w-6 h-6 text-white bg-blue-500 rounded-full flex justify-center justify-items-center pt-1'>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center'>All rights are reserved</p>
        </div>
     );
}
 
export default Footer;