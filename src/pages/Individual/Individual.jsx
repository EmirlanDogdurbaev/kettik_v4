import  { useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import cl from "./Individual.module.scss";

const Individual = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        note: "",
    });

    const handleChange = (event) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:8080/individual", formData)
            .then((response) => {
                console.log(response.data);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    note: "",
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className={cl.Individual}>
            <Header />
            <form className="book" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <h5 className="title">Name and surname of the contact person</h5>
                    <input
                        id="name"
                        type="text"
                        placeholder="Ваше имя"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="email">
                    <h5 className="title">Email</h5>
                    <input
                        id="email"
                        type="email"
                        placeholder="example@gmail.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="phone">
                    <h5 className="title">Phone</h5>
                    <input
                        id="phone"
                        type="text"
                        placeholder="+996500023120"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="note">
                    <h5 className="title">Note</h5>
                    <input
                        id="note"
                        type="text"
                        name="note"
                        placeholder="Leave a note"
                        value={formData.note}
                        onChange={handleChange}
                    />
                </label>
                <button className="book_btn" type="submit">
                    Book a room
                </button>
            </form>
        </div>
    );
};

export default Individual;
