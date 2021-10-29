import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IssueDataList = (props) => {
  const { issueList } = props;

  if (issueList && issueList.total_count === 0) {
    return (
      <div>
        이슈가 없습니다.
      </div>
    );
  }

  const handleIssueOpen = (issueNumber) => {
    props.handleIssueOpen(issueNumber);
  };

  return (
    <IssueResultBox>
      {issueList.total_count > 0
        && issueList.items.map((res) => (
          <Issue
            type="button"
            onClick={() => handleIssueOpen(res.number)}
          >
            <span>
              제목:
              {res.title}
            </span>
          </Issue>
        ))}
    </IssueResultBox>
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

const IssueResultBox = styled.div`
  margin: 28px 0;
`;
const Issue = styled.div`
  height: 32px;
  padding: 12px;
  border-bottom: 1px solid #E6E6E6;

  &:hover {
    background-color: rgb(246, 246, 246);
  }
`;
