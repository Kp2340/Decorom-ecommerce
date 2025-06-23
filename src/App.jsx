import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
    const designs = [
        { id: 1, src: 'https://kp2340.github.io/Decorom-ecommerce/images/1.jpeg', material: 'ACP' },
        { id: 2, src: 'https://kp2340.github.io/Decorom-ecommerce/images/2.jpeg', material: 'Acrylic' },
        { id: 3, src: 'https://kp2340.github.io/Decorom-ecommerce/images/3.jpeg', material: 'Acrylic' },
        { id: 4, src: 'https://kp2340.github.io/Decorom-ecommerce/images/4.jpeg', material: 'Acrylic' },
        { id: 5, src: 'https://kp2340.github.io/Decorom-ecommerce/images/5.jpeg', material: 'Acrylic' },
        { id: 6, src: 'https://kp2340.github.io/Decorom-ecommerce/images/6.jpeg', material: 'ACP' },
        { id: 7, src: 'https://kp2340.github.io/Decorom-ecommerce/images/7.jpeg', material: 'Acrylic' },
        { id: 8, src: 'https://kp2340.github.io/Decorom-ecommerce/images/8.jpeg', material: 'Acrylic' },
        { id: 9, src: 'https://kp2340.github.io/Decorom-ecommerce/images/9.jpeg', material: 'Acrylic' },
        { id: 10, src: 'https://kp2340.github.io/Decorom-ecommerce/images/10.jpeg', material: 'Acrylic' },
        { id: 11, src: 'https://kp2340.github.io/Decorom-ecommerce/images/11.jpeg', material: 'Acrylic' },
        { id: 12, src: 'https://kp2340.github.io/Decorom-ecommerce/images/12.jpeg', material: 'Acrylic' },
        { id: 13, src: 'https://kp2340.github.io/Decorom-ecommerce/images/13.jpeg', material: 'Metal' },
        { id: 14, src: 'https://kp2340.github.io/Decorom-ecommerce/images/14.jpeg', material: 'Metal' },
        { id: 15, src: 'https://kp2340.github.io/Decorom-ecommerce/images/15.jpeg', material: 'Acrylic' },
        { id: 16, src: 'https://kp2340.github.io/Decorom-ecommerce/images/16.jpeg', material: 'Acrylic' },
        { id: 17, src: 'https://kp2340.github.io/Decorom-ecommerce/images/17.jpeg', material: 'ACP' },
        { id: 18, src: 'https://kp2340.github.io/Decorom-ecommerce/images/18.jpeg', material: 'Acrylic' },
        { id: 19, src: 'https://kp2340.github.io/Decorom-ecommerce/images/19.jpeg', material: 'Acrylic' },
        { id: 20, src: 'https://kp2340.github.io/Decorom-ecommerce/images/20.jpeg', material: 'Acrylic' },
        { id: 21, src: 'https://kp2340.github.io/Decorom-ecommerce/images/21.jpeg', material: 'Metal' },
        { id: 22, src: 'https://kp2340.github.io/Decorom-ecommerce/images/22.jpeg', material: 'Metal' },
        { id: 23, src: 'https://kp2340.github.io/Decorom-ecommerce/images/23.jpeg', material: 'Acrylic' },
        { id: 24, src: 'https://kp2340.github.io/Decorom-ecommerce/images/24.jpeg', material: 'ACP' },
        { id: 25, src: 'https://kp2340.github.io/Decorom-ecommerce/images/25.jpeg', material: 'Metal' },
        { id: 26, src: 'https://kp2340.github.io/Decorom-ecommerce/images/26.jpeg', material: 'ACP' },
        { id: 27, src: 'https://kp2340.github.io/Decorom-ecommerce/images/27.jpeg', material: 'ACP' },
        { id: 28, src: 'https://kp2340.github.io/Decorom-ecommerce/images/28.jpeg', material: 'Acrylic' },
        { id: 29, src: 'https://kp2340.github.io/Decorom-ecommerce/images/29.jpeg', material: 'Acrylic' },
        { id: 30, src: 'https://kp2340.github.io/Decorom-ecommerce/images/30.jpeg', material: 'Acrylic' },
        { id: 31, src: 'https://kp2340.github.io/Decorom-ecommerce/images/31.jpeg', material: 'Acrylic' },
        { id: 32, src: 'https://kp2340.github.io/Decorom-ecommerce/images/32.jpeg', material: 'Acrylic' },
        { id: 33, src: 'https://kp2340.github.io/Decorom-ecommerce/images/33.jpeg', material: 'Acrylic' },
        { id: 34, src: 'https://kp2340.github.io/Decorom-ecommerce/images/34.jpeg', material: 'Acrylic' },
        { id: 35, src: 'https://kp2340.github.io/Decorom-ecommerce/images/35.jpeg', material: 'ACP' },
        { id: 36, src: 'https://kp2340.github.io/Decorom-ecommerce/images/36.jpeg', material: 'Acrylic' },
        { id: 37, src: 'https://kp2340.github.io/Decorom-ecommerce/images/37.jpeg', material: 'Acrylic' },
        { id: 38, src: 'https://kp2340.github.io/Decorom-ecommerce/images/38.jpeg', material: 'Acrylic' },
        { id: 39, src: 'https://kp2340.github.io/Decorom-ecommerce/images/39.jpeg', material: 'Acrylic' },
        { id: 40, src: 'https://kp2340.github.io/Decorom-ecommerce/images/40.jpeg', material: 'Acrylic' },
        { id: 41, src: 'https://kp2340.github.io/Decorom-ecommerce/images/41.jpeg', material: 'Acrylic' },
        { id: 42, src: 'https://kp2340.github.io/Decorom-ecommerce/images/42.jpeg', material: 'Acrylic' },
        { id: 43, src: 'https://kp2340.github.io/Decorom-ecommerce/images/43.jpeg', material: 'Acrylic' },
        { id: 44, src: 'https://kp2340.github.io/Decorom-ecommerce/images/44.jpeg', material: 'ACP' },
        { id: 45, src: 'https://kp2340.github.io/Decorom-ecommerce/images/45.jpeg', material: 'Acrylic' },
        { id: 46, src: 'https://kp2340.github.io/Decorom-ecommerce/images/46.jpeg', material: 'Metal' },
        { id: 47, src: 'https://kp2340.github.io/Decorom-ecommerce/images/47.jpeg', material: 'Acrylic' },
        { id: 48, src: 'https://kp2340.github.io/Decorom-ecommerce/images/48.jpeg', material: 'ACP' },
        { id: 49, src: 'https://kp2340.github.io/Decorom-ecommerce/images/49.jpeg', material: 'ACP' },
        { id: 50, src: 'https://kp2340.github.io/Decorom-ecommerce/images/50.jpeg', material: 'Acrylic' },
    ];

    const [formData, setFormData] = useState({ name: '', mobile: '', message: '', design: '' });
    const [submitted, setSubmitted] = useState(false);
    const [filter, setFilter] = useState('All');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateMobile = (mobile) => /^[0-9]{10}$/.test(mobile);

    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateMobile(formData.mobile)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }
        setLoading(true);
        try {
            const response = await fetch('https://decorom-web.onrender.com/api/submit-inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: formData.name, mobile: formData.mobile, design: formData.design, message: formData.message }),
            });
            const result = await response.json();
            if (response.ok) {
                console.log(result.message);
                if (formData.design) {
                    const whatsappMessage = encodeURIComponent(
                        `Design ${formData.design} has been chosen by ${formData.name || 'a customer'}.`
                    );
                    const whatsappUrl = `https://wa.me/919016707658?text=${whatsappMessage}`;
                    window.open(whatsappUrl, '_blank');
                }
                setSubmitted(true);
                setFormData({ name: '', mobile: '', message: '', design: '' });
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                throw new Error(result.error || 'Submission failed');
            }
        } catch (error) {
            console.error('Error submitting inquiry:', error);
            alert('Failed to submit. Please try again or check your network.');
        } finally {
            setLoading(false);
        }
    };
    const filteredDesigns = filter === 'All' ? designs : designs.filter((d) => d.material === filter);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="bg-primary text-white p-4 sticky top-0 z-20 shadow-lg"
            >
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold tracking-tight">Decorom Name Plates</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            {['Home', 'Gallery', 'Inquiry', 'About'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="hover:text-accent transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </motion.header>

            <section id="home" className="bg-gradient-to-r from-primary to-blue-600 text-white py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Custom Name Plates for Every Style</h2>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                        Discover our collection of 50 unique designs or create your own custom name plate.
                    </p>
                    <motion.a
                        href="#inquiry"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent text-primary px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
                    >
                        Get a Quote
                    </motion.a>
                </motion.div>
            </section>

            <section id="gallery" className="py-16 bg-white">
                <div className="container mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-8 text-primary"
                    >
                        Our Name Plate Designs
                    </motion.h2>
                    <div className="flex justify-center space-x-4 mb-8">
                        {['All', 'Acrylic', 'ACP', 'Metal'].map((material) => (
                            <motion.button
                                key={material}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setFilter(material)}
                                className={`px-4 py-2 rounded-full font-semibold ${
                                    filter === material
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                } transition-colors`}
                            >
                                {material}
                            </motion.button>
                        ))}
                    </div>
                    <AnimatePresence>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredDesigns.map((design, index) => (
                                <motion.div
                                    key={design.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    <img
                                        src={design.src}
                                        alt={`Custom ${design.material} Name Plate Design ${design.id}`}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-primary">Design {design.id}</h3>
                                        <p className="text-gray-600">{design.material} Name Plate</p>
                                        <div className="flex space-x-2 mt-2">
                                            <motion.a
                                                href="#inquiry"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setFormData({ ...formData, design: design.id.toString() });
                                                    document.getElementById('inquiry').scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                                className="text-accent hover:underline"
                                            >
                                                Inquire Now
                                            </motion.a>
                                        </div>
                                        <br/>
                                        <div className="flex space-x-2 mt-2">
                                            <motion.a
                                                href={`https://wa.me/?text=Check%20out%20this%20name%20plate%20design%20${design.id}%20from%20Decorom!%20${encodeURIComponent(
                                                    window.location.origin + design.src
                                                )}`}
                                                target="_blank"
                                                whileHover={{ scale: 1.05 }}
                                                className="text-green-600 hover:underline"
                                            >
                                                Share
                                            </motion.a>
                                        </div>
                                        <br/>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatePresence>
                </div>
            </section>

            <section id="inquiry" className="py-16 bg-gray-100">
                <div className="container mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-8 text-primary"
                    >
                        Request a Custom Name Plate
                    </motion.h2>
                    <AnimatePresence>
                        {submitted && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-green-600 text-center mb-4"
                            >
                                Thank you for your inquiry! We’ll get back to you soon.
                            </motion.p>
                        )}
                    </AnimatePresence>
                    <motion.form
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg"
                    >
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mobile" className="block text-gray-700 font-medium">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                                required
                                pattern="[0-9]{10}"
                                placeholder="Enter 10-digit mobile number"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="design" className="block text-gray-700 font-medium">
                                Select Design
                            </label>
                            <select
                                id="design"
                                name="design"
                                value={formData.design}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                            >
                                <option value="">Choose a design (optional)</option>
                                {designs.map((design) => (
                                    <option key={design.id} value={design.id}>
                                        Design {design.id} ({design.material})
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-medium">
                                Additional Details
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                                rows="4"
                                placeholder="Describe your custom requirements"
                            ></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                        >
                            {loading ? 'Submitting...' : 'Submit Inquiry'}
                        </motion.button>
                    </motion.form>
                </div>
            </section>

            <section id="about" className="py-16 bg-white">
                <div className="container mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-8 text-primary"
                    >
                        About Decorom
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewp
                        ort={{ once: true }}
                        className="text-lg text-gray-700 max-w-2xl mx-auto"
                    >
                        Decorom specializes in crafting high-quality, custom name plates for homes and offices. With a passion for design and craftsmanship, we offer a wide range of styles to suit every taste. Contact us to create a unique name plate that reflects your personality.
                    </motion.p>
                </div>
            </section>

            <footer className="bg-primary text-white py-6">
                <div className="container mx-auto text-center">
                    <p>© 2025 Decorom Name Plates. All rights reserved.</p>
                    <p>Contact: info@decorom.in | +91-901-670-7658</p>
                </div>
            </footer>
        </div>
    );
}

export default App;