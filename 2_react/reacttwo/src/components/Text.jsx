import React, { useState, useLayoutEffect } from 'react'

const useTruncatedElement = ({ ref }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);

  useLayoutEffect(() => {
    const { offsetHeight, scrollHeight } = ref.current || {};

    if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
      setIsTruncated(true);
    } else {
      setIsTruncated(false);
    }
  }, [ref]);

  const toggleIsShowingMore = () => setIsShowingMore(prev => !prev);

  return {
    isTruncated,
    isShowingMore,
    toggleIsShowingMore,
  };
};

export default function Text({textContent}) {
  const ref = React.useRef(null);
  const { isTruncated, isShowingMore, toggleIsShowingMore } = useTruncatedElement({
    ref,
  });

  // Code to get your note content...

  return (
    <div>
      <p ref={ref} className={`break-words text-sm ${!isShowingMore && 'line-clamp-3'} p-4  tracking-widest`}>
       {textContent}
      </p>
      {isTruncated && (
        <button onClick={toggleIsShowingMore} className='bg-slate-700 text-white p-2 m-3 rounded-md'>
          {isShowingMore ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  )
}