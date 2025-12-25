"use client";

import { Checkbox } from "@salutejs/plasma-ui/components/Checkbox";
import { Slider } from "@salutejs/plasma-ui/components/Slider";

export default function TestFont() {
  const weights = [
    { weight: 300, label: "Light" },
    { weight: 400, label: "Regular" },
    { weight: 500, label: "Medium" },
    { weight: 600, label: "Semibold" },
    { weight: 700, label: "Bold" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "30px" }}>Тест шрифта SB Sans Text</h1>
      {weights.map(({ weight, label }) => (
        <div
          key={weight}
          style={{
            fontFamily: "'SB Sans Text', sans-serif",
            fontWeight: weight,
            fontSize: "24px",
            marginBottom: "15px",
          }}
        >
          {label} ({weight}) — Съешь же ещё этих мягких французских булок
        </div>
      ))}
      <div>
        <Checkbox label="Чекбокс" description="Описание"  />
        <Slider
          onChangeCommitted={() => {}}
          min={0}
          max={100}
          value={30}
          disabled={false}
        />
      </div>
    </div>
  );
}
