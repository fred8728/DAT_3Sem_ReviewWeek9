import React, { useState } from "react";

function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    window.alert(JSON.stringify(reservation)); //Wont show alert 
    setReservation(initialValue);
  }

  return (
    <div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Pay by Credit Card: </label>
        <input
          name="payByCreditCard"
          type="checkbox"
          checked={reservation.payByCreditCard}
          onChange={handleChange}
        />
        <br />
        <input
          name="firstName"
          value={reservation.firstName.value}
          placeholder="First Name"
          onChange={handleChange}
        />
        <br />
        <input
          name="lastName"
          value={reservation.lastName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <br />
        <input
          name="email"
          value={reservation.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <input
          name="phone"
          value={reservation.phone}
          placeholder="Phone"
          onChange={handleChange}
        />
        <br />
        <input
          name="street"
          value={reservation.street}
          placeholder="Street"
          onChange={handleChange}
        />
        <br />
        <input
          name="city"
          value={reservation.city}
          placeholder="City"
          onChange={handleChange}
        />
        <br />
        <input
          name="zip"
          value={reservation.zip}
          placeholder="Zip"
          onChange={handleChange}
        />
        <br />
        <input
          name="country"
          value={reservation.country}
          placeholder="Country"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" onSubmit={handleSubmit} />
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default ReservationForm;
