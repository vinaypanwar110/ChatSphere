import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 bg-gray-60 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 border border-gray-100
"
      >
        <h1 className="text-3xl front-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500">ChatSphere</span>
        </h1>

        <form action="">
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full h-10"
            />
          </div>
          <div>
            <label htmlFor="" className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Dont't"} have an account
          </a>
          <div>
            <button className="btn btn-block bt-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div
//         className="w-full p-6 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 border border-gray-100
// "
//       >
//         <h1 className="text-3xl front-semibold text-center text-gray-300">
//           Login
//           <span className="text-orange-500">ChatSphere</span>
//         </h1>

//         <form action="">
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="input input-bordered w-full h-10"
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="input input-bordered w-full h-10"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             {"Dont't"} have an account
//           </a>
//           <div>
//             <button className="btn btn-block bt-sm mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
