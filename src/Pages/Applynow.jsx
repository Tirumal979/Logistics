import React from "react";
import "../App.css";

export default function Apply() {
  return (
    <>
      {/* Hero Section */}
      <div className="apply-hero">
        <h1>Begin Your Career With Us</h1>
        <p>
          Join a fast-growing logistics network. Be part of the future of
          delivery.
        </p>
      </div>

      {/* Form Container */}
      <div className="apply-form-container">
        <h2>Apply Online</h2>

        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" />

          <label>Email</label>
          <input type="email" placeholder="Enter email address" />

          <label>Phone Number</label>
          <input type="text" placeholder="Enter phone number" />

          <label>State</label>
          <select>
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Delhi">Delhi</option>
            <option value="Jammu & Kashmir">Jammu & Kashmir</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra & Nagar Haveli">Dadra & Nagar Haveli</option>
            <option value="Daman & Diu">Daman & Diu</option>
            <option value="Andaman & Nicobar Islands">Andaman & Nicobar Islands</option>
            <option value="Lakshadweep">Lakshadweep</option>
          </select>

          <label>City</label>
          <select>
            <option value="">Select City</option>
            {/* Example popular cities, you can expand */}
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Mysore">Mysore</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Delhi">Delhi</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Kanpur">Kanpur</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="Kochi">Kochi</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Indore">Indore</option>
            {/* You can continue adding more cities per state */}
          </select>

          <label>Franchise Type</label>
          <select>
            <option>Select Type</option>
            <option>Standard Franchise</option>
            <option>Master Franchise</option>
            
          </select>

          <button className="apply-button">Submit Application</button>
        </form>
      </div>
    </>
  );
}