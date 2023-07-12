
import './App.css'
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'
import s5_a from './assets/s5_a.png'
import s5_b from './assets/s5_b.png'
import s5_c from './assets/s5_c.png'







function App() {
  return (
    <>
      <div className='container border'>
        {/* Navbar */}
        <header className='py-8 grid md:grid-cols-3 grid-cols-2 items-center'>
          <p>Cootels</p>
          <ul className='flex gap-8 justify-center md:flex hidden'>
            <li>Rooms</li>
            <li>Reservation</li>
            <li>Contacs</li>
          </ul>
          <div className='flex justify-end'>
            <button>Get Started</button>
          </div>
        </header>
        {/* Section 1 */}
        <section className=' py-20 grid md:grid-cols-2 grid-cols-1 gap-8'>
          <div className='flex flex-col gap-6 it justify-center'>
            <p className='font-semibold col_blue text-5xl'>Nature, Warmth, and Beauty in One Space</p>
            <p className='text-lg col_gray font-normal'>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.</p>
            <div>
              <button>Reservation</button>
            </div>
          </div>
          <div className='flex gap-6 md:w-full imgs'>
            <img src={img1} alt="" className=' mb-24 w-full min-w-[50px]' />
            <img src={img2} alt="" className=' mt-24 w-full min-w-[50px]' />
            <img src={img3} alt="" className=' mb-24 w-full min-w-[50px]' />
          </div>
        </section>
        {/* Section 2 */}
        <section className=' py-20 grid md:grid-cols-3 grid-cols-1 gap-8'>
          <div className=' md:col-start-1 md:col-end-2 imgs md:w-full'>
            <img src={img4} alt="" className='w-full' />
          </div>
          <div className='flex flex-col gap-6 it justify-center md:col-start-2 md:col-end-4 md:pl-24'>
            <p className='font-semibold col_blue text-5xl'>Cozy and Down to Earth Cootage Hotel in Norway.</p>
            <p className='text-lg col_gray font-normal'>Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.</p>
            <p className='text-lg col_gray font-normal'>Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.</p>
            <div>
              <button>Reservation</button>
            </div>
          </div>
        </section>
        {/* Section 3 */}
        <section className=' py-20 flex flex-col gap-8'>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
            <div className=' flex flex-col gap-6 md:col-start-1 md:col-end-3 justify-center md:pr-24'>
              <p className=' text-4xl font-semibold col_blue'>Cabin Activities</p>
              <p className='col_gray'>Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.</p>
            </div>
            <div className='md:col-start-3 md:col-end-4 imgs md:w-full'>
              <img src={img5} alt="" className='w-full'/>
            </div>
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
            <div className='md:col-start-1 md:col-end-2 imgs md:w-full'>
              <img src={img6} alt="" className='w-full'/>
            </div>
            <div className=' flex flex-col gap-6 md:col-start-2 md:col-end-4 justify-center md:pl-24'>
              <p className=' text-4xl font-semibold col_blue'>100% Organic Food</p>
              <p className='col_gray'>We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.</p>
            </div>
          </div>
        </section>
        {/* Section 5 */}
        <section className='py-20 flex flex-col gap-20'>
          <div className='flex flex-col gap-6 items-center'>
            <p className='col_blue text-4xl font-semibold'>Many Rooms to Choose</p>
            <p className='col_gray text-lg max-w-xl text-center'>There is a room for every needs. We have room for individuals until family size, we also have a cabin for more private experience</p>
            <div>
              <button>Explore more</button>
            </div>
          </div>
          <div className='grid md:grid-cols-3 gap-20 md:gap-8 '>
            <div>
              <img src={s5_a} alt="" className=' md:w-full imgs'/>
              <p className=' text-2xl font-semibold mt-8 mb-4 col_blue'>Single Room</p>
              <p className='col_gray text-lg mb-8'>Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.</p>
              <p className=' text-slate-700'>Learn more</p>
            </div>
            <div>
              <img src={s5_b} alt="" className=' md:w-full imgs'/>
              <p className=' text-2xl font-semibold mt-8 mb-4 col_blue'>Double Room</p>
              <p className='col_gray text-lg mb-8'>Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.</p>
              <p className=' text-slate-700'>Learn more</p>
            </div>
            <div>
              <img src={s5_c} alt="" className='  md:w-full imgs'/>
              <p className=' text-2xl font-semibold mt-8 mb-4 col_blue'>Cootage</p>
              <p className='col_gray text-lg mb-8'>Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.</p>
              <p className=' text-slate-700'>Learn more</p>
            </div>
          </div>
        </section>
        {/* Section 6 */}
        <section className='py-20 flex flex-col gap-12 md:flex-row md:items-center'>
          <div>
            <p className=' text-slate-700 text-base font-medium mb-3'>Start your journney!</p>
            <p className='col_blue text-4xl font-semibold'>How to Get My Room?</p>
            <p className='col_gray text-lg mt-6 mb-8'>You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point</p>
            <div className='flex gap-6'>
              <button>Contact us</button>
              <button>Explore more room</button>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className=' py-8 px-9 shad'>
              <p className='col_blue text-2xl font-semibold'>1. Choose a room and date</p>
            </div>
            <div className=' py-8 px-9 shad'>
              <p className='col_blue text-2xl font-semibold'>2. Check for room availability</p>
              <p className='col_gray text-lg mt-6'>Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.</p>
            </div>
            <div className=' py-8 px-9 shad'>
              <p className='col_blue text-2xl font-semibold'>3. Enjoy your room</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
