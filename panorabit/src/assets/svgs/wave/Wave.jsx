import React from 'react'
import WaveGradientWeb from './webwave/WaveGradientWeb'
import WaveShadowWeb from './webwave/WaveShadowWeb'

export default function Wave() {
    return (
        <div className="position-relative wave">
            <div className="wave-web">
                <WaveShadowWeb />
                <WaveGradientWeb />
            </div>
        </div>
    )
}
