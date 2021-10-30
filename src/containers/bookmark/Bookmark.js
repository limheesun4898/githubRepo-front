import React from 'react';
import styled from 'styled-components';
import RepoDataList from '../../components/repository/RepoDataList';

const Bookmark = (props) => {
  const { bookmarks, setBookmarks, isMobile } = props;

  const handleBookmarkRemove = (res) => {
    const removeData = bookmarks.filter((e) => e.id !== res.id);

    setBookmarks(removeData);
  };

  return (
    <BookmarkBox isMobile={isMobile}>
      <h3>북마크</h3>
      <RepoDataList
        dataList={bookmarks}
        handleClick={handleBookmarkRemove}
        btnName="삭제"
      />
    </BookmarkBox>
  );
};

export default Bookmark;

const BookmarkBox = styled.div`
  width: ${(props) => (props.isMobile ? '' : '50%')};
  border-radius: 16px;
  background: white;
  padding: 12px;
`;
