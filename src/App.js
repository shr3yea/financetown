import React, { useState } from "react";
import {
  Coins,
  Gem,
  Star,
  TrendingUp,
  PiggyBank,
  Target,
  ShoppingBag,
  X,
  Check,
} from "lucide-react";

const App = () => {
  const [coins, setCoins] = useState(1250);
  const [gems, setGems] = useState(42);
  const [xp, setXp] = useState(350);
  const maxXp = 500;
  const [currentScreen, setCurrentScreen] = useState("home");
  const [ownedItems, setOwnedItems] = useState(["hat1", "shirt1"]);

  const quests = [
    {
      id: 1,
      title: "Track Your Spending",
      reward: 50,
      icon: "📊",
      completed: false,
    },
    {
      id: 2,
      title: "Save $10 Today",
      reward: 75,
      icon: "💰",
      completed: false,
    },
    {
      id: 3,
      title: "Complete Budget Review",
      reward: 100,
      icon: "✨",
      completed: true,
    },
  ];

  const shopItems = [
    {
      id: "hat1",
      name: "Cute Cap",
      price: 100,
      type: "hat",
      emoji: "🧢",
      color: "#ff8a80",
    },
    {
      id: "hat2",
      name: "Party Hat",
      price: 150,
      type: "hat",
      emoji: "🎩",
      color: "#b39ddb",
    },
    {
      id: "hat3",
      name: "Crown",
      price: 300,
      type: "hat",
      emoji: "👑",
      color: "#ffd54f",
    },
    {
      id: "shirt1",
      name: "T-Shirt",
      price: 80,
      type: "shirt",
      emoji: "👕",
      color: "#81c784",
    },
    {
      id: "shirt2",
      name: "Sweater",
      price: 120,
      type: "shirt",
      emoji: "🧥",
      color: "#ffab91",
    },
    {
      id: "acc1",
      name: "Glasses",
      price: 90,
      type: "accessory",
      emoji: "👓",
      color: "#90caf9",
    },
    {
      id: "acc2",
      name: "Backpack",
      price: 200,
      type: "accessory",
      emoji: "🎒",
      color: "#ce93d8",
    },
    {
      id: "acc3",
      name: "Star Badge",
      price: 250,
      type: "accessory",
      emoji: "⭐",
      color: "#fff176",
    },
  ];

  const buyItem = (item) => {
    if (coins >= item.price && !ownedItems.includes(item.id)) {
      setCoins(coins - item.price);
      setOwnedItems([...ownedItems, item.id]);
    }
  };

  const renderCharacter = () => (
    <div
      className="relative mx-auto"
      style={{ width: "120px", height: "140px" }}
    >
      {/* Body */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-2xl"
        style={{
          width: "80px",
          height: "90px",
          background: "linear-gradient(to bottom, #ffccbc 0%, #ffab91 100%)",
          border: "3px solid #ff8a65",
        }}
      >
        {/* Face */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          {/* Eyes */}
          <div className="flex gap-3 mb-1">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#3e2723" }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#3e2723" }}
            />
          </div>
          {/* Smile */}
          <div
            className="w-4 h-2 mx-auto mt-2 rounded-b-full border-b-2 border-l-2 border-r-2"
            style={{ borderColor: "#d84315" }}
          />
        </div>

        {/* Arms */}
        <div
          className="absolute -left-4 top-6 w-4 h-6 rounded-lg"
          style={{ background: "#ffccbc", border: "2px solid #ff8a65" }}
        />
        <div
          className="absolute -right-4 top-6 w-4 h-6 rounded-lg"
          style={{ background: "#ffccbc", border: "2px solid #ff8a65" }}
        />
      </div>

      {/* Legs */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2"
        style={{ marginBottom: "-12px" }}
      >
        <div
          className="w-6 h-12 rounded-lg"
          style={{ background: "#7e57c2", border: "2px solid #5e35b1" }}
        />
        <div
          className="w-6 h-12 rounded-lg"
          style={{ background: "#7e57c2", border: "2px solid #5e35b1" }}
        />
      </div>

      {/* Accessories */}
      {ownedItems.includes("hat1") && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-3xl">
          🧢
        </div>
      )}
      {ownedItems.includes("acc1") && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-2xl">
          👓
        </div>
      )}
    </div>
  );

  const renderHome = () => (
    <>
      {/* Character Display */}
      <div
        className="mb-8 p-6 rounded-2xl text-center"
        style={{
          background: "rgba(255,255,255,0.6)",
          border: "3px solid rgba(255,255,255,0.9)",
        }}
      >
        {renderCharacter()}
        <p className="text-xs mt-4" style={{ color: "#7e57c2" }}>
          YOUR FINANCE BUDDY
        </p>
      </div>

      {/* Town Buildings */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Budget Building */}
        <button
          onClick={() => setCurrentScreen("budget")}
          className="pixel-button p-6 rounded-2xl text-center relative overflow-hidden group"
          style={{ background: "#a5d6a7", border: "4px solid #81c784" }}
        >
          <div
            className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
            style={{
              background:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)",
            }}
          />
          <div className="relative">
            <div
              className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center"
              style={{ background: "#66bb6a", border: "3px solid #4caf50" }}
            >
              <TrendingUp size={28} style={{ color: "#fff" }} />
            </div>
            <h3
              className="text-sm mb-2 pixel-shadow"
              style={{ color: "#2e7d32" }}
            >
              BUDGET
            </h3>
          </div>
        </button>

        {/* Savings Building */}
        <button
          onClick={() => setCurrentScreen("savings")}
          className="pixel-button p-6 rounded-2xl text-center relative overflow-hidden group"
          style={{ background: "#ffccbc", border: "4px solid #ffab91" }}
        >
          <div
            className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
            style={{
              background:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)",
            }}
          />
          <div className="relative">
            <div
              className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center"
              style={{ background: "#ff8a65", border: "3px solid #ff7043" }}
            >
              <PiggyBank size={28} style={{ color: "#fff" }} />
            </div>
            <h3
              className="text-sm mb-2 pixel-shadow"
              style={{ color: "#d84315" }}
            >
              SAVINGS
            </h3>
          </div>
        </button>

        {/* Challenges Building */}
        <button
          onClick={() => setCurrentScreen("challenges")}
          className="pixel-button p-6 rounded-2xl text-center relative overflow-hidden group"
          style={{ background: "#b39ddb", border: "4px solid #9575cd" }}
        >
          <div
            className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
            style={{
              background:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)",
            }}
          />
          <div className="relative">
            <div
              className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center"
              style={{ background: "#7e57c2", border: "3px solid #673ab7" }}
            >
              <Target size={28} style={{ color: "#fff" }} />
            </div>
            <h3
              className="text-sm mb-2 pixel-shadow"
              style={{ color: "#4527a0" }}
            >
              CHALLENGES
            </h3>
          </div>
        </button>

        {/* Shop Building */}
        <button
          onClick={() => setCurrentScreen("shop")}
          className="pixel-button p-6 rounded-2xl text-center relative overflow-hidden group"
          style={{ background: "#fff59d", border: "4px solid #fff176" }}
        >
          <div
            className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
            style={{
              background:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)",
            }}
          />
          <div className="relative">
            <div
              className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center"
              style={{ background: "#fdd835", border: "3px solid #fbc02d" }}
            >
              <ShoppingBag size={28} style={{ color: "#fff" }} />
            </div>
            <h3
              className="text-sm mb-2 pixel-shadow"
              style={{ color: "#f57f17" }}
            >
              SHOP
            </h3>
          </div>
        </button>
      </div>

      {/* Daily Quests */}
      <div>
        <h2 className="text-lg pixel-shadow mb-4" style={{ color: "#7e57c2" }}>
          DAILY QUESTS
        </h2>
        <div className="grid gap-4">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className="quest-card p-4 rounded-xl flex items-center justify-between"
              style={{
                background: quest.completed ? "#c8e6c9" : "#fff9e5",
                border: `3px solid ${quest.completed ? "#a5d6a7" : "#fff59d"}`,
                opacity: quest.completed ? 0.8 : 1,
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                  style={{
                    background: quest.completed ? "#81c784" : "#fff176",
                    border: `2px solid ${
                      quest.completed ? "#66bb6a" : "#fdd835"
                    }`,
                  }}
                >
                  {quest.completed ? "✓" : quest.icon}
                </div>
                <div>
                  <h3
                    className="text-xs mb-1"
                    style={{
                      color: quest.completed ? "#2e7d32" : "#f57f17",
                      textDecoration: quest.completed ? "line-through" : "none",
                    }}
                  >
                    {quest.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Coins size={12} style={{ color: "#f57f17" }} />
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#f57f17" }}
                    >
                      +{quest.reward}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderBudget = () => (
    <div>
      <button
        onClick={() => setCurrentScreen("home")}
        className="mb-6 px-4 py-2 rounded-lg pixel-button text-xs"
        style={{
          background: "#e1bee7",
          border: "2px solid #ce93d8",
          color: "#7e57c2",
        }}
      >
        ← BACK TO TOWN
      </button>
      <div
        className="p-6 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.6)",
          border: "3px solid rgba(255,255,255,0.9)",
        }}
      >
        <h2 className="text-xl pixel-shadow mb-6" style={{ color: "#2e7d32" }}>
          BUDGET TRACKER
        </h2>

        <div className="space-y-4">
          <div
            className="p-4 rounded-xl"
            style={{ background: "#c8e6c9", border: "2px solid #a5d6a7" }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-xs" style={{ color: "#2e7d32" }}>
                Income
              </span>
              <span className="text-sm font-bold" style={{ color: "#2e7d32" }}>
                $2,500
              </span>
            </div>
            <div
              className="h-3 rounded-full"
              style={{ background: "#81c784" }}
            />
          </div>

          <div
            className="p-4 rounded-xl"
            style={{ background: "#ffccbc", border: "2px solid #ffab91" }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-xs" style={{ color: "#d84315" }}>
                Expenses
              </span>
              <span className="text-sm font-bold" style={{ color: "#d84315" }}>
                $1,200
              </span>
            </div>
            <div
              className="h-3 rounded-full"
              style={{ background: "#ff8a65", width: "48%" }}
            />
          </div>

          <div
            className="p-4 rounded-xl"
            style={{ background: "#fff9e5", border: "2px solid #fff59d" }}
          >
            <div className="flex justify-between">
              <span className="text-xs" style={{ color: "#f57f17" }}>
                Remaining
              </span>
              <span className="text-lg font-bold" style={{ color: "#f57f17" }}>
                $1,300
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs mt-6 text-center" style={{ color: "#7e57c2" }}>
          Great job! You're staying within budget! 🎉
        </p>
      </div>
    </div>
  );

  const renderSavings = () => (
    <div>
      <button
        onClick={() => setCurrentScreen("home")}
        className="mb-6 px-4 py-2 rounded-lg pixel-button text-xs"
        style={{
          background: "#e1bee7",
          border: "2px solid #ce93d8",
          color: "#7e57c2",
        }}
      >
        ← BACK TO TOWN
      </button>
      <div
        className="p-6 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.6)",
          border: "3px solid rgba(255,255,255,0.9)",
        }}
      >
        <h2 className="text-xl pixel-shadow mb-6" style={{ color: "#d84315" }}>
          SAVINGS GOALS
        </h2>

        <div className="space-y-4">
          {[
            {
              name: "Emergency Fund",
              current: 750,
              goal: 1000,
              color: "#ff8a65",
            },
            { name: "Vacation", current: 300, goal: 800, color: "#ba68c8" },
            { name: "New Laptop", current: 450, goal: 1200, color: "#4fc3f7" },
          ].map((goal, i) => (
            <div
              key={i}
              className="p-4 rounded-xl"
              style={{ background: "#fff", border: "3px solid #ffccbc" }}
            >
              <div className="flex justify-between mb-2">
                <span
                  className="text-xs font-bold"
                  style={{ color: "#d84315" }}
                >
                  {goal.name}
                </span>
                <span className="text-xs" style={{ color: "#d84315" }}>
                  ${goal.current} / ${goal.goal}
                </span>
              </div>
              <div
                className="h-4 rounded-full overflow-hidden"
                style={{ background: "#ffccbc" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(goal.current / goal.goal) * 100}%`,
                    background: goal.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs mt-6 text-center" style={{ color: "#7e57c2" }}>
          Keep saving to reach your goals! 💰
        </p>
      </div>
    </div>
  );

  const renderChallenges = () => (
    <div>
      <button
        onClick={() => setCurrentScreen("home")}
        className="mb-6 px-4 py-2 rounded-lg pixel-button text-xs"
        style={{
          background: "#e1bee7",
          border: "2px solid #ce93d8",
          color: "#7e57c2",
        }}
      >
        ← BACK TO TOWN
      </button>
      <div
        className="p-6 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.6)",
          border: "3px solid rgba(255,255,255,0.9)",
        }}
      >
        <h2 className="text-xl pixel-shadow mb-6" style={{ color: "#4527a0" }}>
          WEEKLY CHALLENGES
        </h2>

        <div className="space-y-4">
          {[
            {
              title: "No Spend Weekend",
              reward: 200,
              difficulty: "Hard",
              emoji: "🎯",
            },
            {
              title: "Track All Purchases",
              reward: 100,
              difficulty: "Medium",
              emoji: "📝",
            },
            {
              title: "Find 3 Savings Deals",
              reward: 150,
              difficulty: "Medium",
              emoji: "🔍",
            },
          ].map((challenge, i) => (
            <div
              key={i}
              className="p-4 rounded-xl"
              style={{ background: "#e1bee7", border: "3px solid #ce93d8" }}
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl">{challenge.emoji}</div>
                <div className="flex-1">
                  <h3
                    className="text-sm font-bold mb-1"
                    style={{ color: "#4527a0" }}
                  >
                    {challenge.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs px-2 py-1 rounded"
                      style={{ background: "#b39ddb", color: "#4527a0" }}
                    >
                      {challenge.difficulty}
                    </span>
                    <div className="flex items-center gap-1">
                      <Coins size={12} style={{ color: "#f57f17" }} />
                      <span
                        className="text-xs font-bold"
                        style={{ color: "#f57f17" }}
                      >
                        +{challenge.reward}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  className="px-3 py-2 rounded-lg pixel-button text-xs"
                  style={{
                    background: "#7e57c2",
                    color: "#fff",
                    border: "2px solid #673ab7",
                  }}
                >
                  START
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderShop = () => (
    <div>
      <button
        onClick={() => setCurrentScreen("home")}
        className="mb-6 px-4 py-2 rounded-lg pixel-button text-xs"
        style={{
          background: "#e1bee7",
          border: "2px solid #ce93d8",
          color: "#7e57c2",
        }}
      >
        ← BACK TO TOWN
      </button>

      <div
        className="mb-6 p-6 rounded-2xl text-center"
        style={{
          background: "rgba(255,255,255,0.6)",
          border: "3px solid rgba(255,255,255,0.9)",
        }}
      >
        {renderCharacter()}
        <p className="text-xs mt-4" style={{ color: "#7e57c2" }}>
          Dress up your buddy!
        </p>
      </div>

      <h2 className="text-xl pixel-shadow mb-4" style={{ color: "#f57f17" }}>
        SHOP
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {shopItems.map((item) => {
          const owned = ownedItems.includes(item.id);
          const canAfford = coins >= item.price;

          return (
            <div
              key={item.id}
              className="p-4 rounded-xl quest-card"
              style={{
                background: owned ? "#c8e6c9" : item.color,
                border: `3px solid ${owned ? "#a5d6a7" : item.color}`,
                opacity: owned ? 0.7 : 1,
              }}
            >
              <div className="text-4xl text-center mb-2">{item.emoji}</div>
              <h3
                className="text-xs font-bold text-center mb-2"
                style={{ color: "#3e2723" }}
              >
                {item.name}
              </h3>
              <div className="flex items-center justify-center gap-1 mb-3">
                <Coins size={12} style={{ color: "#f57f17" }} />
                <span
                  className="text-xs font-bold"
                  style={{ color: "#f57f17" }}
                >
                  {item.price}
                </span>
              </div>

              {owned ? (
                <div
                  className="text-center py-2 rounded-lg"
                  style={{ background: "#81c784" }}
                >
                  <Check
                    size={16}
                    className="inline"
                    style={{ color: "#fff" }}
                  />
                  <span className="text-xs ml-1" style={{ color: "#fff" }}>
                    OWNED
                  </span>
                </div>
              ) : (
                <button
                  onClick={() => buyItem(item)}
                  disabled={!canAfford}
                  className="w-full py-2 rounded-lg pixel-button text-xs font-bold"
                  style={{
                    background: canAfford ? "#fdd835" : "#bdbdbd",
                    color: canAfford ? "#f57f17" : "#757575",
                    border: `2px solid ${canAfford ? "#fbc02d" : "#9e9e9e"}`,
                    cursor: canAfford ? "pointer" : "not-allowed",
                  }}
                >
                  BUY
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen p-6"
      style={{
        background:
          "linear-gradient(to bottom, #e8d5f2 0%, #fce4ec 50%, #fff3e0 100%)",
        fontFamily: '"Press Start 2P", cursive',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .pixel-shadow {
          text-shadow: 3px 3px 0px rgba(0,0,0,0.1);
        }
        
        .pixel-button {
          box-shadow: 
            inset -4px -4px 0px rgba(0,0,0,0.1),
            inset 4px 4px 0px rgba(255,255,255,0.3),
            4px 4px 0px rgba(0,0,0,0.1);
          transition: transform 0.1s;
        }
        
        .pixel-button:hover:not(:disabled) {
          transform: translateY(-2px);
        }
        
        .pixel-button:active:not(:disabled) {
          transform: translateY(1px);
        }
        
        .quest-card {
          box-shadow: 
            4px 4px 0px rgba(0,0,0,0.08),
            inset 2px 2px 0px rgba(255,255,255,0.3);
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1
              className="text-2xl pixel-shadow mb-2"
              style={{ color: "#9575cd" }}
            >
              FINANCE TOWN
            </h1>
          </div>

          {/* Currency Display */}
          <div className="flex gap-3">
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-lg pixel-button"
              style={{ background: "#ffe082", border: "3px solid #ffd54f" }}
            >
              <Coins size={18} style={{ color: "#f57f17" }} />
              <span className="text-xs font-bold" style={{ color: "#f57f17" }}>
                {coins}
              </span>
            </div>
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-lg pixel-button"
              style={{ background: "#b39ddb", border: "3px solid #9575cd" }}
            >
              <Gem size={18} style={{ color: "#5e35b1" }} />
              <span className="text-xs font-bold" style={{ color: "#5e35b1" }}>
                {gems}
              </span>
            </div>
          </div>
        </div>

        {/* XP Progress Bar */}
        <div
          className="mb-8 p-4 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.6)",
            border: "3px solid rgba(255,255,255,0.9)",
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs" style={{ color: "#7e57c2" }}>
              LEVEL 5
            </span>
            <span className="text-xs" style={{ color: "#7e57c2" }}>
              {xp}/{maxXp} XP
            </span>
          </div>
          <div
            className="h-6 rounded-lg overflow-hidden"
            style={{ background: "#e1bee7", border: "2px solid #ce93d8" }}
          >
            <div
              className="h-full rounded-lg transition-all duration-500"
              style={{
                width: `${(xp / maxXp) * 100}%`,
                background: "linear-gradient(90deg, #ba68c8 0%, #ab47bc 100%)",
              }}
            />
          </div>
        </div>

        {/* Dynamic Content */}
        {currentScreen === "home" && renderHome()}
        {currentScreen === "budget" && renderBudget()}
        {currentScreen === "savings" && renderSavings()}
        {currentScreen === "challenges" && renderChallenges()}
        {currentScreen === "shop" && renderShop()}
      </div>
    </div>
  );
};

export default App;
