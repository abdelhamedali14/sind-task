import React from 'react'
import { useRef } from 'react'
import "./fileReader.css"
import { TiAttachment } from "react-icons/ti";
import { useState } from 'react';
export const FileReaders = ({pleacholder, Label, many=false}) => {
    const inputFile = useRef()
    const [images, setImages] = useState([])
    const handelUploadFile = (e) => {
        const { files } = e.target
        const myFilesArray = Array.from(files)
        if (myFilesArray.length) {
            myFilesArray.forEach((file) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const { result } = e.target
                    setImages((prev) =>
                        [...prev, result]
                    )
                }
                reader.readAsDataURL(file)
            })
        }
    }

    return (
        <>
            <div className={`fileReader-wrapper ${many && "many"}`}  >
                <div className="input-wrapper">
                    <label className='fw-bold pb-2'>{Label}</label>
                    <div className='upload-file'>
                        <p>{pleacholder}</p>
                        <input type="file" name="" id="uploader" onChange={handelUploadFile}
                            multiple={many}
                            ref={inputFile}
                        />
                        <TiAttachment onClick={() => { inputFile.current.click() }} />
                    </div>
                </div>
                <div className="image-wrapper">
                    {images.length > 0 && images.map((img,i)=>{
                     return   <img src={img} alt="img" key={i} />

                    })}
                </div>

            </div>
        </>
    )
}
