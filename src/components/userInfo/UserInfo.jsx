import React from 'react'
import { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import "./userInfo.css"


export const UserInfo = () => {
    const [lang, setLang] = useState("")

    return (
        <>
            <div className="user-wrapper">
                <div className="notification">
                    <BsBell className='notifi-icon' />
                </div>
                <div className="user-img-wrapper">
                    <img src="" alt="user-img" />
                </div>
                <div className="user-details">
                    <div className="user-info">
                        <h4 className='user_name'>abdelhamed ali</h4>
                        <p className="user_city_country">
                            الدمام السعودية
                        </p>
                    </div>

                </div>
                <div className="language">

                </div>
            </div>


        </>
    )
}
