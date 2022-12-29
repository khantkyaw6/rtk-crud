import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/features/userSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  console.log(data);
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {data?.map((usr) => (
        <div>
          <h2>{usr.username}</h2>
          <Link to={`/todo-user/${usr.id}`}>
            <button>Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
