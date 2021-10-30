import React from 'react';
import styled from 'styled-components';
import BookmarkList from '../../components/common/BookmarkList';

const RepoBookmark = (props) => {
  const { bookmarks, setBookmarks, isMobile } = props;

  const handleBookmarkRemove = (index) => {
    const removeData = bookmarks.filter((e, idx) => idx !== index);

    setBookmarks(removeData);
  };

  return (
    <RepoBookmarkBox isMobile={isMobile}>
      <h3>북마크</h3>
      <BookmarkList
        dataList={bookmarks}
        handleClick={handleBookmarkRemove}
        btnName="삭제"
      />
    </RepoBookmarkBox>
  );
};

export default RepoBookmark;

const RepoBookmarkBox = styled.div`
  width: ${(props) => (props.isMobile ? '' : '50%')};
  border-radius: 16px;
  background: white;
  padding: 0 18px 18px 18px;
`;
