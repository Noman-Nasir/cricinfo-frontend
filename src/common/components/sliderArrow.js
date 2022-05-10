function SliderArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'grey'}}
      onClick={onClick}
    />
  );
}

export default SliderArrow;
