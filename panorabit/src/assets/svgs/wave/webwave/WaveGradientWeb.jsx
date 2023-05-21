import React from 'react'

export default function WaveGradientWeb() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="position-absolute"
            viewBox="0 0 1440 320"
        >
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c6de1" />
                    <stop offset="20%" stopColor="#7163e6" />
                    <stop offset="40%" stopColor="#6559ec" />
                    <stop offset="60%" stopColor="#564ff1" />
                    <stop offset="80%" stopColor="#5243ee" />
                </linearGradient>
            </defs>
            <path
                fill="url(#gradient)"
                fillOpacity="5"
                d="M0,160L40,181.3C80,203,160,245,240,256C320,267,400,245,480,218.7C560,192,640,160,720,165.3C800,171,880,213,960,245.3C1040,277,1120,299,1200,277.3C1280,256,1360,192,1400,160L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
        </svg>
    )
}
