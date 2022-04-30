import React, { useState } from "react";
import "./form.css";
// import './App.css';

const initialValues = {
    company: "",
    //title
    position: "",
    //hashtags
    link: "",

    description: "",
    //description
    note: "",
};

export default function Form() {
    const [values, setValues] = useState(initialValues);
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const onChange = (e) => {
        setName(e.target.value);
    };
    return (
        <form>
            <input
                value={values.company}
                onChange={handleInputChange}
                name="company"
                label="Company"
            />
            <input
                type="text"
                value={values.position}
                onChange={handleInputChange}
                name="position"
                label="Job Title"
            />
            <input
                type="file"
                //value={values.link}
                //onChange={handleInputChange}
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.files[0])}
                name="link"
                label="Image"
            />
            <textarea
                value={name}
                onChange={onChange}
                rows={25}
                cols={55}
            />
            <button type="submit"> Image Preview </button>
            <button type="submit"> Submit </button>
        </form>
    );
}