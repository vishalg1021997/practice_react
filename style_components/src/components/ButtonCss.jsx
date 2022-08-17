import styled from "styled-components"

const CustomButton = styled.button`
    padding:7px 12px;
    color: ${({ btnText }) => (btnText === 'Primary' ? 'white' : btnText === 'Link' ? '#2591fc' : 'black')};
    background-color:${({ btnText }) => (btnText === 'Primary' ? '#2591fc' : 'white')};
    border:${({ btnText }) => (btnText === 'Default' ? '1px solid #d9d9d9' : btnText === 'Dashed' ? '1px dashed #d9d9d9' : 'none')};
    border-radius:2px;
    font-size:15px;
    width: 126px;
    text-align: center;
    margin:10px;
    cursor:pointer;
`;

export { CustomButton }