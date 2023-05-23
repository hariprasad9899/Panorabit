import React from 'react'
import './AddressInfo.scss'
import GoogleMap from './GoogleMap'

export default function AddressInfo({ addressInfo }) {
    return (
        <div className="col-md-7 pt-3 address-info">
            <div className="row">
                <p className="info-attr ms-4">Address : </p>
            </div>
            <div className="row">
                <div className="row">
                    <p className="col-4 text-end info-attr">Street : </p>
                    <p className="col-8 text-start info-val">
                        {addressInfo.street || ''}
                    </p>
                </div>
                <div className="row">
                    <p className="col-4 text-end info-attr">Suite : </p>
                    <p className="col-8 text-start info-val">
                        {addressInfo.suite || ''}
                    </p>
                </div>
                <div className="row">
                    <p className="col-4 text-end info-attr">City : </p>
                    <p className="col-8 text-start info-val">
                        {addressInfo.city || ''}
                    </p>
                </div>
                <div className="row">
                    <p className="col-4 text-end info-attr">Zipcode : </p>
                    <p className="col-8 text-start info-val">
                        {addressInfo.zipcode || ''}
                    </p>
                </div>
            </div>
            <div className="row w-100 ms-auto">
                <GoogleMap
                    lat={addressInfo.geo.lat || '-37.3159'}
                    lng={addressInfo.geo.lng || '81.1496'}
                />
            </div>
            <div className="d-flex justify-content-end mt-1 lat-lng text-end">
                <div className="lat">
                    <span className="info-attr lat-lng">Lat: </span>
                    <span className="info-val">
                        {addressInfo.geo.lat || '-37.3159'}
                    </span>
                </div>
                <div className="lng">
                    <span className="info-attr lat-lng">Lng: </span>
                    <span className="info-val">
                        {addressInfo.geo.lng || '81.1496'}
                    </span>
                </div>
            </div>
        </div>
    )
}
