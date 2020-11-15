import React from 'react';

function ProductImgCol({images, setIndex}) {
  return (
    <div className="product-img-gallery-col">
      {
        images.map((img, index) => (
          <div id="product-zoom-id" className="product-gallery-item">
            <img
              key={index}
              onClick={() => setIndex(index)}
              alt=""
              src={`${process.env.PUBLIC_URL}${img}`}
            />
          </div>
        ))
      }
    </div>
  );
}

export default ProductImgCol;
