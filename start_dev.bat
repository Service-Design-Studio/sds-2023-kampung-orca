start "API Gateway" cmd.exe /k "cd api-gateway && rails s"
start "Curriculum" cmd.exe /k "cd curriculum-service && rails s"
start "Forum" cmd.exe /k "cd forum-service && rails s"
start "Users" cmd.exe /k "cd user-service && rails s"
start "Frontend" cmd.exe /k "cd frontend && npm start"
start "Cypress" cmd.exe /k "cd frontend && npx cypress open"
