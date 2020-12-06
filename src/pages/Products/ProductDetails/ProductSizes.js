import React from 'react';

import {TextField} from '@material-ui/core';

import Autocomplete from '@material-ui/lab/Autocomplete';


function ProductSizes({sizes}) {
  return (
    <div className="product-details-sizes">
      {
        <Autocomplete
          options={sizes}
          id="size"
          debug
          style={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="size" margin="normal" />}
        />
      }
    </div>
  );
}

export default ProductSizes;
