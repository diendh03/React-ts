import React from "react";

const SignUp = () => {
  return (
    <div className="h-screen font-sans login bg-cover">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
              <p className="text-gray-800 font-medium">Register</p>
              <div className="">
                <label
                  className="block text-sm text-gray-00"
                  htmlFor="cus_name"
                >
                  Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="cus_name"
                  name="cus_name"
                  type="text"
                  placeholder="Your Name"
                  aria-label="Name"
                />
              </div>
              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="cus_email"
                >
                  Email
                </label>
                <input
                  className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  placeholder="Your Email"
                  aria-label="Email"
                />
              </div>
              <div className="mt-2">
                <label
                  className=" block text-sm text-gray-600"
                  htmlFor="cus_email"
                >
                  Address
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  placeholder="Street"
                  aria-label="Email"
                />
              </div>
              <div className="mt-2">
                <label
                  className="hidden text-sm block text-gray-600"
                  htmlFor="cus_email"
                >
                  City
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  placeholder="City"
                  aria-label="Email"
                />
              </div>
              <div className="inline-block mt-2 w-1/2 pr-1">
                <label
                  className="hidden block text-sm text-gray-600"
                  htmlFor="cus_email"
                >
                  Country
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  placeholder="Country"
                  aria-label="Email"
                />
              </div>
              <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label
                  className="hidden block text-sm text-gray-600"
                  htmlFor="cus_email"
                >
                  Zip
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  placeholder="Zip"
                  aria-label="Email"
                />
              </div>

              <div className="mt-4">
                <button
                  className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <a
                className="inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-blue-800"
                href="login.html"
              >
                Already have an account ?
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
