import { useState } from "react";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const  [password, setPassword] = useState("");

  return (
    <form action="/api/signIn" method="POST">
      <h2>Sign Up</h2>
      <label>
      Username:
      <input
        type="text"
        name="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
        </label>
        <label>
          <input 
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;