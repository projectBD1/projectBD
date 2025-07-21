'use client';
import React, {useState, useEffect} from 'react';
import './UploadForm.css';

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
        <div className="upload-form-container">
            <div className="upload-form-card">
                <h2 className="upload-form-title">Report Incident</h2>
                
                <form className="upload-form" onSubmit={(e) => {e.preventDefault(); submitForm();}}>
                    <div className="form-field">
                        <label className="form-label">Location</label>
                        <input 
                            className="form-input"
                            type='text' 
                            name="location" 
                            value={formValues.location} 
                            onChange={handleChange} 
                            placeholder='Enter address'
                        />
                    </div>
                    
                    <div className="form-field">
                        <label className="form-label">Date</label>
                        <input 
                            className="form-input"
                            type='date' 
                            name='date' 
                            value={formValues.date} 
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="form-field">
                        <label className="form-label">Description</label>
                        <textarea 
                            className="form-textarea"
                            name="description" 
                            value={formValues.description} 
                            onChange={handleChange} 
                            placeholder='Describe the incident'
                            rows="4"
                        />
                    </div>
                    
                    <div className="form-field">
                        <label className="form-label">Source (Optional)</label>
                        <input 
                            className="form-input"
                            type='text' 
                            name='source' 
                            value={formValues.source} 
                            onChange={handleChange} 
                            placeholder='Enter link to the source'
                        />
                    </div>
                    
                    <button 
                        className="submit-button"
                        type="submit"
                    >
                        Submit Report
                    </button>
                </form>
            </div>
        </div>
    )
} export default UploadForm;
