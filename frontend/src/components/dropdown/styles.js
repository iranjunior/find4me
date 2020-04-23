import styled from 'styled-components';

export const Container = styled.ul`
    list-style: none;
    background: #fff;
    padding: 1em;
    border-radius: 1em;
    box-sizing: content-box;
    box-shadow: 0px 0px 1em 0px #6c63ff;
    display: ${(props) => (props.active ? 'block' : 'none')};
    transition: all 0.5s ease;

`;
export const Item = styled.li`
    padding: .5em;
    :hover {
        background-color: rgba(0,0,0,0.1);
    }
`;
