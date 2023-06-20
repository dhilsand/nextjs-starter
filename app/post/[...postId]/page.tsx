import { FC } from "react";

interface PageProps {
  params: {
    postId: string;
  };
}

const page = async (props) => {
  console.log(props)
  return <div>hello</div>
};

export default page;
