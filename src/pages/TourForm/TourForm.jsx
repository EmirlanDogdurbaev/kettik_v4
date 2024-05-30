import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    addBringCharacteristic,
    addPriceInclude,
    createTour,
    removeBringCharacteristic,
    removePriceInclude,
    setField,
} from '../../store/Slices/tourSlice.js';

const TourForm = () => {
    const dispatch = useDispatch();
    const tour = useSelector((state) => state.tour);
    const status = useSelector((state) => state.tour.status);
    const error = useSelector((state) => state.tour.error);

    const [newBringCharacteristic, setNewBringCharacteristic] = useState('');
    const [newPriceInclude, setNewPriceInclude] = useState('');
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);

    const handleChange = (e) => {
        dispatch(setField({ field: e.target.name, value: e.target.value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            switch (name) {
                case 'image':
                    setImage(files[0]);
                    break;
                case 'image2':
                    setImage2(files[0]);
                    break;
                case 'image3':
                    setImage3(files[0]);
                    break;
                case 'image4':
                    setImage4(files[0]);
                    break;
                default:
                    break;
            }
        }
    };

    const handleAddBringCharacteristic = () => {
        if (newBringCharacteristic.trim() !== '') {
            dispatch(addBringCharacteristic(newBringCharacteristic.trim()));
            setNewBringCharacteristic('');
        }
    };

    const handleRemoveBringCharacteristic = (index) => {
        dispatch(removeBringCharacteristic(index));
    };

    const handleAddPriceInclude = () => {
        if (newPriceInclude.trim() !== '') {
            dispatch(addPriceInclude(newPriceInclude.trim()));
            setNewPriceInclude('');
        }
    };

    const handleRemovePriceInclude = (index) => {
        dispatch(removePriceInclude(index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            ...tour,
            image,
            image2,
            image3,
            image4,
        };
        dispatch(createTour(formData));
    };

    return (
        <form onSubmit={handleSubmit} style={{marginTop: '10rem'}}>
            <input name="title" value={tour.title} onChange={handleChange} placeholder="Title" />
            <input name="miniTitle" value={tour.miniTitle} onChange={handleChange} placeholder="Mini Title" />
            <input name="price" type="number" value={tour.price} onChange={handleChange} placeholder="Price" />
            <input name="bring" value={tour.bring} onChange={handleChange} placeholder="Bring" />
            <input name="fullDescription" value={tour.fullDescription} onChange={handleChange} placeholder="Full Description" />
            <input name="day" value={tour.day} onChange={handleChange} placeholder="Day" />
            <input name="category" value={tour.category} onChange={handleChange} placeholder="Category" />
            <input type="file" name="image" onChange={handleFileChange} />
            <input type="file" name="image2" onChange={handleFileChange} />
            <input type="file" name="image3" onChange={handleFileChange} />
            <input type="file" name="image4" onChange={handleFileChange} />

            <div>
                <input
                    value={newBringCharacteristic}
                    onChange={(e) => setNewBringCharacteristic(e.target.value)}
                    placeholder="Add bring characteristic"
                />
                <button type="button" onClick={handleAddBringCharacteristic}>Add</button>
            </div>
            <ul>
                {tour.bringCharacteristics.map((characteristic, index) => (
                    <li key={index}>
                        {characteristic}
                        <button type="button" onClick={() => handleRemoveBringCharacteristic(index)}>Remove</button>
                    </li>
                ))}
            </ul>

            <div>
                <input
                    value={newPriceInclude}
                    onChange={(e) => setNewPriceInclude(e.target.value)}
                    placeholder="Add price include"
                />
                <button type="button" onClick={handleAddPriceInclude}>Add</button>
            </div>
            <ul>
                {tour.priceInclude.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button type="button" onClick={() => handleRemovePriceInclude(index)}>Remove</button>
                    </li>
                ))}
            </ul>

            <button type="submit">Create Tour</button>

            {status === 'loading' && <p>Loading...</p>}
            {status === 'succeeded' && <p>Tour created successfully!</p>}
            {status === 'failed' && <p>Error: {error}</p>}
        </form>
    );
};

export default TourForm;