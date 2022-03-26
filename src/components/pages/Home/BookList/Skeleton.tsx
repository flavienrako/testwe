import React from 'react';

import { Skeleton as MuiSkeleton } from '@mui/material';

type SkeletonProps = {
  height?: number;
  width?: string;
};

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ height, width }, ref) => (
    <div css={{ width, padding: 8 }} ref={ref}>
      <MuiSkeleton
        css={{ transform: 'scale(1)' }}
        height={height}
        width="100%"
      />
    </div>
  )
);

export default Skeleton;

Skeleton.defaultProps = {
  height: 370,
  width: '25%',
};
