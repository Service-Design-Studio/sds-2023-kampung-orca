osascript -e 'tell application "System Events"
  tell application "Terminal"
    activate
    tell application "System Events" to keystroke "t" using command down
    do script "cd '$PWD'/api-gateway" in selected tab of front window
    do script "bundle install && rake db:drop && rake db:migrate && rake db:seed" in selected tab of front window
    do script "cd .." in selected tab of front window
    do script "cd '$PWD'/curriculum-service && rails s" in selected tab of front window
    do script "bundle install && rake db:drop && rake db:migrate && rake db:seed" in selected tab of front window
    do script "cd .." in selected tab of front window
    do script "cd '$PWD'/forum-service && rails s" in selected tab of front window
    do script "bundle install && rake db:drop && rake db:migrate && rake db:seed" in selected tab of front window
    do script "cd .." in selected tab of front window
    do script "cd '$PWD'/user-service && rails s" in selected tab of front window
    do script "bundle install && rake db:drop && rake db:migrate && rake db:seed" in selected tab of front window
    do script "cd .." in selected tab of front window
    do script "cd '$PWD'/frontend && npm i" in selected tab of front window
    do script "cd .." in selected tab of front window
  end tell
end tell'
