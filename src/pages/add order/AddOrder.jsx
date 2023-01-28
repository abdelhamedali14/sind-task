import React from 'react'
import { BsFillArrowRightCircleFill, BsFillPlusCircleFill } from "react-icons/bs";
// import { info } from 'sass';
import { FileReaders } from '../../components/fileReader/FileReaders';
import { InputField } from '../../components/inputField/InputField';

export const AddOrder = () => {
  const list = [
    {
      label: "صورة الصك",
      pleacHolder: "ارفع صورة الصك",
      many: false
    }, {
      label: "صورة الرخصة",
      pleacHolder: "ارفع صورة الرخصة",
      many: false
    }, {
      label: "صورة الكروكي",
      pleacHolder: "ارفع ملف الكروكي",
      many: false
    }, {
      label: "صور العقار بحد أقصي 10 صور",
      pleacHolder: "ارفع صور العقار",
      many: true
    }
  ]
  const infoStatments = [
  {
    label:"المنطقة",
    pleacHolder:"أدخل المنطقة"
  }, {
    label:"المدينة",
    pleacHolder:"أختر المدينة"
  }, {
    label:"الحي",
    pleacHolder:"أختر الحي"
  },


  ]
  return (
    <>
      <div className="container">
        <div className="row justify-content-between py-4">
          <div className="col-md-7  me-3 py-2" >
            <div className="add-new-order-wrapper">
              <div className="go-back pe-2">
                <BsFillArrowRightCircleFill className='fs-5 ' />
              </div>
              <div className="add-new-order-title py-3">
                <h4 className=''>  <span className='px-1'><BsFillPlusCircleFill />
                </span> طلب تقييم جديد </h4>
              </div>
            </div>
            <div className="ownerName-fields">
              <div className="row justify-content-between ">
                <div className="col-md-7 ">
                  <InputField className="w-100" label={"اسم المالك بالكامل"} pleacHolder={"أدخل أسم المالك"} inputType={"input"} />
                </div>
                <div className="col-md-4">
                  <InputField className="w-100" label={" رقم الهاتف"} pleacHolder={"أدخل رقم الهاتف "} inputType={"input"} />
                </div>
              </div>
            </div>
            <div className="date-of-birthFeilds">
              <div className="row justify-content-between py-3">
                <div className="col-md-3">
                  <InputField className="w-100" label={"  رقم الهاتف الثاني"} pleacHolder={"أدخل  رقم الهاتف الثاني "} inputType={"input"} />
                </div>
                <div className="col-md-4">
                  <InputField className="w-100" label={" التاريخ الميلادي"} pleacHolder={"أختر التاريخ الميلادي"} inputType={"date-of-birth"} type={"date"} />
                </div>
                <div className="col-md-4">
                  <InputField className="w-100" label={" التاريخ الهجري"} pleacHolder={"أختر التاريخ الهجري"} inputType={"date-of-birth"} type={"date"} />
                </div>
              </div>
            </div>
            <div className="country-and-id-field">
              <div className="row justify-content-between">
                <div className="col-md-4 ">
                  <InputField className="w-100" label={"بلد الأقامة     "} pleacHolder={" أكتب بلد الأقامة"} inputType={"input"} />
                </div>
                <div className="col-md-7">
                  <InputField className="w-100" label={"  الرقم القومي/رقم الهوية"} pleacHolder={""} inputType={"input"} />
                </div>
              </div>

            </div>
            <div className="id-img">
              <FileReaders pleacholder={"ارفع صورة بطاقة الرقم القومي"} Label={"صورة بطاقة الرقم القومي/الهوية"} many={false} />
            </div>
            <div className="statment-info py-2">
              <div className="row justify-content-between">
                <div className="col-md-6">
                  <InputField className="w-100" label={" رقم العقار"} pleacHolder={"أدخل رقم العقار "} inputType={"input"} />
                </div>
                <div className="col-md-6">
                  <InputField className="w-100" label={"رقم الصحك"} pleacHolder={"أدخل رقم الصحك "} inputType={"input"} />
                </div>
              </div>
            </div>
            {list.map((item, i) => {
              return <div className="files-data py-1">
                <FileReaders pleacholder={item.pleacHolder} Label={item.label} many={item.many} key={i} />
              </div>
            })}
          

          </div>



          <div className="col-md-3">

          </div>

        </div>
      </div>


    </>
  )
}
