import React from 'react'
import { createContext } from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext()
export const UserContextProvider = ({ children }) => {
    // const setUserRequest = (param,userData) => {
    //     axios.create({
    //         baseURL: `https://qaym-3kark2-ziadsindion.pythonanywhere.com/api/users/${param}`,
    //         headers: { accept: 'application/json' },
    //         body:{}
         
    //     })
    // }



    const userData = {
        name: 'abdo',
        username: 'abdo',
        email: 'abdo.khaled.300@gmail.com',
        phone_1: '0020128075446',
        phone_2: '00201111222222',
        password: '123456789',
        password_2: '123456789',
        gender: 1,
        user_type: 1,
        country: 'Egypt',
    };
    const userDataLogin = {
        username: 'abdo',
        password: 'abdo@2468',
    };
    const userDataEmailVerify = {
        email: 'abdo.khaled.300@gmail.com',
    };
    const userDataChangePass = {
        old_password: 'abdo@123456',
        new_password_1: 'abdo@2468',
        new_password_2: 'abdo@2468',
    };
    const userDataResetPass = {
        new_password_1: 'abdo*2468',
        new_password_2: 'abdo*2468',
    };
    const userRequestsHandler = async (param, method, userData) => {
        const response = await fetch(`api/users/${param}/`, {
            method: method,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization:
                    param !== 'login' &&
                    param !== 'register' &&
                    `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(userData),
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        // LOGIN
        param === 'login' && console.log(data.access);
        param === 'login' && localStorage.setItem('token', data.access);
    };
    useEffect(() => {
       
        // userRequestsHandler('login', 'POST', userDataLogin);
        // userRequestsHandler('change-password', 'PATCH', userDataChangePass);
        // userRequestsHandler(
        //     'request-reset-password',
        //     'POST',
        //     userDataEmailVerify
        // );
        // userRequestsHandler('resend-verify-email', 'POST', userDataEmailVerify);
        // userRequestsHandler('reset-password', 'POST', userDataResetPass);
    }, []);

 
    return (



        <UserContext.Provider
            value={{
                userRequestsHandler,

            }}



        >
            {children}
        </UserContext.Provider>
    )



}