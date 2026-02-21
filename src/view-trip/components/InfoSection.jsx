// import { Button } from '@/components/ui/button'
// import { GetPlaceDetails } from '@/service/GlobalApi';
// import React, { useEffect,useState } from 'react'
// import { IoIosSend } from "react-icons/io";


// const PHOTO_REF_URL='https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key='+import.meta.env.VITE_GOOGLE_PLACE_API_KEY
// function InfoSection({ trip }) {

//   const [photoUrl,setPhotoUrl]=useState();
//   useEffect(()=>
//   {
//     trip&& GetPlacePhoto();
//   },[trip])

//   const GetPlacePhoto=async ()=>
//   {

//     // const data={
//     //   "textQuery" : 'trip?.userSelection?.location?.label'
//     // }


//     const data = {
//   textQuery: trip?.userSelection?.location?.label
// }

//     const result=await GetPlaceDetails(data).then(resp=>
//     {
//       console.log(resp.data.places[0].photos[3].name);

//       const PhotoURL=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
//       setPhotoUrl(PhotoURL);
//     }
//     )
//   }
//   return (
//     <div>
//       <img src={photoUrl}/>

//       <div className='flex justify-between items-center'>
//       <div className="my-5bflex flex-col gap-2">

//         <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>



//         <div className='flex gap-5'>
//           <h2 className='p-1 px-3 bg-gray-200  rounded-full text-gray-500 text-xs md:text-md'>📅 {trip.userSelection?.noOfDays} Days</h2>
//  <h2 className='p-1 px-3 bg-gray-200  rounded-full text-gray-500 text-xs md:text-md'>💰{trip.userSelection?.budget} Budget</h2>

// <h2 className='p-1 px-3 bg-gray-200  rounded-full text-gray-500 text-xs md:text-md'> 🥂No. of Travellers : {trip.userSelection?.traveler}</h2>


//         </div>
//       </div>
//       <Button><IoIosSend/></Button>
//       </div>
//     </div>
//   )
// }

// export default InfoSection

















// import { Button } from '@/components/ui/button'
// import { GetPlaceDetails } from '@/service/GlobalApi';
// import React, { useEffect, useState } from 'react'
// import { IoIosSend } from "react-icons/io";

// const PHOTO_REF_URL =
//   'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=' +
//   import.meta.env.VITE_GOOGLE_PLACE_API_KEY

// function InfoSection({ trip }) {

//   const [photoUrl, setPhotoUrl] = useState();

//   useEffect(() => {
//     trip && GetPlacePhoto();
//   }, [trip])

//   const GetPlacePhoto = async () => {

//     const data = {
//       // ❌ removed quotes (this was your main bug)
//       textQuery: trip?.userSelection?.location?.label
//     }

//     const result = await GetPlaceDetails(data).then(resp => {

//       // ❌ removed hardcoded [3] (can crash if not enough photos)
//       const photoName = resp?.data?.places?.[0]?.photos?.[0]?.name;

//       if (photoName) {
//         const PhotoURL = PHOTO_REF_URL.replace('{NAME}', photoName)
//         setPhotoUrl(PhotoURL);
//       }

//     })
//   }

//   return (
//     <div>
//       {/* Added fallback so image doesn't break */}
//       <img src={photoUrl || '/myimage.jpg'} />

//       <div className='flex justify-between items-center'>
//         <div className="my-5bflex flex-col gap-2">

//           <h2 className='font-bold text-2xl'>
//             {trip?.userSelection?.location?.label}
//           </h2>

//           <div className='flex gap-5'>
//             <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
//               📅 {trip.userSelection?.noOfDays} Days
//             </h2>

//             <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
//               💰{trip.userSelection?.budget} Budget
//             </h2>

//             <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
//               🥂No. of Travellers : {trip.userSelection?.traveler}
//             </h2>
//           </div>
//         </div>

//         <Button>
//           <IoIosSend />
//         </Button>

//       </div>
//     </div>
//   )
// }

// export default InfoSection




// import { Button } from '@/components/ui/button'
// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
// import React, { useEffect, useState } from 'react'
// import { IoIosSend } from "react-icons/io";

// function InfoSection({ trip }) {

//   const [photoUrl, setPhotoUrl] = useState();

//   useEffect(() => {
//     trip && GetPlacePhoto();
//   }, [trip])

//   const GetPlacePhoto = async () => {

//     const data = {
//       textQuery: trip?.userSelection?.location?.label
//     }

//     await GetPlaceDetails(data).then(resp => {

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
//     <div>
//       <img
//         src={photoUrl || '/myimage.jpg'}
//         alt="location"
//         className="w-full h-[350px] object-cover rounded-xl"
//       />

//       <div className='flex justify-between items-center'>
//         <div className="flex flex-col gap-2">

//           <h2 className='font-bold text-2xl'>
//             {trip?.userSelection?.location?.label}
//           </h2>

//           <div className='flex gap-5'>
//             <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
//               📅 {trip.userSelection?.noOfDays} Days
//             </h2>

//             <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
//               💰{trip.userSelection?.budget} Budget
//             </h2>

//             <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
//               🥂No. of Travellers : {trip.userSelection?.traveler}
//             </h2>
//           </div>
//         </div>

//         <Button>
//           <IoIosSend />
//         </Button>

//       </div>
//     </div>
//   )
// }

// export default InfoSection









import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io"

function InfoSection({ trip }) {

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
    <div>

      <img
        src={photoUrl || "/myimage.jpg"}
        alt="location"
        className="w-full h-[350px] object-cover rounded-xl"
      />

      <div className='flex justify-between items-center'>
        <div className="flex flex-col gap-2">

          <h2 className='font-bold text-2xl'>
            {trip?.userSelection?.location?.label}
          </h2>

          <div className='flex gap-5'>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
              📅 {trip?.userSelection?.noOfDays} Days
            </h2>

            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
              💰 {trip?.userSelection?.budget} Budget
            </h2>

            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
              🥂 No. of Travellers : {trip?.userSelection?.traveler}
            </h2>
          </div>
        </div>

        <Button>
          <IoIosSend />
        </Button>

      </div>
    </div>
  )
}

export default InfoSection
