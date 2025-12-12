import { redirect } from "next/navigation";

export default function Page() {
  // server-side redirect to the first quiz step
  redirect("/quiz/1");
}
