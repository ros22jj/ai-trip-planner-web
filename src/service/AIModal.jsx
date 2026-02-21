// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY; // Access key from .env
// const genAI = new GoogleGenerativeAI(apiKey);


// export const model = genAI.getGenerativeModel({
//   model: "gemini-2.5-flash",
// });


// // Helper function to generate trip data
// export const generateTrip = async (prompt) => {
//   const result = await model.generateContent(prompt);
//   return result.response.text();
// };



// import { GoogleGenerativeAI } from "@google/generative-ai";

// // 1. Initialize the API Key and Client
// const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);


// // 2. Configure the model and the "Chat Session"
// // We use startChat because it allows us to set a JSON response type globally



// export const chatSession = genAI.getGenerativeModel({
//   model: "gemini-2.5-flash",
// }).startChat({
//   generationConfig: {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "application/json", // This ensures the result is always a JSON object
//   },
//   history: [], // Leave empty for a fresh start
// });



// /**
//  * HELPER: If you prefer using a simple function call in your components
//  * instead of 'chatSession.sendMessage', you can use this:
//  */


// export const generateTripData = async (prompt) => {
//   try {
//     const result = await chatSession.sendMessage(prompt);
//     // The response is already a string in JSON format
//     return JSON.parse(result.response.text()); 
//   } catch (error) {
//     console.error("Gemini AI Error:", error);
//     throw error;
//   }
// };









// important below commented code   





// import { GoogleGenerativeAI } from "@google/generative-ai";

// // 1. Initialize API Key
// const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// // 2. The Prompt Template (All requirements in one string)
// export const AI_PROMPT = 
// "Generate Travel Plan for Location: {location}, for {noOfDays}  Days for {traveler} with a {budget} budget. Give me Hotels options list with HotelName, HotelAddress, Price, hotelImageUrl, geoCoordinates, rating, descriptions and suggest itinerary with placeName, PlaceDetails, PlaceImageUrl, GeoCoordinates, ticketPricing, TimeTravel to each location for {totalDays} days with each day plan with best time to visit in JSON format.";

// // 3. The Chat Session Configuration
// export const chatSession = genAI.getGenerativeModel({
//   model: "gemini-2.5-flash",
// }).startChat({
//   generationConfig: {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "application/json", // This ensures clean JSON output
//   },
//   history: [],
// });













import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Strict Prompt with explicit JSON structure
export const AI_PROMPT = 
"Generate Travel Plan for Location: {location}, for {noOfDays} Days for {traveler} with a {budget} budget. " +
"Give me a list of 3-5 Hotels with: HotelName, HotelAddress, Price, hotelImageUrl, geoCoordinates, rating, descriptions. " +
"Also suggest an itinerary with: placeName, PlaceDetails, PlaceImageUrl, GeoCoordinates, ticketPricing, TimeTravel to each location for {noOfDays} days. " +
"All output must be in JSON format with two main keys: 'hotels' and 'itinerary'. " +
"The 'itinerary' should be an array of days, where each day contains a 'day' number and an array of 'plan' items.";

export const chatSession = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
}).startChat({
  generationConfig: {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json", 
  },
  history: [],
});