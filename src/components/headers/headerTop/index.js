import React ,{}from "react";
import './header.css'
import PlaceIcon from '@mui/icons-material/Place';



export default props => {
    return (
        <div className="container">
            <div className="header">
                <div className="imagem-header"></div>
                <div className="location">
                    <p><h3>Enviar para Gilson</h3></p>
                    <p><h2><PlaceIcon className="iconLocation"/>Chapadinha 65500000</h2></p>
                </div>
                <div>
                    <form className="search">
                        <input type="text" />
                    </form>
                </div>
            </div>
        </div>
    )
}