import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandling = (WrappedComponent, api) => (
  class extends Component { 

    state = {
      errors: null
    }

    componentDidMount() {
      api.interceptors.request.use(
        (request) => {
          this.setState({errors: null});
          return request;
        }, 
        null
      );

      api.interceptors.response.use(
        (response) => response, 
        (error) => {
          this.setState({errors: error});
          return error
        }
      );
    }

    confirmError = () => {
      this.setState({errors: null});
    }

    render() {
      return (
        <>
          <Modal show={this.state.errors != null} hide={this.confirmError}>
            {this.state.errors ? this.state.errors.message : null}
          </Modal>
          <WrappedComponent {...this.props}/>
        </>
      )
    }
  }
);

export default withErrorHandling;
