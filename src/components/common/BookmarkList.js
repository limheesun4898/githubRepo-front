import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from '../../style/ColorTheme';

const BookmarkList = (props) => {
  const { dataList, btnName } = props;

  if (dataList.length === 0) {
    return null;
  }

  const handleBtnClick = (index) => {
    props.handleClick(index);
  };

  return (
    <ResultDataBox>
      {dataList
        && dataList.map((res, index) => (
          <DataLayout>
            {res.name ? (
              <div>
                {res.full_name.split('/')[0]}
                <span>님의 </span>
                {res.name}
              </div>
            ) : (
              <div>{res}</div>
            )}
            <button type="button" onClick={() => handleBtnClick(index)}>{btnName}</button>
          </DataLayout>
        ))}
    </ResultDataBox>
  );
};

BookmarkList.propTypes = {
  dataList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleClick: PropTypes.func.isRequired,
};

BookmarkList.defaultProps = {
  dataList: [],
};

export default BookmarkList;

const ResultDataBox = styled.div`
  height: 200px;
  overflow-y: auto;
`;

const DataLayout = styled.div`
  display: flex;
  padding: 12px 16px;
  border-bottom: 1px solid ${Color.grayBorder};

  div {
    flex: 9;
    font-sie: 16px;
    vertical-align: middle;
  }
  button {
    flex: 1;
    background: white;
    border: 1px solid ${Color.grayBorder};
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
  }
`;
