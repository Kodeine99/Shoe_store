import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '@material-ui/core';

function ProductDetails() {

  console.log(useParams);
  return (
    <div>
      <div className="product-details">
        <div className="page-header text-center">
          <Container>
            <h1 className="page-title">
              Products details
              <span>Shop</span>
            </h1>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
