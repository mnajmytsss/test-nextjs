import { useRouter } from "next/router";

function commentNested() {
  const router = useRouter();
  const { commentId, blogId } = router.query;
  return (
    <div>
      <h1>
        comment detail halaman {commentId} dari blog detail {blogId}
      </h1>
    </div>
  );
}
export default commentNested;

// localhost:3000/blog/100/comment/100
