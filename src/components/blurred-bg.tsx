import React from 'react';

const BlurredBgComponent = ({ children = null, heroText }: { children?: React.ReactNode, heroText?: string }) => {
    return (
        <div className="blurred-bg-container">
            <section
                className="relative h-[18.75rem] md:h-[25rem] lg:h-[30rem]"
                style={{
                    backgroundImage: "url('/food.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}
            >
                <div className="bg-black opacity-40 transition-all duration-300 absolute inset-0 z-10 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h1 className="text-lg sm:text-4xl lg:text-7xl font-extrabold text-center text-white">{heroText}</h1>
                </div>
                {children && <div className="content">{children}</div>}
            </section>
        </div>
    );
};

export default BlurredBgComponent;