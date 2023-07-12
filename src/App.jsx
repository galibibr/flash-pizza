
import './App.css'
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'







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
          <div className='flex gap-6 md:w-full'>
            <img src={img1} alt="" className=' mb-24 w-full min-w-[50px]' />
            <img src={img2} alt="" className=' mt-24 w-full min-w-[50px]' />
            <img src={img3} alt="" className=' mb-24 w-full min-w-[50px]' />
          </div>
        </section>
        {/* Section 2 */}
        <section className=' py-20 grid md:grid-cols-5 grid-cols-1 gap-32'>
          <div className=' md:col-start-1 md:col-end-3'>
            <img src={img4} alt="" className='w-full' />
          </div>
          <div className='flex flex-col gap-6 it justify-center md:col-start-3 md:col-end-6'>
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
          <div className='grid md:grid-cols-5 grid-cols-1 gap-32'>
            <div className=' flex flex-col gap-6 md:col-start-1 md:col-end-4 justify-center'>
              <p className=' text-3xl font-semibold col_blue'>Cabin Activities</p>
              <p className='col_gray'>Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.</p>
            </div>
            <div className='md:col-start-4 md:col-end-6'>
              <img src={img5} alt="" className='w-full'/>
            </div>
          </div>
          <div className='grid md:grid-cols-5 grid-cols-1 gap-32'>
            <div className='md:col-start-1 md:col-end-3'>
              <img src={img6} alt="" className='w-full'/>
            </div>
            <div className=' flex flex-col gap-6 md:col-start-3 md:col-end-6 justify-center'>
              <p className=' text-3xl font-semibold col_blue'>100% Organic Food</p>
              <p className='col_gray'>We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
