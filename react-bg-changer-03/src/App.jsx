// // import { useState } from 'react'

// // const colors = [
// //   { name: 'Red', color: 'bg-red-500' },
// //   { name: 'Blue', color: 'bg-blue-500' },
// //   { name: 'Green', color: 'bg-green-500' },
// //   { name: 'Yellow', color: 'bg-yellow-500' },
// // ];

// // function App() {
// //   const [color,setColor] = useState("blue");

// //   return (
// //     <>
// //      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}></div>
// //      <nav className="flex justify-between items-center bg-gray-800 p-4">
// //       <div className="flex justify-center items-center space-x-4">
// //         {colors.map((button, index) => (
// //           <button onClick={()=>{setColor(button.color)}}
// //             className={`px-4 py-2 rounded-lg text-white ${button.color}`}
// //           >
// //             {button.name}
// //           </button>
// //         ))}
// //       </div>
// //     </nav>
// //     </>
// //   )
// // }

// // export default App

// import React, { useState } from 'react';

// const colors = [
//   { name: 'Red', color: 'bg-red-500' },
//   { name: 'Blue', color: 'bg-blue-500' },
//   { name: 'Green', color: 'bg-green-500' },
//   { name: 'Yellow', color: 'bg-yellow-500' },
// ];

// function App() {
//   const [color, setColor] = useState("blue"); // Default color set to "blue"

//   const handleClick = (buttonColor) => {
//     console.log('Button clicked, color:', buttonColor);
//     setColor(buttonColor);
//     console.log('New color:', color);
//   };

//   return (
//     <>
//      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}></div>
//      <nav className="flex justify-between items-center bg-gray-800 p-4">
//       <div className="flex justify-center items-center space-x-4">
//         {colors.map((button, index) => (
//           <button 
//             key={index} 
//             onClick={() => handleClick(button.color)} // Set color to the button's color when clicked
//             className={`px-4 py-2 rounded-lg text-white ${button.color}`}
//           >
//             {button.name}
//           </button>
//         ))}
//       </div>
//     </nav>
//     </>
//   )
// }

// export default App;

import React, { useState } from 'react';

const colors = [
  { name: 'Red', color: 'red' },
  { name: 'Blue', color: 'blue' },
  { name: 'Green', color: 'green' },
  { name: 'Yellow', color: 'yellow' },
];

function App() {
  const [color, setColor] = useState('blue'); // Default color set to "blue"

  const handleClick = (buttonColor) => {
    console.log(buttonColor)
    setColor(buttonColor); // Update the color state
  };

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color}}></div>
      <nav className="flex justify-between items-center bg-gray-800 p-4">
        <div className="flex justify-center items-center space-x-4">
          {colors.map((button, index) => (
            <button
              key={index}
              onClick={() => handleClick(button.color)} // Call handleClick with button color
              className='px-4 py-2 rounded-lg text-white' style={{ backgroundColor: button.color }}
            >
              {button.name}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}

export default App;

