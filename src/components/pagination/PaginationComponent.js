import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from '../../style/ColorTheme';

function PaginationComponent({
  pageArray, currentPage, total, handleChangePage,
}) {
  return (
    <Paginationbox>
      <ArrowBtn isDisabled={currentPage !== 1} type="button" name={currentPage - 1} onClick={handleChangePage} disabled={currentPage === 1}>
        <Arrow>&#8249;</Arrow>
      </ArrowBtn>
      {
        pageArray.map((res) => (
          <PageNumberBtn key={res} currentActive={currentPage === res} onClick={handleChangePage} type="button" name={res}>
            {res}
          </PageNumberBtn>
        ))
      }
      <ArrowBtn isDisabled={total !== currentPage} type="button" name={currentPage + 1} onClick={handleChangePage} disabled={total === currentPage}>
        <Arrow>&#8250;</Arrow>
      </ArrowBtn>
    </Paginationbox>
  );
}

PaginationComponent.propTypes = {
  pageArray: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
};

export default PaginationComponent;

const Paginationbox = styled.div`
  text-align: center;
`;

const PageNumberBtn = styled.button`
  margin: 10px;
  border: 0;
  font-size: 16px;
  width: ${(props) => (props.currentActive ? '30px' : '')};
  height: ${(props) => (props.currentActive ? '30px' : '')};
  color: ${(props) => (props.currentActive ? 'white' : 'black')};
  background: ${(props) => (props.currentActive ? Color.greenActive : 'none')};
  border-radius: ${(props) => (props.currentActive ? '50%' : '')};
  cursor: pointer;
`;

const ArrowBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;    
  border: 1px solid ${(props) => (props.isDisabled ? Color.grayDisabled : Color.grayBorder)};
  background: white;
  cursor: pointer;
`;

const Arrow = styled.span`
  font-size:18px;
  pointer-events: none;
`;
