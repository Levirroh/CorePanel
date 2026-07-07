export const ContainerGridLayout = {
  full: 'lg:col-span-2',
  default: 'col-span-1',
};


interface PropsContainer {
  message: string,
  layout?: typeof ContainerGridLayout[keyof typeof ContainerGridLayout],
}
export default function Container({ message, layout = ContainerGridLayout.default }: PropsContainer) {
  
  return (
    <div className={`bg-slate-300 rounded-4xl p-6 border-2 border-slate-400 ${layout}`}>
      <p>{message}</p>
    </div>
  );
}