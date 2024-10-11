// import React, { useState } from "react";

// interface Props {
//   addTweet: (tweet: string) => void;
// }

// const TweetForm: React.FC<Props> = ({ addTweet }) => {
//   const [tweet, setTweet] = useState("");
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (tweet.trim()) {
//       addTweet(tweet);
//       setTweet("");
//     }
//   };

//   return (
//     <form onSubmit={ handleSubmit }>
//       <textarea
//         placeholder="What's happening?"
//         value={tweet}
//         onChange={(e) => setTweet(e.target.value)}
//       />
//       <button type="submit">Tweet</button>
//     </form>
//   );
// };

// export default TweetForm;
