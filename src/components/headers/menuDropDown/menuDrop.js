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
   }

   div li ul li div{
      border: 1px solid red;
      width: 500px;
      height: 450px;
   }

   div:hover ul{
      display: block;
      
   }


`