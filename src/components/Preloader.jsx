import React from "react";

function Preloader() {
    return <div classname="preloader-wrapper big active">
        <div classname="spinner-layer spinner-blue-only">
            <div classname="circle-clipper left">
                <div classname="circle"></div>
            </div><div classname="gap-patch">
                <div classname="circle"></div>
            </div><div classname="circle-clipper right">
                <div classname="circle"></div>
            </div>
        </div>
    </div>
}

export { Preloader }