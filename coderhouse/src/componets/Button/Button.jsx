
const Button = ({label, callback, color}) => {

  return (
      <>
          <button style={{backgroundColor: color}} onClick={()=> callback()}>{label}</button>
      </>
  )

}

export default Button