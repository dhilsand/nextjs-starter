import axios from "axios";
import { FC } from "react";

const wait = (ms: number) =>
  new Promise<void>((resolve, reject) => {
    setTimeout(resolve, ms);
  });

const page = async () => {
  await wait(5000);

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  throw new Error('not authed');

  return <div>{JSON.stringify(data)}</div>;
};

export default page;
