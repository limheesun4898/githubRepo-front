import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import IssueDataList from '../../components/issue/IssueDataList';
import PaginationContainer from '../pagination/PaginationContainer';
import { issueListRequest } from '../../reducer/gitApiAction';

const IssueCollect = (props) => {
  const { bookmarks, isMobile } = props;

  if (bookmarks && bookmarks.length === 0) {
    return (
      <div>
        저장된 Repository가 없습니다.
      </div>
    );
  }
  const dispatch = useDispatch();

  const [tab, setTab] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const issueList = useSelector((state) => state.search.issueList.data);

  const issueRequest = (repoName, page) => {
    dispatch(issueListRequest(repoName, page));
  };

  useEffect(() => {
    if (bookmarks.indexOf(tab) === -1) {
      // tab 선택했을 때 해당 bookmark 삭제했을 때
      setTab(bookmarks[0]);
      setCurrentPage(1);
      issueRequest(bookmarks[0], 1);
    }
  }, [bookmarks]);

  const handleTabClick = (res) => {
    setTab(res);
    setCurrentPage(1);

    issueRequest(res, 1);
  };

  const handleChangePage = (page) => {
    setCurrentPage(Number(page));

    issueRequest(tab, Number(page));
  };

  const handleIssueOpen = (issueNumber) => {
    window.open(`${process.env.REACT_APP_GITHUB}${tab}/issues/${issueNumber}`);
  };

  return (
    <IssueContainer>
      <h3>이슈 모음</h3>
      <BookmarkTabBox isMobile={isMobile}>
        {bookmarks
          && bookmarks.map((res) => (
            <Tab active={tab === res} onClick={() => handleTabClick(res)}>
              {res}
            </Tab>
          ))}
      </BookmarkTabBox>
      <IssueDataList
        issueList={issueList}
        handleIssueOpen={handleIssueOpen}
      />
      {issueList && (
        <PaginationContainer
          handleChangePage={handleChangePage}
          currentPage={currentPage}
          totalCount={Math.round(issueList.total_count / 10) === 0 ? 1 : Math.round(issueList.total_count / 10)}
        />
      )}
    </IssueContainer>
  );
};

export default IssueCollect;

const BookmarkTabBox = styled.div`
  display: ${(props) => (props.isMobile ? 'block' : 'flex')};
  justify-content: center;
  margin: 0 auto;
`;

const Tab = styled.div`
  cursor: pointer;
  padding: 16px;
  border-radius: 8px;  
  background: ${(props) => (props.active ? 'green' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
`;

const IssueContainer = styled.div`
  background: white;
  padding: 16px;
  border-radius: 16px;
`;
