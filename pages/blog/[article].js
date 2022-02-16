import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();

  return (
    <div>
      <p>Article: {router.query.article}!</p>
    </div>
  );
}
