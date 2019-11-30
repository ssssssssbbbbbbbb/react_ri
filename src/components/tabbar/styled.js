import styled from "styled-components"
export const TabbarContainer=styled.div`
width:100%;
position:fixed;
bottom:0;
left:0;
padding: 5px 0px;
    box-shadow: rgba(27, 55, 75, 0.08) 0px -1px 4px;
    background-color: rgb(255, 255, 255);
    font-family: "Microsoft YaHei";
    font-size: 0.26rem;
    text-align: center;
    color: rgb(27, 55, 75);
    z-index: 99;
    border-top: 1px solid rgb(245, 245, 245);
ul{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .active{
            color:#c33;
        }
    li{
        flex:1;
        display:flex;
        align-items:center;
        flex-direction:column;
        text-align:center;
       height:50px;
 
        color: #3f2021;
        i{
            font-size: 28px !important;
        }
        span{
            font-size: 14px;
            text-align:center;
        }
    }
}
`