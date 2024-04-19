import React from 'react'
import LoadingBar from 'react-top-loading-bar'

function Loader(props) {

  return (
    <>
      <LoadingBar
        color='#0d6efd'
        progress={props.progress}
        onLoaderFinished={() => props.setProgress(0)}
      />
    </>
  );
}

export default Loader;
