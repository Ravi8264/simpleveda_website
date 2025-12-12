import React from "react";
import { BrowserRouter,Routes,Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./Compenents/HomePage/Home"


export default function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        {/* User pages wrapped in MainLayout */}
        <Route path="/" element={<MainLayout /> }>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />  ✅ No leading slash */}
          {/* Here it will check all about pages */}
          {/* <Route path="about/:slug" element={<About />} /> */}
          {/* <Route path="course" element={<CoursesPage />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>
    </div>
  )
}