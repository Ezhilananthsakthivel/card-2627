import React from "react";
import pricing from "./pricing.json";
import Pricing from "./Pricing";
import "./app.css"

function app() {
    return (
        <section className="pricing py-5">
            <div className="container">
                <div className="row">
                    {pricing.map((price) => (
                        <Pricing key={price.name} {...price} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default app;