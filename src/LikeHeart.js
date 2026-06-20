import React, { useState } from "react";
import { Heart } from "lucide-react";

export default function LikeHeart() {
   const [liked, setLiked] = useState(false);

   return (
      <button onClick={() => setLiked(!liked)}>
         <Heart fill={liked ? "currentColor" : "none"} />
      </button>
   );
}
