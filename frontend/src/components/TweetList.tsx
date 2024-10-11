// import React, {FC} from "react";

// interface Tweet {
//   id: number;
//   content: string;
// }

// interface Props {
//   tweets: Tweet[];
// }

// const TweetList = React.FC<Props> = ({ tweets }) => {
//   return (
//     <div>
//       {tweets.length === 0 ? (
//         <p>No tweets found.</p>
//       ):(
//         tweets.map((tweet: string) => (
//           <div key={tweet.id}>
//             {tweet.content}
//           </div>
//         )
//       )
      
//     )}
//       </div>
//   );      
// };

// export default TweetList;