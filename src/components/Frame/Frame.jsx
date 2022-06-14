import React from "react";
import { useParams } from "react-router-dom";

function iframe(group) {
  console.log(group);
  return {
    __html: `<iframe src="../projects/${group}/index.html" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0%;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>`,
  };
}

export default function Frame() {
  const { group } = useParams();
  return (
    <div>
      <div dangerouslySetInnerHTML={iframe(group)} />
    </div>
  );
}
