import "./App.css";

export default function App() {
    return (
        <section className="ds">
            <div className="screen top-screen">
                <div className="content">
                    <h1>Casey's Portfolio</h1>
                    <p>Select a game to start</p>
                </div>
            </div>

            <div className="hinge" />

            <div className="screen bottom-screen">
                <div className="menu">
                    <button className="game-icon"></button>
                    <button className="game-icon"></button>
                    <button className="game-icon"></button>

                    <button className="account-btn"> Account</button>
                </div>
            </div>
        </section>
    );
}