import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { InputField } from '../../components/inputField/InputField'
import "./register.css"
import { UserContext } from '../../contexts/UserContext'
export const Register = () => {

    const { userRequestsHandler } = useContext(UserContext)
    const inputsData = [
        {
            label: "الاسم",
            pleacHolder: "أدخل الاسم",
            property: "name",
            type: "text",
            inputType: "input"
        },
        {
            label: "أسم المستخدم",
            pleacHolder: "أدخل أسم المستخدم",
            property: "username",
            type: "text",
            inputType: "input"
        },
        {
            label: "البريد الإلكتروني",
            pleacHolder: " أدخل البريد الإلكتروني",
            property: "email",
            type: "email",
            inputType: "input"
        },
        {
            label: "الهاتف الاول",
            pleacHolder: "أدخل الهاتف الاول",
            property: " phone_1",
            type: "text",
            inputType: "input"
        },
        {
            label: "الهاتف الثاني",
            pleacHolder: "أدخل الهاتف الثاني",
            property: "phone_2",
            type: "text",
            inputType: "input"
        },
        {
            label: "كلمة السر",
            pleacHolder: "أدخل كلمة السر",
            property: "password",
            type: "password",
            inputType: "input"
        },
        {
            label: "تأكيد كلمة السر",
            pleacHolder: "أدخل تأكيد  كلمة السر",
            property: "password_2",
            type: "password",
            inputType: "input"
        },
    ]
    const [userData, setUserData] = useState({
        name: "",
        username: "",
        email: "",
        phone_1: "",
        phone_2: "",
        password: "",
        password_2: "",
        gender: 1,
        country: ""
    })

    const onChangeHandler = (propperty, value) => {
        setUserData((prev) => {
            prev[propperty] = value
            return prev
        })
        console.log(userData);
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        userRequestsHandler('register', 'POST', userData);
        console.log(userData);
    }


    useEffect(() => {
 
    }, []);



    return (
        <>
            <div className="Register-container">
                <div className="title">التسجيل</div>
                <div className="content">
                    <form action="submit" onSubmit={handelSubmit}>
                        <div className="user-details">
                            {inputsData.map((input, i) => {
                                return <InputField label={input.label} pleacHolder={input.pleacHolder} key={i}
                                    property={input.property} setUserData={onChangeHandler} inputType={input.inputType} registeClass={"speacial-input"} type={input.type} />
                            })}
                        </div>
                        <InputField
                            property={"gender"} setUserData={onChangeHandler} inputType={"radio"} />

                        <div className="button">
                            <input type="submit" value="تسجيل" />
                        </div>
                    </form>
                </div>

                <div className="sign-in">
                    <label>هل لديك حساب  بالفعل ؟</label>
                    <Link className='go-to-signin' to="/" >تسجيل الدخول</Link>
                </div>
            </div>
        </>


    )







}
