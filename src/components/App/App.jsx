import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import ImageGallery from 'components/ImageGallery';
import Searchbar from 'components/Searchbar';
import Modal from 'components/Modal';
import { Wrapper } from './App.styled';

class App extends Component {
  state = {
    searchQuery: '',
    imgUrl: '',
    tags: '',
    showModal: false,
    buttonDiasbled: true,
  };

  handleSubmit = searchQuery => {
    console.log(searchQuery);
    this.setState({ searchQuery });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onCardClick = (largeImageUrl, imageTags) => {
    this.setState({
      imgUrl: largeImageUrl,
      tags: imageTags,
    });
  };

  render() {
    const { searchQuery, imgUrl, tags, showModal } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSubmit} searchQuery={searchQuery} />
        <ImageGallery
          onCardClick={this.onCardClick}
          searchQuery={searchQuery}
          onOpenModal={this.toggleModal}
        />
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            {<img src={imgUrl} alt={tags} />}
          </Modal>
        )}
      </Wrapper>
    );
  }
}

export default App;
