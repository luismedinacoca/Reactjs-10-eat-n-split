# 🍽️ Eat-'N-Split

A modern React application for splitting bills between friends. This project is part of Jonas Schmedtmann's React course and demonstrates fundamental React concepts such as state, props, lifting state up, and controlled form handling.

## 📋 Description

Eat-'N-Split is an application that allows you to:
- ✅ Add friends to your list
- ✅ Select a friend to split a bill
- ✅ Automatically calculate who owes whom
- ✅ Update the balance between you and your friends
- ✅ Visualize debt status (who owes whom)

## 🚀 How the project was created

This project was created using **Vite** as the build tool:

```bash
npm create vite@latest 10-eat-n-split -- --template react
cd 10-eat-n-split
npm install
```

### Development commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📥 Clone the repository

To clone this project from GitHub:

```bash
# Clone the repository
git clone https://github.com/[your-username]/10-eat-n-split.git

# Navigate to the directory
cd 10-eat-n-split

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project structure

```
10-eat-n-split/
├── docs/
│   └── LECTURE_STEPS.md          # Detailed documentation of each lecture
├── img/                          # Project reference images
├── public/                       # Static files
├── src/
│   ├── common/
│   │   └── Button.jsx           # Reusable button component
│   ├── components/
│   │   ├── Friend.jsx           # Component to display a friend
│   │   ├── FriendsList.jsx      # Friends list
│   │   ├── FormAddFriend.jsx    # Form to add friends
│   │   └── FormSplitBill.jsx    # Form to split bill
│   ├── App.jsx                  # Main component
│   ├── main.jsx                 # Application entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎓 Topics covered in the project

### 📚 Lecture 096: Building the Static App: List of Friends
- **Topics covered:**
  - Creating basic React components
  - Rendering lists with `.map()`
  - Using props to pass data between components
  - Component structure: `App` → `FriendsList` → `Friend`
  - Conditional rendering based on balance (`balance < 0`, `balance > 0`, `balance === 0`)
  - Using `Math.abs()` for absolute values

**Components created:**
- `App.jsx` - Main component
- `FriendsList.jsx` - Friends list
- `Friend.jsx` - Individual friend item

### 📚 Lecture 097: Building the Static App: Forms
- **Topics covered:**
  - Creating reusable components (`Button`)
  - Form structure in React
  - Component organization in folders (`common/`, `components/`)
  - Integrating multiple components in the UI

**Components created:**
- `Button.jsx` - Reusable button component
- `FormAddFriend.jsx` - Form to add friends
- `FormSplitBill.jsx` - Form to split bill

### 📚 Lecture 098: Displaying the New Friend Form
- **Topics covered:**
  - Introduction to `useState` hook
  - State management to show/hide components
  - Passing functions as props (`onClick`)
  - Conditional rendering with ternary operator
  - State updates with `setState`

**Key concepts:**
- Local state with `useState(false)`
- State toggle with `setShowAddFriend(!showAddFriend)`
- Function props for event handling

### 📚 Lecture 099: Adding a New Friend
- **Topics covered:**
  - Controlled components (controlled forms)
  - Managing multiple states (`name`, `image`)
  - Form validation
  - Preventing default behavior with `e.preventDefault()`
  - Generating unique IDs with `crypto.randomUUID()`
  - **Lifting State Up** - Elevating state to the common parent component
  - Immutability: creating new arrays instead of mutating existing ones
  - Spread operator (`...`) to create new objects

**Key concepts:**
- `value` and `onChange` in controlled inputs
- Validation: `if (!name || !image) return`
- Lifting state: moving `initialFriends` from `FriendsList` to `App`
- Immutable updates: `setFriends((friends) => [...friends, friend])`

### 📚 Lecture 100: Selecting a Friend
- **Topics covered:**
  - Selecting items from a list
  - State for selected element (`selectedFriend`)
  - **Prop Drilling** - Passing props through multiple levels
  - Conditional rendering based on selection
  - Optional chaining (`?.`) to avoid errors with null values
  - Selection toggle (select/deselect)
  - Closing one form when opening another

**Key concepts:**
- `selectedFriend` state in `App`
- Prop drilling: `App` → `FriendsList` → `Friend`
- ID comparison: `selectedFriend?.id === friend.id`
- Smart toggle: `setSelectedFriend((current) => (current?.id === friend.id ? null : friend))`
- Conditional styles: `className={isSelected ? "selected" : ""}`

### 📚 Lecture 101: Creating Controlled Elements
- **Topics covered:**
  - Fully controlled forms
  - Multiple states in a component (`bill`, `paidByUser`, `whoIsPaying`)
  - Type conversion: strings to numbers with `Number()`
  - Derived calculations: `paidByFriend = bill - paidByUser`
  - Input validation (prevent values greater than total)
  - Disabled inputs (`disabled`)
  - Handling select elements

**Key concepts:**
- Controlled states: `value={bill}` and `onChange={(e) => setBill(Number(e.target.value))}`
- Validation: `Number(e.target.value) > bill ? paidByUser : Number(e.target.value)`
- Derived values: `let paidByFriend = bill ? bill - paidByUser : ""`

### 📚 Lecture 102: Splitting a Bill
- **Topics covered:**
  - Form submit handling
  - Balance calculation based on who pays
  - Array updates with `.map()`
  - Conditional logic to calculate positive/negative balance
  - Form reset after submit
  - Closing form after successful operation

**Key concepts:**
- Submit handler: `onSubmit={handleSubmit}`
- Balance calculation: `whoIsPaying === "user" ? paidByFriend : -paidByUser`
- Immutable updates with `.map()`: `friends.map((friend) => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend)`
- Reset: `setSelectedFriend(null)`

## ✅ Goals achieved

- ✅ Creating a functional React application from scratch
- ✅ Complete state management with `useState`
- ✅ Implementing controlled forms
- ✅ Lifting state up to share state between components
- ✅ Prop drilling to pass data and functions
- ✅ Conditional rendering based on state
- ✅ Form validation
- ✅ Dynamic calculations and data updates
- ✅ Interactive UI with visual feedback (conditional styles)
- ✅ Code organization in reusable components
- ✅ Best practices: immutability, early returns, clean code

## 🔄 Next steps suggested

### Functional improvements:
- [ ] Data persistence (localStorage or database)
- [ ] Transaction history
- [ ] Edit friend information
- [ ] Delete friends
- [ ] More robust form validation
- [ ] Error handling and error messages
- [ ] Confirmation before splitting bill

### Technical improvements:
- [ ] Migration to TypeScript for type safety
- [ ] Implementation of Context API to avoid prop drilling
- [ ] Using useReducer for complex state management
- [ ] Unit testing implementation (Jest + React Testing Library)
- [ ] Performance optimization with React.memo
- [ ] React Router implementation for multiple views
- [ ] Add animations with Framer Motion
- [ ] Responsive design for mobile devices

### UX/UI improvements:
- [ ] Improve responsive design
- [ ] Add transition animations
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Dark mode
- [ ] Better visual feedback for user actions
- [ ] Loading states
- [ ] Clearer success/error messages

## 🛠️ Technologies used

- **React 19.2.0** - JavaScript library for building user interfaces
- **Vite 7.2.4** - Build tool and development server
- **ESLint** - Linter to maintain consistent code
- **CSS3** - Styles with CSS variables and Grid Layout

## 📦 Dependencies

### Production:
- `react`: ^19.2.0
- `react-dom`: ^19.2.0

### Development:
- `@vitejs/plugin-react`: ^5.1.1
- `vite`: ^7.2.4
- `eslint`: ^9.39.1
- `eslint-plugin-react-hooks`: ^7.0.1
- `eslint-plugin-react-refresh`: ^0.4.24

## 🎯 React concepts learned

1. **Functional Components** - Creating and using components
2. **Props** - Passing data from parent to child
3. **useState Hook** - Local state management
4. **Event Handlers** - Handling events (onClick, onSubmit, onChange)
5. **Controlled Components** - Forms controlled by React
6. **Lifting State Up** - Elevating state to the nearest common component
7. **Prop Drilling** - Passing props through multiple levels
8. **Conditional Rendering** - Show/hide elements based on state
9. **Lists and Keys** - Rendering lists with `.map()` and unique keys
10. **Immutability** - Creating new objects/arrays instead of mutating
11. **Spread Operator** - `...` to copy objects and arrays
12. **Optional Chaining** - `?.` for safe property access
13. **Early Returns** - Pattern to improve readability

## 📝 Additional notes

- The project uses **CSS Grid** and **Flexbox** for layout
- Styles are centralized in `index.css` with CSS variables
- Uses `crypto.randomUUID()` to generate unique IDs
- The project follows React best practices without using additional libraries
- All components are functional (no class components used)

## 📄 License

This project is part of an educational course and is for educational use.

---

**Developed as part of Jonas Schmedtmann's React course**
