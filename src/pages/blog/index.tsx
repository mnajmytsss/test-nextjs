import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  console.log(router.query.q);
  return (
    <div>
      <h1>index halaman blog</h1>
    </div>
  );
}

export default index;

// localhost:3000/blog
