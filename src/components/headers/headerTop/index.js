import React ,{}from "react";
import './header.css'
import PlaceIcon from '@mui/icons-material/Place';
import Select from "../../select";
import * as C from '../../styledComponent'
import Search from "../../search";



export default props => {
    return (
        <div className="container">
            <div className="header">
                <div className="imagem-header"></div>
                <div className="location">
                    <p><h3>Enviar para Gilson</h3></p>
                    <p><h2><PlaceIcon className="iconLocation"/>Chapadinha 65500000</h2></p>
                </div>
               <C.Container>
                    <form className="search">
                        <Select/>
                        <input type='text'/>
                        <Search/>
                    </form>
               </C.Container>
            </div>
        </div>
    )
}