import axios from "axios";
import  {useState} from "react";
import Select from "react-select";
import "./BookForm.scss";
import {customStyles} from "../../UI/InputCustomStyle/InputCustomStyle";
// import baseApi from "../../store/api/base_api.js";

const BookForm = () => {
    const [numberOfPersons, setNumberOfPersons] = useState(1);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        tourName: null,
        data: ""
    });

    const options = [
        {value: "Ala-Archa", label: "Ala-Archa"},
        {value: "Alamedin", label: "Alamedin"},
        {value: "Kol-Tor", label: "Kol-Tor"},
    ];


    const handleDecrement = () => {
        if (numberOfPersons > 1) {
            setNumberOfPersons((prevPersons) => prevPersons - 1);
        }
    };

    const handleIncrement = () => {
        setNumberOfPersons((prevPersons) => prevPersons + 1);
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const phone = form.phone.value;
    //     const tourName = form.tourName.value;
    //     const data = form.data.value;
    //     console.log(tourName, "axaax");
    //     const formData = {
    //         name,
    //         email,
    //         phone,
    //         numberOfPersons,
    //         data,
    //         tourName,
    //     };
    //     axios
    //         .post(`${baseApi}/bookings/book`, formData)
    //         .then((response) => {
    //             console.log(response.data, "axaxa");
    //             setFormValues({
    //                 name: "",
    //                 email: "",
    //                 phone: "",
    //                 tourName: null,
    //                 data: ""
    //             });
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };

    const handleFormChange = (event) => {
        const {name, value} = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleTourSelect = (selectedOption) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            tourName: selectedOption,
        }));
    };

    return (
        <form className="book" onSubmit={""}>
            <label htmlFor="name">
                <h5 className="title">Name and surname of the contact person</h5>
                <input
                    id="name"
                    type="text"
                    placeholder="Ваше имя"
                    name="name"
                    value={formValues.name}
                    onChange={handleFormChange}
                />
            </label>
            <label htmlFor="email">
                <h5 className="title">Email</h5>
                <input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                    value={formValues.email}
                    onChange={handleFormChange}
                />
            </label>
            <label htmlFor="phone">
                <h5 className="title">Phone</h5>
                <input
                    id="phone"
                    type="text"
                    placeholder="+996500023120"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleFormChange}
                />
            </label>
            <div className="count">
                <h4 className="title">Number of persons</h4>
                <span>
          <button type="button" onClick={handleDecrement}>
            -
          </button>
          <h4>{numberOfPersons}</h4>
          <button type="button" onClick={handleIncrement}>
            +
          </button>
        </span>
            </div>
            <aside>
                <h4 className="title">Select a tour</h4>
                <Select
                    options={options}
                    styles={customStyles}
                    name="tourName"
                    value={formValues.tourName}
                    onChange={handleTourSelect}
                />
            </aside>
            <label htmlFor="data">
                <h5 className="title">Дата поездки</h5>
                <input
                    id="data"
                    type="date"
                    name="data"
                    placeholder="+996500023120"
                    value={formValues.data}
                    onChange={handleFormChange}
                />
            </label>
            <button className="book_btn" type="submit">
                Book a room
            </button>
        </form>
    );
};

export default BookForm;
