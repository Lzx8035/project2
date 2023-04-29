import React, { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { Slide } from "react-awesome-reveal";
import { matchesCollection } from "../../../firebase";
import MatchesBlock from "../../Utils/MatchesBlock";

const Blocks = () => {
  const [matches, setMatches] = useState([]);

  async function GetMatches() {
    await getDocs(matchesCollection)
      .then((snapshot) => {
        const matches = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMatches(matches);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const showMatches = (matches) =>
    matches
      ? matches.map((match) => (
          <Slide bottom key={match.id} className="item" triggerOnce>
            <div>
              <div className="wrapper">
                <MatchesBlock match={match} />
              </div>
            </div>
          </Slide>
        ))
      : null;

  useEffect(() => {
    if (!matches.length > 0) {
      GetMatches();
    }
  }, [matches]);

  return <div className="home_matches">{showMatches(matches)}</div>;
};

export default Blocks;
