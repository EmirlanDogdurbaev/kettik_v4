import {useCallback, useEffect, useState} from "react";
import Select from "react-select";
import axios from "axios";
import {customStyles} from "../../UI/InputCustomStyle/InputCustomStyle";
import {useDispatch} from "react-redux";
import {submitForm} from "../../store/requests/bookingRequest.js";
import {BASE_API} from "../../store/api/base_api.js";
import "./BookForm.scss"


const BookForm = () => {
    const dispatch = useDispatch();
    const [options, setOptions] = useState([]);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        tourName: null,
        data: "",
        numberOfPersons: 1
    });

    console.log(formValues)
    useEffect(e => {
        axios.get(`${BASE_API}/tours`)
            .then((response) => {
                const fetchedOptions = response.data.map(option => ({
                    value: option.title,
                    label: option.title
                }));

                setOptions(fetchedOptions);
            })
            .catch((error) => {
                console.error("Error fetching options:", error);
                reportError(e);
            });
    }, []);


    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        dispatch(submitForm(formValues));
        setFormValues({
            name: "",
            email: "",
            phone: "",
            tourName: null,
            data: "",
            numberOfPersons: 1
        });
    }, [dispatch, formValues]);

    const handleDecrement = useCallback(() => {
        if (formValues.numberOfPersons > 1) {
            setFormValues((prevValues) => ({
                ...prevValues,
                numberOfPersons: prevValues.numberOfPersons - 1
            }));
        }
    }, [formValues]);

    const handleIncrement = useCallback(() => {
        setFormValues((prevValues) => ({
            ...prevValues,
            numberOfPersons: prevValues.numberOfPersons + 1
        }));
    }, []);


    const handleFormChange = (event) => {
        const {name, value} = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleTourSelect = (selectedOption) => {
        setFormValues((prevValues) => {
            return {
                ...prevValues,
                tourName: selectedOption.title,
            };
        });
    };

    return (
        <form className="book" onSubmit={handleSubmit}>
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
          <h4>{formValues.numberOfPersons}</h4>
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
