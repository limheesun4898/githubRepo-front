import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from '../../style/ColorTheme';

const RepoDataList = (props) => {
  const { dataList, btnName } = props;

  if (dataList.length === 0) {
    return null;
  }

  const handleBtnClick = (res) => {
    props.handleClick(res);
  };

  return (
    <ResultDataBox>
      {dataList
        && dataList.map((res) => (
          <DataLayout key={res.id}>
            <div>
              {res.full_name.split('/')[0]}
              <span>님의 </span>
              {res.name}
            </div>
            <button type="button" onClick={() => handleBtnClick(res)}>{btnName}</button>
          </DataLayout>
        ))}
    </ResultDataBox>
  );
};

RepoDataList.propTypes = {
  dataList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleClick: PropTypes.func.isRequired,
};

RepoDataList.defaultProps = {
  dataList: [],
};

export default RepoDataList;

const ResultDataBox = styled.div`
  height: 200px;
  overflow-y: auto;
`;

const DataLayout = styled.div`
  display: flex;
  padding: 8px 16px;
  border-bottom: 1px solid ${Color.grayBorder};
  position: relative;

  div {
    width: calc(100% - 65px);
    padding: 8px 0;
    font-sie: 16px;
    vertical-align: middle;
  }

  button {
    width: 65px;
    height: 36px;
    background: white;
    border: 1px solid ${Color.grayBorder};
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

  }
`;
