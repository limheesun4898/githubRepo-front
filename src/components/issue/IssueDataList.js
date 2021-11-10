import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from '../../style/ColorTheme';

const IssueDataList = (props) => {
  const { issueList } = props;

  if (issueList && issueList.total_count === 0) {
    return (
      <DataNone>
        이슈가 없습니다.
      </DataNone>
    );
  }

  const handleIssueOpen = useCallback((issueNumber) => (e) => {
    props.handleIssueOpen(issueNumber);
  }, [issueList]);

  return (
    <IssueResultBox>
      {issueList.total_count > 0
        && issueList.items.map((res) => (
          <Issue
            key={res.id}
            type="button"
            onClick={handleIssueOpen(res.number)}
          >
            <Title>
              {res.title}
            </Title>
            <div>
              #
              {res.number}
              &nbsp;
              {res.state}
              &nbsp;
              by&nbsp;
              {res.user.login}
            </div>
          </Issue>
        ))}
    </IssueResultBox>
  );
};

IssueDataList.propTypes = {
  issueList: PropTypes.objectOf(PropTypes.object),
  handleIssueOpen: PropTypes.func,
};

IssueDataList.defaultProps = {
  issueList: {
    items: [],
    total_count: 0,
    incomplete_results: false,
  },
};

export default React.memo(IssueDataList);

const IssueResultBox = styled.div`
  margin: 28px 0;
  border: 1px solid ${Color.grayBorder};
`;

const Issue = styled.div`
  padding: 12px;
  border-bottom: 1px solid ${Color.grayBorder};
  cursor: pointer;

  &:hover {
    background-color: rgb(246, 246, 246);
  }
`;

const DataNone = styled.div`
  margin: 24px 0;
  padding: 0 8px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;
