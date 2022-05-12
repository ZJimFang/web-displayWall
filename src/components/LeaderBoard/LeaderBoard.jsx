import React, { useState, useEffect } from "react";
import Bar from "../public/Bar";
import { getDatabase, ref, query, orderByChild, get } from "firebase/database";

const LeaderBoard = () => {
  const db = getDatabase();
  const que = query(ref(db, "projects"), orderByChild("total"));
  const [rank, setRank] = useState();

  useEffect(() => {
    get(que)
      .then((snapshot) => {
        setRank(snapshot.val());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(rank);
  return (
    <>
      <Bar />
      <div></div>;
    </>
  );
};

export default LeaderBoard;
