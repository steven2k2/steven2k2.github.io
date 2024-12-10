#!/bin/bash

# Check if the tree command is available
if command -v tree &> /dev/null; then
  echo "Using 'tree' command to generate the folder structure..."
  # Generate the tree structure, excluding node_modules
  tree -a -I 'node_modules|.git' > folder-tree.txt
else
  echo "'tree' command not found. Using 'find' command as a fallback..."
  # Generate the folder structure with find, excluding node_modules
  find . -path './node_modules' -prune -o -path './.git' -prune -o -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g' > folder-tree.txt
fi

# Notify user of completion
echo "Folder structure has been saved to 'folder-tree.txt', excluding 'node_modules'."