import { Action, ActionPanel, List, open } from "@raycast/api";
import { THAW_ACTIONS } from "@data";

export default function Command() {
  return (
    <List searchBarPlaceholder="Search for an action...">
      {THAW_ACTIONS.map((action) => (
        <List.Item
          key={action.id}
          title={action.title}
          subtitle={action.subtitle}
          actions={
            <ActionPanel>
              <Action title="Run Action" onAction={async () => await open(action.url)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
