import React, {Component} from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';
import Contacts from './components/contacts';


class Get extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        contacts: []
      };
    }


    render() {
	const { error, isLoaded, contacts } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
              <Contacts contacts={this.state.contacts} />
          );
	}
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8080/hello4')
            .then(res => res.json())
            .then((data) => { this.setState({ isLoaded: true,  contacts: data });},
                 (error) => { this.setState({ isLoaded: true, error });})
            .catch(console.log)
    }
}

export {Get};
