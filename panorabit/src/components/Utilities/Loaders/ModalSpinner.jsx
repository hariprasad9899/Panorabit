import React from 'react'
import { Spinner } from 'react-bootstrap'

const ModalSpinner = () => {
    return (
        <div className="modal-spinner-overlay">
            <div className="modal-spinner-content">
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

export default ModalSpinner
