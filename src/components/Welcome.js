import React from 'react';
import PackageInfo from './../../package.json';

export const Welcome = () => {
    return (
        <div
            className="welcome__container"
            style={{background: "black", width: "900px 450px", color: "white"}}
        >

            < h2 className="welcome__heading">Elizabeth Design System</h2>
            <h4 className="welcome__heading welcome__heading--subtitle">{`React v${PackageInfo.version}`}</h4>

        </div>
    );
};
