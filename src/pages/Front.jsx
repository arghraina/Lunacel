import React, { useState, useRef, useEffect } from 'react'
import assets from '../assets/assets';

const Front = () => {
    const [active, setActive] = useState('about');
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null);

    // For this project , I am using Local Storage only... In real world , we can use some database like MongoDB, or MySQL.
    useEffect(() => {
        const storedImages = localStorage.getItem('userGalleryImages');
        if (storedImages) {
            try {
                const loadedImages = JSON.parse(storedImages);
                setImages(loadedImages || []);
            } catch (error) {
                console.error("Error loading images from localStorage:", error);
                setImages([]);
            }
        }
    }, []);

    const updateLocalStorage = (newImages) => {
        localStorage.setItem('userGalleryImages', JSON.stringify(newImages));
        setImages(newImages);
    };

    // --- Add Image Logic ---
    const handleAddImage = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newImage = e.target.result;
                const newImages = [...images, newImage];
                updateLocalStorage(newImages);
            };
            reader.readAsDataURL(file);
        }
        event.target.value = null;
    };

    const galleryIsEmpty = images.length === 0;

    return (
        <div
            style={{ backgroundColor: "oklch(0.27 0 0)" }}
            className='flex h-screen font-sans'
        >
            {/* Custom Message Box */}
            <div
                id="gallery-message"
                className="fixed top-5 left-1/2 transform -translate-x-1/2 p-3 bg-blue-500 text-white rounded-lg shadow-xl z-50 transition-all duration-300 opacity-0 scale-90"
            ></div>

            {/* Left Side Dummy Box */}
            <div className='w-full sm:w-[90%] md:w-[100%] lg:w-[100%] xl:w-[90%] 2xl:w-[100%]'>
                <div
                    className='border border-blue-300 m-9 h-[90%] rounded-[30px] flex items-center justify-center'
                    style={{ backgroundColor: "oklch(43.9% 0 0)" }}
                >
                    <span className='text-white font-semibold text-[40px]'>
                        This is dummy box.
                    </span>
                </div>
            </div>

            {/* Right Side - Main Content */}
            <div className='text-white w-full lg:w-[100%] flex flex-col h-full overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent'>

                {/* Top Section */}
                <div
                    style={{ backgroundColor: "oklch(37.3% 0.034 259.733)" }}
                    className='shadow-[5px_5px_5px_black] m-4 sm:m-9 rounded-[30px] flex flex-col lg:h-[50%] pb-6'
                >
                    <img
                        className='hover:cursor-pointer ml-4 mt-4 w-6 h-6 object-contain'
                        src={assets.help}
                        alt=""
                    />

                    <div className='shadow-[3px_10px_15px_theme(colors.gray.600)] flex flex-col h-[120px] mb-4 lg:flex-row md:h-[100px] lg:h-[20%] w-[90%] sm:w-[85%] mx-auto mt-1 items-center justify-center lg:justify-around bg-black rounded-[20px] p-2'>
                        {/* About Me Button */}
                        <button
                            onClick={() => setActive('about')}
                            className={active === 'about'
                                ? `w-full lg:w-[25%] my-1 py-1 bg-gray-600 rounded-full shadow-lg`
                                : `w-full lg:w-[25%] my-1 py-1 hover:rounded-[20px] hover:bg-gray-900 transition-all duration-300 hover:shadow-[4px_4px_60px_black]`}
                        >
                            About Me
                        </button>

                        {/* Experiences Button */}
                        <button
                            onClick={() => setActive('exp')}
                            className={active === 'exp'
                                ? `w-full lg:w-[35%] my-1 py-1 bg-gray-600 rounded-full shadow-lg`
                                : `w-full lg:w-[35%] my-1 py-1 hover:rounded-[20px] hover:bg-gray-900 transition-all duration-300 hover:shadow-[4px_4px_60px_black]`}
                        >
                            Experiences
                        </button>

                        {/* Recommended Button */}
                        <button
                            onClick={() => setActive('rec')}
                            className={active === 'rec'
                                ? `w-full lg:w-[35%] my-1 py-1 bg-gray-600 rounded-full shadow-lg`
                                : `w-full lg:w-[35%] my-1 py-1 hover:rounded-[20px] hover:bg-gray-900 transition-all duration-300 hover:shadow-[4px_4px_60px_black]`}
                        >
                            Recommended
                        </button>
                    </div>

                    <div className='text-md font-semibold mt-[0.5px] px-6 text-sm leading-relaxed'>
                        Hello! I am Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. <br /><br/>
                        I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters—Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                    </div>
                </div>

                {/* Divider */}
                <hr style={{ width: "80%", marginLeft: "11%" }} />

                {/* Bottom Section - Image Gallery */}
                <div style={{ backgroundColor: "oklch(37.3% 0.034 259.733)" }} className='shadow-[5px_5px_5px_black] m-4 sm:m-9 mt-4 rounded-[30px] flex flex-col pb-6'>
                    <img
                        className='hover:cursor-pointer mt-4 ml-4 w-6 h-6 object-contain'
                        src={assets.help}
                        alt=''
                    />

                    {/* Hidden File Input */}
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleAddImage}
                    />

                    <div className='flex flex-col lg:flex-row flex-wrap items-center justify-start gap-4 mt-5 px-6'>

                        {/* GALLERY Label */}
                        <span className='shadow-[1px_1px_20px_theme(colors.gray.900)] rounded-[20px] font-semibold text-[20px] py-2 text-center w-full sm:w-auto px-6 inline-block bg-black hover:cursor-default'>
                            GALLERY
                        </span>

                        {/* + ADD IMAGE Button */}
                        <span
                            style={{ backgroundColor: "oklch(55.4% 0.046 257.417)" }}
                            className='ml-0 sm:ml-[10%] lg:ml-[25%] border border-gray-300 shadow-[3px_8px_15px_black] rounded-[40px] font-semibold text-[20px] py-2 text-center w-full sm:w-auto px-6 inline-block hover:cursor-pointer hover:bg-gray-900 transition-colors duration-300'
                            onClick={() => fileInputRef.current.click()}
                        >+ ADD IMAGE</span>

                        {/* Arrow Buttons */}
                        <div className='flex space-x-2 mt-4 sm:mt-0 lg:ml-auto'>
                            {/* Left Arrow */}
                            <span
                                onClick={() => {
                                    const container = document.getElementById('gallery-container');
                                    if (container) container.scrollLeft -= 300;
                                }}
                                style={{ backgroundColor: "oklch(20% 0 0)" }}
                                className={`shadow-[1px_2px_30px_black] border border-gray-300 rounded-full text-center h-8 w-8 flex items-center justify-center hover:cursor-pointer hover:bg-blue-600 transition-colors duration-300 ${galleryIsEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >←</span>

                            {/* Right Arrow */}
                            <span
                                onClick={() => {
                                    const container = document.getElementById('gallery-container');
                                    if (container) container.scrollLeft += 300;
                                }}
                                style={{ backgroundColor: "oklch(20% 0 0)" }}
                                className={`shadow-[1px_2px_30px_black] border border-gray-300 rounded-full text-center h-8 w-8 flex items-center justify-center hover:cursor-pointer hover:bg-blue-600 transition-colors duration-300 ${galleryIsEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >→</span>
                        </div>
                    </div>

                    {/* --- HORIZONTAL SCROLLABLE IMAGE GALLERY --- */}
                    <div className='mt-6 mx-6 p-4 border border-dashed border-gray-500 rounded-lg bg-gray-800 h-full min-h-[150px]'>
                        {galleryIsEmpty ? (
                            <p className='text-gray-400 text-center py-8'>
                                Click '+ ADD IMAGE' to start your gallery.
                            </p>
                        ) : (
                            <div
                                id="gallery-container"
                                className='flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent scroll-smooth'
                                style={{ scrollBehavior: 'smooth' }}
                            >
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        className='relative flex-shrink-0 w-[150px] h-[150px] overflow-hidden rounded-lg shadow-md hover:scale-[1.03] transition-transform duration-200'
                                    >
                                        <img
                                            src={src}
                                            alt={`Gallery item ${index + 1}`}
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Front;