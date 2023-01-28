import React from 'react'

export const InputField = ({ type = "text", label, pleacHolder, property, setUserData, inputType,registeClass }) => {
    return (
        <>
    
            {inputType === "input" && <div className={`${registeClass && registeClass} input-box` }>
                <label className="details">{label} </label>
                <input type={type} placeholder={pleacHolder} required onChange={((e) => { setUserData(property, e.target.value) })} />
            </div>}
            {inputType === "select" && <div className={`${registeClass && registeClass} input-box` }>
                <label className="details">البلد</label>
                <select name="country" id="country"
                    onChange={((e) => { setUserData(property, e.target.value) })}>
                    <option value="saudia arabia">السعودية</option>
                    <option value="egypt">مصر</option>
                </select>
            </div>}
            {inputType === "date-of-birth" &&
            
                        <div className={`${registeClass && registeClass} input-box` }>
                            <label className="details" >{label}</label>
                            <input type={type}  placeholder={pleacHolder}/>
                        </div>
                   
                   



            }
            {inputType === "radio" &&
                <div className="gender-details">
                    <input type="radio" name="gender" id="dot-1" />
                    <input type="radio" name="gender" id="dot-2" />
                    <label className="gender-title">النوع</label>
                    <div className="category">
                        <label htmlFor="dot-1" onClick={(() => { setUserData(property, 1) })}>
                            <span className="dot one"></span>
                            <label className="gender">ذكر</label>
                        </label>
                        <label htmlFor="dot-2" onClick={(() => { setUserData(property, 2) })}>
                            <span className="dot two"></span>
                            <label className="gender">أنثي</label>
                        </label>
                    </div>


                </div>
            }




        </>
    )
}
