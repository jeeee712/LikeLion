import Child from "./Child";

function Parent() {
  const SH = {
    name: "홍석환",
    age: "24살",
    sex: "남성",
    height: "179.8센티미터",
    weight: "100킬로그램",
  };

  return (
    <div className="parent">
      <Child {...SH} />
    </div>
  );
}

export default Parent;
