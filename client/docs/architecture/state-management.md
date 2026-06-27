# State Management Overview

This document explains how state is organized and managed within the Test Case Management System (TCMS), with a focus on clarity, ownership, and predictable data flow.

## Guiding Principles

- **Pages own their own data.**  
  Each page (e.g., TestCaseListPage) is responsible for fetching and storing the data it displays.

- **Local state stays local.**  
  Forms, modals, and CRUD components manage their own internal state (inputs, validation, UI state).

- **Parents own refresh triggers.**  
  When a child component performs a CRUD action, it notifies the parent, and the parent decides how to refresh.

- **No global state unless absolutely necessary.**  
  Avoid global stores (Redux, Zustand) until multiple pages need shared, synchronized data.

- **Single-user focus.**  
  The system currently assumes one active user (userA). No real-time multi-user sync is required
