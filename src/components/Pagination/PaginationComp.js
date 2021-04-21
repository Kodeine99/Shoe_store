import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';

PaginationComp.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

function PaginationComp(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  // function handlePageChange(newPage) {
  //   if (onPageChange) {
  //     onPageChange(newPage);
  //   }
  // }
  return (
    <>
      <Pagination
        style={{ display: 'flex', justifyContent: 'center' }}
        count={totalPages}
        page={_page}
        color="primary"
        onChange={onPageChange}
      />
    </>
  );
}

export default PaginationComp;
