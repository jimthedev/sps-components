import * as React from 'react';

// Typescript throws warnings here about
// signatures here because we can't know
// what will be returned and Loadable's
// types seem not to be configured in a
// way that makes typescript's compiler
// happy. For now you can ignore or can
// use require instead of import.
// Will have to wait until more reliable
// types exist.
//import * as Loadable from 'react-loadable';
const ReactLoadable = require('react-loadable');

export const Loading = (props: any) => {
  if (props.error) {
    // When the loader has errored
    return <div>Error!</div>;
  } else if (props.timedOut) {
    // When the loader has taken longer than the timeout
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    // When the loader has taken longer than the delay
    return <div>Loading...</div>;
  } else {
    // When the loader has just started
    return null;
  }
};

export const LoadablePage = (opts: any) => {
  return ReactLoadable(
    Object.assign(
      {
        loading: Loading,
        pastDelay: 400,
        timeout: 10000,
      },
      opts
    )
  );
};
