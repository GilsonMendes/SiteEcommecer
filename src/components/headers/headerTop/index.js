import React ,{}from "react";
import './header.css'
import PlaceIcon from '@mui/icons-material/Place';
import Select from "../../select";
import * as C from '../../styledComponent'
import SearchButton from "../../search/button";
import SearchInput from '../../search/searchInput'
import MenuDropDown from "../menuDropDown";
import ButtonDevo from "../buttonDevo";
import Carrinho  from "../carinhoCompra";



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
                        <SearchInput/>
                        <SearchButton/>
                        <MenuDropDown/>
                        <ButtonDevo/>
                        <Carrinho/>
                        
                    </form>
               </C.Container>
            </div>
        </div>
    )
}