export default function ComplaintsTable({ complaints }) {
  return (
    <div className="table-container"> {/* המיכל ששומר על הסדר */}
      <table className="main-table">
        <thead>
          <tr>
            <th>תחום</th>
            <th>תוכן התלונה</th>
            <th>נשלח בתאריך</th>
          </tr>
        </thead>
        <tbody>
          {complaints && complaints.map((item, index) => (
            <tr key={index} className="complaint-row">
              <td>{item.category}</td>
              <td>{item.message}</td>
              <td>{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
