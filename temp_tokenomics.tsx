`use client`
import React from 'react';
import Image from 'next/image';

const TokenomicsSection: React.FC = () => {
    return (
        <section id="tokenomics" className="relative py-20 text-black" style={{ backgroundImage: "url('/images/bgimg.jpg')", backgroundSize: 'cover' }}>

            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-black opacity-60"></div>


            <div className="relative z-10 container mx-auto flex flex-col items-center justify-center">
                <div className="animate-spin-slow"> {/* Added animation container */}
                    <div className="grid grid-cols-3 gap-4 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-black">
                            <h2 className="text-3xl font-bold mb-2">TOKEN NAME</h2>
                            <p className="text-2xl">coin</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-black">
                            <h2 className="text-3xl font-bold mb-2">SYMBOL</h2>
                            <p className="text-2xl">$COIN</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-black">
                            <h2 className="text-3xl font-bold mb-2">LIQUIDITY</h2>
                            <p className="text-2xl">BURNED</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10"> {/* Centered image container */}
                    <Image src="/images/msitoken.png" alt="Tokenomics Visual" width={200} height={200} className="animate-fade-in-slow" />
                </div>

            </div>

            <style jsx>{`

                .animate-spin-slow {
                    animation: spin 15s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .animate-fade-in-slow {
                    animation: fadein 5s ease-in-out infinite alternate;
                }

                @keyframes fadein {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </section>
    );
};

export default TokenomicsSection;
