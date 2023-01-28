import React from 'react'
import { SideBar } from '../../components/sideBar/SideBar'
import { Route, Routes } from "react-router-dom";
import { HomePage } from '../home page/HomePage';
import { MyOrders } from '../my orders/MyOrders';
import { AddOrder } from '../add order/AddOrder';
import { Statistics } from '../statistics/Statistics';
export const Main = () => {
    return (
        <>
            <div className='d-flex'>
                <SideBar />
                <div className="routes-wrapper w-100">
                    <Routes >
                        <Route path="/" element={<HomePage />} />
                        <Route path="my-orders" element={<MyOrders />} />
                        <Route path="add-order" element={<AddOrder />} />
                        <Route path="statistics" element={<Statistics />} />
                    </Routes>

                </div>

            </div>





        </>
    )
}
