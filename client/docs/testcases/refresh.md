---

# 📄 **refresh.md**

````markdown
# Refresh Mechanism (refreshKey Pattern)

This document describes the refresh mechanism used throughout the TCMS to ensure UI consistency after CRUD operations.

## Overview

The system uses a simple, reliable pattern to trigger data reloads:

1. The parent page maintains a `refreshKey` state variable.
2. CRUD actions increment this key.
3. A `useEffect` hook re-fetches data whenever the key changes.

This ensures the UI always reflects the latest backend state.

## Example Implementation

### Parent Page (e.g., TestCaseListPage)

```jsx
const [refreshKey, setRefreshKey] = useState(0);

useEffect(() => {
  fetchTestCases();
}, [refreshKey]);

const handleDelete = async (id) => {
  await deleteTestCase(id);
  setRefreshKey((k) => k + 1); // Trigger refresh
};
```
````
