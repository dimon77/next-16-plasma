"use client";

import { Button } from "@salutejs/plasma-ui/components/Button";

export default function MessagesPage() {
  return (
    <div>
      <h1>Сообщения</h1>
      <p>Здесь будет лента сообщений</p>
      <div>
        <Button view="success" size="l">
          Success
        </Button>
        <Button view="warning" size="l">
          Warning
        </Button>
      </div>
    </div>
  );
}
