

const Input = (
    {
        label,
        type="text",
        name,
        placeholder,
        value,
        onChange,
        error,
    }
) => {

      return (
    <div className='space-y-3'>
        {label && (
            <label className='font-medium text-sm m-2 py-3'>
                {label}
            </label>
             )}
             <input 
             type={type}
             name={name}
             value={value}
             placeholder={placeholder}
             onChange={onChange}

             className={`w-full px-4 py-3 border rounded-md outline-none
             focus:ring-2 focus:outline-none focus:ring-yellow-400 ${error ? "border-pink-600" : "border-yellow-400"}`}
             
             
             />
             {error && (
                <p className='text-pink--500 text-sm'>
                    {error}
                </p>
             )}
      
    </div>
  );
};

export default Input;