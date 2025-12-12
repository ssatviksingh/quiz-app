import QuizShell from "../../../components/QuizShell";

interface Props { params: any }

export default async function StepPage(props: Props) {
  // Some Next.js versions pass params as a Promise. Await to be safe.
  const resolved = await (props.params ?? {});
  // Normalize step (string | string[] | undefined)
  const raw = resolved.step;
  const stepStr = Array.isArray(raw) ? raw[0] : (raw ?? "1");
  const step = Number(stepStr) || 1;

  return <QuizShell initialStep={step} />;
}
