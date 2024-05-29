import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {BASE_API} from "../../store/api/base_api.js";
import {bookingPost} from "../../store/Slices/bookingSlice.js";
import Select from 'react-select';
import {customStyles} from "../../UI/InputCustomStyle/InputCustomStyle.js";
import "./BookForm.scss"

const BookingForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        tour_id: '',
        date: '',
        phoneNumber: '',
        people: 0
    });
    const [tourOptions, setTourOptions] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_API}/tour/all`)
            .then((response) => {
                setTourOptions(response.data);
            })
            .catch((error) => {
                console.error("Error fetching options:", error);
            });
    }, []);

    const handleChange = (selectedOption) => {
        setFormData(prevState => ({
            ...prevState,
            tour_id: selectedOption ? selectedOption.value : ''
        }));
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'people' ? parseInt(value, 10) || 0 : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(bookingPost(formData));

        setFormData({
            tour_id: '',
            date: '',
            phoneNumber: '',
            people: 0
        });
    };

    const opt = tourOptions.map(option => ({value: option.id, label: option.title}));

    // console.log(localStorage.getItem('user').role !== "admin");

    const firstNameToken = localStorage.getItem("username");
    if (firstNameToken && firstNameToken.role == "admin") {
        console.log("User is an admin");
    } else {
        console.log("User is not an admin");
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="book">
                <label htmlFor="date">
                    <h5 className="title">Name and surname of the contact person</h5>
                    <input
                        id="date"
                        type="date"
                        placeholder="Your name"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                </label>

                <label htmlFor="phoneNumber">
                    <h5 className="title">Phone</h5>
                    <input
                        id="phoneNumber"
                        type="text"
                        placeholder="+996500023120"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                    />
                </label>

                <div>
                    <label htmlFor="people">Number of People:</label>
                    <input
                        type="number"
                        id="people"
                        name="people"
                        value={formData.people}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="tour_id">Tour:</label>
                    <aside>
                        <h4 className="title">Select a tour</h4>
                        <Select
                            options={opt}
                            styles={customStyles}
                            name="tourName"
                            value={opt.find(option => option.value === formData.tour_id) || null}
                            onChange={handleChange}
                        />
                    </aside>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default BookingForm;
