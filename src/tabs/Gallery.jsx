import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';
import { Modal } from '../components/Modal/Modal';

export class Gallery extends Component {
  state = {
    value: '',
    images: [],
    page: 1,
    isLoadMoreBtnVisible: false,
    isLoading: false,
    isModalVisible: false,
    dataForModal: null,
  };

  handleSubmit = value => this.setState({ value, images: [], page: 1 });

  handleLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleImageClick = e => {
    this.setState({
      isModalVisible: true,
      dataForModal: { src: e.target.src, alt: e.target.alt },
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { value, images, page } = this.state;
    if (
      (prevState.value !== value && value !== '') ||
      prevState.page !== page
    ) {
      try {
        this.setState({ isLoading: true });
        const {
          data: { photos, total_results },
        } = await ImageService.getImages({ value, page });

        this.setState(prevState => ({
          images: [...prevState.images, ...this.getNormalizedImages(photos)],
          isLoadMoreBtnVisible: page < Math.ceil(total_results / 15),
        }));
      } catch (error) {
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  getNormalizedImages(array) {
    return array.map(({ id, avg_color, src: { large }, alt }) => ({
      id,
      avg_color,
      large,
      alt,
    }));
  }
  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        {this.state.images.length === 0 && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}

        {this.state.images.length !== 0 && (
          <Grid>
            {this.state.images.map(({ id, avg_color, large, alt }) => {
              return (
                <GridItem key={id}>
                  <CardItem color={avg_color}>
                    <img
                      src={large}
                      alt={alt}
                      onClick={this.handleImageClick}
                    />
                  </CardItem>
                </GridItem>
              );
            })}
          </Grid>
        )}

        {this.state.isLoading && <p>LOADING</p>}

        {this.state.isLoadMoreBtnVisible && !this.state.isLoading && (
          <Button onClick={this.handleLoadMoreClick}>Load more</Button>
        )}

        {this.state.isModalVisible && (
          <Modal dataForModal={this.state.dataForModal} />
        )}
      </>
    );
  }
}
