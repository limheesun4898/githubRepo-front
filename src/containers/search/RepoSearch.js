import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Color from '../../style/ColorTheme';
import { repoSearchRequest } from '../../reducer/gitApiAction';
import RepoDataList from '../../components/repository/RepoDataList';

const RepoSearch = (props) => {
  const { bookmarks, setBookmarks, isMobile } = props;

  const dispatch = useDispatch();
  const repoList = useSelector((state) => state.search.repoSearch.data);
  const [repoInput, setRepoInput] = useState('');

  const handleChange = (e) => {
    setRepoInput(e.target.value);
  };

  const handleRepoSearch = () => {
    dispatch(repoSearchRequest(repoInput));

    setRepoInput('');
  };

  const handleBookmarkAdd = (res) => {
    if (bookmarks.length > 3) {
      // 4개 이상 등록 체크
      alert('4개 이상 등록이 안됩니다.');

      return;
    }

    const addData = {
      id: res.id,
      name: res.name,
      full_name: res.full_name,
    };

    // 중복 체크
    const duplicateCheck = bookmarks.find((item) => item.id === addData.id);
    if (duplicateCheck) {
      alert('이미 북마크에 있습니다.');
    } else {
      const list = [...bookmarks, addData];
      setBookmarks(list);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRepoSearch();
    }
  };

  return (
    <RepoSearchBox isMobile={isMobile}>
      <h3>repository 검색</h3>
      <RepoInput
        name="repoInput"
        placeholder="repository 이름을 입력하세요."
        value={repoInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {/* <button type="button" onClick={handleRepoSearch}>검색</button> */}
      <RepoDataList
        dataList={repoList.items}
        handleClick={handleBookmarkAdd}
        btnName="등록"
      />
    </RepoSearchBox>
  );
};

export default RepoSearch;

const RepoSearchBox = styled.div`
  width: ${(props) => (props.isMobile ? '' : '50%')};
  margin: ${(props) => (props.isMobile ? '0 0 12px 0' : '0 2% 0 0')};
  border-radius: 16px;
  background: white;
  padding: 12px;
`;

const RepoInput = styled.input`
  width: calc(100% - 32px);
  height: 32px;
  border: 1px solid ${Color.grayBorder};
  border-radius: 32px;
  padding: 0 16px;
  margin-bottom: 16px;
`;
