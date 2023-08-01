osascript -e 'tell application "System Events"
  tell application "Terminal"
    activate
    tell application "System Events" to keystroke "t" using command down
    delay 1
    do script "cd '$PWD'/api-gateway" in selected tab of front window
    do script "bundle install --without production && rake db:drop && rake db:migrate && rake db:seed" in selected tab of front window
    do script "cd .." in selected tab of front window
    do script "cd '$PWD'/curriculum-service" in selected tab of front window
    do script "bundle install --without production && rake db:drop && rake db:migrate && rake db:seed" in selected tab of front window
    do script "cd .." in selected tab of front window
    do script "cd '$PWD'/forum-service" in selected tab of front window
    do script "bundle install --without production && rake db:drop && rake db:migrate && rake db:seed" in selected tab of front window
    do script "cd .." in selected tab of front window
    do script "cd '$PWD'/user-service" in selected tab of front window
    do script "bundle install --without production && rake db:drop && rake db:migrate && rake db:seed" in selected tab of front window
    do script "cd .." in selected tab of front window
    do script "cd '$PWD'/frontend && npm i" in selected tab of front window
    do script "cd .." in selected tab of front window
    do script "cd '$PWD'/inactivity-checker-service" in selected tab of front window
    do script "bundle install --without production && rake db:drop && rake db:migrate && rake db:seed" in selected tab of front window
  end tell
end tell'
