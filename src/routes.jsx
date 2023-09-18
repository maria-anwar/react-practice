import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './components/Profile';
import UsersList from './views/UsersList';
import ProfileDetail from './views/ProfileDetail';
import ShowApiData from './components/ShowApiData';
import UserContext from './context/user-context';
import TailDesign from './components/TailDesign';

const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/list" element={<Profile />} />
            <Route path="/photo/:id" element={<ProfileDetail />} />
            <Route path="/data" element={<ShowApiData />} />
            <Route path="/user-api" element={<UserContext />} />
            <Route path="/taildesign" element={<TailDesign />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes;