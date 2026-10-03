import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';

// Minimum time the loader stays on screen once a navigation starts, so fast
// navigations (e.g. About -> Portfolio) still read as a transition instead of
// a one-frame flash.
const MIN_LOADER_MS = 500;

// Safety net: if a route chunk fails to download, Suspense would never resolve
// and the spinner would stay forever. Reveal the page anyway after this long.
const MAX_LOADER_MS = 4000;

// Mounts only after the Suspense boundary above it finishes resolving, which
// means the route chunk has finished loading. `dep` forces it to re-fire on
// every navigation.
const ReadyMark = ({ onReady, dep }) => {
  useEffect(() => {
    onReady();
  }, [onReady, dep]);
  return null;
};

const PageTransition = ({ children }) => {
  const { pathname } = useLocation();

  const [trackedPath, setTrackedPath] = useState(pathname);
  const [resolved, setResolved] = useState(false);
  const [minElapsed, setMinElapsed] = useState(false);

  // Reset during render rather than in an effect, otherwise the new page would
  // paint for one frame before the loader covered it.
  if (trackedPath !== pathname) {
    setTrackedPath(pathname);
    setResolved(false);
    setMinElapsed(false);
  }

  useEffect(() => {
    const minTimer = setTimeout(() => setMinElapsed(true), MIN_LOADER_MS);
    const guardTimer = setTimeout(() => setResolved(true), MAX_LOADER_MS);
    return () => {
      clearTimeout(minTimer);
      clearTimeout(guardTimer);
    };
  }, [trackedPath]);

  const markResolved = useCallback(() => setResolved(true), []);

  // Stay visible until BOTH the chunk has loaded and the minimum time passed.
  const showLoader = !(resolved && minElapsed);

  return (
    <>
      {showLoader && <Loader />}
      <Suspense fallback={null}>
        {children}
        <ReadyMark onReady={markResolved} dep={pathname} />
      </Suspense>
    </>
  );
};

export default PageTransition;