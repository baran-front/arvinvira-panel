import { Button } from "@base-ui-components/react"

function Page() {
  return (
    <div className="p-3">
      <p className="text-5xl font-bold">دکمه ها:</p>

      <div className="f-align gap-3 mt-6">
        <Button className={"btn btn-fill"}>
          کلیک
        </Button>
        <div className="p-3 bg-foreground palette-background">
          <Button className={"btn btn-fill"}>
            کلیک
          </Button>
        </div>
        <Button className={"btn btn-fill palette-primary"}>
          کلیک
        </Button>
        <Button className={"btn btn-fill palette-secondary"}>
          کلیک
        </Button>
        <Button className={"btn btn-fill palette-danger"}>
          کلیک
        </Button>
        <Button className={"btn btn-fill palette-warning"}>
          کلیک
        </Button>
        <Button className={"btn btn-fill palette-success"}>
          کلیک
        </Button>
        <Button className={"btn btn-fill palette-info"}>
          کلیک
        </Button>
      </div>

      <div className="f-align gap-3 separate separate-t border-dashed border-background-thick">
        <Button className={"btn btn-outline"}>
          کلیک
        </Button>
        <div className="p-3 bg-foreground palette-background">
          <Button className={"btn btn-outline"}>
            کلیک
          </Button>
        </div>
        <Button className={"btn btn-outline palette-primary"}>
          کلیک
        </Button>
        <Button className={"btn btn-outline palette-secondary"}>
          کلیک
        </Button>
        <Button className={"btn btn-outline palette-danger"}>
          کلیک
        </Button>
        <Button className={"btn btn-outline palette-warning"}>
          کلیک
        </Button>
        <Button className={"btn btn-outline palette-success"}>
          کلیک
        </Button>
        <Button className={"btn btn-outline palette-info"}>
          کلیک
        </Button>
      </div>

      <div className="f-align gap-3 separate separate-t border-dashed border-background-thick">
        <Button className={"btn btn-soft"}>
          کلیک
        </Button>
        <div className="p-3 bg-foreground palette-background">
          <Button className={"btn btn-soft"}>
            کلیک
          </Button>
        </div>
        <Button className={"btn btn-soft palette-primary"}>
          کلیک
        </Button>
        <Button className={"btn btn-soft palette-secondary"}>
          کلیک
        </Button>
        <Button className={"btn btn-soft palette-danger"}>
          کلیک
        </Button>
        <Button className={"btn btn-soft palette-warning"}>
          کلیک
        </Button>
        <Button className={"btn btn-soft palette-success"}>
          کلیک
        </Button>
        <Button className={"btn btn-soft palette-info"}>
          کلیک
        </Button>
      </div>

      <div className="f-align gap-3 separate separate-t border-dashed border-background-thick">
        <Button className={"btn btn-ghost"}>
          کلیک
        </Button>
        <div className="p-3 bg-foreground palette-background">
          <Button className={"btn btn-ghost"}>
            کلیک
          </Button>
        </div>
        <Button className={"btn btn-ghost palette-primary"}>
          کلیک
        </Button>
        <Button className={"btn btn-ghost palette-secondary"}>
          کلیک
        </Button>
        <Button className={"btn btn-ghost palette-danger"}>
          کلیک
        </Button>
        <Button className={"btn btn-ghost palette-warning"}>
          کلیک
        </Button>
        <Button className={"btn btn-ghost palette-success"}>
          کلیک
        </Button>
        <Button className={"btn btn-ghost palette-info"}>
          کلیک
        </Button>
      </div>
    </div>
  )
}

export default Page