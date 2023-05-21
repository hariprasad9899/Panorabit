import React from 'react'
import './Wave.scss'
import WaveGradientWeb from './webwave/WaveGradientWeb'
import WaveShadowWeb from './webwave/WaveShadowWeb'
import WaveShadowMob from './mobwave/WaveShadowMob'
import WaveGradientMob from './mobwave/WaveGradientMob'

export default function Wave() {
    return (
        <div className="position-relative wave">
            <div className="wave-web">
                <WaveShadowWeb />
                <WaveGradientWeb />
            </div>
            <div className="wave-mob">
                <WaveShadowMob />
                <WaveGradientMob />
            </div>
        </div>
    )
}
