import {useEffect, useState} from 'react';
import axios from "axios";
import {BASE_API} from "../../store/api/base_api.js";
import {getAuthorizationHeader} from "../../store/Slices/bookingSlice.js";
import styles from "./Profile.module.scss";

const Profile = () => {
    const [user, setUser] = useState({});
    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_API}/profile`, {headers: getAuthorizationHeader()}).then((response) => {
            setUser(response.data);
        });

        axios.get(`${BASE_API}/booking/my`, {headers: getAuthorizationHeader()}).then((response) => {
            const ids = Array.from(new Set(response.data.map(item => item.tourId)));
            setMyBookings([]);
            ids.forEach(id => {
                axios.get(`${BASE_API}/tour/${id}`, {headers: getAuthorizationHeader()}).then((response) => {
                    setMyBookings(prevState => [...prevState, response.data]);
                });
            });
        });
    }, []);


    return (
        <div className={styles.profileContainer}>
            <article className={styles.userInfo}>
                <img
                    src="data:image/png;base64,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"
                    alt=""/>
                <h2>{user.lastname} {user.firstname}</h2>
                <p>{user.role}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </article>
            <section className={styles.bookingInfo}>
                {/* Вывод информации о бронированиях */}
                {myBookings.map((booking) => (
                    <div key={booking.id} className={styles.bookingCard}>
                        <h2>{booking.title}</h2>
                        <h6>{booking.miniTitle}</h6>
                        <p>Pricw: {booking.price} сом</p>
                        <p>fullDescription : {booking.fullDescription}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Profile;
