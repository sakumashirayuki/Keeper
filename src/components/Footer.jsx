import React from 'react';

function Footer(){
    const d = new Date();
    return <footer><p>copyright SakumaShirayuki ⓒ {d.getFullYear()}</p>
    </footer>;
}

export default Footer