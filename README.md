# Activity 07 — Save My Data

> **🛠️ Stack for this lesson** — Expo SDK 54 / React Native 0.79 · runs in Expo Go on a real phone.
> 📥 Template: [/learn/m1/template/activity-07-save-my-data](/learn/m1/template/activity-07-save-my-data)

A note-taking app where everything you type survives a full app reload because it's persisted to AsyncStorage. The note input, FlatList, NoteCard component, and the `StorageService` wrapper around AsyncStorage are pre-wired — you'll write the three async functions that hydrate from disk on launch, save after every add, and remove notes safely.

**Time:** ~75 minutes · **Concept:** Concept 07 — Local Storage and Persistence

---

## What You'll Build

| # | TODO | File |
|---|------|------|
| 1 | Hydrate the notes list from AsyncStorage when the screen mounts | `screens/NotesScreen.js` |
| 2 | Persist the notes list to AsyncStorage after each successful add | `screens/NotesScreen.js` |
| 3 | Confirm and delete a note, then update storage so the change survives reload | `screens/NotesScreen.js` |

The pattern: optimistic state update first, then write to storage; if the write fails, fall back to whatever's actually saved. The `StorageService` already handles the JSON encode/decode and error wrapping — you call `StorageService.load(NOTES_KEY)` and `StorageService.save(NOTES_KEY, value)`.

## Run It

```bash
npm install --legacy-peer-deps
npx expo start
```

Scan the QR code with **Expo Go** on a phone that's on the same Wi-Fi as your computer, or press `w` to preview in a browser.

## Verify

Your activity is done when, on a real device:

- [ ] On first launch, a loading spinner appears, then the screen shows the empty state.
- [ ] Adding a note shows it instantly in the list and clears the input.
- [ ] Force-quit the app via the app switcher, reopen it — the note is still there.
- [ ] Tapping the delete control shows a confirmation dialog with Cancel / Delete buttons.
- [ ] Confirming delete removes the note and the change survives a reload.
- [ ] Cancelling the delete dialog leaves the note untouched.

## Stretch

Pick one and write what you tried in your reflection:
- Add a "Clear all notes" button that wipes storage after one confirmation.
- Show a relative timestamp on each card (e.g. "5 minutes ago") using the existing `createdAt`.
- Sort the list newest-first and add a small pill that says when the list was last loaded.

## 🪞 Reflect on Your Work

Answer in 2-3 sentences each, in this README under your TODO commits. Your tutor reads these as part of grading.

1. **What did you learn that you didn't know before?** Name the most surprising thing — a bug you hit, a syntax quirk, a way the simulator and real device differ.
2. **How did you collaborate with AI?** If you used Claude / ChatGPT / Cursor / Copilot, what part of the work did *you* contribute — the prompt, the verification, the design decision, the bug-fix? If you didn't use AI, what was the hardest thing to figure out alone?
3. **How do you know your code works?** Describe one specific thing you did to confirm — a test you ran, a screenshot you took, a behavior you watched on the device.

> AI is a great collaborator. Owning your thinking, verifying the output, and explaining your design choices is what *learning* looks like in this course.

## Submit

When the Verify checklist is green, head to **[/learn/m1/certification](/learn/m1/certification)** and submit your activity link. Include 1–2 screenshots of the running app on your device.

<!-- claude-template-fix: readme-v3 -->
