import axios from "axios";
const Url = `http://localhost:5000`;

export const postGameData = async (result: {
  user_id: number;
  accuracy_value: number;
  wpm: number;
}) => {
  const { accuracy_value, wpm, user_id } = result;
  const data = {
    user_id: user_id,
    accuracy_value: accuracy_value,
    wpm: wpm,
    played_at_date: Date.now(),
  };
  try {
    const res = await axios.post(`${Url}/result`, data);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
