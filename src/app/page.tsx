import ToastButton from "@/components/modules/toastButton/toastButton"
import { Button, Checkbox, Radio, RadioGroup } from "@base-ui-components/react"
import { CheckIcon } from "lucide-react"

function Page() {
  return (
    <>
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

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">آواتار ها:</p>
        <div className="f-align gap-3 mt-6">
          <div className="avatar avatar-xxl bg-background-thick" />
          <div className="avatar avatar-xxl bg-background-thick avatar-circle" />
        </div>
        <div className="f-align gap-3 mt-3">
          <div className="avatar avatar-xl bg-background-thick" />
          <div className="avatar avatar-xl bg-background-thick avatar-circle" />
        </div>
        <div className="f-align gap-3 mt-3">
          <div className="avatar avatar-lg bg-background-thick" />
          <div className="avatar avatar-lg bg-background-thick avatar-circle" />
        </div>
        <div className="f-align gap-3 mt-3">
          <div className="avatar bg-background-thick" />
          <div className="avatar bg-background-thick avatar-circle" />
        </div>
        <div className="f-align gap-3 mt-3">
          <div className="avatar avatar-sm bg-background-thick" />
          <div className="avatar avatar-sm bg-background-thick avatar-circle" />
        </div>
        <div className="f-align gap-3 mt-3">
          <div className="avatar avatar-xs bg-background-thick" />
          <div className="avatar avatar-xs bg-background-thick avatar-circle" />
        </div>
        <div className="f-align gap-3 mt-3">
          <div className="avatar avatar-xxs bg-background-thick" />
          <div className="avatar avatar-xxs bg-background-thick avatar-circle" />
        </div>
        <div className="f-align gap-3 mt-3">
          <div className="avatar avatar-xxxs bg-background-thick" />
          <div className="avatar avatar-xxxs bg-background-thick avatar-circle" />
        </div>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">توست ها:</p>
        <ToastButton />
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">چک باکس:</p>
        <label className={"f-align gap-3 mt-6"}>
          <span>
            فعالسازی نوتیفیکیشن ها
          </span>
          <Checkbox.Root defaultChecked aria-label="Enable notifications" className={"checkbox"}>
            <Checkbox.Indicator className={"checkbox-indicator"}>
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </label>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">رادیو:</p>
        <RadioGroup aria-labelledby={"radio"} defaultValue="system" className={"radio-group mt-6"}>
          <p id={"radio"}>
            تم وب سایت:
          </p>

          <label className={"radio-label"}>
            <Radio.Root value="dark" className={"radio"}>
              <Radio.Indicator className={"radio-indicator"} />
            </Radio.Root>
            دارک
          </label>

          <label className={"radio-label"}>
            <Radio.Root value="light" className={"radio"}>
              <Radio.Indicator className={"radio-indicator"} />
            </Radio.Root>
            لایت
          </label>

          <label className={"radio-label"}>
            <Radio.Root value="system" className={"radio"}>
              <Radio.Indicator className={"radio-indicator"} />
            </Radio.Root>
            سیستم
          </label>
        </RadioGroup>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">بج:</p>
        <span className="badge badge-outline mt-6">لورم ایپسوم</span>
        <div className="bg-foreground palette-background p-3 w-fix mt-3">
          <span className="badge badge-outline">لورم ایپسوم</span>
        </div>
        <span className="badge badge-outline mt-3 palette-primary">لورم ایپسوم</span>
        <span className="badge badge-outline mt-3 palette-secondary">لورم ایپسوم</span>
        <span className="badge badge-outline mt-3 palette-danger">لورم ایپسوم</span>
        <span className="badge badge-outline mt-3 palette-warning">لورم ایپسوم</span>
        <span className="badge badge-outline mt-3 palette-info">لورم ایپسوم</span>
      </div>
    </>
  )
}

export default Page