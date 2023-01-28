import React from 'react'
import "./sidebar.css"
import { BsArrowRightCircle, BsHouseFill, BsFillBarChartLineFill, BsPlusCircle, BsFillPersonFill, BsFillGearFill, BsLockFill, BsFillQuestionCircleFill, BsArrowLeftRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const SideBar = () => {
    const list = [
        {
            path: "/main/statistics",
            name: "الأحصائيات",
            icon: BsFillBarChartLineFill
        }, {
            path: "/main/add-order",
            name: " إضافة طلب",
            icon: BsPlusCircle
        },
        {
            path: "/main/my-orders",
            name: "طلباتي",
            icon: BsArrowLeftRight
        },
        {
            path: "#",
            name: "الملف الشخصي",
            icon: BsFillPersonFill
        },
        {
            path: "#",
            name: "الأعدادات العامة",
            icon: BsFillGearFill
        }, {
            path: "#",
            name: "أعدادات الأمان",
            icon: BsLockFill
        },
        {
            path: "#",
            name: "الدعم التقني ",
            icon: BsFillQuestionCircleFill
        },

    ]
    return (
        <>
            <div className="side-wrapper">
                <div className="upper_wrapper">
                    <div className="nav-header">
                        <div className="company-name">
                            <span><BsHouseFill className='icon-size' /></span>
                            <h6>قيم عقارك</h6>
                        </div>
                        <p>لخدمات التقيم العقاري</p>
                    </div>
                    <div className="nav-items">
                        <ul>
                            {list.map((item, i) => {
                                return (
                                    <Link to={item.path} key={i} className="nav-item">
                                        <li>
                                            <item.icon className='icon' />
                                            <p>{item.name}</p>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="down-wrapper">
                    <div className="sign-out ">
                        <Link to={""} className="nav-item">
                                <BsArrowRightCircle className='icon  ' />
                                <p className='m-0 '>تسجيل الخروج</p>
                
                        </Link>


                    </div>
                </div>



            </div>


        </>
    )
}
