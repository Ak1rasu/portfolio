import "./App.css";
import Studio from "./world/studio.jsx";

export default function App() {
    return (
        <>
            <div className="rotate-screen">
                <div className="phone-animation">
                    <div className="phone-screen">
                        <div></div>
                    </div>
                </div>

                <h1>turn ur phone babes</h1>
                <p>i promise it's worth it</p>
            </div>

            <div className="website">
                <Studio />
            </div>
        </>
    )
}