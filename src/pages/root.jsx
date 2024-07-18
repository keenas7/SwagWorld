import Header from '../components/Header';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';

export default function Root() {
	return (
        <div>

            <div>
                <Navbar />
            </div>

            <div className="container">
                <Header />
            </div>

            <div className="container">
                <Hero />
            </div>


        </div>
	)
}