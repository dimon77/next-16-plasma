"use client";

import { Container, Button, Headline3 } from "@salutejs/plasma-ui";
import { IconDevice, IconMessage } from "@salutejs/plasma-icons";

export default function TestPlasmaPage() {
  return (
    <Container>
      <Headline3>Тест Plasma UI</Headline3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <Button
          view="primary"
          size="l"
          contentLeft={<IconDevice />}
          text="Primary"
        ></Button>
        <Button
          view="secondary"
          size="l"
          contentLeft={<IconMessage />}
          text="Secondary"
        ></Button>
        <Button view="success" size="l">
          Success
        </Button>
        <Button view="warning" size="l">
          Warning
        </Button>
        <Button view="critical" size="l">
          Critical
        </Button>
        <Button view="checked" size="l">
          Checked
        </Button>
        <Button view="overlay" size="l">
          Overlay
        </Button>
      </div>
    </Container>
  );
}
