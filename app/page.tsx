import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <img src="./background.jpg" className="w-screen h-screen" />
            <Navbar />
            <Footer />
        </div>
    )
}
