# 🧑🏾‍💻 Section 08

## 📚 Lecture 096: Building the Static App: List of Friends

### 1. **`App`** component:
```jsx
/* src/App.jsx */
import FriendsList from "./components/FriendsList";
function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
      </div>
    </div>
  );
}
export default App;
```


### 2. **`FriendsList`** component:
```jsx
/* src/components/FriendsList.jsx */
import Friend from "./Friend";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
const friends = initialFriends;
const FriendsList = () => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};
export default FriendsList;
```

### 3. **`Friend`** component:
```jsx
/* src/components/Friend.jsx */
const Friend = ({ friend }) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <button className="button">Select</button>
    </li>
  );
};
export default Friend;
```

## 📚 Lecture 0
## 📚 Lecture 0