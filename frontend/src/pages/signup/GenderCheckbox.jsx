import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Male</span>
                <input type="checkbox" defaultChecked className="checkbox" />
            </label>
        </div>

        <div className='form-control'>
            <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Female</span>
                <input type="checkbox" defaultChecked className="checkbox" />
            </label>
        </div>


    </div>
  )
}

export default GenderCheckbox



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