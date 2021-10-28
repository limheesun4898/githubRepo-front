import React, { useState } from 'react';
import styled from 'styled-components';

const RepoBookmark = (props) => {
  const { bookmarks, setBookmarks } = props;

  const handleBookmarkRemove = (name) => {
    const removeData = bookmarks.filter((e) => e !== name);
    // const removeData = bookmarks.filter((e) => (e !== index));
    setBookmarks(removeData);
  };

  return (
    <RepoBookmarkBox>
      <h3>북마크</h3>
      {bookmarks
        && bookmarks.map((res, index) => (
          <div>
            {res}
            <button type="button" onClick={() => handleBookmarkRemove(res)}>삭제</button>
          </div>
        ))}
    </RepoBookmarkBox>
  );
};

export default RepoBookmark;

const RepoBookmarkBox = styled.div`
  width: 30%;
`;
