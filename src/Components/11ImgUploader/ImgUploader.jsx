import React, { useState } from 'react'

export const ImgUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) =>{
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = () =>{
        if(!selectedFile){
            alert("Please Select a file.");
            return;
        }
        const formData = new FormData();
        formData.append("file", selectedFile);
        console.log("uploading file..." + selectedFile.name);
    }
  return (
    <>
        <h1 className="font-bold">Task: Create Img uploader.</h1>
        <input type="file" onChange={handleFileChange} />
        {selectedFile && <img className='w-28 h-28' src={URL.createObjectURL(selectedFile)}/>}
        <button className='bg-blue-500 text-white px-3 py-1' onClick={handleUpload}>upload</button>
        <br /> <br />
    </>
  )
}
