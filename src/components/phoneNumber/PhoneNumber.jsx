import React from 'react'
import "./PhoneNumber.css"
export const PhoneNumber = ({label,pleaceHolder}) => {
    return (
        <>
            <div class="input-box">
                <label class="details"  > {label}</label>
                <input type="number" placeholder={pleaceHolder} required />
            </div>


        </>
    )
}
