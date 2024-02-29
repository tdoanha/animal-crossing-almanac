import React, { useEffect, useState } from "react";
import "./Bugs.css";
import Cards from "../Cards";

const API_BUGS_URL = "https://api.nookipedia.com/nh/bugs";

function Bugs() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const response = await fetch(API_BUGS_URL, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            "X-API-KEY": process.env.REACT_APP_NOOK_API_KEY,
            "Accept-Version": "1.6.0",
          },
        });
        const data = await response.json();
        setBugs(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBugs();
  }, []);

  return (
    <div>
      <h1>Bugs</h1>
      <Cards data={bugs} />
    </div>
  );
}

export default Bugs;
