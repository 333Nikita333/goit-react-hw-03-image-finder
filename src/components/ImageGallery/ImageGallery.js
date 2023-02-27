import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryBox } from './ImageGallery.styled';
import { fetchImagesByName } from 'services/imagesApi';
import ButtonLoadMore from 'components/ButtonLoadMore';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component {
  state = {
    status: Status.IDLE,
    error: null,
    page: 1,
    images: [],
    totalHits: null,
  };

  async componentDidUpdate(prevProps, _) {
    try {
      const prevImgName = prevProps.searchQuery;
      const nextImgName = this.props.searchQuery;

      if (prevImgName !== nextImgName) {
        this.setState({
          images: [],
          page: 1,
          status: Status.PENDING,
        });

        const images = await fetchImagesByName(1, nextImgName);

        this.setState({
          page: this.state.page + 1,
          status: Status.RESOLVED,
          images: images.hits,
          totalHits: images.totalHits,
        });
      }
    } catch (error) {
      this.setState({
        error,
        status: Status.REJECTED,
      });
    }
  }

  onBtnLoadMore = () => {
    const imgQuery = this.props.searchQuery;
    const nextPage = this.state.page;

    this.setState({
      status: Status.PENDING,
    });

    if (imgQuery !== '') {
      fetchImagesByName(nextPage, imgQuery)
        .then(nextImages => {
          this.setState({
            page: this.state.page + 1,
            status: Status.RESOLVED,
            images: [...this.state.images, ...nextImages.hits],
          });
        })
        .catch(error => {
          this.setState({
            error,
            status: Status.REJECTED,
          });
        });
    }
  };

  onCardClick = e => {
    if (e.currentTarget !== e.target) {
      const currentImageUrl = e.target.currentSrc;
      const imageArr = this.state.images.filter(
        ({ webformatURL }) => webformatURL === currentImageUrl
      );
      const largeImageURL = imageArr[0].largeImageURL;
      const imageTags = imageArr[0].tags;

      this.props.onCardClick(largeImageURL, imageTags);
      this.props.onOpenModal();
    }
  };

  render() {
    const { status, images, totalHits } = this.state;

    return (
      <>
        <ImageGalleryBox onClick={this.onCardClick}>
          {images.map(({ id, webformatURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                smallImageURL={webformatURL}
                tags={tags}
              />
            );
          })}
        </ImageGalleryBox>
        {status === Status.RESOLVED && images.length !== totalHits && (
          <ButtonLoadMore onBtnLoadMore={this.onBtnLoadMore} />
        )}
      </>
    );
  }
}

export default ImageGallery;