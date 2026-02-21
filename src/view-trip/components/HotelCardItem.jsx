// import React from 'react'
// import { Link } from 'react-router-dom';
// import{useState, useEffect} from 'react';
// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';




// function HotelCardItem({ hotel }) {



//      const [photoUrl, setPhotoUrl] = useState();
    
//       useEffect(() => {
//         hotel && GetPlacePhoto();
//       }, [hotel])
    
//       const GetPlacePhoto = async () => {
    
//         const data = {
//           // ❌ removed quotes (this was your main bug)
//           textQuery: hotel?.HotelName   
//         }
    
//         const result = await GetPlaceDetails(data).then(resp => {
    
//           // ❌ removed hardcoded [3] (can crash if not enough photos)
//           const photoName = resp?.data?.places?.[0]?.photos?.[0]?.name;
    
//           if (photoName) {
//             const PhotoURL = PHOTO_REF_URL.replace('{NAME}', photoName)
//             setPhotoUrl(PhotoURL);
//           }
    
//         })
//       }
          



//   return (
//    <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.HotelName + ',' + hotel?.HotelAddress} target='_blank' >   
//           <div
//             key={index}
//             className='border rounded-lg p-3 hover:scale-105 transition-all cursor-pointer'
//           >

//             <img
//               src={
//                 hotel?.hotelImageUrl && hotel.hotelImageUrl.startsWith("http")
//                   ? hotel.hotelImageUrl
//                   : {photoUrl}
//               }
//               alt="hotel"
//               className='rounded-lg w-full h-40 object-cover'
//               onError={(e) => {
//                 e.target.src = "/myimage.jpg";
//               }}
//             />

//             <div className='my-3'>
//               <h2 className='font-semibold text-lg'>
//                 {hotel?.HotelName}
//               </h2>

//               <p className='text-sm text-gray-500'>
//                 📍 {hotel?.HotelAddress}
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
//           </Link>
//   )
// }

// export default HotelCardItem









// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';
// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

// function HotelCardItem({ hotel }) {

//   const [photoUrl, setPhotoUrl] = useState();

//   useEffect(() => {
//     hotel && GetPlacePhoto();
//   }, [hotel])

//   const GetPlacePhoto = async () => {

//     const data = {
//       textQuery: hotel?.HotelName
//     }

//     await GetPlaceDetails(data).then(resp => {

//         console.log("Google Response:", resp.data);

//       const photoName =
//         resp?.data?.places?.[0]?.photos?.[0]?.name;
    

//       if (photoName) {
//         const PhotoURL =
//           PHOTO_REF_URL.replace('{NAME}', photoName)
//         setPhotoUrl(PhotoURL);
//       }

//     })
//   }

//   return (
//     <Link
//       to={'https://www.google.com/maps/search/?api=1&query=' +
//         hotel?.HotelName + ',' + hotel?.HotelAddress}
//       target='_blank'
//     >
//       <div className='border rounded-lg p-3 hover:scale-105 transition-all cursor-pointer'>

//         <img
//           src={
//             hotel?.hotelImageUrl && hotel.hotelImageUrl.startsWith("http")
//               ? hotel.hotelImageUrl
//               : photoUrl || "/myimage.jpg"
//           }
//           alt="hotel"
//           className='rounded-lg w-full h-40 object-cover'
//           onError={(e) => {
//             e.target.src = "/myimage.jpg";
//           }}
//         />

//         <div className='my-3'>
//           <h2 className='font-semibold text-lg'>
//             {hotel?.HotelName}
//           </h2>

//           <p className='text-sm text-gray-500'>
//             📍 {hotel?.HotelAddress}
//           </p>

//           <p className='text-sm mt-1'>
//             💰 {hotel?.Price}
//           </p>

//           <p className='text-sm'>
//             ⭐ {hotel?.Rating}
//           </p>

//           <p className='text-xs text-gray-600 mt-1'>
//             {hotel?.descriptions}
//           </p>
//         </div>

//       </div>
//     </Link>
//   )
// }

// export default HotelCardItem





import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'

function HotelCardItem({ hotel }) {

  const [photoUrl, setPhotoUrl] = useState()

  useEffect(() => {
    hotel && GetPlacePhoto()
  }, [hotel])

  const GetPlacePhoto = async () => {

    const data = {
      textQuery: hotel?.HotelName + " " + hotel?.HotelAddress
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
      console.log("Photo fetch error:", error)
    }
  }

  return (
    <Link
      to={
        'https://www.google.com/maps/search/?api=1&query=' +
        hotel?.HotelName + ',' + hotel?.HotelAddress
      }
      target="_blank"
    >
      <div className='border rounded-lg p-3 hover:scale-105 transition-all cursor-pointer'>

        <img
          src={photoUrl || "/myimage.jpg"}
          alt="hotel"
          className='rounded-lg w-full h-40 object-cover'
          onError={(e) => {
            e.target.src = "/myimage.jpg"
          }}
        />

        <div className='my-3'>
          <h2 className='font-semibold text-lg'>
            {hotel?.HotelName}
          </h2>

          <p className='text-sm text-gray-500'>
            📍 {hotel?.HotelAddress}
          </p>

          <p className='text-sm mt-1'>
            💰 {hotel?.Price}
          </p>

          <p className='text-sm'>
            ⭐ {hotel?.Rating}
          </p>

          <p className='text-xs text-gray-600 mt-1'>
            {hotel?.descriptions}
          </p>
        </div>

      </div>
    </Link>
  )
}

export default HotelCardItem
