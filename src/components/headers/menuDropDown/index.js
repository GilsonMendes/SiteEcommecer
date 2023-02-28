import React from "react";
import * as C from './menuDrop'


export default prosp => {
    return (
        <C.Container>
            <div>
                <span>Olá Gilson</span>
                <h3>Contas e Listas</h3>
                <ul>
                    <li>
                        <ul>
                            <li>
                                <div>

                                    <div className="box-colum1">
                                        <h3>Suas Listas</h3>
                                        <ul>
                                            <li>Lista de compras</li>
                                            <li>Lista de compras</li>
                                        </ul>
                                        <hr />
                                        <p>Criar uma lista de desejos</p>
                                    </div>
                                    <div className="box-colum2">
                                        <h3>Sua Conta</h3>
                                        <ul>
                                            <li>Sua conta</li>
                                            <li>Seus pedidos</li>
                                            <li>Sua lista de desejos</li>
                                            <li>Recomendados para você</li>
                                            <li>Programe e Poupe</li>
                                            <li>Sua assinaturas Prime</li>
                                            <li>Inscrições e assinaturas</li>
                                            <li>Gerencie seu conteúdo e dispositivo</li>
                                            <li>Seu Amazon Music</li>
                                            <li>Seu Prime Video</li>
                                            <li>Seu Kindle Unlimited</li>
                                            <li>Seu Amazon Drive em Amazon.com</li>
                                            <li>Seus aplicativos e dispositivos</li>
                                        </ul>

                                        <hr />
                                        <div className="footer">
                                            <p>Trocar de conta</p>
                                            <p>Sair da Conta</p>
                                        </div>

                                    </div>

                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </C.Container>
    )
}