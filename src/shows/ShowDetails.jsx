import "./shows.css";
import { useState } from "react";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";
import { tvShows } from "./data";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  
  const [selectedEpisode, setSelectedEpisode] = useState(tvShows.show);
  
  if (!show) {
    return (
      <div className="show-details">
        <p>Please select a show to learn more</p>
      </div>
    );
  }
  console.debug(show);
  return (
    <div className="show-details">
      <EpisodeList name={show.name} episodes={show.episodes} selectedEpisode={selectedEpisode} setSelectedEpisode={setSelectedEpisode} />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
