# LinkedIn Invitation Withdraw Script

This script automatically withdraws pending LinkedIn connection invitations in reverse order (newest first) with human-like delays to avoid detection.

## ✨ Features

- Processes invitations from oldest to newest
- Includes realistic delays between actions
- Provides clear console feedback
- Handles confirmation popups safely

## 🚀 How to Use

1. Go to LinkedIn's ["My Network" Pending Invitations page](https://www.linkedin.com/mynetwork/invitation-manager/sent/)
2. Open ***browser console*** (F12 or Right-click → Inspect)
3. Copy and paste the code below
4. Press Enter to execute

## 📋 Script Code

```javascript
/**
 * Automatically withdraws all pending LinkedIn invitations
 * Processes newest first with safe delays between actions
 */

// Find all withdraw buttons (in reverse order)
const invitations = Array.from(
  document.querySelectorAll(".invitation-card__action-btn")
).reverse();

console.log(`🔍 Found ${invitations.length} pending invitations to process`);

invitations.forEach((button, index) => {
  setTimeout(() => {
    // Click withdraw button
    button.click();
    console.log(`🖱️ Clicked withdraw (${index + 1}/${invitations.length})`);

    // Handle confirmation popup after delay
    setTimeout(() => {
      const confirmBtn = document.querySelector(".artdeco-button--primary");
      if (confirmBtn) {
        confirmBtn.click();
        console.log(`✅ Withdrawn ${index + 1}/${invitations.length}`);
      } else {
        console.log(`⚠️ Popup missing for ${index + 1}`);
      }
    }, 2000); // 2s delay for popup
  }, index * 6000); // 6s between invitations
});

console.log("🚀 Processing started - keep this tab open!");
```
