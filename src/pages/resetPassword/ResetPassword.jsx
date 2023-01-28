import React from 'react'
import "./resetPassword.css"

export const ResetPassword = () => {
    return (
        <>
           
            <div className="resetWrapper">
            <h2>إعادة تعيين كلمة السر</h2>
                <div class="input-box">
                    <input type="email" placeholder="أدخل البريد اللإلكتروني" required />
                </div>
                <button className='button' >إستعادة كلمة السر </button>


            </div>




        </>
    )
}
