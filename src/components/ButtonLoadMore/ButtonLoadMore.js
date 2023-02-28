import { Button } from './ButtonLoadMore.styled';
import PropTypes from 'prop-types'

const ButtonLoadMore = ({ onBtnLoadMore }) => {
  return (
    <Button type="button" onClick={onBtnLoadMore}>
      Load More
    </Button>
  );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  onBtnLoadMore: PropTypes.func.isRequired,
}