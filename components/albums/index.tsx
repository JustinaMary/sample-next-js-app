import React, { useEffect } from "react";
import { IAlbum } from "../../types";
import Image from "next/image";

type Props = {
  album: IAlbum;
};

const AlbumCard: React.FC<Props> = ({ album }) => {
  const [timeDifference, setTimeDifference] = React.useState("");
  useEffect(() => {
    var today = new Date();
    var createdData = new Date(album.createdAt);
    var diffMs = today.valueOf() - createdData.valueOf(); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    if (diffDays > 0) {
      setTimeDifference(
        diffDays + " days, " + diffHrs + " hours, " + diffMins + " mins"
      );
    } else if (diffHrs > 0) {
      setTimeDifference(diffHrs + " hours, " + diffMins + " mins");
    } else {
      setTimeDifference(diffMins + " mins");
    }
  });
  return (
    <div className="card mb-4 shadow-sm">
      <Image
        className="card-img-top"
        alt="NEXT.js"
        src={album.banner}
        data-holder-rendered="true"
        width={180}
        height={250}
      ></Image>
      <div className="card-body">
        <p className="card-text">{album.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small className="text-muted">{timeDifference}</small>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
