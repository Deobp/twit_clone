import { useState } from "react";
import axios from "axios";

const SignIn: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const  [password, setPassword] = useState<strung>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/signIn", {
        username: userName,
        password
      });
      console.log(res.data);

    } catch (error) {
      console.error("Error sigin", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        Password:
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