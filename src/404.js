import React from "react"
import Img4040 from './assets/img/404.png';
function erro404() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h1>Ops, quebrou tudo :O</h1>
            <img src={Img4040} alt="not found"></img>
            <p>
                <a href="/">Você pode voltar pra home :)</a>
            </p>



        </div>
    );
};

export default erro404;