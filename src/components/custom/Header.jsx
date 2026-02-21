// import React, { useEffect,useState } from 'react'
// import { Button } from '../ui/button'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';

// import { FcGoogle } from "react-icons/fc";
//    import axios from 'axios';
//    import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
// } from "@/components/ui/dialog";

// function Header() {

//   const user=JSON.parse(localStorage.getItem('users'));
//   const [openDialog,setOpenDialog]=useState(false);
//   useEffect(()=>
//   {
//     console.log(user);

//   },[]);

//   const login = useGoogleLogin({
//     onSuccess: (codeResp) => GetUserProfile(codeResp),
//     onError: (error) => console.log(error),
//   });  


//    const GetUserProfile = (tokenInfo) => {
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
//       window.location.reload();
//       })
//       .catch((err) => {
//         console.error("Error fetching user profile:", err);
//       });
//   };
   




//   return (
//     <div className='p-3 shadow-sm flex justify-between items-center px-5'>
//       <img src='/logo.svg' alt='Logo' />
//       <div>
//         {user ?<div className='flex item-center gap-3'>
// <Button  variant="outline" className="rounded-full">My Trips </Button>
// {/* <img src={user?.picture} className="w-10 h-10 rounded-full" alt="User Picture"/> */}


// <Popover>
//   <popoverTrigger>
// <img src={user?.picture} className="w-10 h-10 rounded-full" alt="User Picture"/>


//   </popoverTrigger>
//   <popoverContent>
//     <h2 className='cursor-pointer' onClick={{}=>{
//       googleLogout();
//       localStorage.clear();
//       window.location.reload();
      
//       }</popoverContent>}>Logout</h2>
//   </popoverContent>
// </Popover>



//         </div> : 
//         <Button onClick={()=>setOpenDialog(true)}>Sign In </Button>}
//       </div>

//       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogDescription>
//               <img src="/logo.svg" alt="Logo" className='w-12 h-12' />
//               <h2 className='font-bold text-lg mt-7 '>Sign In With Google</h2>
//               <p>Sign In to the App with Google Authentication Securely</p>

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
//   )
// }

// export default Header












// import React from 'react'
// import { Button } from '../ui/button'
// import { Link } from 'react-router-dom'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { googleLogout } from '@react-oauth/google'

// function Header() {

//   const user = JSON.parse(localStorage.getItem('user'));

//   return (
//     <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      
//       <Link to={'/'}>
//         <img src="/logo.svg" />
//       </Link>

//       <div>
//         {user ? (
//           <div className='flex items-center gap-3'>
//             <a href='/my-trips'>
//             <Link to={'/create-trip'}>
//               <Button variant="outline" className="rounded-full">
//                 My Trip
//               </Button>
//             </Link>
//                           </a>


//             <Popover>
//               <PopoverTrigger>
//                 <img
//                   src={user?.picture}
//                   className='w-10 h-10 rounded-full cursor-pointer'
//                   alt="User"
//                 />
//               </PopoverTrigger>

//               <PopoverContent>
//                 <h2
//                   className='cursor-pointer'
//                   onClick={() => {
//                     googleLogout();
//                     localStorage.clear();
//                     window.location.reload();
//                   }}
//                 >
//                   Logout
//                 </h2>
//               </PopoverContent>
//             </Popover>

//           </div>
//         ) : (
//           <Link to={'/sign-in'}>
//             <Button>Sign In</Button>
//           </Link>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Header









import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout } from '@react-oauth/google'

function Header() {

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      
      <Link to={'/'}>
        <img src="/logo.svg" alt="Logo" />
      </Link>

      <div>
        {user ? (
          <div className='flex items-center gap-3'>

            {/* ✅ Fixed Routing Here */}
            <Link to={'/my-trips'}>
              <Button variant="outline" className="rounded-full">
                My Trip
              </Button>
            </Link>

            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  className='w-10 h-10 rounded-full cursor-pointer'
                  alt="User"
                />
              </PopoverTrigger>

              <PopoverContent>
                <h2
                  className='cursor-pointer'
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>

          </div>
        ) : (
          <Link to={'/sign-in'}>
            <Button>Sign In</Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
