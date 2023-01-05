import React from "react";
import Radium from "radium";

const itemStyle = {
    color: "white",
};

const linkStyle = {
    color: "#CCC",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    marginRight: "24px",
    transition: "0.1s ease",

    ':hover': {
        color: "#FFF",
        transition: "0.1s ease",
        textDecoration: 'none',
    }
};

const UnstyledNavbar = () => {
    return (
        <>
            <nav style={{
                width: "100%",
                height: "80px",
                left: "0px",
                top: "53px",
                display: "flex",

                background: "linear-gradient(90deg, #923086 0.18%, #D03A8C 100%)",
                borderRadius: "0px 0px 16px 16px",
            }}>
                <ul style={{
                    listStyleType: "none",
                    width: "100%",
                    height: "100%",

                    display: "flex",
                    alignItems: "center",
                }}>
                    <li style={itemStyle}><a style={linkStyle} key="1" href="/#">Awards</a></li>
                    <li style={itemStyle}><a style={linkStyle} key="2" href="/#">Send</a></li>
                    <li style={itemStyle}><a style={linkStyle} key="3" href="/#">About</a></li>
                    <div
                        className="spacer" style={{
                            flex: "1 1 auto",
                        }}
                    >
                    </div>
                    <button
                        className="btn button btn-primary"
                        type="button" style={{
                            marginRight: "20px",
                            backgroundColor: "#6159B4",
                            border: "2px solid #524b99",
                            borderRadius: "10px",
                            fontSize: "16px",
                            fontWeight: "600",

                            ':hover': {
                                backgroundColor: '#524b99',
                            }
                        }}
                    >
                        Connect Wallet
                    </button>
                </ul>
            </nav>
        </>
    );
}

export let Navbar = Radium(UnstyledNavbar);
