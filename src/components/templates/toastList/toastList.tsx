"use client";

import { XIcon } from "lucide-react";
import { Toast } from "@base-ui-components/react";

function ToastList() {
  const { toasts } = Toast.useToastManager();

  return toasts.map((toast) => (
    <Toast.Root key={toast.id} toast={toast} className={"bg-warning-foreground border-2 border-warning text-warning py-1 px-3 transition-all rounded-full not-first:mt-3"}>
      <Toast.Content className={"f-align gap-3"}>
        <Toast.Description />

        <Toast.Close className={"btn btn-ghost btn-square mr-auto"} aria-label="بستن">
          <XIcon className="btn-icon-size" />
        </Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ));
}

export default ToastList;