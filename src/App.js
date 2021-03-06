import React, { useState, useEffect } from 'react';
import Form from "@rjsf/semantic-ui";
import './App.css';

function App() {
  const [schema, setSchema] = useState({});
  const [uiSchema, setUISchema] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/tutorial-schema.json`)
    .then((res) => res.json())
    .then((data) => {
      setSchema(data);
    });
  }, []);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/ui-schema.json`)
    .then((res) => res.json())
    .then((data) => {
      setUISchema(data);
    });
  }, []);

  const onSubmit = ({formData}, error) => {
    downloadFormData(formData);
  }

  const downloadFormData = (formData) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData));
    const download = document.createElement('a');
    download.setAttribute("href", dataStr);
    download.setAttribute("download", "form-data.json");
    document.body.appendChild(download);
    download.click();
    download.remove();
  }

  const uploadFile = ({ target: { files } }) => {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        setFormData(json);
      } catch (error) {
        alert('error when trying to parse json = ' + error);
      }
    }

    reader.readAsText(file);
  }

  return (
    <div className = "App">
      <input type="file"
             accept = ".json"
             onChange = { uploadFile } />
      <Form schema = { schema }
            uiSchema = { uiSchema }
            formData = { formData }
            onSubmit = { onSubmit } />
    </div>
  );
}

export default App;
