import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './components/Profile';
import UsersList from './views/UsersList';
import ProfileDetail from './views/ProfileDetail';
import ShowApiData from './components/ShowApiData';
import UserContext from './context/user-context';
import Home from './views/Home';
import MyComponent from './components/MyComponent';
import TreesRisk from './components/TreesRisk';
import ImageBackground from './components/Background';
import Testimonial from './components/Testimonial';
import BlockButton from './components/BlockButton';
import ServiceCard from './components/Services';

const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<Profile />} />
            <Route path="/photo/:id" element={<ProfileDetail />} />
            <Route path="/data" element={<ShowApiData />} />
            <Route path="/user-api" element={<UserContext />} />
            <Route path="/userlist" element={<UsersList />} />
            <Route path="/mycomponent" element={<MyComponent />} />
            <Route path="/tree-risk" element={<TreesRisk />} />
            <Route path="/background" element={<ImageBackground />} />
            <Route path="/testimonial" element={<Testimonial/>} /> 
            <Route path="/button" element={<BlockButton/>} />
            <Route path="/services" element={<ServiceCard/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes;