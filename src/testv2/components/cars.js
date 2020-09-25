import React from 'react';
import ItemCar from './item-car';
import MyContext from '../context/MyContext';

const Cars = () => (
    <MyContext.Consumer>
      {context => (
            <>
              <h4>Cars:</h4>
              <table width="100%" cellSpacing="0" cellPadding="0" border="1">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th colSpan={2} width="5%">Action</th>
                  </tr>
                </thead>
                <tbody>
                {Object.keys(context.cars).map((carID, index) => (
                  <ItemCar
                      key={index}
                      id={carID}
                      name={context.cars[carID].name}
                      price={context.cars[carID].price}
                      incrementPrice={() => context.incrementPrice(carID)}
                      decrementPrice={() => context.decrementPrice(carID)}
                  />
                ))}
                </tbody>
              </table>
            </>
        )}
    </MyContext.Consumer>
);
export default Cars;