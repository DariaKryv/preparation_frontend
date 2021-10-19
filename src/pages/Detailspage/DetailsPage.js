import React, { useEffect } from "react";
import { useParams } from "react-router";
import { fetchSpaceById } from "../../store/spaces/actions";
import { selectSpaceDetails } from "../../store/spaces/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function DetailsPage() {
  const dispatch = useDispatch();
  //   const params = useParams(); // take what is in the url
  //   console.log("params", params); // check the params object
  //   const id = params.id; // take the key we want from the params
  const { id } = useParams();
  const space = useSelector(selectSpaceDetails);
  //console.log("Look", spaces);

  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch, id]);

  console.log("space", space);
  if (!space) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <div
          style={{ backgroundColor: `${space.backgroundColor}` }}
          key={space.id}
        >
          <h1>{space.title}</h1>
          <h5>{space.description}</h5>
        </div>

        {space.stories.map((story) => {
          return (
            <div>
              <img src={story.imageUrl} />
              {story.name}
              {story.content}
            </div>
          );
        })}
      </div>
    );
  }
}
