import { PropsWithChildren } from "react"
import LayoutAditionalTool from "../layoutAditionalTool/layoutAditionalTool"

function LayoutWrapper({ children }: PropsWithChildren) {
  return (
    <div>
      <LayoutAditionalTool />
      {children}
    </div>
  )
}

export default LayoutWrapper