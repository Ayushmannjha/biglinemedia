function Contact(params) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700">We would love to hear from you! Please reach out with any questions or feedback.</p>
            <form className="mt-6 w-full max-w-md">
                <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border rounded" />
                <textarea placeholder="Your Message" className="w-full p-2 mb-4 border rounded h-32"></textarea>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;