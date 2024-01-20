// Checkout.js

import React, { useState } from "react";
import styles from "../../../css/checkout.module.css";

const Checkout = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    passportInfo: "",
    address: "",
    cardNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ren-a-car.onrender.com/api/customers/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers as needed
          },
          body: JSON.stringify({
            name: formData.name,
            passportInfo: formData.passportInfo,
            address: formData.address,
          }),
        }
      );
      // Handle success if needed
      alert("success");
      props.setCheckout(!props.checkout);
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      props.setCheckout(!props.checkout);
    }
    
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${styles.formBox}`}>
        <header>Customer details</header>

        <form onSubmit={handleFormSubmit}>
          <div className={`${styles.field} ${styles.input}`}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={`${styles.field} ${styles.input}`}>
            <label htmlFor="passportInfo">Passport info</label>
            <input
              type="text"
              name="passportInfo"
              value={formData.passportInfo}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={`${styles.field} ${styles.input}`}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={`${styles.field} ${styles.input}`}>
            <label htmlFor="cardNumber">Card number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.field}>
            <input
              type="submit"
              name="submit"
              className={`${styles.btn} ${styles.submit}`}
              value="Sign Up"
              required
            />
          </div>

          <div className={styles.links}>
            <div className={styles.signup}>
              <p>Already a member?</p>
              <a className={styles.link} href="register.html">
                Sign in
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
