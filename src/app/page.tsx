"use client";

import ToastButton from "@/components/modules/toastButton/toastButton"
import { Rating } from "@/components/ui/rating/rating"
import { AlertDialog, Button, Checkbox, Radio, RadioGroup, Tabs } from "@base-ui-components/react"
import { CheckIcon, StarIcon, XIcon } from "lucide-react"
import { useState } from "react";

function Page() {
  const [rating, setRating] = useState(3);

  return (
    <>
      <div className="p-3">
        <p className="text-5xl font-bold">دکمه ها:</p>

        <div className="f-align gap-3 mt-6">
          <Button className={"btn btn-rounded btn-fill"}>
            کلیک
          </Button>
          <div className="p-3 bg-foreground palette-background">
            <Button className={"btn btn-rounded btn-fill"}>
              کلیک
            </Button>
          </div>
          <Button className={"btn btn-rounded btn-fill palette-primary"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-fill palette-secondary"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-fill palette-danger"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-fill palette-warning"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-fill palette-success"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-fill palette-info"}>
            کلیک
          </Button>
        </div>

        <div className="f-align gap-3 separate separate-t border-dashed border-background-thick">
          <Button className={"btn btn-rounded btn-outline"}>
            کلیک
          </Button>
          <div className="p-3 bg-foreground palette-background">
            <Button className={"btn btn-rounded btn-outline"}>
              کلیک
            </Button>
          </div>
          <Button className={"btn btn-rounded btn-outline palette-primary"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-outline palette-secondary"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-outline palette-danger"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-outline palette-warning"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-outline palette-success"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-outline palette-info"}>
            کلیک
          </Button>
        </div>

        <div className="f-align gap-3 separate separate-t border-dashed border-background-thick">
          <Button className={"btn btn-rounded btn-soft"}>
            کلیک
          </Button>
          <div className="p-3 bg-foreground palette-background">
            <Button className={"btn btn-rounded btn-soft"}>
              کلیک
            </Button>
          </div>
          <Button className={"btn btn-rounded btn-soft palette-primary"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-soft palette-secondary"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-soft palette-danger"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-soft palette-warning"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-soft palette-success"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-soft palette-info"}>
            کلیک
          </Button>
        </div>

        <div className="f-align gap-3 separate separate-t border-dashed border-background-thick">
          <Button className={"btn btn-rounded btn-ghost"}>
            کلیک
          </Button>
          <div className="p-3 bg-foreground palette-background">
            <Button className={"btn btn-rounded btn-ghost"}>
              کلیک
            </Button>
          </div>
          <Button className={"btn btn-rounded btn-ghost palette-primary"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-ghost palette-secondary"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-ghost palette-danger"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-ghost palette-warning"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-ghost palette-success"}>
            کلیک
          </Button>
          <Button className={"btn btn-rounded btn-ghost palette-info"}>
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

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">تگ:</p>
        <p className="badge badge-soft badge-rounded mt-6">
          <span>دسته بندی ها</span>
          <XIcon className="badge-icon-size text-danger" />
        </p>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">تب:</p>
        <Tabs.Root className={"mt-6"} defaultValue="overview">
          <Tabs.List className={"tabs-list"}>
            <Tabs.Tab className={"tabs-tab palette-success"} value="overview">
              <span>
                فروش
              </span>
              <span className="tabs-badge">20</span>
            </Tabs.Tab>
            <Tabs.Tab className={"tabs-tab palette-danger"} value="projects">
              <span>
                سرور و امنیت
              </span>
              <span className="tabs-badge">20</span>
            </Tabs.Tab>
            <Tabs.Tab className={"tabs-tab palette-warning"} value="account">
              <span>
                بایگانی
              </span>
              <span className="tabs-badge">20</span>
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel className={"p-3"} value="overview">
            OverviewIcon
          </Tabs.Panel>
          <Tabs.Panel className={"p-3"} value="projects">
            ProjectIcon
          </Tabs.Panel>
          <Tabs.Panel className={"p-3"} value="account">
            PersonIcon
          </Tabs.Panel>
        </Tabs.Root>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">ریت:</p>
        <Rating className="rating mt-6">
          <Rating.Items
            className="rating-items"
            count={5}
            value={rating}
            onValueChange={setRating}
            element={<StarIcon className="text-background-thick size-9" />}
            activeElement={<StarIcon className="fill-yellow-500 text-yellow-500 size-9" />}
          />
        </Rating>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">آلرت دیالوگ:</p>
        <AlertDialog.Root>
          <AlertDialog.Trigger className="btn btn-fill mt-6">
            Discard draft
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Backdrop className="dialog-backdrop" />
            <AlertDialog.Popup className="dialog-popup">
              <AlertDialog.Title className="dialog-title">
                از حذف این آیتم مطمعن هستید؟
              </AlertDialog.Title>
              <AlertDialog.Description className="dialog-description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </AlertDialog.Description>
              <div className="dialog-footer">
                <AlertDialog.Close className={"btn btn-soft"}>
                  <XIcon className="btn-icon-size" />
                  <span>
                    بستن
                  </span>
                </AlertDialog.Close>
                <AlertDialog.Close className="btn btn-fill palette-danger">
                  <span>
                    حذف
                  </span>
                  <CheckIcon className="btn-icon-size" />
                </AlertDialog.Close>
              </div>
            </AlertDialog.Popup>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>
    </>
  )
}

export default Page