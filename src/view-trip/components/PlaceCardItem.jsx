






// import React from 'react'

// function PlaceCardItem({ place }) {
//   return (
//     <div className='border rounded-xl p-3 mt-2 flex gap-5'>
//       <img 
//         src="/myimage.jpg" 
//         className="w-[130px] h-[130px] rounded-xl" 
//         alt="place"
//       />  

//       <div>
//         <h2 className='font-bold text-lg'>
//           {place?.placeName}
//         </h2>
//       </div>
//     </div>
//   )
// }

// export default PlaceCardItem





// import { Button } from '@/components/ui/button'
// import React from 'react'
// import { FaMapLocationDot } from "react-icons/fa6";
// import { Link } from 'react-router-dom';


// function PlaceCardItem({ place }) {
//   return (
//     <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.placeName + ',' + place?.PlaceAddress} target='_blank'>
//     <div className='border rounded-xl p-3 mt-2 flex hover:scale-105 transition-all cursor-pointer  hover :shadow-md    '>
//       <img 
//         src="/myimage.jpg" 
//         className="w-[130px] h-[130px] rounded-xl object-cover" 
//         alt="place"
//       />  

//       <div>
//         <h2 className='font-bold text-lg'>
//           {place?.placeName}
//         </h2>
//         <p className='text-sm text-gray-600 mt-2'>
//   {place?.PlaceDetails}
// </p>
// <h2 className='mt-2'> 🕰️ {place?.TimeTravel}</h2>
// <Button  size="sm" className="cursor-pointer"><FaMapLocationDot />
// </Button>
//       </div>
//     </div>
//     </Link>
//   )
// }

// export default PlaceCardItem









import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'

function PlaceCardItem({ place }) {

  const [photoUrl, setPhotoUrl] = useState()

  useEffect(() => {
    place && GetPlacePhoto()
  }, [place])

  const GetPlacePhoto = async () => {

    const data = {
      textQuery: place?.placeName + " " + place?.PlaceAddress
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
      console.log("Place photo error:", error)
    }
  }

  return (
    <Link
      to={
        'https://www.google.com/maps/search/?api=1&query=' +
        place?.placeName + ',' + place?.PlaceAddress
      }
      target='_blank'
    >
      <div className='border rounded-xl p-3 mt-2 flex hover:scale-105 transition-all cursor-pointer hover:shadow-md'>

        <img
          src={photoUrl || "/myimage.jpg"}
          className="w-[130px] h-[130px] rounded-xl object-cover"
          alt="place"
          onError={(e) => {
            e.target.src = "/myimage.jpg"
          }}
        />

        <div className='ml-4'>
          <h2 className='font-bold text-lg'>
            {place?.placeName}
          </h2>

          <p className='text-sm text-gray-600 mt-2'>
            {place?.PlaceDetails}
          </p>

          <h2 className='mt-2'>
            🕰️ {place?.TimeTravel}
          </h2>

          <Button size="sm" className="cursor-pointer mt-2">
            <FaMapLocationDot />
          </Button>

        </div>
      </div>
    </Link>
  )
}

export default PlaceCardItem
