# financetown
# 💰 Pixel Finance Game

**A gamified financial literacy tool designed to make learning about money habits engaging.**

## ✨ Overview
The Pixel Finance Game is a single-page React application that uses game mechanics (coins, XP, quests, and a customizable avatar) to teach fundamental financial concepts like budgeting, saving, and credit.

This project was initially generated and iterated upon using Claude, an AI assistant, and built using a modern React development environment.

## 🚀 Key Features

* **Currency & XP System:** Track Coins, Gems, and XP progression (Level 5 shown).
* **Interactive Lessons:** Complete lessons (e.g., The 50/30/20 Rule, Emergency Funds) to earn rewards.
* **Quests & Challenges:** Daily/Weekly financial challenges that reward the player.
* **In-Game Shop:** Buy accessories (hats, glasses) for the pixel-art avatar using in-game currency.
* **Styling:** Authentic pixel-art aesthetic achieved using the **Tailwind CSS** framework and the **'Press Start 2P'** font.
* **Budgeting UI:** Simple visual trackers for income, expenses, and savings goals.

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React** | Core user interface library. |
| **Tailwind CSS** | Utility-first CSS framework for fast, custom styling. |
| **Lucide React** | Lightweight, pixel-friendly icon set. |
| **Vite** | Modern build tool for fast development and bundling. |


## ⚙️ Local Setup and Installation

To run this project on your own machine, you will need **Node.js** and **npm** (or yarn/pnpm) installed.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YourUsername/pixel-finance-game.git](https://github.com/YourUsername/pixel-finance-game.git)
    cd pixel-finance-game
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or yarn dev
    ```

The application will typically be accessible in your browser at `http://localhost:5173` (or similar port).

## 💡 Future Enhancements

* Implementing state management (e.g., Redux or Zustand) for persistent user data.
* Adding user input fields for the Budget and Savings trackers.
* Expanding the shop inventory and avatar customization options.
* Integrating an actual database for cross-session progress tracking.
