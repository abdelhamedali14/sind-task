import  {useState,useContext} from 'react'
import "./login.css"
import { Link } from "react-router-dom"
import { UserContext } from '../../contexts/UserContext'
export const Login = () => {
    const { userRequestsHandler } = useContext(UserContext)
    const [userData, setUserData] = useState({
        email: "",
        password: "",
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
    return (
        <>
            <h2 className="Login-title ">تسجيل الدخول</h2>
            <div className="container">
                <div className="wrapper row  justify-content-center">
              <div className="sign-in-wrapper col-md-6 ">
              <div className="input-box">
                     <span class="details">البريد اللإلكتروني</span>
                        <input type="email" placeholder="أدخل البريد اللإلكتروني" required onChange={onChangeHandler}  />
                    </div>
                    <div class="input-box">
                        <span class="details">الرقم السري </span>
                        <input type="password" placeholder="أدخل الرقم السري" required onChange={onChangeHandler} />
                        <div className="button mt-3 py-1">
                        <input type="submit" value="تسجيل الدخول" onSubmit={handelSubmit}  />
                    </div>
                    </div>
                  
                    <div className="reset-password">
                     <span > هل نسيت كلمة السر ؟ </span>
                    <Link to= "/reset-password"> أستعادة عن طريق البريد اللإلكتروني </Link>
                    </div>
                    <div className="reset-password">
                     <span >    ليس لديك حساب بالفعل؟ </span>
                    <Link to= "/register">أنشأ حساب </Link>
                    </div>
                    
              </div>

                </div>
            </div>


        </>
    )
}
