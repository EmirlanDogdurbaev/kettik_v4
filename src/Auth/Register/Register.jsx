import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {signup} from "../../store/Slices/authSlice.js";
import cl from "./Register.module.scss";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const loading = useSelector((state) => state.auth.status === "loading");
    const error = useSelector((state) => state.auth.error);
    const token = useSelector((state) => state.auth.token);

    const handleSignup = () => {
        dispatch(signup({username, password, email}));
        navigate("/")
    };

    if (token) {
        return null;
    }

    return (
        <div className={cl.Register}>
            <div>
                <h2>Signup</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={cl.input}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={cl.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={cl.input}
                />

                <button
                    onClick={() => {
                        handleSignup();
                    }}
                    disabled={loading}
                    className={cl.button}
                >
                    {loading ? "Loading..." : "Signup"}
                </button>
                {error && <p className={cl.error}>Error: {error}</p>}
            </div>
        </div>
    );
};

export default Register;
