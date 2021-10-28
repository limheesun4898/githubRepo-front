import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IssueDataList = (props) => {
  const { issueList } = props;

  if (issueList && !issueList.items) {
    return (
      <div>
        데이터가 없음
      </div>
    );
  }

  const handleIssueOpen = (issueNumber) => {
    props.handleIssueOpen(issueNumber);
  };

  return (
    <RepoResultBox>
      {issueList.total_count === 0
      && (
        <div>없음.</div>
      )}
      {issueList.total_count > 0
        && issueList.items.map((res, index) => (
          <Repolayout>
            <span>{res.title}</span>
            <button
              type="button"
              onClick={() => handleIssueOpen(res.number)}
            >
              이슈보로가기
            </button>
          </Repolayout>
        ))}
    </RepoResultBox>
  );
};

IssueDataList.propTypes = {
  issueList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleIssueOpen: PropTypes.func,
};

IssueDataList.defaultProps = {
  issueList: { items: [] },
};

export default IssueDataList;

const RepoResultBox = styled.div`
`;
const Repolayout = styled.div`
height: 32px;
padding: 12px;
border: 1px solid;
`;
