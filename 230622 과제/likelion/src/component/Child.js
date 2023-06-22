function Child(props) {
  function handleOnClick(e) {
    alert(e.target.name + "입니다.");
  }
  return (
    <div className="child">
      <button name={props.name} onClick={handleOnClick}>
        이름
      </button>
      <button name={props.age} onClick={handleOnClick}>
        나이
      </button>
      <button name={props.sex} onClick={handleOnClick}>
        성별
      </button>
      <button name={props.height} onClick={handleOnClick}>
        키
      </button>
      <button name={props.weight} onClick={handleOnClick}>
        몸무게
      </button>
    </div>
  );
}

export default Child;
