osascript -e 'tell application "System Events"
    if not (exists process "Terminal") then
        tell application "Terminal"
            activate
            do script "cd '$PWD'/forum-ml-test && pipenv shell" in selected tab of front window
            delay 6
            do script "python3 main.py" in selected tab of front window
            tell application "System Events" to keystroke "t" using command down
            delay 1
            tell application "System Events" to keystroke "2" using command down
            do script "cd '$PWD'/curriculum-service && rails s" in selected tab of front window
            tell application "System Events" to keystroke "t" using command down
            delay 1
            tell application "System Events" to keystroke "3" using command down
            do script "cd '$PWD'/forum-service && rails s" in selected tab of front window
            tell application "System Events" to keystroke "t" using command down
            delay 1
            tell application "System Events" to keystroke "4" using command down
            do script "cd '$PWD'/user-service && rails s" in selected tab of front window
            tell application "System Events" to keystroke "t" using command down
            delay 1
            tell application "System Events" to keystroke "5" using command down
            do script "cd '$PWD'/frontend && npm start" in selected tab of front window
            tell application "System Events" to keystroke "t" using command down
            delay 1
            tell application "System Events" to keystroke "6" using command down
            do script "cd '$PWD'/api-gateway && rails s" in selected tab of front window
            tell application "System Events" to keystroke "t" using command down
            delay 1
            tell application "System Events" to keystroke "7" using command down
            do script "cd '$PWD'/inactivity-checker-service && rails s" in selected tab of front window
            tell application "System Events" to keystroke "t" using command down
            delay 1
            tell application "System Events" to keystroke "8" using command down
            do script "cd '$PWD'/frontend && npx cypress open" in selected tab of front window
        end tell
    end if
end tell'
