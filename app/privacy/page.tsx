'use client'

import { IconMessage } from "@salutejs/plasma-icons";
import { Button } from "@salutejs/plasma-ui";

export default function PrivacyPage() {
  return (
    <div>
      <h1>Политика конфиденциальности</h1>
      <p>Здесь будет политика конфиденциальности приложения</p>
      <Button
        view="secondary"
        size="l"
        contentLeft={<IconMessage />}
        text="Secondary"
      ></Button>
    </div>
  );
}
