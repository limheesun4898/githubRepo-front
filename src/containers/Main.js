/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';
import RepoSearch from './search/RepoSearch';
import RepoBookmark from './bookmark/RepoBookmark';
import IssueCollect from './issue/IssueCollect';

const Main = () => {
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', '');

  return (
    <>
      <TopContainer>
        <RepoSearch bookmarks={bookmarks} setBookmarks={setBookmarks} />
        <RepoBookmark bookmarks={bookmarks} setBookmarks={setBookmarks} />
      </TopContainer>
      <IssueContainer>
        <IssueCollect bookmarks={bookmarks} />
      </IssueContainer>
    </>
  );
};

export default Main;

const TopContainer = styled.div`
  display: flex;
  margin: 48px 0;
  background: #F4F4F7;
  border-radius: 16px;
  padding: 48px 52px;
`;

const IssueContainer = styled.div`
  display: block;
  width: 100%;
  border: 1px solid;
`;
