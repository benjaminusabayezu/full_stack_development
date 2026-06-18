

const Alert = (
    {
        type="success",
        message,
    }
) => {

    const styles={
        success:"bg-lime-100 text-lime-500 border-b-lime-300",
        error:"bg-pink-100 text-pink-500 border-b-pink-300",
        warning:"bg-yellow-100 text-yellow-500 border-b-yellow-300",

    }
  return (
    <div className={` p-3 border rounded-full ${styles[type]}`}>
      {message}
    </div>
  );
};

export default Alert;