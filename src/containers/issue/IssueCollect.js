import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useViewport from '../../hooks/useViewport';
import IssueDataList from '../../components/issue/IssueDataList';
import PaginationContainer from '../pagination/PaginationContainer';
import { issueListRequest } from '../../reducer/gitApiAction';

const IssueCollect = (props) => {
  const { bookmarks } = props;

  if (bookmarks && bookmarks.length === 0) {
    return (
      <IssueContainer>
        저장된 Repository가 없습니다.
      </IssueContainer>
    );
  }

  const dispatch = useDispatch();

  const [tab, setTab] = useState(bookmarks[0].name);
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

  const { isMobile } = useViewport();

  return (
    <IssueContainer>
      <h3>이슈 모음</h3>
      <BookmarkTabBox isMobile={isMobile}>
        {bookmarks
          && bookmarks.map((res) => (
            <Tab
              key={res.id}
              active={tab === res}
            >
              <button
                type="button"
                onClick={handleTabClick(res)}
              >
                {res.name}
              </button>
            </Tab>
          ))}
      </BookmarkTabBox>
      <IssueDataList
        issueList={issueList.items}
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

IssueCollect.propTypes = {
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number, // repo 고유 Id
      name: PropTypes.string, // repoName
      full_name: PropTypes.string, // {owner}/{repoName}
    }),
  ),
};

IssueCollect.defaultProps = {
  bookmarks: [],
};

export default IssueCollect;

const BookmarkTabBox = styled.div`
  display: ${(props) => (props.isMobile ? 'block' : 'flex')};
`;

const Tab = styled.div`
  background: white;
  color: black;
  opacity: ${(props) => (props.active ? '': '0.5')};
  
  button {
    background: white;
    padding: 16px 0 5px 0;
    margin: 0 8px;
    border: 0;
    border-bottom: ${(props) => (props.active ? '2px solid green' : '')};
    cursor: pointer;
  }
`;

const IssueContainer = styled.div`
  background: white;
  padding: 16px;
  border-radius: 16px;
`;
