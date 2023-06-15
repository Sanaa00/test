

// eslint-disable-next-line react/prop-types
function Button({text,icon,symbol,onClick}) {

  return (
    <button 
    onClick={onClick}
    className="flex items-center text-sm justify-center px-2"
    >
      {icon}
      {text}
    <sup >{symbol}</sup>
    </button>
  )
}

export default Button
