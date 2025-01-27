const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "name": "Ali",
    "taskNumber": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Prepare report",
        "taskDescription": "Compile the monthly financial report.",
        "taskDate": "2025-01-24",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team meeting",
        "taskDescription": "Discuss project milestones.",
        "taskDate": "2025-01-25",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Review code",
        "taskDescription": "Review the backend code for optimization.",
        "taskDate": "2025-01-26",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "name": "Fatima",
    "taskNumber": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Update website",
        "taskDescription": "Redesign the landing page.",
        "taskDate": "2025-01-23",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Write documentation",
        "taskDescription": "Create documentation for the new API.",
        "taskDate": "2025-01-24",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "name": "Ahmed",
    "taskNumber": {
      "active": 3,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Test application",
        "taskDescription": "Perform QA testing on the new feature.",
        "taskDate": "2025-01-22",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare training",
        "taskDescription": "Organize training material for new hires.",
        "taskDate": "2025-01-26",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Fix bug",
        "taskDescription": "Resolve issue in login module.",
        "taskDate": "2025-01-27",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "name": "Ayesha",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Research technology",
        "taskDescription": "Study emerging AI tools.",
        "taskDate": "2025-01-22",
        "category": "Research",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Develop prototype",
        "taskDescription": "Build a prototype for the new application.",
        "taskDate": "2025-01-23",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "name": "Hassan",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Schedule meeting",
        "taskDescription": "Arrange a meeting with the marketing team.",
        "taskDate": "2025-01-22",
        "category": "Management",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Draft proposal",
        "taskDescription": "Write a proposal for the new project.",
        "taskDate": "2025-01-25",
        "category": "Planning",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123",
    "name": "Zara Ahmed",
    "taskNumber": {
      "active": 0,
      "newTask": 0,
      "completed": 0,
      "failed": 0
    },
    "tasks": []
  }
];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}

