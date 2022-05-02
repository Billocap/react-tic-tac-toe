interface Props {
  value: string,
  index: number,
  onClick: any
}

export default function BoardCell({value, onClick, index}: Props) {
  return (
    <td>
      <button onClick={ _ => ( value || onClick(index) )}>
        {value}
      </button>
    </td>
  )
}
