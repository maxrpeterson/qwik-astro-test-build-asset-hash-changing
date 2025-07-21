import { component$, useSignal } from "@builder.io/qwik";
import { ComponentA } from "./ComponentA";

import styles from "./componentB.module.css";

export const ComponentB = component$(() => {
  const count = useSignal(0);

  return (
    <div class={styles.container}>
      <button
        class={styles.counter}
        type="button"
        onClick$={() => count.value++}
      >
        Component B count is {count.value}
      </button>
      <ComponentA />
    </div>
  );
});
