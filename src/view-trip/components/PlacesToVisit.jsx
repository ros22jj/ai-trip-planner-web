// import React from 'react'
// import PlaceCardItem from './PlaceCardItem'

// function PlacesToVisit({ trip }) {
//   return (
//     <div>
//       <h2 className='font-bold text-lg'>Places To Visit</h2>

//       <div>
//         {trip.tripData?.itinerary.map((item, index) => {
//           return (
//             <div key={index}>
//               <h2 className='font-medium text-lg'>{item.day}</h2>

//               {item.plan.map((place, index) => {
//                 return (
//                   <div key={index} className='my-3'>
//                     <h2 className='font-medium text-sm text-orange-600'>{place.TimeTravel}</h2>
                    
//                     <h2>{place.placeName}</h2>
//                     <PlaceCardItem /> 


                    
//                   </div>
//                 )
//               })}

//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default PlacesToVisit




// // import React from 'react'

// // function PlacesToVisit({ trip }) {
// //   return (
// //     <div>
// //       <h2 className='font-bold text-lg'>Places To Visit</h2>

// //       <div>
// //         {trip?.tripData?.itinerary?.map((item, index) => {
// //           return (
// //             <div key={index}>
// //               <h2 className='font-medium text-lg'>{item?.day}</h2>

// //               {Object.values(item?.plan || {}).map((place, idx) => {
// //                 console.log("PLACE OBJECT:", place);   // 👈 DEBUG LINE

// //                 return (
// //                   <div key={idx}>
// //                     <h2 className='font-medium text-sm text-orange-600'>
// //                       {place?.Time || place?.time || "No Time Found"}
// //                     </h2>
// //                     <h2>{place?.placeName}</h2>
// //                   </div>
// //                 )
// //               })}

// //             </div>
// //           )
// //         })}
// //       </div>
// //     </div>
// //   )
// // }

// // export default PlacesToVisit










import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className='font-bold text-lg'>Places To Visit</h2>

      <div>
        {trip?.tripData?.itinerary?.map((item, index) => {
          return (
            <div key={index} className='mt-5 grid grid-cols-2 gap-5 '>
              
              {/* Day Title */}
              <h2 className='font-medium text-lg mb-2'>
                {item?.day}
              </h2>

              {/* Places */}
              {item?.plan?.map((place, idx) => {
                return (
                  <div key={idx} className='my-3'>
                    
                    {/* Time */}
                    <h2 className='font-medium text-sm text-orange-600'>
                      {place?.TimeTravel}
                    </h2>

                    {/* Card */}
                    <PlaceCardItem place={place} />

                  </div>
                )
              })}

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlacesToVisit
