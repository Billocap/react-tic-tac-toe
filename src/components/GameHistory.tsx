export default function GameHistory({history, onClick}: any) {
  const histItems = history.map( (item, index) => {
    return (
      <li>
        <a onClick={ _ => onClick(item, index)}>
          {index ? `Step - ${index}` : "Start"}
        </a>
      </li>
    )
  })

  return (
    <div id="history">
      <h1>History</h1>
      <ul>
        {histItems}
      </ul>
    </div>
  )
}
