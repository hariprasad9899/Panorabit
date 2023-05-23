import React from 'react'
import './UserInfo.scss'

export default function UserInfo() {
    return (
        <div className="col-md-5 pt-3 user-info">
            <div className="row mb-2 justify-content-center">
                <img
                    className="img-row"
                    src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
                />
            </div>
            <div className="row justify-content-center text-center">
                <p className="user-name info-val">Leanne Graham</p>
            </div>
            <div className="row">
                <div className="row">
                    <p className="col-6 text-end info-attr">Username : </p>
                    <p className="col-6 text-start p-0 info-val">Bret</p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">e-mail : </p>
                    <p className="col-6 text-start p-0 info-val">
                        Sincere@april.biz
                    </p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">Phone : </p>
                    <p className="col-6 text-start p-0 info-val">999999999</p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">Website : </p>
                    <p className="col-6 text-start p-0 info-val">
                        leannegraham.com
                    </p>
                </div>
            </div>
            <div className="row text-center">
                <hr className="my-1 m-auto w-50" />
            </div>
            <div className="row text-center">
                <p className="info-attr">Company</p>
            </div>
            <div className="row">
                <div className="row">
                    <p className="col-6 text-end info-attr">Name : </p>
                    <p className="col-6 text-start p-0 info-val">
                        Romaguera-Crona
                    </p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">catchphrase : </p>
                    <p className="col-6 text-start p-0 info-val">
                        Multi-layered client-server neural
                    </p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">bs : </p>
                    <p className="col-6 text-start p-0 info-val">
                        harness real-time e-markets
                    </p>
                </div>
            </div>
        </div>
    )
}
