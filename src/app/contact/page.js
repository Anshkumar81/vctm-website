import React from 'react'
import './page.css';

function page() {
    return (
        <div>
            <Header />

            <div className="contact-container">
                <div className="contact-wrapper">
                    <div className="contact-left">
                        <h1 className="contact-title">Contact Us</h1>
                        <p className="contact-description">
                            Got a question about our services? Need help?
                            Have some feedback? Let us know and we’ll get back to you soon.
                        </p>

                        <div className="contact-buttons">
                            <button className="btn black-btn">📞 Call Us</button>
                            <button className="btn black-btn">✉ Email Us</button>
                        </div>

                        <form className="contact-form">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name" />

                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />

                            <label>Text</label>
                            <textarea rows="4" placeholder="Write your message"></textarea>

                            <button type="submit" className="btn black-btn full-btn">
                                SUBMIT
                            </button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default page