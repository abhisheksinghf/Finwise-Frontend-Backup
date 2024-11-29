import React from 'react';

const ContactFooter = () => {
    const items = [
        { icon: 'fas fa-envelope', text: 'contact@finwise.com' },
        { icon: 'fas fa-phone', text: '+44 7741-819-337' },
        { icon: 'fas fa-map-marker-alt', text: 'Glasgow, UK' },
        { icon: 'fab fa-youtube', text: 'YouTube' },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-black">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="w-full h-[120px] rounded-[10px] flex flex-col justify-center items-center p-4 shadow-lg relative group transition-transform transform hover:scale-105 cursor-pointer"
                    style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                >
                    <div
                        className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                            zIndex: 0,
                        }}
                    ></div>
                    <div className="z-10 text-center">
                        <i className={`${item.icon} text-3xl text-white mb-2`}></i>
                        <p className="text-white text-sm">{item.text}</p>
                    </div>
                    <div
                        className="absolute -top-12 w-[260px] p-4 rounded-lg bg-[#070707] text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 text-center"
                        style={{
                            background: 'rgba(0, 0, 0, 0.8)',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(5px)',
                            WebkitBackdropFilter: 'blur(5px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                    >
                        <i className={`${item.icon} text-lg text-purple-400 mb-1`}></i>
                        <p className="text-sm">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactFooter;
