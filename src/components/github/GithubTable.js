import { useState, useEffect } from "react";
//import githubTrends from "github-trends-api";

import GithubTableHeader from "./GithubTableHeader";
import GithubDeveloper from "./GithubDeveloper";
import GithubRepository from "./GithubRepository";
import { Spinner } from "@primer/components";

const GithubTable = ({ type }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let fetchedList = await fetchList(type);

      setList(fetchedList);
    };

    fetchData();
  }, [type]);

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", marginBottom: "15vh" }}>
      <GithubTableHeader></GithubTableHeader>
      {list.length === 0 ? <Spinner my={4} /> : ""}
      {type === "repositories"
        ? list.map((m) => <GithubRepository key={m.id} value={m} />)
        : list.map((m, i) => (
            <GithubDeveloper key={m.id} index={i + 1} value={m} />
          ))}
    </div>
  );
};

const fetchList = async (type) => {
  try {
    //let list = await githubTrends({ section: type });   // CORS issue, I'll use a mock backend instead: npm run server
    let list = await fetch(`http://localhost:3001/${type}`);
    let json = await list.json();

    return json;
  } catch (e) {
    return [];
  }
};

GithubTable.defaultProps = {
  type: "repositories",
};

export default GithubTable;
