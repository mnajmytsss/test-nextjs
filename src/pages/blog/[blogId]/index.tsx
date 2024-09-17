import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  console.log(router);

  return <div>index blog id {router.query.blogId}</div>;
}

export default index;

// localhost:3000/blog/100
