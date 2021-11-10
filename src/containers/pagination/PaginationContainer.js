import React from 'react';
import PropTypes from 'prop-types';
import PaginationComponent from '../../components/pagination/PaginationComponent';

const PaginationContainer = (props) => {
  const { currentPage, totalCount } = props;
  const pageArray = [];

  const startingPage = Math.ceil(currentPage / 10) * 10 - 9;
  const endPage = Math.ceil(currentPage / 10) * 10;

  for (let i = 1; i <= totalCount; i++) {
    if (startingPage <= i && i <= endPage) {
      pageArray.push(i);
    }
  }

  const handleChangePage = (e) => {
    const page = e.target.name;

    props.handleChangePage(page);
  };

  if (pageArray.length >= 1) {
    return (
      <PaginationComponent
        handleChangePage={handleChangePage}
        currentPage={currentPage}
        pageArray={pageArray}
        total={totalCount}
      />
    );
  }
  return (
    <div>null</div>
  );
};

PaginationContainer.propTypes = {
  currentPage: PropTypes.number,
  totalCount: PropTypes.number,
  handleChangePage: PropTypes.func.isRequired,
};

PaginationContainer.defaultProps = {
  currentPage: 0,
  totalCount: 0,
};

PaginationContainer.defaultProps = {
};

export default React.memo(PaginationContainer);
