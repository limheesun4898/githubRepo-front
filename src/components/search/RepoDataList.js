import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RepoDataList = (props) => {
  const { repoList } = props;

  if (repoList && !repoList.items) {
    return (
      <div>
        데이터가 없음
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
            <p>{res.full_name}</p>
            <button type="button" onClick={() => handleAddClick(index)}>등록</button>
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
height: 300px;
overflow-y: auto;
`;
const Repolayout = styled.div`
height: 80px;
padding: 12px
`;
