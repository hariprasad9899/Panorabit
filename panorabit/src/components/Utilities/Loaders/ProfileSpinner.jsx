import React from 'react'
import { Spinner } from 'react-bootstrap'

const ProfileSpinner = () => {
    return (
        <div className="profile-spinner-overlay">
            <div className="profile-spinner-content">
                <Spinner
                    animation="border"
                    variant="primary"
                    role="status"
                    style={{
                        height: '30px',
                        width: '30px',
                        borderWidth: '3px',
                    }}
                >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </div>
    )
}

export default ProfileSpinner
