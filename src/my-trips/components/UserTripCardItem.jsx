// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'
// import React, { useState,useEffect } from 'react'

// function UserTripCardItem({trip}) {



//     const [photoUrl, setPhotoUrl] = useState()
    
//       useEffect(() => {
//         trip && GetPlacePhoto()
//       }, [trip])
    
//       const GetPlacePhoto = async () => {
    
//         const data = {
//           textQuery: trip?.userSelection?.location?.label
//         }
    
//         try {
//           const resp = await GetPlaceDetails(data)
    
//           const photoName =
//             resp?.data?.places?.[0]?.photos?.[0]?.name
    
//           if (photoName) {
//             const finalUrl =
//               PHOTO_REF_URL.replace('{NAME}', photoName)
    
//             setPhotoUrl(finalUrl)
//           }
    
//         } catch (error) {
//           console.log("Location photo error:", error)
//         }
//       }
//   return (
//     <div>
//       <img src={photoUrl?photoUrl: '/myimage.jpg'} 
      
      
//       className='object-cover rounded-xl' />
//       <div>
//         <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
//      <h2 className='text-sm  text-gray-500'>{trip?.userSelection.noOfDays} Days trip with {trip?.userSelection?.budget} Budget </h2>
//       </div>
//     </div>
//   )
// }

// export default UserTripCardItem










// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// function UserTripCardItem({ trip }) {

//   const [photoUrl, setPhotoUrl] = useState()

//   useEffect(() => {
//     trip && GetPlacePhoto()
//   }, [trip])

//   const GetPlacePhoto = async () => {

//     const data = {
//       textQuery: trip?.userSelection?.location?.label
//     }

//     try {
//       const resp = await GetPlaceDetails(data)

//       const photoName =
//         resp?.data?.places?.[0]?.photos?.[0]?.name

//       if (photoName) {
//         const finalUrl =
//           PHOTO_REF_URL.replace('{NAME}', photoName)

//         setPhotoUrl(finalUrl)
//       }

//     } catch (error) {
//       console.log("Location photo error:", error)
//     }
//   }

//   return (
//     <Link to={'/view-trip/' + trip?.id}>
//       <div>
//         <img
//           src={photoUrl ? photoUrl : '/myimage.jpg'}
//           className='object-cover rounded-xl'
//           alt="Trip"
//         />
//         <div>
//           <h2 className='font-bold text-lg'>
//             {trip?.userSelection?.location?.label}
//           </h2>
//           <h2 className='text-sm text-gray-500'>
//             {trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget
//           </h2>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default UserTripCardItem





import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function UserTripCardItem({ trip }) {

  const [photoUrl, setPhotoUrl] = useState()

  useEffect(() => {
    trip && GetPlacePhoto()
  }, [trip])

  const GetPlacePhoto = async () => {

    const data = {
      textQuery: trip?.userSelection?.location?.label
    }

    try {
      const resp = await GetPlaceDetails(data)

      const photoName =
        resp?.data?.places?.[0]?.photos?.[0]?.name

      if (photoName) {
        const finalUrl =
          PHOTO_REF_URL.replace('{NAME}', photoName)

        setPhotoUrl(finalUrl)
      }

    } catch (error) {
      console.log("Location photo error:", error)
    }
  }

  return (
    <Link to={'/view-trip/' + trip?.id}>
      <div className='cursor-pointer hover:scale-105 transition-all'>

        {/* ✅ Fixed Size Image */}
        <img
          src={photoUrl ? photoUrl : '/myimage.jpg'}
          className='w-full h-[220px] object-cover rounded-xl'
          alt="Trip"
        />

        <div className='mt-2'>
          <h2 className='font-bold text-lg'>
            {trip?.userSelection?.location?.label}
          </h2>
          <h2 className='text-sm text-gray-500'>
            {trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget
          </h2>
        </div>

      </div>
    </Link>
  )
}

export default UserTripCardItem
