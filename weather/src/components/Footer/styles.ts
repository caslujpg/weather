import styled from 'styled-components'

export const Container = styled.footer`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        bottom: 5%;
        width: 100%;
        color: #FFFFFF;

        .lenguageText{
              display: flex;
              margin-top: 10px;
        }
        
        .lenguageImg{
                display: flex;
                gap: 10px;
        }

        .hover{
                cursor: pointer;
        }
`