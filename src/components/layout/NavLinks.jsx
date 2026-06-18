import {NavLink} from 'react-router-dom'
import { NAV_LINKS } from '../../data/navbarData'

const NavLinks = () => {
  return (
    <div className='hidden md:flex items-center gap-8'>
        {NAV_LINKS.map((link) =>(
            <NavLink 
             key={link.id}
             to={link.path}
             className={({isActive})=>`uppercase
             text-sm tracking-wider font-medium transition-colors ${isActive 
                ?"text-white" :"text-zinc-400 hover:text-yellow-500"
             }`}
            >
                {link.label}

            </NavLink>
        ))}

    </div>
  )
}

export default NavLinks