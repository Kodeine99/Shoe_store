import React from 'react';

import Button from '@material-ui/core/Button';

function ProductSizes({sizes}) {
  return (
    <div className="product-details-sizes">
      <label className="product-size-label">Size:</label>
      {
        sizes.map((size,index) => (
          <Button className="product-size-btn" key={index} variant="outlined">
            {size}
          </Button>
        ))
      }
    </div>
  );
}

export default ProductSizes;
