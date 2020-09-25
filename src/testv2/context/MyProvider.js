import React from 'react';
import MyContext from './MyContext';

class MyProvider extends React.Component {
    state = {
      cars: {
        1: { name: 'Honda', price: 100 },
        2: { name: 'BMW', price: 150 },
        3: { name: 'Mercedes', price: 200 }
      }
    };

    render() {
      return (
        <MyContext.Provider
          value={{
            cars: this.state.cars,
            incrementPrice: selectedID => {
              const cars = Object.assign({}, this.state.cars);
              cars[selectedID].price = cars[selectedID].price + 1;
              this.setState({
                  cars
              });
            },
            decrementPrice: selectedID => {
              const cars = Object.assign({}, this.state.cars);
              cars[selectedID].price = cars[selectedID].price - 1;
              this.setState({
                  cars
              });
            }
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      );
    }
}
export default MyProvider;