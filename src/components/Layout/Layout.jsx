import NavBar from "../NavBar/NavBar.jsx";

const Layout = ({children}) => {
    return (
        <>
            <NavBar/>
            <section>
                {children}
            </section>
        </>
    )
}

export default Layout