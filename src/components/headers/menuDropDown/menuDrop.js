import styled from 'styled-components'


export const Container = styled.div`
   
   div{
    margin-left: 20px;
   }
   
   div li{
      display: inline-block;
   }

   div li ul{
      position: absolute;
      display: none;
      left: 50%;
      right: -0px;
   }

   div li ul li div{

      border: 1px solid red;
      width: 500px;
      height: 450px;
      background-color: gray;
      
   }

   div:hover ul{
      display: block;
      
   }


`