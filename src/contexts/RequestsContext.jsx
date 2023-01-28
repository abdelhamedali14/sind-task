import { createContext } from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'

export const requestsContexts = createContext()

export const requestsContextsProvider = ({ children }) => {

    const requestData = {
        installment_number: '123456',
        building_number: '2468000',
        construction_licence: 'string',
        region: 'Egypt',
        city: 'Alexandria',
        neighborhood: 'string',
        address: 'alex, egypt',
        sketch: 'string',
        contracts: 'string',
        terms_and_conditions: 'string',
        others: 'string',
        status: 0,
        latitude: 0,
        longitude: 0,
    };
    const requestsHandler = async (method, requestData, id = '') => {
        const response = await fetch(`api/reuqests/${id}`, {
            method: method,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: requestData && JSON.stringify(requestData),
        });
        const data = await response.json();
        console.log(response);
        console.log(data);
    };




    // useEffect(() => {
    //     // requestsHandler('POST', requestData);
    //     // requestsHandler('GET', null );
    //     // requestsHandler('DELETE', null);
    // }, []);









    return (



        <requestsContexts.Provider
            value={{
                userData: "",
            }}



        >
            {children}
        </requestsContexts.Provider>
    )

}

