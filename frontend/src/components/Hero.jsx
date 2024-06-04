
import { MdOutlineLocalOffer, MdStar } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'

import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='relative bg-hero bg-cover bg-center bg-no-repeat h-screen  w-100   '>
        <div className='max_padd_container relative top-32 xs:top-52'> 
            <h1 className='h1 capitalize  max-w-[37rem]'>Be Funky Be You</h1>
            <p className='text-gray-50 regular-14 mt-1 max-w-[33rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea, natus eius accusamus iure perspiciatis sit doloribus exercitationem beatae assumenda facere, pariatur sequi iusto. Vel veritatis minima, perspiciatis architecto labore laborum porro sapiente.</p>
            <div className='flexStart !items-center gap-x-4 my-10'> 
                <div className='!regular-24 flexCenter gap-x-3'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='bold-16 sm:bold-20'> 176k <span className='regular-16 sm:regular-20'>Excellent Reviews</span></div>
            </div>
            <div className='max-xs:flex-col flex gap-3'>
                <NavLink to={''} className={'btn_dark_rounded flexCenter'}>Shop Now</NavLink>
                <NavLink to={''} className={'btn_dark_rounded flexCenter gap-x-2'}> <MdOutlineLocalOffer className='text-2xl'/> Offer </NavLink>

            </div>
        </div>
    </section>
  )
}

export default Hero
