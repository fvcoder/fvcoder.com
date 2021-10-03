import React from "react";
import ReactDOM from "react-dom";
import Icon from './icons';

const module = [
    Icon
]

window.onload = () => {
    module.forEach(x => {
        if (document.querySelector(x.target)) {
            ReactDOM.render(<x.app />, document.querySelector(x.target))
        }
    })
}