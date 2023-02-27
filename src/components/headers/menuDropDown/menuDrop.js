import styled from 'styled-components'


export const Container = styled.div`
   
   div{
    margin-left: -20px;
    margin-top: 10px;
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

      border: 1px solid rgb(238, 238, 238);
      width: 500px;
      height: 450px; 
      box-shadow: 5px 5px 5px rgb(238, 238, 238);
   }

   div:hover ul{
      display: block;
      
   }

   .box-txt1{
      box-shadow: none;
      border: 0;
      margin-left: 20px;
      width: 208px;
      height: auto;
      color: black;
   }

   .linha-div1 {
    position: absolute;
    width: 208px;
    margin-left: 20px;
    background-color: black;
    border: 0;
    height: 1px;
  }


  .linha-div2 {
    position: absolute;
    width: 1px;
    border: 0;
    height: 415px;
    background-color: black;
    left: 37%;
    margin-top: -23%;
  }

  .box-txt2{
   box-shadow: none;
    position: absolute;
    left: 37%;
    margin-left: 20px;
    width: 208px;
    height: auto;
    color: black;
  }

.linha-div3 {
    width: 208px;
    margin-right: 20px;
    background-color: black;
    border: 0;
    height: 1px;
}


`