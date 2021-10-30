import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from '../../style/ColorTheme';

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
            key={res.id}
            type="button"
            onClick={() => handleIssueOpen(res.number)}
          >
            <span>
              title:&nbsp;
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
  border: 1px solid ${Color.grayBorder};
`;

const Issue = styled.div`
  height: 32px;
  padding: 12px;
  border-bottom: 1px solid ${Color.grayBorder};
  cursor: pointer;

  &:hover {
    background-color: rgb(246, 246, 246);
  }
`;
