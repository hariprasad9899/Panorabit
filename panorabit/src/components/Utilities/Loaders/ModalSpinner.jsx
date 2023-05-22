import React from 'react'
import { Spinner } from 'react-bootstrap'

const ModalSpinner = () => {
    return (
        <div className="modal-spinner-overlay">
            <div className="modal-spinner-content">
                <Spinner animation="border" variant="primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </div>
    )
}

export default ModalSpinner
