import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { GoSearch } from 'react-icons/go';
import {
  SearchbarBox,
  SearchbarInput,
  SearchButton,
  SearchForm,
} from './Searchbar.styled';

class SearchBar extends Component {
  state = {
    newSearchQuery: '',
  };

  handleChange = e => {
    this.setState({
      newSearchQuery: e.currentTarget.value.trim(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newImageQuery = this.state.newSearchQuery;

    if (newImageQuery === '') {
      return alert('Введите поисковый запрос');
    }

    if (newImageQuery === this.props.searchQuery) {
      console.log('Введите другой запрос');
    }

    if (newImageQuery !== this.props.searchQuery) {
      this.props.onSubmit(this.state.newSearchQuery);
      this.setState({
        newSearchQuery: '',
      });
    }
  };

  render() {
    const { newSearchQuery } = this.state;

    return (
      <SearchbarBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <GoSearch />
          </SearchButton>

          <SearchbarInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={newSearchQuery}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarBox>
    );
  }
}

export default SearchBar;
