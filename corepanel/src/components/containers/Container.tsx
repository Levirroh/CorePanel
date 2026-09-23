import { ContainerGridLayout } from "../../constants/ContainerGridLayout";

interface PropsContainer {
  message: string,
  layout?: typeof ContainerGridLayout[keyof typeof ContainerGridLayout],
  height?: string
}
export default function Container({ message, layout = ContainerGridLayout.default, height }: PropsContainer) {
  
  return (
    <div className={`bg-slate-300 rounded-4xl p-6 border-2 border-slate-400 ${layout} ${height}`}>
      <p>{message}</p>
    </div>
  );
}