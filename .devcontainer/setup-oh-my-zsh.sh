#!/bin/bash
set -e

# Install Zsh if not already installed
if ! command -v zsh &> /dev/null; then
  sudo apt update && sudo apt install -y zsh
fi

# Install oh-my-zsh
if [ ! -d "$HOME/.oh-my-zsh" ]; then
  RUNZSH=no CHSH=no sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
fi

# Set Zsh as default shell for the `node` user
sudo chsh -s $(which zsh) node
