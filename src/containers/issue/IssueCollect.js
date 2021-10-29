/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import IssueDataList from '../../components/issue/IssueDataList';
import PaginationContainer from '../pagination/PaginationContainer';
import { issueListRequest } from '../../reducer/gitApiAction';

const IssueCollect = (props) => {
  const { bookmarks } = props;

  if (bookmarks && bookmarks.length === 0) {
    return (
      <div>
        데이터 없음
      </div>
    );
  }

  const [tab, setTab] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const issueList = useSelector((state) => state.search.issueList.data);

  useEffect(() => {
    if (bookmarks && bookmarks.length > 0) {
      setTab(bookmarks[0]);
      dispatch(issueListRequest(bookmarks[0], currentPage));
    }
  }, []);

  useEffect(() => {
    if (bookmarks.indexOf(tab) === -1) {
      // tab 선택했을 때 해당 bookmark 삭제했을 때
      setTab(bookmarks[0]);
      setCurrentPage(1);
      dispatch(issueListRequest(bookmarks[0], 1));
    }
  }, [bookmarks]);

  const handleTabClick = (res) => {
    setTab(res);
    setCurrentPage(1);

    dispatch(issueListRequest(res, 1));
  };

  const handleChangePage = (page) => {
    setCurrentPage(Number(page));

    dispatch(issueListRequest(tab, Number(page)));
  };

  const handleIssueOpen = (issueNumber) => {
    window.open(`${process.env.REACT_APP_GITHUB}${tab}/issues/${issueNumber}`);
  };

  return (
    <div>
      <BookmarkTabBox>
        {bookmarks
          && bookmarks.map((res) => (
            <Tab active={tab === res} onClick={() => handleTabClick(res)}>
              {res}
            </Tab>
          ))}
      </BookmarkTabBox>
      {issueList ? (
        <IssueDataList
          issueList={issueList}
          handleIssueOpen={handleIssueOpen}
        />
      ) : <div>dsafsa</div>}
      {issueList ? (
        <PaginationContainer
          handleChangePage={handleChangePage}
          currentPage={currentPage}
          totalCount={Math.round(issueList.total_count / 10) === 0 ? 1 : Math.round(issueList.total_count / 10)}
        />
      ) : null }
    </div>
  );
};

export default IssueCollect;

const BookmarkTabBox = styled.div`
  display: flex;
  place-content: space-around;
  width: 760px;
  margin: 0 auto;
`;

const Tab = styled.div`
  padding: 16px;
  border: 1px solid;
  background: ${(props) => (props.active ? 'green' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
`;
