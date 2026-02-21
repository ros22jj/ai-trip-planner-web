    // import React from 'react'

    // function Hotels({ trip }) {
    // return (
    //     <div>
    //     <h2 className='font-bold text-xl mt-5'>
    //         Hotel Recommendation
    //     </h2>

    //     <div className='grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4  gap-5 '>
    //         {trip?.tripData?.hotels?.map((hotel, index) => (
    //         <div key={index}>
    //             <img 
    //             src='/myimage.jpg'
    //             alt="hotel"
    //             className='rounded-lg' />
    //             <div className='my-2'>
    //                 <h2 className='font-medium'>{hotel.hotelName}</h2>
    //             <h2 className='text-xs text-gray-500'>{hotel.hotelAddress}</h2>


    //             </div>
    //         </div>
    //         ))}
    //     </div>
    //     </div>
    // )
    // }

    // export default Hotels





//     import React from 'react';

// function Hotels({ trip }) {

//   console.log("🏨 Trip received in Hotels:", trip);
//   console.log("🏨 TripData:", trip?.tripData);

//   return (
//     <div>
//       <h2 className='font-bold text-xl mt-10'>
//         Hotel Recommendation
//       </h2>

//       {trip?.tripData?.hotels?.length > 0 ? (
//         <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
//           {trip.tripData.hotels.map((hotel, index) => (
//             <div key={index} className='border rounded-lg p-3 hover:shadow-md'>
//               <img
//                 src='/myimage.jpg'
//                 alt="hotel"
//                 className='rounded-lg w-full h-40 object-cover'
//               />

//               <div className='my-3'>
//                 <h2 className='font-semibold text-lg'>
//                   {hotel?.hotelName}
//                 </h2>

//                 <p className='text-sm text-gray-500'>
//                   {hotel?.hotelAddress}
//                 </p>

//                 <p className='text-sm mt-1'>
//                   💰 {hotel?.pricePerNight}
//                 </p>

//                 <p className='text-sm'>
//                   ⭐ {hotel?.rating}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className='text-gray-500 mt-5'>
//           No hotel recommendations available.
//         </p>
//       )}
//     </div>
//   );
// }

// export default Hotels;









// import React from 'react';

// function Hotels({ trip }) {

//   return (
//     <div>
//       <h2 className='font-bold text-xl mt-10'>
//         Hotel Recommendation
//       </h2>

//       <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
//         {trip?.tripData?.hotels?.map((hotel, index) => (
//           <div key={index} className='border rounded-lg p-3 hover:shadow-md'>
//             <img
//               src='/myimage.jpg'
//               alt="hotel"
//               className='rounded-lg w-full h-40 object-cover'
//             />

//             <div className='my-3'>
//               <h2 className='font-semibold text-lg'>
//                 {hotel?.hotelName || hotel?.name}
//               </h2>

//               <p className='text-sm text-gray-500'>
//                 {hotel?.hotelAddress || hotel?.address}
//               </p>

//               <p className='text-sm mt-1'>
//                 💰 {hotel?.pricePerNight || hotel?.price}
//               </p>

//               <p className='text-sm'>
//                 ⭐ {hotel?.rating}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hotels;


















// import React from 'react';

// function Hotels({ trip }) {

//   return (
//     <div>
//       <h2 className='font-bold text-xl mt-10'>
//         Hotel Recommendation
//       </h2>

//       <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
//         {trip?.tripData?.hotels?.map((hotel, index) => (
//           <div key={index} className='border rounded-lg p-3'>

//             <pre className="text-xs">
//               {JSON.stringify(hotel, null, 2)}
//             </pre>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hotels;









































// important neeche vaala

// import React from 'react';

// function Hotels({ trip }) {

//   return (
//     <div>
//       <h2 className='font-bold text-xl mt-10'>
//         Hotel Recommendation
//       </h2>

//       <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
//         {trip?.tripData?.hotels?.map((hotel, index) => (
//           <div key={index} className='border rounded-lg p-3 hover:scale-105 transition-all  cursor-pointer'>

//             <img
//               src={hotel?.hotelImageUrl || '/myimage.jpg'}
//               alt="hotel"
//               className='rounded-lg w-full h-40 object-cover'
//             />

//             <div className='my-3'>
//               <h2 className='font-semibold text-lg'>
//                 {hotel?.HotelName}
//               </h2>

//               <p className='text-sm text-gray-500'>📍
//                 {hotel?.HotelAddress}
//               </p>

//               <p className='text-sm mt-1'>
//                 💰 {hotel?.Price}
//               </p>

//               <p className='text-sm'>
//                 ⭐ {hotel?.Rating}
//               </p>

//               <p className='text-xs text-gray-600 mt-1'>
//                 {hotel?.descriptions}
//               </p>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hotels;





























// import React from 'react';
// import { Link } from 'react-router-dom';
// import HotelCardItem from './HotelCardItem';

// function Hotels({ trip }) {

//   return (
//     <div>
//       <h2 className='font-bold text-xl mt-10'>
//         Hotel Recommendation
//       </h2>

//       <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
//         {trip?.tripData?.hotels?.map((hotel, index) => (
//     // <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.HotelName + ',' + hotel?.HotelAddress} target='_blank' >   
//     //       <div
//     //         key={index}
//     //         className='border rounded-lg p-3 hover:scale-105 transition-all cursor-pointer'
//     //       >

//     //         <img
//     //           src={
//     //             hotel?.hotelImageUrl && hotel.hotelImageUrl.startsWith("http")
//     //               ? hotel.hotelImageUrl
//     //               : "/myimage.jpg"
//     //           }
//     //           alt="hotel"
//     //           className='rounded-lg w-full h-40 object-cover'
//     //           onError={(e) => {
//     //             e.target.src = "/myimage.jpg";
//     //           }}
//     //         />

//     //         <div className='my-3'>
//     //           <h2 className='font-semibold text-lg'>
//     //             {hotel?.HotelName}
//     //           </h2>

//     //           <p className='text-sm text-gray-500'>
//     //             📍 {hotel?.HotelAddress}
//     //           </p>

//     //           <p className='text-sm mt-1'>
//     //             💰 {hotel?.Price}
//     //           </p>

//     //           <p className='text-sm'>
//     //             ⭐ {hotel?.Rating}
//     //           </p>

//     //           <p className='text-xs text-gray-600 mt-1'>
//     //             {hotel?.descriptions}
//     //           </p>
//     //         </div>

//     //       </div>
//     //       </Link>

//     <HotelCardItem hotel ={hotel}/>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hotels;








import React from 'react';
import HotelCardItem from './HotelCardItem';

function Hotels({ trip }) {

  return (
    <div>
      <h2 className='font-bold text-xl mt-10'>
        Hotel Recommendation
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <HotelCardItem key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
