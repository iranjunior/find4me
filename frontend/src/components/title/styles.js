import styled from 'styled-components';

export default styled.h1`
    display: ${(props) => (props.show ? 'block' : 'none')};
@media only screen and (min-width: 700px) {
    
    font-size: 80px;
}
@media only screen and (max-width: 700px) {
    font-size: 20px;
    }

`;
