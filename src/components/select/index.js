import React from 'react'
import * as C from '../styledComponent'



export default props => {
    return (
        <C.Container>
            <select >
                <option selected="selected" value="search-alias=aps">Todos os departamentos</option>
                <option value="search-alias=alexa-skills">Alexa Skills</option>
                <option value="search-alias=grocery">Alimentos e Bebidas</option>
                <option value="search-alias=mobile-apps">Apps e Jogos</option>
                <option value="search-alias=automotive">Automotivo</option>
                <option value="search-alias=baby">Bebês</option>
                <option value="search-alias=beauty">Beleza</option>
                <option value="search-alias=luxury-beauty">Beleza de Luxo</option>
                <option value="search-alias=fashion-luggage">Bolsas, Malas e Mochilas</option>
                <option value="search-alias=toys">Brinquedos e Jogos</option>
                <option value="search-alias=home">Casa</option>
                <option value="search-alias=popular">CD e Vinil</option>
                <option value="search-alias=computers">Computadores e Informática</option>
                <option value="search-alias=kitchen">Cozinha</option>
                <option value="search-alias=amazon-devices">Dispositivos Amazon</option>
                <option value="search-alias=dvd">DVD e Blu-Ray</option>
                <option value="search-alias=appliances">Eletrodomésticos</option>
                <option value="search-alias=electronics">Eletrônicos</option>
                <option value="search-alias=sporting">Esportes e Aventura</option>
                <option value="search-alias=hi">Ferramentas e Materiais de Construção</option>
                <option value="search-alias=videogames">Games</option>
                <option value="search-alias=mi">Instrumentos Musicais</option>
                <option value="search-alias=garden">Jardim e Piscina</option>
                <option value="search-alias=stripbooks">Livros</option>
                <option value="search-alias=digital-text">Loja Kindle</option>
                <option value="search-alias=office-products">Material para Escritório e Papelaria</option>
                <option value="search-alias=furniture">Móveis e Decoração</option>
                <option value="search-alias=pets">Pet Shop</option>
                <option value="search-alias=instant-video">Prime Video</option>
                <option value="search-alias=industrial">Produtos Industriais e Científicos</option>
                <option value="search-alias=specialty-aps-sns">Programe e Poupe</option>
                <option value="search-alias=fashion">Roupas, Calçados e Joias</option>
                <option value="search-alias=fashion-womens">&#160;&#160;&#160;Feminino</option>
                <option value="search-alias=fashion-mens">&#160;&#160;&#160;Masculino</option>
                <option value="search-alias=fashion-girls">&#160;&#160;&#160;Meninas</option>
                <option value="search-alias=fashion-boys">&#160;&#160;&#160;Meninos</option>
                <option value="search-alias=fashion-baby">&#160;&#160;&#160;Bebês</option>
                <option value="search-alias=hpc">Saúde e Cuidados Pessoais</option>
            </select>
        </C.Container>
    )
}