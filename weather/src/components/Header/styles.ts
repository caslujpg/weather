import styled from 'styled-components';

export const Container = styled.header`
    position: absolute;
    z-index: 11;
    float: right;
    margin-top: 3%;
    margin-right: 2%;
    right: 50px;
`;

export const Content = styled.div`
    width: 120px;
    width: 80px;
    height: 30px;
    color: #d9d9d9;
    display: flex;
    align-items: center;

    .switch {
        visibility: hidden;
        position: absolute;
    }

    .switch + label {
        display: block;
        position: relative;
        cursor: pointer;
        outline: none;
        user-select: none;
    }

    .switch--shadow + label {
        width: 45%;
        height: 70%;
        top: 3%;
        padding-inline: 2%;
        padding-top: 2%;
        background-color: #d9d9d9;
        border-radius: 20px;
    }

    .switch--shadow + label:before,
    .switch--shadow + label:after {
        display: block;
        position: absolute;
        top: 2.5px;
        left: 3px;
        bottom: 0;
        content: "";
    }

    .switch--shadow + label:before {
        right: 0px;
        top: 0px;
        left: 0px;
        background-color: rgba(28, 36, 40, 0.49);;
        border-radius: 35px;
        transition: all 0.4s;
    }

    .switch--shadow + label:after {
        height: 75%;
        width: 44%;
        background-color: #fff;
        border-radius: 100%;
        transition: all 0.4s;
    }

    .switch--shadow:checked + label:before {
        background-color: #D2B3C1;
    }

    .switch--shadow:checked + label:after {
        transform: translateX(90%);
    }
`