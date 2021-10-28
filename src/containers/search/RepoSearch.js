/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { repoSearchRequest } from '../../reducer/gitApiAction';
import RepoDataList from '../../components/search/RepoDataList';

const RepoSearch = (props) => {
  const dispatch = useDispatch();
  const { bookmarks, setBookmarks } = props;

  const repoList = useSelector((state) => state.search.repoSearch.data);

  const [repoInput, setRepoInput] = useState('');

  const handleChange = (e) => {
    setRepoInput(e.target.value);
  };

  const handleRepoSearch = () => {
    dispatch(repoSearchRequest(repoInput));
  };

  const handleBookmarkAdd = (index) => {
    if (bookmarks.length > 3) {
      // 4개 이상 등록 체크
      alert('4개 이상 안됌');
    } else if (bookmarks.length > 0 && bookmarks.indexOf(repoList.items[index].full_name) !== -1) {
      // 중복 체크
      alert('이미 북마크에 있습니다.');
    } else {
      const addData = [...bookmarks, repoList.items[index].full_name];
      setBookmarks(addData);
    }
  };

  return (
    <RepoSearchBox>
      <h3>repository 검색</h3>
      <input
        name="repoInput"
        placeholder="repository 이름을 입력하세요."
        value={repoInput}
        onChange={handleChange}
      />
      <button type="button" onClick={handleRepoSearch}>검색</button>

      <RepoDataList
        repoList={repoList}
        handleBookmarkAdd={handleBookmarkAdd}
      />
    </RepoSearchBox>
  );
};

export default RepoSearch;

const RepoSearchBox = styled.div`
  width: 70%;
  border-radius: 16px;
  background: #FFFF;

`;
