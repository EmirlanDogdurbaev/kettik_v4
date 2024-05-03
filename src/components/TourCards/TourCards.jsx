import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import cl from "./TourCards.module.scss";

const TourCards = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/tours")
            .then(response => {
                setTours(response.data);
            })
            .catch(error => {
                console.error("Ошибка при получении данных туров:", error);
            });
    }, []);

    return (
        <div className={cl.TourCards}>
            {tours.map((tour) => (
                <div className={cl.cont} key={tour.id}>
                    <img src={tour.image2} alt={tour.title} width={400}  />
                    <div>
                        <h3>{tour.title}</h3>
                        <p>{tour.miniTitle}</p>
                        <p>{tour.price}</p>
                        <span>
              <Link to={`/tours/${tour.id}`}>Learn more</Link>
              <Link to={"/book"}>book now</Link>
            </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TourCards;
