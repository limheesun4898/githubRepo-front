import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import IssueDataList from '../../components/issue/IssueDataList';
import PaginationContainer from '../pagination/PaginationContainer';
import { issueListRequest } from '../../reducer/gitApiAction';

const IssueCollect = (props) => {
  const { bookmarks, isMobile } = props;

  if (bookmarks && bookmarks.length === 0) {
    return (
      <IssueContainer>
        저장된 Repository가 없습니다.
      </IssueContainer>
    );
  }
  const dispatch = useDispatch();

  const [tab, setTab] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const issueList = useSelector((state) => state.search.issueList.data);

  const issueRequest = useCallback((bookmark, page) => {
    dispatch(issueListRequest(bookmark.full_name, page));
  }, [bookmarks, tab, currentPage]);

  useEffect(() => {
    if (bookmarks.indexOf(tab) === -1) {
      // 선택된 tab과 bookmarks 삭제가 같을 경우
      setTab(bookmarks[0]);
      setCurrentPage(1);
      issueRequest(bookmarks[0], 1);
    }
  }, [bookmarks]);

  const handleTabClick = useCallback((res) => (e) => {
    setTab(res);
    setCurrentPage(1);

    issueRequest(res, 1);
  }, [tab]);

  const handleChangePage = useCallback((page) => {
    setCurrentPage(Number(page));

    issueRequest(tab, Number(page));
  }, [currentPage, tab]);

  const handleIssueOpen = useCallback((issueNumber) => {
    window.open(`${process.env.REACT_APP_GITHUB}${tab.full_name}/issues/${issueNumber}`);
  }, [issueList]);

  return (
    <IssueContainer>
      <h3>이슈 모음</h3>
      <BookmarkTabBox isMobile={isMobile}>
        {bookmarks
          && bookmarks.map((res) => (
            <Tab
              key={res.id}
              active={tab === res}
              onClick={handleTabClick(res)}
            >
              {res.name}
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
  // justify-content: center;
  // margin: 0 auto;
`;

const Tab = styled.div`
  cursor: pointer;
  padding: 16px 0 5px 0;
  margin: 0 8px;  
  background: white;
  border-bottom: ${(props) => (props.active ? '2px solid green' : '')};
  color: black;
  opacity: ${(props) => (props.active ? '': '0.5')};
`;

const IssueContainer = styled.div`
  background: white;
  padding: 16px;
  border-radius: 16px;
`;
