import {React,useState} from 'react'

function Login() {
   const [inputValues, setInputValues] = useState({
  email: '', password: ''
});

const handleOnChange = event => {
  const { name, value } = event.target;
  setInputValues({ ...inputValues, [name]: value });
}; 
  const handle_submit= (e)=>{
    e.preventDefault()
    login(inputValues.email, inputValues.password)
  }

  const login = async (email,password) => {
	  // Default options are marked with *
	  console.log(email)
	  const response = await fetch('http://localhost:3001/api/login/', {
		  method: "POST",
		  headers: {
			  "Content-type": "application/json;charset=UTF-8",
		  },
		  // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		  body: JSON.stringify({email,password}) // body data type must match "Content-Type" header
	  });
	  const  json5 = await response.json()
	  // console.log(json5)
	  if(json5.success){
		  localStorage.setItem("token",json5.jwttoken);
// check this






		  // history("/")
	  }else{
		  alert("invalid")
	  }
  }
  return (
    <div>
    
    <div className="relative overflow-hidden min-h-screen">
      {/* Gradients */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 left-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" />
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
      </div>
      {/* End Gradients */}
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            {/* Title */}
            <div className="mt-5 max-w-4xl">
              <h1 className="block font-semibold text-gray-800 text-3xl md:text-3xl lg:text-4xl dark:text-gray-200">
                Continue the Journey with QbyteSpace
              </h1>
            </div>
            {/* End Title */}
          <div className='text-start flex justify-center'>
          <form className="w-4/6 py-8" onSubmit={handle_submit}>
  <div className="relative z-0 w-full mb-6 group">
    <input
    onChange={handleOnChange}
      type="email"
      name="email"
      id="floating_email"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_email"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Email address
    </label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
    <input
    onChange={handleOnChange}
      type="password"
      name="password"
      id="floating_password"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Password
    </label>
  </div>
          <div className="flex justify-center py-6">
  <button
    type="submit"
    className="text-black q-btn-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-1/4  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Submit
  </button>
          </div>
</form>

          </div>
            {/* End Buttons */}
          </div>
        </div>
      </div>
    </div>

  
    </div>
  )
}

export default Login
