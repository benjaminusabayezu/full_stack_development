import { Bell,ImageOff,Import,Search } from "lucide-react"
import profileImage from '../../assets/default_profile.png'
const ProfileMenu = () => {
  return (
    <div className="flex items-center  gap-5">
      <button className="text-zinc-400 hover:text-white transition">
        <Search className="w-4 h-4" />
      </button>
      <button className="text-zinc-400 hover:text-white transition">
        <Bell className="w-4 h-4" />
      </button>
            <img
        src={profileImage}
        alt="Profile"
        className="
          h-9
          w-9
          rounded-full
          object-cover
          border
          border-zinc-700
        "
      />
    </div>
  );
}

export default ProfileMenu