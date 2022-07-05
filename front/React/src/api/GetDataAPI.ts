import axios from "axios";
const Url = `http://localhost:5000`;

export const getRanking = async (page: number) => {
  try {
    const res = await axios.get(`${Url}/result/${page}`);
    console.log(res.data);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserRecord = async (user_id: number) => {
  console.log(user_id);
  console.log(`${Url}/record/${user_id}`);

  try {
    const res = await axios.get(
      `${Url}/record/${user_id}`
      // 本番用は/recordに変更する事。これはjson-serverでのやり取りのため、resultにしてる。
      // params以下は、/result/user_idとなる。
      // UserPage.tsxのgetUserRecordの引数に指定したidがここへ入る。
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
