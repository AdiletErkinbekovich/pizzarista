import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={1680}
        height={900}
        viewBox="0 0 1680 900"
        backgroundColor="#fcfcfc"
        foregroundColor="#fafafa"
      >
        <rect x="36" y="290" rx="6" ry="6" width="205" height="26" />
        <rect x="4" y="334" rx="10" ry="10" width="280" height="94" />
        <rect x="6" y="450" rx="7" ry="7" width="86" height="38" />
        <rect x="133" y="452" rx="20" ry="20" width="151" height="38" />
        <circle cx="143" cy="156" r="118" />
      </ContentLoader>
    </div>
  );
}

export default LoadingBlock;
