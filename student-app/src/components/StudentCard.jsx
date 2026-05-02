export default function StudentCard({ student, onDelete }) {
  const { id, name, age, email, city = 'Unknown' } = student

  return (
    <div className="sma-student-card">
      <div className="sma-student-card-avatar">
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="sma-student-card-body">
        <h3 className="sma-student-card-name">{name}</h3>
        <p className="sma-student-card-detail">{email}</p>
        <div className="sma-student-card-footer">
          <span className="sma-student-card-age">Age {age}</span>
          <span className="sma-student-card-tag">{city}</span>
        </div>
      </div>
      <div className="sma-card-actions">
        <button
          className="sma-btn-icon sma-btn-icon-delete"
          onClick={() => onDelete(id)}
          title="Delete student"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

// Changes from Day 9:
// 1. Now accepts 'student' object prop instead of individual props
// 2. Destructures id, name, age, email, city from student
// 3. Added: sma-card-actions div with delete button
// 4. Delete button calls onDelete(id) — StudentList handles the API call
// Note: Edit button is added in Day 12 when we build the edit page