import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import cl from "./Home.module.scss";
import Gallery from "../../components/Galery/Gallery.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <section className={cl.Hello}>
                <div>
                    <h2>Hello, dear friend!</h2>
                    <p>
                        Our names are Erbol and Chyngyz. We were born and raised in
                        Kyrgyzstan, and like no one else we know the most beautiful places
                        of our country.
                    </p>
                    <button>
                        <Link to={"/about"}>Read more</Link>
                    </button>
                </div>
            </section>

            <section className={cl.Now}>
                <aside>
                    <span className={cl.line}></span>
                    <div>
                        <p>
                            Now that we've met, it's time to hit the road and make the big
                            trip across the Kyrgyz Republic!
                        </p>
                    </div>
                    <span className={cl.line}></span>
                </aside>
            </section>

            <section className={cl.toursFor}>
                <h1>TOURS FOR YOU</h1>
                <div className={cl.toursForYou}>
                    <Link to={"/tours"}>
                        <img
                            src="https://thumb.tildacdn.com/tild3337-6664-4538-b230-383139313266/-/format/webp/IMG_5265.JPG"
                            alt="img asdasda"
                        />
                        <h5>multi-day tours</h5>
                        <p>When the view of an image is influenced by the lights.</p>
                    </Link>
                    <Link to={"/tours"}>
                        <img
                            src="https://thumb.tildacdn.com/tild3337-6664-4538-b230-383139313266/-/format/webp/IMG_5265.JPG"
                            alt="img asdasda"
                        />
                        <h5>day tours</h5>
                        <p>
                            Visual communication takes place through pictures, graphs, and
                            charts.
                        </p>
                    </Link>
                    <Link to={"/tours"}>
                        <img
                            src="https://thumb.tildacdn.com/tild3337-6664-4538-b230-383139313266/-/format/webp/IMG_5265.JPG"
                            alt="img asdasda"
                        />
                        <h5>city tours</h5>
                        <p>The view of images in the critical perspective.</p>
                    </Link>
                    <Link to={"/individual"}>
                        <img
                            src="https://thumb.tildacdn.com/tild3337-6664-4538-b230-383139313266/-/format/webp/IMG_5265.JPG"
                            alt="img asdasda"
                        />
                        <h5>Individual tours</h5>
                        <p>The view of images in the critical perspective.</p>
                    </Link>
                </div>
            </section>

            <section>
                <Slider />
            </section>
            <section>
                <Gallery />
            </section>
        </>
    );
};

export default Home;
