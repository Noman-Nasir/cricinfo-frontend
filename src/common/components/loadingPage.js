function LoadingPage(props) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <p className="h1">{props.message || 'Loading Data. Please wait!'}</p>
      </div>
    </>
  );
}

export default LoadingPage;
