import { Button } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ onBtnLoadMore }) => {
  return (
    <Button type="button" onClick={onBtnLoadMore}>
      Load More
    </Button>
  );
};

export default ButtonLoadMore;
