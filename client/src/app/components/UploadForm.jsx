'use client';
import React, {useState, useEffect} from 'react';
import './UploadForm.css'

function UploadForm(){

    const defaultFormValues = {
        division: "None",
        district: "None",
        location: "",
        date: "",
        description: "",
        source: "",
    }

    const districtsInDivision = {
        Barishal: ["Barguna","Barishal","Bhola","Jhalokati","Patuakhali","Pirojpur"], 
        Chattogram: ["Bandarban","Brahmanbaria","Chandpur","Chittagong","Comilla","Cox's Bazar","Feni","Khagrachhari","Lakshmipur","Noakhali","Rangamati"], 
        Dhaka: [], 
        Khulna: [], 
        Rajshahi: [], 
        Rangpur: [], 
        Mymensingh: [],
        Sylhet: [],
        None: []
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

    const handleDivisionChange = (event) => {
        const {name, value} = event.target
        setFromValues((prevValues) => ({
            ...prevValues,
            [name]: value,
            district: "None",
        }))

    }


    return(
        <>
        <form className="UploadForm" onSubmit={(e) => {e.preventDefault(); submitForm();}}>
            <select id="dropdown" name="division" value={formValues.division} onChange={handleDivisionChange}>
                <option value="None">--Select Division--</option>
                <option value="Barishal">Barishal</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Sylhet">Sylhet</option>
            </select>

            <select id="dropdown" name="district" value={formValues.district} onChange={handleChange}>
                <option value="None">--Select District--</option>
                {(districtsInDivision[formValues.division]).map((district)=> (<option value={district}>{district}</option>))}
            </select>

            <input type='text' name="location" value={formValues.location} onChange={handleChange} placeholder='Input Address'></input>
            <input type='date' name='date' value={formValues.date} onChange={handleChange}></input>
            <textarea name="description" value={formValues.description} onChange={handleChange} placeholder='Input Description of Violence'></textarea>
            <input type='text' name='source' value={formValues.source} onChange={handleChange} placeholder='Optional: Input a source'></input>
            <button>Submit</button>
        </form>
        </>
    )
} export default UploadForm;

