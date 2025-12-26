# Lecture 100: Selecting a Friend

## Overview
This lecture focuses on implementing the functionality to select a friend, display the split bill form, and manage the selected state throughout the component hierarchy.

## Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant Friend
    participant FriendsList
    participant App
    participant useState as App State
    participant FormSplitBill

    User->>Friend: Click "Select" button
    Friend->>FriendsList: Call onSelection(friend)
    FriendsList->>App: Call handleSelection(friend)
    
    App->>useState: Check if friend already selected<br/>(current?.id === friend.id)
    
    alt Friend Not Selected
        App->>useState: setSelectedFriend(friend)
        App->>useState: setShowAddFriend(false)
        useState->>App: Update selectedFriend state
        App->>FormSplitBill: Render with selectedFriend prop
        App->>FriendsList: Pass selectedFriend prop
        FriendsList->>Friend: Pass selectedFriend prop
        Friend->>Friend: Check isSelected<br/>(selectedFriend?.id === friend.id)
        Friend->>Friend: Apply "selected" className
        Friend->>Friend: Change button text to "Close"
        FormSplitBill-->>User: Display split bill form
    else Friend Already Selected
        App->>useState: setSelectedFriend(null)
        useState->>App: Clear selectedFriend state
        App->>App: Remove FormSplitBill from DOM
        Friend->>Friend: Remove "selected" className
        Friend->>Friend: Change button text to "Select"
        App-->>User: Hide split bill form
    end
```

## State Management Flow

```
App Component State:
├── friends: Array
├── showAddFriend: boolean
└── selectedFriend: Object | null
    ├── null: No friend selected
    └── friend object: Friend selected
        └── FormSplitBill rendered
```

## Prop Drilling Path

```
App
├── selectedFriend (state)
└── handleSelection (function)
    └── FriendsList
        ├── selectedFriend (prop)
        └── onSelection (prop)
            └── Friend
                ├── selectedFriend (prop)
                └── onSelection (prop)
                    └── Button onClick
```

## Key Concepts

- **Selection State**: Managing which friend is currently selected
- **Conditional Rendering**: Showing `FormSplitBill` only when a friend is selected
- **Prop Drilling**: Passing `selectedFriend` and `onSelection` through multiple component levels
- **Toggle Selection**: Selecting/deselecting the same friend
- **Visual Feedback**: Applying selected styles and changing button text
- **Form Closure**: Closing `FormAddFriend` when selecting a friend

## Implementation Steps

1. Add `selectedFriend` state to `App` component
2. Create `handleSelection` function with toggle logic
3. Pass `onSelection` prop through `FriendsList` to `Friend`
4. Pass `selectedFriend` prop through `FriendsList` to `Friend`
5. Implement selection logic in `Friend` component
6. Apply conditional styling based on selection
7. Update button text based on selection state
8. Pass `selectedFriend` to `FormSplitBill` component
9. Display friend's name in `FormSplitBill`
10. Close `FormAddFriend` when selecting a friend


