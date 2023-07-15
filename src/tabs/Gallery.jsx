import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    value: '',
    images: [],
    page: 1,

  }
  
  handleSubmit = value => this.setState({ value });

  componentDidUpdate(prevProps, prevState) {
    
  }
    
  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        <Grid>
          {
            <GridItem>
              <CardItem>
                <img src="" alt="" />
              </CardItem>
            </GridItem>
          }
        </Grid>

        <Button>Load more</Button>
      </>
    );
  }
}
