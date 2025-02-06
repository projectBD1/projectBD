'use client';
import React, {useState, useEffect} from 'react';

function UploadForm(){

    const defaultFormValues = {
        location: "",
        date: "",
        description: "",
        source: "",
    }

    const [formValues, setFromValues] = useState(defaultFormValues)

    const submitForm = () => {
        fetch("http://localhost:3000/uploadreport", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues)
        })
        .then(response => response.json())
        .then(response => {
            console.log("POST Response:", response);
            setFromValues(defaultFormValues)
        })
        .catch(error => {
            console.log("Error:", error)
        });
    };

    const handleChange = (event) => {
        const {name, value} = event.target
        setFromValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }))
    }

    const defaultF = () => {
        setFromValues(defaultFormValues)
    }

    return(
        <>
        <form className="UploadForm" onSubmit={(e) => {e.preventDefault(); submitForm();}}>
            <input type='text' name="location" value={formValues.location} onChange={handleChange} placeholder='Input Address'></input>
            <br/>
            <input type='date' name='date' value={formValues.date} onChange={handleChange}></input>
            <br/>
            <textarea name="description" value={formValues.description} onChange={handleChange} placeholder='Input Description of Violence'></textarea>
            <br/>
            <input type='text' name='source' value={formValues.source} onChange={handleChange} placeholder='Optional: Input a source'></input>
            <br/>
            <button>Submit</button>
        </form>
        </>
    )
} export default UploadForm;

