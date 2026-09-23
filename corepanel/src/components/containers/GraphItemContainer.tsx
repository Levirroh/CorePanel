interface graphItem {
  label: string,
  value: number,
  color: string
}

interface graphItemProp {
  item: graphItem,
  total: number
}


export default function GraphItemContainer({item, total}: graphItemProp) {
  return (
    <div className={`rounded-md p-2 flex justify-between items-center w-full h-full bg-white shadow-xs/20`}>
      <div className="p-4 rounded-xl" style={{ backgroundColor: item.color.toLowerCase() }}></div>
      <div>{item.label}</div>
      <div>{item.value} / {total} ({((item.value/total)*100).toFixed(0)}%)</div>
    </div>
  );
}