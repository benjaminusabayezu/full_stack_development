import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

function PasswordInput({ label, value, onChange,name, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <label htmlFor="password" className="font-medium text-sm">
        {label}
      </label>

      <div className="relative">
        <input
          id="password"
          name={name}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full 
            px-4
            py-3
            border border-yellow-400
            rounded-md
            pr-12
            focus:outline-none focus:border-yellow-600
          "
        />

        {/* Button sits inside the input */}
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-sm
            text-gray-600
            hover:text-yellow-600
          "
        >
          {show ? <EyeClosed className="w-4 h-4"/> : <Eye  className="w-4 h-4"/>}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
