import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, Title, CardHeader, CardContent, Content, CardFooter, Chip,
} from './styles';

const Cards = ({ data, handleClick }) => {
  const [animation, setAnimation] = useState(false);
  const handleHover = () => {
    setAnimation(true);
  };
  const handleBlur = () => {
    setAnimation(false);
  };
  return (
    <Card onMouseEnter={handleHover} onMouseLeave={handleBlur} onClick={handleClick}>
      <CardHeader animation={animation} photo="https://avatars1.githubusercontent.com/u/44737846?v=4" />
      <CardContent animation={animation}>
        <Title>{ data.name }</Title>
        <Content>{ data.description }</Content>
        <CardFooter animation={animation}>
          {data.keywords.map((keyword) => <Chip key={keyword}>{keyword}</Chip>)}
        </CardFooter>
      </CardContent>
    </Card>
  );
};
Cards.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func,
};

Cards.defaultProps = {
  handleClick: () => {},
};
export default memo(Cards);
