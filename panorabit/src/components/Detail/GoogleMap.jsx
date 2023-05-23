import React from 'react'
import GoogleMapReact from 'google-map-react'

export default function GoogleMap({ lat, lng }) {
    return (
        <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15563.894212499641!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae71a1362a11cd%3A0x47e9beba6dae0bae!2sAttibele%2C%20Karnataka%20562107!5e0!3m2!1sen!2sin!4v1684826161747!5m2!1sen!2sin`}
            width={600}
            height={300}
            style={{ border: 0, borderRadius: '2rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    )
}
