import {useLocation} from "react-router-dom";
import "./Banner.scss";
import TourCards from "../TourCards/TourCards.jsx";
import BookForm from "../BookForm/BookForm.jsx";

const Layout = () => {
    const location = useLocation();

    return (
        <div id="parallax-world-of-ugg">
            {location.pathname === "/book" ? (
                <>
                   <BookForm/>
                </>
            ) : location.pathname === "/tours" ? (
                <>
                    <section>
                        <div
                            className="parallax-one"
                            style={{
                                backgroundImage: `url("https://thumb.tildacdn.com/tild6634-6562-4563-b663-323730386339/-/format/webp/IMG_6018.JPG") !important`,
                            }}
                        >
                            <h2>Tours</h2>
                        </div>
                    </section>
                    <TourCards/>
                </>
            ) : null}
        </div>
    );
};

export default Layout;
