import React, { useState, useEffect } from 'react';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const content = [
        {
            title: "Best Chicken Makhani",
            description: "Try it out",
            details: "Exercitation ex magna anim aliqua occaecat exercitation. Culpa non velit occaecat occaecat sint magna mollit sunt Lorem ipsum officia reprehenderit labore ut. Mollit non irure ex reprehenderit do in in reprehenderit.",
            image: "/assets/hero/makhani.jpg"
        },
        {
            title: "Delicious Pasta",
            description: "Taste the best",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
            image: "/assets/hero/meatballs2.jpg"
        },
        {
            title: "Tasty Sweets",
            description: "Indulge yourself",
            details: "Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
            image: "/assets/hero/Palak.jpg"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [content.length]);

    const goToNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
    };

    const goToPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
    };

    return (
        <div className="hero_wrapper">
            <div className="container min-vh-100 text-white d-flex justify-content-center align-items-center">
                <div className="hero-slider">
                    <div className='hero_content'>
                        <LocalDiningIcon /> <small>New Yummy</small>
                        <h3>{content[activeIndex].title}</h3>
                        <p>{content[activeIndex].description}</p>
                        <div className=''>
                            {content[activeIndex].details}
                        </div>
                    </div>
                    <div className='hero_slider_img'>
                        <img src={content[activeIndex].image} alt={content[activeIndex].title} />
                    </div>
                    <button className="arrow left-arrow" onClick={goToPrev}>◀</button>
                    <button className="arrow right-arrow" onClick={goToNext}>▶</button>
                    <div className="dots">
                        {content.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
