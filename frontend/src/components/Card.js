import React from "react";

export function Card({ title, value, image }) {
    if (!value) {
        value = "0,00"
    }

    return (
        <>
            <div className="card" style={{ width: "18rem", margin: "30px" }}>
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-title font-weight-bold">{title}</p>
                    <div style={{
                        display: "flex"
                    }}>
                        <h4 className="card-text" style={{
                            flex: "1 1 auto"
                        }}>{value} MHT</h4>
                        <a href="/#" className="btn btn-primary">Redeem</a>
                    </div>
                </div>
            </div>
        </>
    );
}
