

const CheckBox = (
    {
        label,
        checked,
        onChange,
        name,
    }
) => {
  return (
<label className="flex items-center gap-2"
>
    <input
    name={name}
    type="checkbox"
    checked={checked}
    onChange={onChange}

    />
    <span>{label}</span>

</label>
  );
};

export default CheckBox;