import styled from "styled-components";

export const Container = styled.div`
   
    select{

        display: flex;
        margin-top: -1px;
        align-items: center;
        justify-content: center;
        border-color: '#dadada';
        width: 66px;
        height: 38px;
        outline: 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    input{
        width: 390px;
        display: flex;
        height: 34px;
        outline: 0;
        border: 0;
    }

    button{
        border: 0;
        background-color:rgb(254, 189, 105);
        display: flex;
        margin-top: -1px;
        height: 36px;
        width: 45px;
        align-items: center;
        justify-content: center;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;  
    }

    button:hover{

        background-color:rgb(243, 168, 71);

    }

    form:focus-within{
        background-color: orange;
    }

    select>form:focus{
        border: 2px solid;
        background-color: '#FFF';
    } 
   
    
 
`;