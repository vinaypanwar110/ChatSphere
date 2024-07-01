import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender==="male"?"selected":""}`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedGender == "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender==="female"?"selected":""}`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedGender == "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label htmlFor="" className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Male</span>
//                 <input type="checkbox" defaultChecked className="checkbox" />
//             </label>
//         </div>

//         <div className='form-control'>
//             <label htmlFor="" className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Female</span>
//                 <input type="checkbox" defaultChecked className="checkbox" />
//             </label>
//         </div>

//     </div>
//   )
// }

// export default GenderCheckbox
