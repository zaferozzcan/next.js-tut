import { useRouter } from "next/router";
export default function name() {
  const router = useRouter();
  console.log(router);
  return <div>This is toyota</div>;
}
