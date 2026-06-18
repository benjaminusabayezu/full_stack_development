import NavLinks from './NavLinks'
import ProfileMenu from './ProfileMenu'
const Navbar = () => {
  return (
    <header 
    className='sticky top-0 z-50 bg-black border-b border-lime-950'>
      <div className='h-10 px-6 flex items-center justify-between'>

        {/* left section */}
          <NavLinks  />
        <div className='flex items-center gap-12'>
          <h1 className='text-xl font-black tracking-widest text-yellow-500'>
            BEN .vISU<span className='text-lime-600'>ALs</span>

          </h1>

        </div>
        {/* Right section */}

      <ProfileMenu />
      </div>

    </header>
  )
}

export default Navbar