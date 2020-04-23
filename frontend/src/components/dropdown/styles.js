import styled from 'styled-components';

export const Container = styled.ul`
    display: ${(props) => (props.active ? 'block' : 'none')};
    width: 100%;
    margin: 0em;
    list-style: none;
    background: #fff;
    padding: 1em;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    box-sizing: content-box;
    box-shadow: 0px 0px 0.2em 0px darkgrey;
    transition: all 0.5s ease;

`;
export const Item = styled.li`
    padding: .5em;
    color: #777;
    :hover {
        background-color: rgba(0,0,0,0.1);
    }
`;
