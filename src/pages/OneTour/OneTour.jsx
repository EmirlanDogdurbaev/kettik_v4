import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import cl from "./OneTour.module.scss";
import {BASE_API} from "../../store/api/base_api.js";

const OneTour = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`${BASE_API}/tour/${id}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Ошибка при получении данных:", error);
            });
    }, [id]);
    return (
        <div className={cl.OneTour}>
            <div style={{display: "flex", gap: "30px"}} className={cl.inner_cont}>
                <section>
                    <img
                        src={data.image4}
                        alt="this is a best  in the world"
                        width={510}
                        height={600}
                        loading={"lazy"}
                    />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "2px",
                        }}
                    >
                        <img src={data.image2} alt="" width={170} height={150} loading={"eager"}/>
                        <img src={data.image3} alt="" width={170} height={150} loading={"lazy"}/>
                        <img src={data.image} alt="" width={170} height={150} loading={"lazy"}/>
                    </div>
                </section>
                <div className={cl.info_tour}>
                    <h2>{data.title}</h2>
                    <p>{data.miniTitle}</p>
                    <br/>
                    <h4>{data.bring}</h4>
                    <ul>
                        {data.bringCharacteristics &&
                        data.bringCharacteristics.length > 0 ? (
                            data.bringCharacteristics.map((characteristic, index) => (
                                <li key={index}>{characteristic}</li>
                            ))
                        ) : (
                            <li>No characteristics available</li>
                        )}
                    </ul>
                    <p>{data.fullDescription}</p>
                    <div className={cl.cat}>
                        category : <h5>{data.category}</h5>
                    </div>
                    <strong>{data.price} som</strong>

                    <div>
                        <Link to={"/book"}>Book now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneTour;
