// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
// // import React, { useState } from 'react'
// // import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

// // function CreateTrip() {

// //     const [place,setPlace]=useState();
// //   return (
// //     <div className='sm :px-10 md :px-32 lg:px-56 xl:px-10 px-5 mt-10'>
// //       <h2 className='font-bold text-3xl'>Tell Us Your Travel Preferences !</h2>
// //       <p className='mt-3 text -gray-500 text-xl'>Just provide some basic information, 
// //     and our trip planner will generate a customized itnerary based on your preferences.</p>
// //     <div className='mt-20 '>
// //         <div className='mt-20 flex flex-col gap-10'>
// //             <h2 className='text-xl my-3 font-medium '>
// //                 What is destination of  choice ?   
// //             </h2>
// //             <GooglePlacesAutocomplete
// //             apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
// //             selectProps={{
// //                 place,
// //                 onChange :(v)=>{setPlace(v);console.log(v)
// //                 }            }} 
                
// //                 />
// //         </div>
// //         <div>
// //       <h2 className='font-bold text-3xl'>How many days ypou are planning  for your trip  !</h2>
// //       <Input placeholder={'Ex-3'} type ="number"/>

// //         </div>
// //     </div>

// //     <div>
// //  <h2 className='text-xl my-3 font-medium '>What is your budget ?  </h2>
// //  <div className='grid grid-cols-3 gap-5 mt-5 '>
// //     {SelectBudgetOptions.map((item, index) => (
// //   <div key={index} className='p-4 border rounded-lg hover:shadow-md cursor-pointer'>
// //     <h2 className='text-4xl'>{item.icon}</h2>
// //     <h2 className='font-bold text-lg'>{item.title}</h2>
// //     <h2 className='text-sm text-gray-500'>{item.desc}</h2>
// //   </div>
// // ))}


// //  </div>

// //     </div>




// //      <div>
// //  <h2 className='text-xl my-3 font-medium '>What do you plan on travelling with on your next adventure ?  </h2>
// //  <div className='grid grid-cols-3 gap-5 mt-5 '>
// //     {SelectTravelesList.map((item, index) => (
// //   <div key={index} className='p-4 border rounded-lg hover:shadow-md cursor-pointer'>
// //     <h2 className='text-4xl'>{item.icon}</h2>
// //     <h2 className='font-bold text-lg'>{item.title}</h2>
// //     <h2 className='text-sm text-gray-500'>{item.desc}</h2>
// //   </div>
// // ))}


// //  </div>

// //     </div>





// //     </div>


// // <Button>Generate Trip </Button>



// //   )
// // }   

// // export default CreateTrip












// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
// // import React, { useEffect, useState } from 'react';
// // import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

// // function CreateTrip() {
// //   const [place, setPlace] = useState();
// //   const [formData,setFormData]=useState([]);

// //   const handleInputChangge=(name,value)
// //   {
// //     setFormData({
// //         ...formData,
// //         [name]:value
// //     })

// //   }
// //   useEffect(()=>
// // {
// //     console.log(formData);


// // },[formData])

// //   return (
// //     /* Removed spaces in responsive prefixes (sm: md: lg:) */
// //     <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
// //       <h2 className='font-bold text-3xl'>Tell Us Your Travel Preferences !</h2>
// //       {/* Fixed 'text-gray-500' space */}
// //       <p className='mt-3 text-gray-500 text-xl'>
// //         Just provide some basic information, and our trip
// //          planner will generate a customized itinerary based on your preferences 🌴 🏕️
// //       </p>

// //       <div className='mt-20'>
// //         <div className='flex flex-col gap-10'>
// //           <h2 className='text-xl my-3 font-medium '>
// //             What is destination of choice ?
// //           </h2>
// //           <GooglePlacesAutocomplete
// //             apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
// //             selectProps={{
// //               place,
// //               onChange: (v) => {
// //                 setPlace(v);
// //                 handleInputChangge('location',v)
// //               },
// //             }}
// //           />
// //         </div>

// //         <div className='mt-10'>
// //           <h2 className='font-bold text-3xl my-3'>How many days are you planning for your trip!</h2>
// //           <Input placeholder={'Ex-3'} type="number" />
// //         </div>
// //       </div>

// //       <div>
// //         <h2 className='text-xl my-3 font-medium '>What is your budget ?</h2>
// //         <div className='grid grid-cols-3 gap-5 mt-5 '>
// //           {SelectBudgetOptions.map((item, index) => (
// //             <div key={index} className='p-4 border rounded-lg hover:shadow-md cursor-pointer'>
// //               <h2 className='text-4xl'>{item.icon}</h2>
// //               <h2 className='font-bold text-lg'>{item.title}</h2>
// //               <h2 className='text-sm text-gray-500'>{item.desc}</h2>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <div className='mt-10'>
// //         <h2 className='text-xl my-3 font-medium '>What do you plan on travelling with on your next adventure ?</h2>
// //         <div className='grid grid-cols-3 gap-5 mt-5 '>
// //           {SelectTravelesList.map((item, index) => (
// //             <div key={index} className='p-4 border rounded-lg hover:shadow-md cursor-pointer'>
// //               <h2 className='text-4xl'>{item.icon}</h2>
// //               <h2 className='font-bold text-lg'>{item.title}</h2>
// //               <h2 className='text-sm text-gray-500'>{item.desc}</h2>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Moved Button inside the main div and added spacing */}
// //       <div className='my-10 flex justify-end'>
// //          <Button>Generate Trip</Button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CreateTrip;













































































































// important code 


// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
// import React, { useEffect, useState } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import { toast } from 'sonner';

// function CreateTrip() {
//   const [place, setPlace] = useState();
//   // Fixed: Initialized as an object {} instead of an array []
//   const [formData, setFormData] = useState({});

//   // Fixed: Added the => arrow for correct function syntax
//   const handleInputChangge = (name, value) => {

//     // if(name=='noOfDays' && value>5)
//     // {
//     //     console.log("Please enter trip days less than 5 ");
//     //     return ;

//     // }
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   useEffect(() => {
//     console.log(formData);
//   }, [formData]);



//   const onGenerateTrip=()=>
//   {
//     if(formData?.noOfDays>5 && !formData?.location || ! formData?.budget || !formData?.traveler )
//     {
//       toast("Please fill all details");
//         return;
//     }
//     // console.log(formData);

//     const FINAL_PROMPT=AI_PROMPT
//     .replace('{location}',formData?.location.label)
//     .replace('{totalDays}',formData?.noOfDays)
//     .replace('{traveler}',formData?.traveler)
//     .replace('{budget}',formData?.budget);

//     console.log(FINAL_PROMPT)
//   }
//   return (
//     <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
//       <h2 className='font-bold text-3xl'>Tell Us Your Travel Preferences !</h2>
//       <p className='mt-3 text-gray-500 text-xl'>
//         Just provide some basic information, and our trip
//         planner will generate a customized itinerary based on your preferences 🌴 🏕️
//       </p>

//       <div className='mt-20'>
//         <div className='flex flex-col gap-10'>
//           <h2 className='text-xl my-3 font-medium '>
//             What is destination of choice ?
//           </h2>
//           <GooglePlacesAutocomplete
//             apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
//             selectProps={{
//               place,
//               onChange: (v) => {
//                 setPlace(v);
//                 handleInputChangge('location', v);
//               },
//             }}
//           />
//         </div>

//         <div className='mt-10'>
//           <h2 className='font-bold text-3xl my-3'>How many days are you planning for your trip!</h2>
//           <Input 
//             placeholder={'Ex-3'} 
//             type="number" 
//             onChange={(e) => handleInputChangge('noOfDays', e.target.value)}
//           />
//         </div>
//       </div>

//       <div>
//         <h2 className='text-xl my-3 font-medium '>What is your budget ?</h2>
//         <div className='grid grid-cols-3 gap-5 mt-5 '>
//           {SelectBudgetOptions.map((item, index) => (
//             <div 
//               key={index} 
//               onClick={() => handleInputChangge('budget', item.title)}
//               className={`p-4 border rounded-lg hover:shadow-md cursor-pointer 
//               ${formData?.budget==item.title  && 'shadow-lg border-black ' }`}
//             >
//               <h2 className='text-4xl'>{item.icon}</h2>
//               <h2 className='font-bold text-lg'>{item.title}</h2>
//               <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className='mt-10'>
//         <h2 className='text-xl my-3 font-medium '>What do you plan on travelling with on your next adventure ?</h2>
//         <div className='grid grid-cols-3 gap-5 mt-5 '>
//           {SelectTravelesList.map((item, index) => (
//             <div 
//               key={index} 
//               onClick={() => handleInputChangge('traveler', item.people)}
//               className={`p-4 border rounded-lg hover:shadow-md cursor-pointer
//               ${formData?.traveler==item.people  && 'shadow-lg border-black ' }`}
//             >
//               <h2 className='text-4xl'>{item.icon}</h2>
//               <h2 className='font-bold text-lg'>{item.title}</h2>
//               <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className='my-10 flex justify-end'>
//         <Button onClick={onGenerateTrip}>Generate Trip</Button>
//       </div>
//     </div>
//   );
// }

// export default CreateTrip;













// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
// import React, { useEffect, useState } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import { toast } from 'sonner';
// import { chatSession } from '@/service/AIModal'; // Imported the AI session

// function CreateTrip() {
//   const [place, setPlace] = useState();
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false); // Added loading state for the button

//   const handleInputChangge = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   useEffect(() => {
//     console.log(formData);
//   }, [formData]);

//   const onGenerateTrip = async () => {
//     // 1. Validation check
//     if (!formData?.location || !formData?.budget || !formData?.traveler || !formData?.noOfDays) {
//       toast("Please fill all details!");
//       return;
//     }

//     if (formData?.noOfDays > 5) {
//       toast("Please enter trip days less than or equal to 5");
//       return;
//     }

//     setLoading(true); // Start loading
//     toast("Generating your dream trip... ✈️");

//     // 2. Prepare the Prompt
//     const FINAL_PROMPT = AI_PROMPT
//       .replace('{location}', formData?.location.label)
//       .replace('{noOfDays}', formData?.noOfDays)
//       .replace('{traveler}', formData?.traveler)
//       .replace('{budget}', formData?.budget);

//     console.log("Final Prompt sent to AI:", FINAL_PROMPT);

//     try {
//       // 3. Send Prompt to Gemini AI
//       const result = await chatSession.sendMessage(FINAL_PROMPT);
      
//       // 4. Get the result
//       const tripData = result.response.text();
//       console.log("AI RESPONSE:", JSON.parse(tripData));
      
//       toast.success("Trip Generated Successfully!");

//       // 5. Store in LocalStorage
//       localStorage.setItem('trip', tripData);
      
//       // Optional: Navigate to the result page here
//       // navigate('/view-trip');

//     } catch (error) {
//       console.error("Error generating trip:", error);
//       toast.error("AI is currently busy. Please try again.");
//     } finally {
//       setLoading(false); // Stop loading regardless of success or fail
//     }
//   }

//   return (
//     <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
//       <h2 className='font-bold text-3xl'>Tell Us Your Travel Preferences !</h2>
//       <p className='mt-3 text-gray-500 text-xl'>
//         Just provide some basic information, and our trip
//         planner will generate a customized itinerary based on your preferences 🌴 🏕️
//       </p>

//       <div className='mt-20'>
//         <div className='flex flex-col gap-10'>
//           <h2 className='text-xl my-3 font-medium '>
//             What is destination of choice ?
//           </h2>
//           <GooglePlacesAutocomplete
//             apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
//             selectProps={{
//               place,
//               onChange: (v) => {
//                 setPlace(v);
//                 handleInputChangge('location', v);
//               },
//             }}
//           />
//         </div>

//         <div className='mt-10'>
//           <h2 className='font-bold text-3xl my-3'>How many days are you planning for your trip!</h2>
//           <Input 
//             placeholder={'Ex-3'} 
//             type="number" 
//             onChange={(e) => handleInputChangge('noOfDays', e.target.value)}
//           />
//         </div>
//       </div>

//       <div>
//         <h2 className='text-xl my-3 font-medium '>What is your budget ?</h2>
//         <div className='grid grid-cols-3 gap-5 mt-5 '>
//           {SelectBudgetOptions.map((item, index) => (
//             <div 
//               key={index} 
//               onClick={() => handleInputChangge('budget', item.title)}
//               className={`p-4 border rounded-lg hover:shadow-md cursor-pointer 
//               ${formData?.budget == item.title && 'shadow-lg border-black'}`}
//             >
//               <h2 className='text-4xl'>{item.icon}</h2>
//               <h2 className='font-bold text-lg'>{item.title}</h2>
//               <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className='mt-10'>
//         <h2 className='text-xl my-3 font-medium '>What do you plan on travelling with on your next adventure ?</h2>
//         <div className='grid grid-cols-3 gap-5 mt-5 '>
//           {SelectTravelesList.map((item, index) => (
//             <div 
//               key={index} 
//               onClick={() => handleInputChangge('traveler', item.people)}
//               className={`p-4 border rounded-lg hover:shadow-md cursor-pointer
//               ${formData?.traveler == item.people && 'shadow-lg border-black'}`}
//             >
//               <h2 className='text-4xl'>{item.icon}</h2>
//               <h2 className='font-bold text-lg'>{item.title}</h2>
//               <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className='my-10 flex justify-end'>
//         <Button disabled={loading} onClick={onGenerateTrip}>
//             {loading ? "Generating..." : "Generate Trip"}
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default CreateTrip;


































// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
// import React, { useEffect, useState } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import { toast } from 'sonner';
// import { chatSession, AI_PROMPT } from '@/service/AIModal'; // Import both from AIModal
// import { AiOutlineLoading3Quarters } from "react-icons/ai";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
// } from "@/components/ui/dialog"

// import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';


// function CreateTrip() {
//   const [place, setPlace] = useState();
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const[openDailog,setOpenDialog] =useState(false);

//   const handleInputChangge = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   useEffect(() => {
//     console.log("Current Form Data:", formData);
//   }, [formData]);


//   const login = useGoogleLogin(
//     {
//       onSuccess :(codeResp)=>console.log(codeResp),
//       onError:(error)=>console.log(error),
//     }
//   )
//   const onGenerateTrip = async () => {

// const user=localStorage.getItem('user');
// if(!user)
// {
//   setOpenDialog(true);
//   return ;
// }


//     // 1. Validation check
//     if (!formData?.location || !formData?.budget || !formData?.traveler || !formData?.noOfDays) {
//       toast.error("Please fill all details!");
//       return;
//     }

//     if (formData?.noOfDays > 5) {
//       toast.error("Please enter trip days less than or equal to 5");
//       return;
//     }

//     setLoading(true);
//     toast("Generating your dream trip... ✈️");

//     // 2. Prepare the Prompt by replacing placeholders
//     const FINAL_PROMPT = AI_PROMPT
//       .replace('{location}', formData?.location.label)
//       .replace('{noOfDays}', formData?.noOfDays)
//       .replace('{traveler}', formData?.traveler)
//       .replace('{budget}', formData?.budget);

//     console.log("Final Prompt sent to AI:", FINAL_PROMPT);

//     try {
//       // 3. Send Prompt to Gemini AI via the chatSession
//       const result = await chatSession.sendMessage(FINAL_PROMPT);
      
//       // 4. Extract and parse the response
//       const tripData = result.response.text();
//       console.log("AI RESPONSE (JSON):", JSON.parse(tripData));
      
//       toast.success("Trip Generated Successfully!");

//       // 5. Store in LocalStorage so you can show it on a results page
//       localStorage.setItem('trip', tripData);
      
//       // Note: You can add navigation here using useNavigate() from react-router-dom
//       // navigate('/view-trip/' + tripId);

//     } catch (error) {
//       console.error("Error generating trip:", error);
//       toast.error("AI is currently busy or there was a network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   const GetUserProfile=(tokenInfo)=>
//   {
//     axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo.access_token}`)
//     headers:
//     {
//       Authorization: `Bearer ${tokenInfo?.access_token}`,
//       Accept : 'Application/json'
//     }
//   }).then((resp)=>
//   {
//     console.log(resp);
//   })
//   }
//   return (
//     <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
//       <h2 className='font-bold text-3xl'>Tell Us Your Travel Preferences !</h2>
//       <p className='mt-3 text-gray-500 text-xl'>
//         Just provide some basic information, and our trip
//         planner will generate a customized itinerary based on your preferences 🌴 🏕️
//       </p>

//       <div className='mt-20 flex flex-col gap-10'>
//         {/* Destination Section */}
//         <div>
//           <h2 className='text-xl my-3 font-medium '>
//             What is destination of choice ?
//           </h2>
//           <GooglePlacesAutocomplete
//             apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
//             selectProps={{
//               place,
//               onChange: (v) => {
//                 setPlace(v);
//                 handleInputChangge('location', v);
//               },
//             }}
//           />
//         </div>

//         {/* Duration Section */}
//         <div>
//           <h2 className='text-xl my-3 font-medium'>How many days are you planning for your trip?</h2>
//           <Input 
//             placeholder={'Ex-3'} 
//             type="number" 
//             onChange={(e) => handleInputChangge('noOfDays', e.target.value)}
//           />
//         </div>

//         {/* Budget Section */}
//         <div>
//           <h2 className='text-xl my-3 font-medium '>What is your budget?</h2>
//           <div className='grid grid-cols-3 gap-5 mt-5 '>
//             {SelectBudgetOptions.map((item, index) => (
//               <div 
//                 key={index} 
//                 onClick={() => handleInputChangge('budget', item.title)}
//                 className={`p-4 border rounded-lg hover:shadow-md cursor-pointer 
//                 ${formData?.budget === item.title && 'shadow-lg border-black bg-gray-50'}`}
//               >
//                 <h2 className='text-4xl'>{item.icon}</h2>
//                 <h2 className='font-bold text-lg'>{item.title}</h2>
//                 <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Travelers Section */}
//         <div>
//           <h2 className='text-xl my-3 font-medium '>Who are you traveling with?</h2>
//           <div className='grid grid-cols-3 gap-5 mt-5 '>
//             {SelectTravelesList.map((item, index) => (
//               <div 
//                 key={index} 
//                 onClick={() => handleInputChangge('traveler', item.people)}
//                 className={`p-4 border rounded-lg hover:shadow-md cursor-pointer
//                 ${formData?.traveler === item.people && 'shadow-lg border-black bg-gray-50'}`}
//               >
//                 <h2 className='text-4xl'>{item.icon}</h2>
//                 <h2 className='font-bold text-lg'>{item.title}</h2>
//                 <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className='my-10 flex justify-end'>
//         <Button 
//           disabled={loading} 
//           onClick={onGenerateTrip}
//           className="flex gap-2 items-center"
//         >
//             {loading ? 
//               <AiOutlineLoading3Quarters className='h-5 w-5 animate-spin' /> 
//               : 'Generate Trip'
//             }
//         </Button>
//       </div>


//       <Dialog open={openDailog}>
//   <DialogContent>
//     <DialogHeader>
//       <DialogDescription>
//         <img src="/logo.svg" />
//         <h2 className='font-bold text-lg mt-7 '>Sign In With Google </h2>
//         <p>Sign In to the App with Google Authentication Securely </p>
//         <Button 
//         onClick={login}
        
//         className="w-full mt-5 flex gap-4 items-center"> 
//           <FcGoogle className='h-7 w-7'/>
// Sign In with Google</Button>
//       </DialogDescription>
//     </DialogHeader>
//   </DialogContent>
// </Dialog>




//     </div>
//   );
// }

// export default CreateTrip;


























// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
// import React, { useEffect, useState } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import { toast } from 'sonner';
// import { chatSession, AI_PROMPT } from '@/service/AIModal';
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
// } from "@/components/ui/dialog"
// import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import { doc, setDoc } from 'firebase/firestore';
// import { db } from '@/service/firebaseConfig';

// function CreateTrip() {
//   const [place, setPlace] = useState();
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [openDailog, setOpenDialog] = useState(false);
//   const[loading,setLoading]=useState(false);


//   const handleInputChangge = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   useEffect(() => {
//     console.log("Current Form Data:", formData);
//   }, [formData]);

//   const login = useGoogleLogin({
//     onSuccess: (codeResp) => GetUserProfile(codeResp),
//     onError: (error) => console.log(error),
//   });

//   const onGenerateTrip = async () => {
//     const user = localStorage.getItem('user');
//     if (!user) {
//       setOpenDialog(true);
//       return;
//     }

//     if (!formData?.location || !formData?.budget || !formData?.traveler || !formData?.noOfDays) {
//       toast.error("Please fill all details!");
//       return;
//     }
//     setLoading(true);

//     if (formData?.noOfDays > 5) {
//       toast.error("Please enter trip days less than or equal to 5");
//       return;
//     }

//     setLoading(true);
//     toast("Generating your dream trip... ✈️");

//     const FINAL_PROMPT = AI_PROMPT
//       .replace('{location}', formData?.location.label)
//       .replace('{noOfDays}', formData?.noOfDays)
//       .replace('{traveler}', formData?.traveler)
//       .replace('{budget}', formData?.budget);

//     // console.log("Final Prompt sent to AI:", FINAL_PROMPT);



//     try {
//       const result = await chatSession.sendMessage(FINAL_PROMPT);
//       const tripData = result.response.text();
//       console.log("AI RESPONSE (JSON):", JSON.parse(tripData));
      
//       toast.success("Trip Generated Successfully!");
//       localStorage.setItem('trip', tripData);
      
//       // Optional: Navigate to result page
//       // navigate('/view-trip');

//     } catch (error) {
//       console.error("Error generating trip:", error);
//       toast.error("AI is currently busy. Please try again.");
//     } finally {
//       setLoading(false);
//     }

//     SaveAiTrip(result?.response?.text());
//   };


//   const SaveAiTrip=async(tripData)=>
//   {

//     // Add a new document in collection "AITrips"
//     const user=JSON.parse(localStorage.getItem('user'));
//     const docId=Date.now().toString();
// await setDoc(doc(db, "AITrips", docId), {
//   userSelection : formData,
//   tripData: tripData,
//   userEmail:user?.email ,
//   id:docId
  
// });


//   }

//   const GetUserProfile = (tokenInfo) => {
//     axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
//       headers: {
//         Authorization: `Bearer ${tokenInfo?.access_token}`,
//         Accept: 'Application/json'
//       }
//     }).then((resp) => {
//       console.log(resp);
//       localStorage.setItem('user', JSON.stringify(resp.data));
//       setOpenDialog(false);
//       onGenerateTrip();
//     }).catch((err) => {
//       console.error("Error fetching user profile:", err);
//     });
//   };

//   return (
//     <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
//       <h2 className='font-bold text-3xl'>Tell Us Your Travel Preferences !</h2>
//       <p className='mt-3 text-gray-500 text-xl'>
//         Just provide some basic information, and our trip
//         planner will generate a customized itinerary based on your preferences 🌴 🏕️
//       </p>

//       <div className='mt-20 flex flex-col gap-10'>
//         <div>
//           <h2 className='text-xl my-3 font-medium '>
//             What is destination of choice ?
//           </h2>
//           <GooglePlacesAutocomplete
//             apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
//             selectProps={{
//               place,
//               onChange: (v) => {
//                 setPlace(v);
//                 handleInputChangge('location', v);
//               },
//             }}
//           />
//         </div>

//         <div>
//           <h2 className='text-xl my-3 font-medium'>How many days are you planning for your trip?</h2>
//           <Input 
//             placeholder={'Ex-3'} 
//             type="number" 
//             onChange={(e) => handleInputChangge('noOfDays', e.target.value)}
//           />
//         </div>

//         <div>
//           <h2 className='text-xl my-3 font-medium '>What is your budget?</h2>
//           <div className='grid grid-cols-3 gap-5 mt-5 '>
//             {SelectBudgetOptions.map((item, index) => (
//               <div 
//                 key={index} 
//                 onClick={() => handleInputChangge('budget', item.title)}
//                 className={`p-4 border rounded-lg hover:shadow-md cursor-pointer 
//                 ${formData?.budget === item.title && 'shadow-lg border-black bg-gray-50'}`}
//               >
//                 <h2 className='text-4xl'>{item.icon}</h2>
//                 <h2 className='font-bold text-lg'>{item.title}</h2>
//                 <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h2 className='text-xl my-3 font-medium '>Who are you traveling with?</h2>
//           <div className='grid grid-cols-3 gap-5 mt-5 '>
//             {SelectTravelesList.map((item, index) => (
//               <div 
//                 key={index} 
//                 onClick={() => handleInputChangge('traveler', item.people)}
//                 className={`p-4 border rounded-lg hover:shadow-md cursor-pointer
//                 ${formData?.traveler === item.people && 'shadow-lg border-black bg-gray-50'}`}
//               >
//                 <h2 className='text-4xl'>{item.icon}</h2>
//                 <h2 className='font-bold text-lg'>{item.title}</h2>
//                 <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className='my-10 flex justify-end'>
//         <Button 
//           disabled={loading} 
//           onClick={onGenerateTrip}
//           className="flex gap-2 items-center"
//         >
//           {loading ? 
//             <AiOutlineLoading3Quarters className='h-5 w-5 animate-spin' /> 
//             : 'Generate Trip'
//           }
//         </Button>
//       </div>

//       <Dialog open={openDailog} onOpenChange={setOpenDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogDescription>
//               <img src="/logo.svg" alt="Logo" className='w-12 h-12' />
//               <h2 className='font-bold text-lg mt-7 '>Sign In With Google </h2>
//               <p>Sign In to the App with Google Authentication Securely </p>
//               <Button 
//                 onClick={login}
//                 className="w-full mt-5 flex gap-4 items-center"
//               > 
//                 <FcGoogle className='h-7 w-7'/>
//                 Sign In with Google
//               </Button>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


// export default CreateTrip;



















// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
// import React, { useEffect, useState } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import { toast } from 'sonner';
// import { chatSession, AI_PROMPT } from '@/service/AIModal';
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
// } from "@/components/ui/dialog"
// import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import { doc, setDoc } from 'firebase/firestore';
// import { db } from '@/service/firebaseConfig';

// function CreateTrip() {

//   const [place, setPlace] = useState();
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);   // ✅ removed duplicate
//   const [openDialog, setOpenDialog] = useState(false); // ✅ fixed typo

//   const handleInputChangge = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   useEffect(() => {
//     console.log("Current Form Data:", formData);
//   }, [formData]);

//   const login = useGoogleLogin({
//     onSuccess: (codeResp) => GetUserProfile(codeResp),
//     onError: (error) => console.log(error),
//   });

//   const onGenerateTrip = async () => {

//     const user = localStorage.getItem('user');

//     if (!user) {
//       setOpenDialog(true);
//       return;
//     }

//     if (!formData?.location || !formData?.budget || !formData?.traveler || !formData?.noOfDays) {
//       toast.error("Please fill all details!");
//       return;
//     }

//     if (formData?.noOfDays > 5) {
//       toast.error("Please enter trip days less than or equal to 5");
//       return;
//     }

//     setLoading(true);
//     toast("Generating your dream trip... ✈️");

//     const FINAL_PROMPT = AI_PROMPT
//       .replace('{location}', formData?.location.label)
//       .replace('{noOfDays}', formData?.noOfDays)
//       .replace('{traveler}', formData?.traveler)
//       .replace('{budget}', formData?.budget);

//     try {
//       const result = await chatSession.sendMessage(FINAL_PROMPT);
//       const tripData = await result.response.text();

//       console.log("AI RESPONSE (JSON):", JSON.parse(tripData));

//       toast.success("Trip Generated Successfully!");
//       localStorage.setItem('trip', tripData);

//       await SaveAiTrip(tripData);   // ✅ moved inside try

//     } catch (error) {
//       console.error("Error generating trip:", error);
//       toast.error("AI is currently busy. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const SaveAiTrip = async (tripData) => 
//     {
//       setLoading(true);

//     const user = JSON.parse(localStorage.getItem('user'));
//     const docId = Date.now().toString();

//     await setDoc(doc(db, "AITrips", docId), {
//       userSelection: formData,
//       tripData: tripData,
//       userEmail: user?.email,
//       id: docId
//     });
//   }

//   const GetUserProfile = (tokenInfo) => {
//     axios.get(
//       `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
//       {
//         headers: {
//           Authorization: `Bearer ${tokenInfo?.access_token}`,
//           Accept: 'Application/json'
//         }
//       }
//     )
//       .then((resp) => {
//         console.log(resp);
//         localStorage.setItem('user', JSON.stringify(resp.data));
//         setOpenDialog(false);
//         onGenerateTrip();
//       })
//       .catch((err) => {
//         console.error("Error fetching user profile:", err);
//       });
//   };

//   return (
//     <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
//       <h2 className='font-bold text-3xl'>Tell Us Your Travel Preferences !</h2>
//       <p className='mt-3 text-gray-500 text-xl'>
//         Just provide some basic information, and our trip
//         planner will generate a customized itinerary based on your preferences 🌴 🏕️
//       </p>

//       <div className='mt-20 flex flex-col gap-10'>

//         <div>
//           <h2 className='text-xl my-3 font-medium '>
//             What is destination of choice ?
//           </h2>
//           <GooglePlacesAutocomplete
//             apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
//             selectProps={{
//               value: place,
//               onChange: (v) => {
//                 setPlace(v);
//                 handleInputChangge('location', v);
//               },
//             }}
//           />
//         </div>

//         <div>
//           <h2 className='text-xl my-3 font-medium'>
//             How many days are you planning for your trip?
//           </h2>
//           <Input
//             placeholder={'Ex-3'}
//             type="number"
//             onChange={(e) => handleInputChangge('noOfDays', e.target.value)}
//           />
//         </div>

//         <div>
//           <h2 className='text-xl my-3 font-medium '>What is your budget?</h2>
//           <div className='grid grid-cols-3 gap-5 mt-5 '>
//             {SelectBudgetOptions.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleInputChangge('budget', item.title)}
//                 className={`p-4 border rounded-lg hover:shadow-md cursor-pointer 
//                 ${formData?.budget === item.title && 'shadow-lg border-black bg-gray-50'}`}
//               >
//                 <h2 className='text-4xl'>{item.icon}</h2>
//                 <h2 className='font-bold text-lg'>{item.title}</h2>
//                 <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h2 className='text-xl my-3 font-medium '>Who are you traveling with?</h2>
//           <div className='grid grid-cols-3 gap-5 mt-5 '>
//             {SelectTravelesList.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleInputChangge('traveler', item.people)}
//                 className={`p-4 border rounded-lg hover:shadow-md cursor-pointer
//                 ${formData?.traveler === item.people && 'shadow-lg border-black bg-gray-50'}`}
//               >
//                 <h2 className='text-4xl'>{item.icon}</h2>
//                 <h2 className='font-bold text-lg'>{item.title}</h2>
//                 <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       <div className='my-10 flex justify-end'>
//         <Button
//           disabled={loading}
//           onClick={onGenerateTrip}
//           className="flex gap-2 items-center"
//         >
//           {loading
//             ? <AiOutlineLoading3Quarters className='h-5 w-5 animate-spin' />
//             : 'Generate Trip'
//           }
//         </Button>
//       </div>

//       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogDescription>
//               <img src="/logo.svg" alt="Logo" className='w-12 h-12' />
//               <h2 className='font-bold text-lg mt-7 '>Sign In With Google </h2>
//               <p>Sign In to the App with Google Authentication Securely </p>
//               <Button
//                 onClick={login}
//                 className="w-full mt-5 flex gap-4 items-center"
//               >
//                 <FcGoogle className='h-7 w-7' />
//                 Sign In with Google
//               </Button>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default CreateTrip;

















































// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
// import React, { useEffect, useState } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import { toast } from 'sonner';
// import { chatSession, AI_PROMPT } from '@/service/AIModal';
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
// } from "@/components/ui/dialog"
// import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import { doc, setDoc } from 'firebase/firestore';
// import { db } from '@/service/firebaseConfig';
// import { AiOutlineLoading3Quarters } from "react-icons/ai";


// function CreateTrip() {

//   const [place, setPlace] = useState();
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);

//   const handleInputChangge = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   useEffect(() => {
//     console.log("Current Form Data:", formData);
//   }, [formData]);

//   const login = useGoogleLogin({
//     onSuccess: (codeResp) => GetUserProfile(codeResp),
//     onError: (error) => console.log(error),
//   });

//   const onGenerateTrip = async () => {

//     const user = localStorage.getItem('user');

//     if (!user) {
//       setOpenDialog(true);
//       return;
//     }

//     if (!formData?.location || !formData?.budget || !formData?.traveler || !formData?.noOfDays) {
//       toast.error("Please fill all details!");
//       return;
//     }

//     if (formData?.noOfDays > 5) {
//       toast.error("Please enter trip days less than or equal to 5");
//       return;
//     }

//     setLoading(true);
//     toast("Generating your dream trip... ✈️");

//     const FINAL_PROMPT = AI_PROMPT
//       .replace('{location}', formData?.location.label)
//       .replace('{noOfDays}', formData?.noOfDays)
//       .replace('{traveler}', formData?.traveler)
//       .replace('{budget}', formData?.budget);

//     try {
//       const result = await chatSession.sendMessage(FINAL_PROMPT);
//       const tripData = await result.response.text();

//       console.log("AI RESPONSE (JSON):", JSON.parse(tripData));

//       toast.success("Trip Generated Successfully!");
//       localStorage.setItem('trip', tripData);

//       await SaveAiTrip(tripData);

//     } catch (error) {
//       console.error("Error generating trip:", error);
//       toast.error("AI is currently busy. Please try again.");
//     } finally {
//       setLoading(false);
//       SaveAiTrip(result?.response?.text());
//     }
//   };

//   const SaveAiTrip = async (tripData) => {
//     setLoading(true);

//     const user = JSON.parse(localStorage.getItem('user'));
//     const docId = Date.now().toString();

//     await setDoc(doc(db, "AITrips", docId), {
//       userSelection: formData,
//       tripData: tripData,
//       userEmail: user?.email,
//       id: docId
//     });
//     setLoading(false);
//   }

//   const GetUserProfile = (tokenInfo) => {
//     axios.get(
//       `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
//       {
//         headers: {
//           Authorization: `Bearer ${tokenInfo?.access_token}`,
//           Accept: 'Application/json'
//         }
//       }
//     )
//       .then((resp) => {
//         console.log(resp);
//         localStorage.setItem('user', JSON.stringify(resp.data));
//         setOpenDialog(false);
//         onGenerateTrip();
//       })
//       .catch((err) => {
//         console.error("Error fetching user profile:", err);
//       });
//   };

//   return (
//     <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
//       <h2 className='font-bold text-3xl'>Tell Us Your Travel Preferences !</h2>
//       <p className='mt-3 text-gray-500 text-xl'>
//         Just provide some basic information, and our trip
//         planner will generate a customized itinerary based on your preferences 🌴 🏕️
//       </p>

//       <div className='mt-20 flex flex-col gap-10'>

//         <div>
//           <h2 className='text-xl my-3 font-medium '>
//             What is destination of choice ?
//           </h2>
//           <GooglePlacesAutocomplete
//             apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
//             selectProps={{
//               value: place,
//               onChange: (v) => {
//                 setPlace(v);
//                 handleInputChangge('location', v);
//               },
//             }}
//           />
//         </div>

//         <div>
//           <h2 className='text-xl my-3 font-medium'>
//             How many days are you planning for your trip?
//           </h2>
//           <Input
//             placeholder={'Ex-3'}
//             type="number"
//             onChange={(e) => handleInputChangge('noOfDays', e.target.value)}
//           />
//         </div>

//         <div>
//           <h2 className='text-xl my-3 font-medium '>What is your budget?</h2>
//           <div className='grid grid-cols-3 gap-5 mt-5 '>
//             {SelectBudgetOptions.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleInputChangge('budget', item.title)}
//                 className={`p-4 border rounded-lg hover:shadow-md cursor-pointer 
//                 ${formData?.budget === item.title && 'shadow-lg border-black bg-gray-50'}`}
//               >
//                 <h2 className='text-4xl'>{item.icon}</h2>
//                 <h2 className='font-bold text-lg'>{item.title}</h2>
//                 <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h2 className='text-xl my-3 font-medium '>Who are you traveling with?</h2>
//           <div className='grid grid-cols-3 gap-5 mt-5 '>
//             {SelectTravelesList.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleInputChangge('traveler', item.people)}
//                 className={`p-4 border rounded-lg hover:shadow-md cursor-pointer
//                 ${formData?.traveler === item.people && 'shadow-lg border-black bg-gray-50'}`}
//               >
//                 <h2 className='text-4xl'>{item.icon}</h2>
//                 <h2 className='font-bold text-lg'>{item.title}</h2>
//                 <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       <div className='my-10 flex justify-end'>
//         <Button
//           disabled={loading}
//           onClick={onGenerateTrip}
//           className="flex gap-2 items-center"
//         >
//           {loading
//             ? <AiOutlineLoading3Quarters className='h-5 w-5 animate-spin' />
//             : 'Generate Trip'
//           }
//         </Button>
//       </div>

//       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogDescription>
//               <img src="/logo.svg" alt="Logo" className='w-12 h-12' />
//               <h2 className='font-bold text-lg mt-7 '>Sign In With Google </h2>
//               <p>Sign In to the App with Google Authentication Securely </p>
//               <Button

            
//                 onClick={login}
//                 className="w-full mt-5 flex gap-4 items-center" >

//                 <FcGoogle className='h-7 w-7' />
//                 Sign In with Google   
//                    </Button>
                   
                              

//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default CreateTrip;























import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { toast } from 'sonner';
import { chatSession, AI_PROMPT } from '@/service/AIModal';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { useNavigate } from 'react-router-dom';

function CreateTrip() {

  const [place, setPlace] = useState();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const  navigate =useNavigate();

  const handleInputChangge = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    console.log("Current Form Data:", formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const onGenerateTrip = async () => {

    const user = localStorage.getItem('user');

    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (!formData?.location || !formData?.budget || !formData?.traveler || !formData?.noOfDays) {
      toast.error("Please fill all details!");
      return;
    }

    if (formData?.noOfDays > 5) {
      toast.error("Please enter trip days less than or equal to 5");
      return;
    }

    setLoading(true);
    toast("Generating your dream trip... ✈️");

    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData?.location.label)
      .replace('{noOfDays}', formData?.noOfDays)
      .replace('{traveler}', formData?.traveler)
      .replace('{budget}', formData?.budget);

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const tripData = await result.response.text();

      console.log("AI RESPONSE (JSON):", JSON.parse(tripData));

      toast.success("Trip Generated Successfully!");
      localStorage.setItem('trip', tripData);

      await SaveAiTrip(tripData);

    } catch (error) {
      console.error("Error generating trip:", error);
      toast.error("AI is currently busy. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const SaveAiTrip = async (tripData) => {
    setLoading(true);

    const user = JSON.parse(localStorage.getItem('user'));
    const docId = Date.now().toString();

    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(tripData),
      userEmail: user?.email,
      id: docId
    });

    setLoading(false);
    navigate('/view-trip/'+docId);

  };

  const GetUserProfile = (tokenInfo) => {
    axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: 'Application/json'
        }
      }
    )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem('user', JSON.stringify(resp.data));
        setOpenDialog(false);
        onGenerateTrip();
      })
      .catch((err) => {
        console.error("Error fetching user profile:", err);
      });
  };

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell Us Your Travel Preferences !</h2>
      <p className='mt-3 text-gray-500 text-xl'>
        Just provide some basic information, and our trip
        planner will generate a customized itinerary based on your preferences 🌴 🏕️
      </p>

      <div className='mt-20 flex flex-col gap-10'>

        <div>
          <h2 className='text-xl my-3 font-medium '>
            What is destination of choice ?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              value: place,
              onChange: (v) => {
                setPlace(v);
                handleInputChangge('location', v);
              },
            }}
          />
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>
            How many days are you planning for your trip?
          </h2>
          <Input
            placeholder={'Ex-3'}
            type="number"
            onChange={(e) => handleInputChangge('noOfDays', e.target.value)}
          />
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium '>What is your budget?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5 '>
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChangge('budget', item.title)}
                className={`p-4 border rounded-lg hover:shadow-md cursor-pointer 
                ${formData?.budget === item.title && 'shadow-lg border-black bg-gray-50'}`}
              >
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium '>Who are you traveling with?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5 '>
            {SelectTravelesList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChangge('traveler', item.people)}
                className={`p-4 border rounded-lg hover:shadow-md cursor-pointer
                ${formData?.traveler === item.people && 'shadow-lg border-black bg-gray-50'}`}
              >
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className='my-10 flex justify-end'>
        <Button
          disabled={loading}
          onClick={onGenerateTrip}
          className="flex gap-2 items-center"
        >
          {loading
            ? <AiOutlineLoading3Quarters className='h-5 w-5 animate-spin' />
            : 'Generate Trip'
          }
        </Button>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="Logo" className='w-12 h-12' />
              <h2 className='font-bold text-lg mt-7 '>Sign In With Google</h2>
              <p>Sign In to the App with Google Authentication Securely</p>

              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className='h-7 w-7' />
                Sign In with Google
              </Button>

            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
