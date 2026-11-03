# IT313 - Student Directory (Core Components)

## Problem Description
A small Expo (React Native) screen designed for academic advisers to browse, search, and flag students needing academic advising this term.

## Component Structure
- **`StudentCard`**: A presentational ("dumb") component that receives student properties (`id`, `name`, `year`, `flagged`, `onToggleFlag`) and displays the layout using `View`, avatar initials, `Text`, and a `Pressable` flag button.
- **`App` (StudentDirectory)**: The parent component that holds the `students` array and `searchQuery` in state, handles search filtering, and manages flag toggles via callback functions.

## How to Run the App
1. Open your terminal inside the project folder.
2. Install dependencies (if needed):
   ```bash   npm install