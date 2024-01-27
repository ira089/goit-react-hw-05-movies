import { Routes, Route } from "react-router-dom";
import React from 'react'
import HomePage from "Pages/Home/HomePage";
import { Layout } from "../Pages/Layout/Layout";
import MuviesPage from "Pages/Muvies/MuviesPage";
import MovieDetails from "./TrendingMovies/MovieDetails";


 const App = () => {
  return (
    <Routes>
<Route path="/" element={<Layout />}>
  <Route index element={<HomePage/>}/>
  <Route path="/:id" element={<MovieDetails />}/>
  <Route path="muvies" element={<MuviesPage/>}/>
  {/* <Route path="*" element={<NotFoundPage />} /> */}
</Route>

   </Routes>
  
    
  )
}

export default App







// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
