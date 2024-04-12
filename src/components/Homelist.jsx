/* eslint-disable react/prop-types */
function Homelist({ data, onClick }) {
  return (
    <div
      className="panel active"
      style={{
        backgroundImage: `url(${data.url})`,
      }}
      onClick={() => onClick(data)}
    >
      <h3>{data.name}</h3>
    </div>
  );
}

export default Homelist;
