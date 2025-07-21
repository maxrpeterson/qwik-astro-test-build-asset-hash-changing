import { component$, useSignal } from "@builder.io/qwik";

import styles from "./componentA.module.css";

export const ComponentA = component$(() => {
  const count = useSignal(0);

  return (
    <>
      <div class={styles.container}>
        <button
          class={styles.counter}
          type="button"
          onClick$={() => count.value++}
        >
          Component A count is {count.value}
        </button>
      </div>
    </>
  );
});
