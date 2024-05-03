import {useLocation} from "react-router-dom";
import cl from "./Header.module.scss";

const Header = () => {
    const location = useLocation();

    const headerData = {
        "/": {
            backgroundImage: "url('https://avatars.mds.yandex.net/get-vertis-journal/4220003/mick-truyts-4dZnL_Da9gk-unsplash.jpg_1704306776842/orig')",
            title: "KYRGYZ REPUBLIC",
            subtitle: "Travel Easily and comfortably",
        },
        "/about": {
            backgroundImage: "url('https://risk.ru/u/img/278/277147.jpeg')",
            title: "Kettik",
            subtitle:
                "No picture captures the beauty of the mountains as they are seen by mountain climbers. But the majesty does",
        },
        "/individual": {
            backgroundImage: "url('./bg3.webp')",
            title: "INDIVIDUAL TOURS",
        },
    };

    const {backgroundImage, title, subtitle} = headerData[location.pathname] || {};

    return (
        <header className={cl.Header}>
            {backgroundImage && (
                <div className={cl.header} style={{backgroundImage}}>
                    <h1 style={{fontSize: "65px"}}>{title}</h1>
                    {subtitle && (
                        <h3 style={{width: "800px", textAlign: "center", letterSpacing: "2px"}}>
                            {subtitle}
                        </h3>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;
