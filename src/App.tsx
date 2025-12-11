import React from "react";
import { BrowserRouter,Routes,Route } from "react-router";
import MainLayout from "./layouts/MainLayout";


export default function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        {/* User pages wrapped in MainLayout */}
        <Route path="/" element={<MainLayout /> }>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="about" element={<About />} />  ✅ No leading slash */}
          {/* Here it will check all about pages */}
          {/* <Route path="about/:slug" element={<About />} /> */}
          {/* <Route path="course" element={<CoursesPage />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>

        {/* Admin pages wrapped in AdminLayout */}
        {/* <Route path="admin" element={<AdminLayout />}>
          <Route path="header" element={<AdminDashboard />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}