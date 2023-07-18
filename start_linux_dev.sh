#!/bin/bash

tmux new-session -d -s kampung

tmux split-window -v
tmux select-pane -t 1
tmux split-window -h
tmux select-pane -t 0
tmux split-window -h

sleep 1
tmux select-pane -t 0
tmux send-keys "cd api-gateway && rails s" C-m
tmux select-pane -t 1
tmux send-keys "cd curriculum-service && rails s" C-m
tmux select-pane -t 2
tmux send-keys "cd user-service && rails s" C-m
tmux select-pane -t 3
tmux send-keys "cd forum-service && rails s" C-m

# Attach to the tmux session
tmux attach-session -t kampung
