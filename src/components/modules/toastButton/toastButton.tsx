"use client";

import { useState } from "react";
import { Button, Toast } from "@base-ui-components/react";

function ToastButton() {
  const toastManager = Toast.useToastManager();
  const [count, setCount] = useState(0);

  function createToast() {
    setCount((prev) => prev + 1);
    toastManager.add({
      data: { status: "error" },
      description: `توست ${count + 1} ساخته شد`,
    });
  }

  return (
    <Button className={"btn btn-fill mt-6"} type="button" onClick={createToast}>
      نمایش
    </Button>
  );
}

export default ToastButton;