"use client";

import ToastButton from "@/components/modules/toastButton/toastButton"
import MenuArrowSvg, { MENU_POSITIONER_SIDE_OFFSET } from "@/components/ui/menu/menuSetting";
import { Otp } from "@/components/ui/otp/otp";
import { Rating } from "@/components/ui/rating/rating"
import TooltipArrowSvg from "@/components/ui/tooptip/tooltip";
import { Upload } from "@/components/ui/upload/upload";
import { AlertDialog, Button, Checkbox, Dialog, Menu, Radio, RadioGroup, Switch, Tabs, Tooltip } from "@base-ui-components/react"
import { CheckIcon, ChevronDownIcon, PlusIcon, StarIcon, UserIcon, XIcon } from "lucide-react"
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
          <Button className={"btn btn-rounded btn-fill palette-error"}>
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
          <Button className={"btn btn-rounded btn-outline palette-error"}>
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
          <Button className={"btn btn-rounded btn-soft palette-error"}>
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
          <Button className={"btn btn-rounded btn-ghost palette-error"}>
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
        <span className="badge badge-outline mt-3 palette-error">لورم ایپسوم</span>
        <span className="badge badge-outline mt-3 palette-warning">لورم ایپسوم</span>
        <span className="badge badge-outline mt-3 palette-info">لورم ایپسوم</span>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">تگ:</p>
        <p className="badge badge-soft badge-rounded mt-6">
          <span>دسته بندی ها</span>
          <XIcon className="badge-icon-size text-error" />
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
            <Tabs.Tab className={"tabs-tab palette-error"} value="projects">
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
          <AlertDialog.Trigger className="btn btn-fill palette-error mt-6">
            حذف
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
                <AlertDialog.Close className="btn btn-fill palette-error">
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

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">دیالوگ:</p>
        <Dialog.Root>
          <Dialog.Trigger className="btn btn-fill mt-6">
            مشاهده اعلان ها
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop className="dialog-backdrop" />
            <Dialog.Popup className="dialog-popup">
              <Dialog.Title className="dialog-title">23 اعلان جدید</Dialog.Title>
              <Dialog.Description className="dialog-description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </Dialog.Description>
              <div className="dialog-footer">
                <Dialog.Close className="btn btn-soft">
                  باشه
                </Dialog.Close>
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">اینپوت:</p>

        <label className="input input-outline mt-6 max-w-96 input-rounded" htmlFor="input-1">
          <UserIcon className="input-icon-size" />
          <input className="input-field" id="input-1" type="text" />
        </label>

        <label className="input input-soft mt-6 max-w-96 input-rounded palette-primary" htmlFor="input-2">
          <UserIcon className="input-icon-size" />
          <input className="input-field" id="input-2" type="text" />
        </label>

        <Otp className="otp mt-6" dir="ltr">
          <Otp.Inputs
            length={6}
            className="input input-outline input-square"
            onLastChange={(otp) => alert(otp)}
          />

          <Otp.HiddenInput />
        </Otp>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">آپلودر:</p>
        <Upload className="bg-background-thick f-center flex-col gap-3 p-6 rounded-lg max-w-96 mt-6">
          <div className="size-12 border-2 border-dashed border-foreground-mute f-center rounded-lg">
            <PlusIcon className="size-7" />
          </div>
          <p>برای آپلود <span className="text-info">کلیک</span> کنید</p>
          <p className="text-warning">حجم فایل بیش از 2 مگ نباشد</p>

          <Upload.Input />
        </Upload>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">آپلودر:</p>

        <Menu.Root>
          <Menu.Trigger className="btn btn-fill mt-6">
            دسته بندی <ChevronDownIcon className="btn-icon-size" />
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Positioner sideOffset={MENU_POSITIONER_SIDE_OFFSET}>
              <Menu.Popup className="menu-popup">
                <Menu.Arrow className="menu-arrow">
                  <MenuArrowSvg />
                </Menu.Arrow>
                <Menu.Item className="menu-item">
                  Add to Library
                </Menu.Item>
                <Menu.Item className="menu-item">
                  Add to Playlist
                </Menu.Item>
                <Menu.Separator className="mx-4 my-1.5 h-px bg-background-thick" />
                <Menu.Item className="menu-item">
                  Play Next
                </Menu.Item>
                <Menu.Item className="menu-item">
                  Play Last
                </Menu.Item>
                <Menu.Separator className="mx-4 my-1.5 h-px bg-background-thick" />
                <Menu.Item className="menu-item">
                  Favorite
                </Menu.Item>
                <Menu.Item className="menu-item">
                  Share
                </Menu.Item>
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">تولتیپ:</p>

        <Tooltip.Provider>
          <div className="f-align gap-3 mt-6">
            <Tooltip.Root>
              <Tooltip.Trigger className="btn btn-soft btn-square palette-primary">
                B
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Positioner sideOffset={10}>
                  <Tooltip.Popup className="tooltip-popup palette-primary">
                    <Tooltip.Arrow
                      className="tooltip-arrow"
                    >
                      <TooltipArrowSvg />
                    </Tooltip.Arrow>
                    Bold
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger className="btn btn-soft btn-square palette-primary">
                I
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Positioner sideOffset={10}>
                  <Tooltip.Popup className="tooltip-popup palette-primary">
                    <Tooltip.Arrow
                      className="tooltip-arrow"
                    >
                      <TooltipArrowSvg />
                    </Tooltip.Arrow>
                    Italic
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger className="btn btn-soft btn-square palette-primary">
                U
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Positioner sideOffset={10}>
                  <Tooltip.Popup className="tooltip-popup palette-primary">
                    <Tooltip.Arrow
                      className="tooltip-arrow"
                    >
                      <TooltipArrowSvg />
                    </Tooltip.Arrow>
                    Underline
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>
          </div>
        </Tooltip.Provider>
      </div>

      <div className="p-3 mt-9">
        <p className="text-5xl font-bold">سوییچ:</p>

        <Switch.Root
          className="switch mt-6 palette-info"
        >
          <Switch.Thumb className="switch-thumb" />
        </Switch.Root>
      </div>

      <p className="p-3 my-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, commodi at! Accusamus et sit, fugit perspiciatis, architecto aperiam ad impedit dignissimos voluptatem dolorum possimus voluptas deleniti. Dolores nam dicta aliquam perferendis corporis non accusantium veniam sed minus earum rerum magni temporibus incidunt, minima velit, ad harum placeat. Obcaecati sint neque cum pariatur eaque rem, numquam, rerum possimus soluta, natus voluptatum aliquid nam eos eius nulla ad reprehenderit. Officiis nam nostrum cum. Dolor corporis cumque suscipit modi voluptatibus quis nam eum ratione in minus voluptates soluta culpa esse adipisci quos incidunt consectetur veritatis, recusandae mollitia dolorum saepe? Odit ullam nostrum aperiam?
      </p>
    </>
  )
}

export default Page