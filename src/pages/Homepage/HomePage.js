import React, { useEffect } from "react";
//import moment from "moment";
import "../Homepage/homepage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces } from "../../store/spaces/actions";
import { selectSpaces } from "../../store/spaces/selectors";
import { Link } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);
  return (
    <div>
      <div>
        <h1 className="title-spaces">Spaces</h1>
      </div>

      {spaces.map((space) => {
        return (
          <div
            className="space_component"
            style={{ backgroundColor: `${space.backgroundColor}` }}
            key={space.id}
          >
            <h4 style={{ color: `${space.color}` }}>{space.title}</h4>
            <h6>{space.description}</h6>
            {/* <p>{moment(space.createdAt).format("DD-MM-YYYY")} &bull; </p> */}

            <Link to={`/spaces/${space.id}`}>
              <button className="button_to_details">Visit space</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
