import React from "react";
import { Card } from "./Card";

export const Content = (props) => {
    return (
        <>
            <div style={{
                backgroundColor: "#F0F0F0",
                minWidth: "100%",
                minHeight: "100%",
            }}>
                {props.children}
                <div className="cardsContainer" style={{
                    backgroundColor: "#F0F0F0",
                    minWidth: "100%",
                    minHeight: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}>

                    <Card title="Allegro 50PLN" value="5,00" image="https://a.allegroimg.com/s720/03444d/5fbfc8ff4da986b370a7d62997c3/Karta-Podarunkowa-Prezent-50-zl" />
                    <Card title="Allegro 50PLN" value="5,00" image="https://a.allegroimg.com/s720/03444d/5fbfc8ff4da986b370a7d62997c3/Karta-Podarunkowa-Prezent-50-zl" />
                    <Card title="Allegro 50PLN" value="5,00" image="https://a.allegroimg.com/s720/03444d/5fbfc8ff4da986b370a7d62997c3/Karta-Podarunkowa-Prezent-50-zl" />
                    <Card title="Allegro 50PLN" value="5,00" image="https://a.allegroimg.com/s720/03444d/5fbfc8ff4da986b370a7d62997c3/Karta-Podarunkowa-Prezent-50-zl" />
                    <Card title="Allegro 50PLN" value="5,00" image="https://a.allegroimg.com/s720/03444d/5fbfc8ff4da986b370a7d62997c3/Karta-Podarunkowa-Prezent-50-zl" />
                    <Card title="Allegro 50PLN" value="5,00" image="https://a.allegroimg.com/s720/03444d/5fbfc8ff4da986b370a7d62997c3/Karta-Podarunkowa-Prezent-50-zl" />
                </div>
            </div>
        </>
    );
}

