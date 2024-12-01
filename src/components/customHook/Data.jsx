import useGetUsers from "./useGetUsers";
const Data = () => {
  const { getData, error } = useGetUsers(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <div className="container">
        <ul>
          {getData &&
            getData.map((item, index, array) => (
              <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
};

export default Data;
