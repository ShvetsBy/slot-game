interface DataDisplayProps {
  title: string
  data: string | number
}

export function DataDisplay({ title, data }: DataDisplayProps) {
  return (
    <div>
      <p className="data-title">{title}</p>
      <p className="data-value">{data}</p>
    </div>
  )
}
