import React from "react";
import Header from "./partials/header";
import IconGalery from "./partials/galery";

function IconApp() {
    return (
        <>
            <Header />
            <IconGalery />
        </>
    )
}

module.exports = {
    target: '#icon-app',
    app: IconApp
}