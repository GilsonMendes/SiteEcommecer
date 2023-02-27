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
                                    <div className="box-txt1">
                                        <p>
                                            sombra em volta de um elemento.
                                            Você pode especificar mais de um efeito,
                                            os separando com virgulas.
                                        </p>
                                    </div>
                                    <hr className="linha-div1" />

                                    <div className="box-txt1">
                                        <p>
                                            sombra em volta de um elemento.
                                            Você pode especificar mais de um efeito,
                                            os separando com virgulas.
                                        </p>
                                    </div>

                                    <hr className="linha-div2" />
                                    <div className="box-txt2">
                                        <p>
                                            sombra em volta de um elemento.
                                            Você pode especificar mais de um efeito,
                                            os separando com virgulas.
                                        </p>
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