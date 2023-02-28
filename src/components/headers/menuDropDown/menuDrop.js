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
      background-color: beige;
      border: 1px solid rgb(238, 238, 238);
      width: 500px;
      height: 450px; 
      box-shadow: 5px 5px 5px rgb(238, 238, 238);
   }

   div:hover ul{
      display: block;
      
   }

   .box-colum1{
      position: absolute;
      color: black;
      left: 0%;
      margin-top: 0%;
      width: 250px;
      background-color: aqua;
   }
   .box-colum1 ul{
      left: 5%;
   }
   .box-colum1 ul li{
      display: flex;
      padding: 5px;
   }

   .box-colum1 ul li:hover{
      text-decoration: 2px underline red;
   }

   .box-colum1 hr{
      width: 220px;
      margin-top: 25%;
   }

   p{
      margin-left: 15px;
      padding: 2px;
   }

   p:hover{
    text-decoration: 2px underline red;
   }

   .box-colum2{
      color: black;
      position: absolute;
      background-color: aliceblue;
      right: 22%;
      margin-top: 0%;
      width: 250px;
   }

   .box-colum2 ul{
      left: 5%;
   }

   .box-colum2 ul li{
      display: flex;
      padding: 4px;
   }

   .box-colum2 ul li:hover{
      text-decoration: 2px underline red;
   }
   .box-colum2 hr{
      position: absolute;
      width: 220px;
      bottom: 42px;
      left: 10px;
   }

   .footer{
      color: black;
      position: absolute;
      background-color: none;
      height: 40px;
      width: 240px;
      bottom: 1px;
      padding: 4px;
      margin: 0 auto;
   }

`