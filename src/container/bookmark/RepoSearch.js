import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { repoSearchRequest } from '../../reducer/gitApiAction';

function RepoBookmark() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(repoSearchRequest());
    })
    return (
        <div>
            sadfdasfasfasfsadf
        </div>
    )
}
export default RepoBookmark