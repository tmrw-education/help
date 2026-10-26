---
id: who-the-user-sync-imports
summary:
  - "Only active workers in occupied, current positions are imported; temporary positions are left out."
  - "People are placed in the legal entities of their current employments, and moved when HR moves them."
  - "People no longer in HR are disabled, never deleted, and re-enabled if they come back."
  - "The import rules are set by TMRW support for your organisation."
keywords: [import rules, who is imported, active workers, temporary positions, T- positions, current employment, leavers, moves, transfers, legal entity change, not imported, inactive in HR]
video:
  youtube:
  bunny:
---

# Who the user sync imports

The user sync follows a set of import rules, so only the right people get accounts and everyone is placed where HR says
they work. TMRW support sets the rules with you when the integration is switched on.

1. Occupied, current positions

   The sync starts from positions in HR. A position counts when someone is assigned to it and the assignment is current
   on the day the sync runs. Vacant positions are left out.

2. Active workers only

   Only workers whose HR status is active are imported. Anyone else is not imported, with the reason **Inactive in HR**.

3. Temporary positions left out

   Positions whose ID starts with an excluded prefix are ignored. By default this is `T-`, used for temporary
   positions. Someone whose only positions are excluded isn't imported, with the reason **Only temporary (excluded)
   positions, such as T- positions**. If they also hold a normal position, only the normal one counts.

4. Placed by current employment

   Each person is placed in every legal entity they currently have an employment in, so someone employed by two schools
   is a member of both. Their job title and department come from their positions. A worker with no current employment
   isn't imported, with the reason **No current employment in HR**.

5. Moves between legal entities

   When HR places someone in a different legal entity, the sync moves them. Their memberships from HR that HR no longer
   supports are ended and kept as history, and new ones are added. Memberships an administrator added by hand are never
   touched. The results count them as **Moved**, for example "Moved: Riverside Secondary School → Hillview Academy".
   Learning rules then re-check the person, so their learning follows the move.

6. People no longer in HR

   After a complete sync, anyone linked to HR whom the sync no longer imports is disabled: people who have left HR, are
   inactive, have only temporary positions, or have no current employment. Nobody is deleted. Their learning records,
   completions and certificates are kept, and they're re-enabled automatically if a later sync finds them in HR again.
   Accounts created by hand, and accounts an administrator disabled, aren't changed. If a sync would disable more people
   than your review limit, it waits for an administrator. See
   [Review people before they're disabled](./09-review-people-before-they-are-disabled.md).

7. Line managers and staff categories

   If line managers from HR are switched on, the sync sets who reports to whom, and line manager access follows. If
   employment details are switched on, each person's staff category comes from HR, and categories HR sends that aren't
   defined yet are added automatically after a complete sync. See
   [Manage staff categories](../12-Access-and-permissions/09-manage-staff-categories.md).

8. Check one person

   To see how the rules apply to one person, use [Look up a person in HR](./10-look-up-a-person-in-hr.md). It shows
   their HR status, where their legal entities come from, and what the next sync will do.
