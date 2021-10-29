import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RepoDataList = (props) => {
  const { repoList } = props;

  if (repoList && !repoList.items) {
    return (
      <div>
        Repository 검색 결과가 없습니다.
      </div>
    );
  }

  const handleAddClick = (index) => {
    props.handleBookmarkAdd(index);
  };

  return (
    <RepoResultBox>
      {repoList.total_count > 0
        && repoList.items.map((res, index) => (
          <Repolayout>
            <div>
              {res.full_name.split('/')[0]}
              <span>님의 </span>
              {res.name}
            </div>
            <button type="button" onClick={() => handleAddClick(index)}>북마크 등록</button>
          </Repolayout>
        ))}
    </RepoResultBox>
  );
};

RepoDataList.propTypes = {
  repoList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleBookmarkAdd: PropTypes.func.isRequired,
};

RepoDataList.defaultProps = {
  repoList: { items: [] },
};

export default RepoDataList;

const RepoResultBox = styled.div`
  height: 200px;
  overflow-y: auto;
`;
const Repolayout = styled.div`
  display: flex;
  height: 36px;
  margin: 12px;
  padding: 0 16px;
  border-bottom: 1px solid #E6E6E6;

  div {
    width: 85%;
    font-sie: 16px;
    vertical-align: middle;
  }
`;
