import styled from 'styled-components';

import { InformationTypes } from './index';

export default styled.h5`
    font-weight: 700;
    display: ${(props) => (props.active ? 'block' : 'none')};
    color: ${(props) => (props.type === InformationTypes.NORMAL ? 'black' : 'red')};
    margin: 0;
`;
