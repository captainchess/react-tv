import "./shows.css";
import { useState } from "react";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedShow] = useState(show);
  const [selectedEpisode, setSelectedEpisode] = useState();
  
  if (!selectedShow) {
    return (
      <div className="show-details">
        <p>Please select a show to learn more</p>
      </div>
    );
  }
  
  return <div className="show-details">
    <EpisodeList name={selectedShow.name} episodes={selectedShow.episodes} selectedEpisode={selectedEpisode} setSelectedEpisode={setSelectedEpisode} />
    <EpisodeDetails episode={selectedShow} />
  </div>;
}
