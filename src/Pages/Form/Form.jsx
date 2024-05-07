
import { useState } from "react";
import "./Form.css"


const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        job: 'React',
        address: '',
        city: '',
        pinCode: '',
        startDate: '2031-11-27',
        cvFile: null
      });
    
      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: type === 'file' ? files[0] : value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
      };
    
      return (
        <div className="container">
          <div className="main">
            <h1>Job Application (web)</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <section className="input">
              <div className="data">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="data">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
              <div className="data">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="data">
                <label htmlFor="job">Job</label>
                <select id="job" name="job" value={formData.job} onChange={handleChange}>
                  <option>React</option>
                  <option>Node</option>
                  <option>Express</option>
                </select>
              </div>
              <div className="data">
                <label htmlFor="address">Address</label>
                <textarea id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
              </div>
              <div className="data">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
              </div>
              <div className="data">
                <label htmlFor="pinCode">Pin Code</label>
                <input type="text" id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleChange} />
              </div>
              <div className="data">
                <label htmlFor="startDate">Start Date</label>
                <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} />
              </div>
              <div className="data">
                <label htmlFor="cvFile">Upload Your CV</label>
                <input type="file" id="cvFile" name="cvFile" onChange={handleChange} />
              </div>
              <button type="submit">Submit</button>
            </section>
          </form>
        </div>
      )
}

export default Form