import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <main className="main">
      {children}
      <footer>
        <p className="footer">
            Copyright © 2018 ArtPix3D. All rights reserved.
        </p>
      </footer>
    </main>
  );
};
